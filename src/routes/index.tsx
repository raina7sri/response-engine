import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { Star, Copy, RefreshCw, Info, Lightbulb, AlertCircle, ChevronDown, ChevronRight, Plus, Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import {
  generateResponse,
  APPROVED_EXAMPLES,
  type Center,
  type GenerationResult,
} from "@/lib/response-generator";
// Logo image served from public/ — base-URL aware so it works at both '/' and '/response-engine/'.
const AURICS_MARK_URL = `${import.meta.env.BASE_URL}aurics-favicon.png`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Customer Response Assistant — Aurics.AI" },
      {
        name: "description",
        content:
          "Internal assistant for drafting on-brand customer responses aligned with approved messaging.",
      },
      { property: "og:title", content: "Customer Response Assistant — Aurics.AI" },
      {
        property: "og:description",
        content:
          "Analyze customer communication and draft a publish-ready response in under a minute.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: Index,
});

// Illustrative sample — replace with your organization's centers/branches/teams.
const DEFAULT_ORGANIZATIONS: Center[] = [
  "Sample Organization A",
  "Sample Organization B",
];

const USE_CASES = [
  "Customer feedback",
  "Objection responses",
  "Support communications",
  "Sales replies",
];

const ADD_NEW_VALUE = "__add_new__";

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  const [hover, setHover] = useState(0);
  return (
    <div
      role="radiogroup"
      aria-label="Star rating"
      className="flex items-center gap-1"
      onMouseLeave={() => setHover(0)}
    >
      {[1, 2, 3, 4, 5].map((n) => {
        const active = (hover || value) >= n;
        return (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={value === n}
            aria-label={`${n} star${n === 1 ? "" : "s"}`}
            onClick={() => onChange(n)}
            onMouseEnter={() => setHover(n)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") onChange(Math.min(5, (value || 0) + 1));
              if (e.key === "ArrowLeft") onChange(Math.max(1, (value || 1) - 1));
            }}
            className="rounded-md p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Star
              className={
                "h-7 w-7 transition-colors " +
                (active
                  ? "fill-[var(--accent)] text-accent"
                  : "text-muted-foreground/40")
              }
            />
          </button>
        );
      })}
      {value > 0 && (
        <span className="ml-2 text-sm text-muted-foreground">
          {value} / 5
        </span>
      )}
    </div>
  );
}

function AnalysisRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[minmax(0,10rem)_minmax(0,1fr)] items-start gap-3 py-2">
      <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="text-sm text-foreground">{value}</div>
    </div>
  );
}

function Index() {
  const [review, setReview] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [organizations, setOrganizations] = useState<string[]>(DEFAULT_ORGANIZATIONS);
  const [center, setCenter] = useState<Center>("");
  const [addingOrg, setAddingOrg] = useState(false);
  const [newOrgName, setNewOrgName] = useState("");
  const [stars, setStars] = useState(0);
  const [additionalContext, setAdditionalContext] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [editableResponse, setEditableResponse] = useState("");
  const [regenCount, setRegenCount] = useState(0);
  const resultsRef = useRef<HTMLDivElement>(null);

  const canSubmit = useMemo(() => {
    if (!stars) return false;
    if (!center) return false;
    if (!review.trim() && stars === 0) return false;
    return true;
  }, [review, stars, center]);

  const validate = (): string | null => {
    if (!stars) return "Please select a star rating.";
    if (!center) return "Please select an organization.";
    // Star-only allowed; text required otherwise handled by star-only path.
    return null;
  };

  const runGenerate = async (seed = 0) => {
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }
    setLoading(true);
    // Simulate short async delay so the loading state is visible.
    await new Promise((r) => setTimeout(r, 550));
    try {
      const out = generateResponse({
        review,
        reviewerName: reviewerName || undefined,
        center,
        stars,
        additionalContext: additionalContext || undefined,
        regenerateSeed: seed,
      });
      setResult(out);
      setEditableResponse(out.recommendedResponse);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 30);
    } catch {
      toast.error("Something went wrong drafting the response. Your inputs are preserved.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editableResponse);
      toast.success("Response copied.");
    } catch {
      toast.error("Could not copy — please copy manually.");
    }
  };

  const handleRegenerate = () => {
    const next = regenCount + 1;
    setRegenCount(next);
    runGenerate(next);
  };

  const handleOrgChange = (value: string) => {
    if (value === ADD_NEW_VALUE) {
      setAddingOrg(true);
      return;
    }
    setCenter(value);
  };

  const handleAddOrg = () => {
    const name = newOrgName.trim();
    if (!name) {
      toast.error("Enter an organization name.");
      return;
    }
    if (organizations.includes(name)) {
      toast.error("That organization already exists.");
      return;
    }
    setOrganizations((prev) => [...prev, name]);
    setCenter(name);
    setNewOrgName("");
    setAddingOrg(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />
      {/* Aurics brand bar */}
      <div className="w-full bg-gradient-to-r from-primary via-[oklch(0.46_0.20_285)] to-primary">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 px-4 py-4 sm:px-6">
          <img
            src={AURICS_MARK_URL}
            alt="Aurics.AI brand logo"
            className="h-11 w-auto rounded-xl border-2 border-primary-foreground/20 shadow-lg sm:h-12"
            width={80}
            height={80}
          />
          <span className="hidden text-sm font-semibold tracking-tight text-primary-foreground sm:inline">
            Aurics.AI — AI-Native GTM Studio
          </span>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-accent/80 via-[oklch(0.85_0.16_85)] to-accent/80" />
      </div>

      <header className="border-b border-border/60 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur">
        <div className="mx-auto max-w-3xl px-4 py-6 text-center sm:px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            AI-NATIVE GTM: PRODUCTION IMPLEMENTATION
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
            Customer Response Engine
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            A reusable workflow that turns customer communications into governed, brand-aligned responses while reserving business judgment for humans.
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>
      </header>

      {/* Top workflow diagram — reads as a flow, not buttons */}
      <div className="w-full border-b border-border/60 bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-4 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Process
          </span>
          <span aria-hidden className="text-muted-foreground/60">·</span>
          {[
            "Customer Communication",
            "AI Reasoning",
            "Organization Playbook",
            "Adaptive Response",
            "Human Judgment",
            "Publish",
          ].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">{step}</span>
              {i < arr.length - 1 && (
                <span aria-hidden className="text-base text-primary/60">→</span>
              )}
            </div>
          ))}
        </div>
      </div>


      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
        {/* Form */}
        <Card className="shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Draft a response</CardTitle>
            <p className="text-sm text-muted-foreground">
              Paste the request and get a customer response.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="review">Customer communication</Label>
              <Textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Paste the communication. The system determines the rest."
                className="min-h-[160px] resize-y"
              />
              <p className="text-xs text-muted-foreground">
                Leave blank for a star-only review.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="reviewerName">Customer name</Label>
                <Input
                  id="reviewerName"
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                  placeholder="e.g. Jamie"
                />
              </div>
              <div className="space-y-2">
                <Label>Star rating (if applicable)</Label>
                <StarPicker value={stars} onChange={setStars} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Organization</Label>
              <Select value={center} onValueChange={handleOrgChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Organization" />
                </SelectTrigger>
                <SelectContent>
                  {organizations.map((org) => (
                    <SelectItem key={org} value={org}>
                      {org}
                    </SelectItem>
                  ))}
                  <SelectItem value={ADD_NEW_VALUE} className="text-primary">
                    <span className="flex items-center gap-2">
                      <Plus className="h-3.5 w-3.5" />
                      Add new organization…
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
              {addingOrg && (
                <div className="flex flex-col gap-2 rounded-md border border-border bg-muted/30 p-3 sm:flex-row">
                  <Input
                    autoFocus
                    value={newOrgName}
                    onChange={(e) => setNewOrgName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddOrg();
                      }
                    }}
                    placeholder="New organization name"
                    className="flex-1"
                  />
                  <div className="flex gap-2">
                    <Button type="button" onClick={handleAddOrg} size="sm">
                      Add
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setAddingOrg(false);
                        setNewOrgName("");
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalContext">Additional context</Label>
              <Textarea
                id="additionalContext"
                value={additionalContext}
                onChange={(e) => setAdditionalContext(e.target.value)}
                placeholder="e.g. The product has been discontinued. Please share the updated pricing."
                className="min-h-[90px] resize-y"
              />
              <p className="text-xs text-muted-foreground">
                Add only information the assistant could not know from the pasted content.
              </p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Using approved example set.
              </p>
              <Button
                onClick={() => runGenerate(0)}
                disabled={!canSubmit || loading}
                size="lg"
              >
                {loading ? "Analyzing…" : "Analyze and Draft Response"}
              </Button>
            </div>
            {loading && (
              <p className="text-center text-xs text-muted-foreground">
                Analyzing the review and applying the organization playbook…
              </p>
            )}
          </CardContent>
        </Card>
          </div>
          {/* Example use cases side panel */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <Card className="border-accent/40 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Briefcase className="h-4 w-4 text-accent" />
                  Potential Implementations
                </CardTitle>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Sales · Marketing · Customer Service
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-3 h-px w-10 bg-accent" />
                <ul className="space-y-2 text-sm text-foreground">
                  {USE_CASES.map((u) => (
                    <li key={u} className="flex gap-2">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Results */}
        {result && (
          <div ref={resultsRef} className="mt-10 space-y-6">
            {/* Analysis */}
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Review Analysis</CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-border/60">
                <AnalysisRow label="Review type" value={result.analysis.reviewType} />
                <AnalysisRow label="Sentiment" value={result.analysis.sentiment} />
                <AnalysisRow
                  label="Primary themes"
                  value={
                    result.analysis.primaryThemes.length ? (
                      <div className="flex flex-wrap gap-1.5">
                        {result.analysis.primaryThemes.map((t) => (
                          <Badge key={t} variant="secondary" className="font-normal">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )
                  }
                />
                <AnalysisRow
                  label="Organization strengths"
                  value={
                    <div className="flex flex-wrap gap-1.5">
                      {result.analysis.relevantPillars.map((p) => (
                        <Badge key={p} variant="outline" className="font-normal">
                          {p}
                        </Badge>
                      ))}
                    </div>
                  }
                />
                {result.analysis.importantConcern && (
                  <AnalysisRow
                    label="Important concern"
                    value={result.analysis.importantConcern}
                  />
                )}
                {result.analysis.privacySensitivity && (
                  <AnalysisRow
                    label="Privacy sensitivity"
                    value={result.analysis.privacySensitivity}
                  />
                )}
              </CardContent>
            </Card>

            {/* Recommended response */}
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Recommended Response</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Textarea
                  value={editableResponse}
                  onChange={(e) => setEditableResponse(e.target.value)}
                  className="min-h-[180px] resize-y text-base leading-relaxed"
                />
                <div className="flex flex-wrap gap-2">
                  <Button onClick={handleCopy} className="gap-2">
                    <Copy className="h-4 w-4" /> Copy Response
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleRegenerate}
                    disabled={loading}
                    className="gap-2"
                  >
                    <RefreshCw className={"h-4 w-4 " + (loading ? "animate-spin" : "")} />
                    Regenerate
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Why it works */}
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Why This Response Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.whyThisResponseWorks.map((w, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                      />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Review before posting */}
            {result.reviewConsiderations.length > 0 && (
              <Card className="border-accent/50 bg-accent/10 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    Review Before Posting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.reviewConsiderations.map((c, i) => (
                      <li key={i} className="flex gap-2 text-sm text-foreground">
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                        />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* AI insight */}
            {result.aiInsight && (
              <Card className="border-primary/20 bg-primary/5 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    AI Insight
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">{result.aiInsight}</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Playbook — purple accent */}
        <section className="mt-12">
          <Accordion type="single" collapsible className="rounded-lg border-2 border-primary/40 bg-primary/[0.03] shadow-sm">
            <AccordionItem value="playbook" className="border-none">
              <AccordionTrigger className="px-5 py-4 text-base font-semibold hover:no-underline text-left">
                <span className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Customer Response Playbook
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5">
                <div className="rounded-md border border-primary/30 bg-primary/[0.06] p-3 text-xs text-muted-foreground">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium text-foreground">Formula:</span>
                    <span>Thank</span>
                    <ChevronDown className="h-3 w-3 rotate-[-90deg] text-primary" />
                    <span>Reflect without copying</span>
                    <ChevronDown className="h-3 w-3 rotate-[-90deg] text-primary" />
                    <span>Reinforce one or two organization strengths</span>
                    <ChevronDown className="h-3 w-3 rotate-[-90deg] text-primary" />
                    <span>Address concerns if necessary</span>
                    <ChevronDown className="h-3 w-3 rotate-[-90deg] text-primary" />
                    <span>Close warmly</span>
                  </div>
                </div>

                <Accordion type="multiple" className="mt-3">
                  <PlaybookItem value="why" title="Why Respond to Customers?">
                    Responding shows current and future customers that the organization takes feedback seriously. It builds trust, reinforces a consistent brand voice, and provides quiet, credible signals that do not read as self-promotion. 
                  </PlaybookItem>
                  <PlaybookItem value="formula" title="The Response Formula">
                    Thank the customer, reflect one meaningful idea from their communication conceptually, reinforce one or two organization strengths, address any concern calmly if needed, and close with appreciation rather than a sales pitch.
                  </PlaybookItem>
                  <PlaybookItem value="mirror" title="Conceptual Mirroring">
                    Show that you understood what the customer meant - do not rewrite their sentence, repeat distinctive phrases, or publish similar sentences with minor substitutions.
                  </PlaybookItem>
                  <PlaybookItem value="pillars" title="Core Messaging Pillars">
                    Personalized learning · Individualized support · Experienced instructors · Learner progress and confidence · Regular communication · Supportive environment · Flexible scheduling · Year-round availability · Return on investment and customer value · Established brand. Choose one or two per response.
                  </PlaybookItem>
                  <PlaybookItem value="value" title="Price and Value">
                    Only address price when the customer communication or context makes it relevant.
                    Frame as a meaningful investment and connect value to
                    personalized support, experienced instructors, and steady
                    academic progress.
                  </PlaybookItem>
                  <PlaybookItem value="mixed" title="Mixed and Negative Reviews">
                    Acknowledge the concern without defensiveness. Do not debate
                    specifics publicly or reveal account details. When resolution
                    requires private information, invite the customer to contact
                    the organization directly.
                  </PlaybookItem>
                  <PlaybookItem value="privacy" title="Privacy">
                    Never invent or add sensitive customer details. Only use a name
                    if the customer already did publicly and it clearly helps.&nbsp;
                  </PlaybookItem>
                  <PlaybookItem value="seo" title="SEO, AEO, and GEO">
                    Support these through natural, consistent content, such as accurate
                    entity and service context (SEO), clear language that
                    addresses common customer questions (AEO), and credible
                    associations between the business, geographic presence, and outcomes
                    (GEO).&nbsp;
                  </PlaybookItem>
                  <PlaybookItem value="examples" title="Example Responses">
                    <div className="space-y-3">
                      {APPROVED_EXAMPLES.map((ex) => (
                        <div
                          key={ex.label}
                          className="rounded-md border border-border bg-muted/30 p-3"
                        >
                          <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                            <Badge variant="outline" className="font-normal border-primary/30 text-primary">
                              {ex.label}
                            </Badge>
                            <span>{ex.scenario}</span>
                          </div>
                          <p className="text-sm leading-relaxed text-foreground">
                            {ex.example}
                          </p>
                        </div>
                      ))}
                    </div>
                  </PlaybookItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Who Is It For? — gold accent, expandable */}
        <section className="mt-6">
          <Accordion type="single" collapsible className="rounded-lg border-2 border-accent/50 bg-accent/[0.05] shadow-sm">
            <AccordionItem value="who" className="border-none">
              <AccordionTrigger className="px-5 py-4 text-base font-semibold hover:no-underline text-left">
                <span className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-accent-foreground" />
                  Who Is It For?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5">
                <div className="space-y-3 text-sm leading-relaxed text-foreground">
                  <p>
                    Any customer-facing team that answers the same questions repeatedly — and needs to ensure every response reflects the organization's messaging, customer knowledge, and judgment while remaining consistent across people and channels.
                  </p>
                  <p>This workflow redesigns that process.</p>
                  <p>
                    Rather than asking people to analyze every message manually, the system performs repeatable reasoning and leaves only business-context decisions to the human.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Portfolio — violet accent */}
        <section className="mt-6 mb-16">
          <Accordion type="single" collapsible className="rounded-lg border-2 border-violet/50 bg-violet/[0.05] shadow-sm">
            <AccordionItem value="portfolio" className="border-none">
              <AccordionTrigger className="px-5 py-4 text-base font-semibold hover:no-underline text-left">
                <span className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-violet" />
                  How This AI Workflow Turns Any Customer Message Into a Branded Response
                </span>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 px-5 pb-6">
                <div className="space-y-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-violet">
                    What Is It?
                  </h3>
                  <div className="text-sm leading-relaxed space-y-3">
                    <p>
                      A reusable AI-native reasoning workflow that turns organizational judgment into a repeatable system.
                    </p>
                    <p>
                      It has been designed to combine retrieval, structured reasoning, domain-specific prompting, and explainable outputs to operationalize customer responses across the organization. The result is a repeatable human-in-the-loop system that reduces response time while maintaining a consistent, trustworthy brand experience with ready-to-use customer responses.
                    </p>
                  </div>

                  <h3 className="text-sm font-semibold uppercase tracking-wide text-violet">
                    How Does It Work?
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-2 py-2">
                    {[
                      "Customer Communication",
                      "Analyze",
                      "Apply Organizational Playbook",
                      "Generate Response",
                      "Explain Reasoning",
                      "Surface Human Decisions",
                      "Publish",
                    ].map((step, i, arr) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-md border border-violet/40 bg-violet/[0.08] px-3 py-1.5 text-sm text-foreground">
                          {step}
                        </span>
                        {i < arr.length - 1 && (
                          <span aria-hidden className="text-base text-violet/70">→</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <h3 className="text-sm font-semibold uppercase tracking-wide text-violet">
                    Steps Taken
                  </h3>
                  <ul className="ml-1 space-y-1.5 text-sm">
                    {[
                      "Retrieves recent approved response history",
                      "Analyzes sentiment, themes, concerns, and privacy risk",
                      "Applies the organization messaging playbook",
                      "Generates one editable response",
                      "Explains why it works",
                      "Educates through interaction",
                      "Keeps final business-context judgment with the human",
                    ].map((p) => (
                      <li key={p} className="flex gap-2">
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/80"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-sm font-semibold uppercase tracking-wide text-violet">
                    How the Workflow Uses Approved Responses
                  </h3>
                  <div className="text-sm leading-relaxed space-y-3">
                    <p>
                      The production architecture is designed to learn from responses the organization has already approved and published. This can be through live review history retrieval or pre-seeded examples covering common scenarios such as short reviews, detailed testimonials, progress stories, and mixed and negative feedback.
                    </p>
                    <p>
                      In the current version, the examples serve as a visible reference library for approved tone, structure, and edge-case handling, while the generator applies the encoded business playbook. A next-level version would dynamically retrieve the most relevant approved examples for each incoming customer message and include them as generation context.
                    </p>
                  </div>

                  <div className="rounded-lg border-2 border-violet/40 bg-gradient-to-br from-violet/[0.08] to-accent/[0.08] p-5 space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-violet">
                      Human Judgment, AI Repetition
                    </h3>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground">Human Decides:</p>
                        <ul className="space-y-1.5 text-sm text-foreground">
                          {[
                            "Changing business circumstances",
                            "Sensitive customer context",
                            "Legal issues",
                            "Exceptions",
                            "Final publication",
                          ].map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="text-violet">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground">AI Determines:</p>
                        <ul className="space-y-1.5 text-sm text-foreground">
                          {[
                            "Themes",
                            "Intent",
                            "Structure",
                            "Tone",
                            "Draft",
                          ].map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="text-violet">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-violet">
                    Same Engine, Different Domain: G2 Reviews
                  </h3>
                  <p className="text-sm leading-relaxed">
                    The reasoning architecture remains the same:
                  </p>
                  <ol className="ml-4 list-decimal space-y-1 text-sm">
                    <li>Retrieve approved published responses</li>
                    <li>Analyze the new review</li>
                    <li>Identify sentiment, themes, risks, and opportunities</li>
                    <li>Apply a domain-specific messaging framework</li>
                    <li>Generate a natural response</li>
                    <li>Explain why it works</li>
                    <li>Surface only business considerations requiring human review</li>
                  </ol>
                  <p className="text-sm leading-relaxed">
                    The messaging layer is replaced with categories like time to value, ease of implementation, adoption, support quality, reliability, integrations, security and compliance, workflow fit, product capabilities, AI and automation, ROI, feature gaps, and renewal or expansion signals.
                  </p>
                  <div className="rounded-md border border-violet/40 bg-violet/[0.08] p-4">
                    <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-violet">
                      Example Guardrails
                    </p>
                    <ul className="ml-1 space-y-1.5 text-sm">
                      {[
                        "No disclosure of customer contract terms",
                        "Do not debate feature requests publicly",
                        "Distinguish product limitations from implementation issues",
                        "Avoid unsupported ROI claims",
                        "Coordinate with customer success on serious concerns",
                        "Recognize advocacy, testimonial, analyst-relations, and case-study opportunities",
                        "Maintain consistency across G2, Capterra, Gartner Peer Insights, and similar platforms",
                      ].map((g) => (
                        <li key={g} className="flex gap-2">
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/80"
                          />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <footer className="mt-10 mb-16 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Built by Aurics.AI: An AI-Native GTM Studio</span>&nbsp;
          </p>
        </footer>
      </main>
    </div>
  );
}

function PlaybookItem({
  value,
  title,
  children,
}: {
  value: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-sm hover:no-underline">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-sm leading-relaxed text-foreground/90">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}
