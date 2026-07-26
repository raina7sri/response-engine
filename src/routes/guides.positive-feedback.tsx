import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Copy, Check, Heart, MessageCircle, Sparkles, Users, Repeat, ThumbsUp, Star } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/guides/positive-feedback")({
  head: () => ({
    meta: [
      { title: "Positive Feedback Examples: Respond to Great Reviews & Build Brand Loyalty — Aurics.AI" },
      {
        name: "description",
        content:
          "Copy-paste positive feedback response examples that reinforce your brand, thank customers, and encourage repeat business. A free guide from Aurics.AI.",
      },
      { name: "robots", content: "index,follow" },
      {
        property: "og:title",
        content: "Positive Feedback Examples: Respond to Great Reviews & Build Brand Loyalty",
      },
      {
        property: "og:description",
        content:
          "Ready-to-use positive review response examples that reinforce your strengths and keep customers coming back.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PositiveFeedbackGuide,
});

interface ExampleItem {
  icon: React.ReactNode;
  label: string;
  text: string;
}

const EXAMPLES: ExampleItem[] = [
  {
    icon: <Sparkles className="h-5 w-5 text-[var(--accent)]" />,
    label: "Product praise",
    text:
      "Thank you so much, [Name]! We're thrilled to hear [specific product] is working well for you. Helping customers get real results is exactly why we built it, and we'd love to keep supporting you as you grow.",
  },
  {
    icon: <Heart className="h-5 w-5 text-[var(--accent)]" />,
    label: "Service praise",
    text:
      "We really appreciate you taking the time to share this, [Name]. Delivering a thoughtful, human experience is a core part of who we are, and feedback like yours lets the team know they're making a difference.",
  },
  {
    icon: <Users className="h-5 w-5 text-[var(--accent)]" />,
    label: "Team member shout-out",
    text:
      "Thank you, [Name]! We've shared your kind words with [Team Member] and the whole team. Celebrating individual care is one of our favorite parts of the day, and we're grateful you noticed.",
  },
  {
    icon: <Repeat className="h-5 w-5 text-[var(--accent)]" />,
    label: "Repeat customer",
    text:
      "It means the world to us that you keep coming back, [Name]. Long-term relationships like yours are the foundation of our business, and we look forward to continuing to earn your trust every time.",
  },
  {
    icon: <MessageCircle className="h-5 w-5 text-[var(--accent)]" />,
    label: "Social media mention",
    text:
      "So glad you shared this, [Name]! Community feedback is how we learn what matters most. Thanks for being part of the conversation and helping others discover what we do.",
  },
  {
    icon: <ThumbsUp className="h-5 w-5 text-[var(--accent)]" />,
    label: "Short and warm",
    text:
      "Thank you, [Name]! We genuinely appreciate your support and are so glad you had a great experience. We're here whenever you need us.",
  },
  {
    icon: <Star className="h-5 w-5 text-[var(--accent)]" />,
    label: "Values-driven",
    text:
      "Thank you for the wonderful feedback, [Name]. Putting [core value, e.g., personalized support] at the center of every interaction is non-negotiable for us, and we're delighted that came through in your experience.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-[var(--accent)]" />,
    label: "Invite them back",
    text:
      "Thank you, [Name]! We're so happy you had a great experience. We'd love to welcome you back soon — and please don't hesitate to reach out if there's anything else we can do for you.",
  },
];

function PositiveFeedbackGuide() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Brand bar */}
      <div className="border-b border-border/40 bg-[var(--card)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-[var(--primary)]">
            <ArrowLeft className="h-4 w-4" />
            Back to Customer Response Assistant
          </Link>
          <span className="text-sm font-medium text-[var(--primary)]">Aurics.AI</span>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4 py-12">
        {/* Hero */}
        <header className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
            Customer Response Guide
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Positive Feedback Examples
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Respond to great reviews in a way that reinforces your brand, builds loyalty, and invites repeat business — without sounding like a sales pitch.
          </p>
        </header>

        {/* Why respond */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground">Why respond to positive feedback?</h2>
          <p className="mt-3 text-muted-foreground">
            A positive review is more than a compliment. It is a public signal of trust, a chance to show your brand voice, and an invitation for future customers to picture themselves working with you. A thoughtful reply can:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Strengthen the relationship with the customer who left the review.</li>
            <li>Reinforce one or two of your organization's core strengths.</li>
            <li>Show future customers that you listen, care, and respond like a human.</li>
            <li>Encourage repeat business without adding pressure.</li>
          </ul>
        </section>

        {/* Anatomy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground">Anatomy of a strong response</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Thank", body: "Open with genuine gratitude." },
              { title: "Reflect", body: "Reference the specific moment or detail they shared." },
              { title: "Reinforce", body: "Connect their praise to a brand strength or value." },
              { title: "Close", body: "End warmly and leave the door open for next time." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-[var(--card)] p-4 shadow-sm"
              >
                <h3 className="font-semibold text-[var(--primary)]">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground">Copy-paste positive feedback examples</h2>
          <p className="mt-3 text-muted-foreground">
            Replace [Name] and bracketed details with your own context. Each example is designed to sound natural while reinforcing what makes your organization different.
          </p>

          <div className="mt-6 space-y-4">
            {EXAMPLES.map((example) => (
              <Card key={example.label} className="overflow-hidden border-border bg-[var(--card)]">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2">
                    {example.icon}
                    <h3 className="font-semibold text-foreground">{example.label}</h3>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-foreground">
                    {example.text}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copy(example.text, example.label)}
                      className="gap-2 border-border bg-background hover:bg-[var(--secondary)]"
                    >
                      {copied === example.label ? (
                        <>
                          <Check className="h-4 w-4" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" /> Copy example
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Adapt tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground">How to adapt these examples</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-muted-foreground">
            <li>
              <strong className="text-foreground">Mirror the customer's language conceptually.</strong> Show you understood what they meant, but don't repeat their exact phrasing back at them.
            </li>
            <li>
              <strong className="text-foreground">Pick one strength.</strong> Choose the organization value that best matches their praise — quality, speed, support, personalization, or expertise.
            </li>
            <li>
              <strong className="text-foreground">Keep it human.</strong> One or two short paragraphs are usually enough. Avoid jargon, emojis overload, or canned marketing language.
            </li>
            <li>
              <strong className="text-foreground">Invite, don't push.</strong> "We'd love to welcome you back" is warmer than a direct upsell.
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-foreground">Generate on-brand responses in seconds</h2>
          <p className="mt-2 text-muted-foreground">
            Paste any customer communication into the Customer Response Assistant and get a warm, tailored reply that follows your approved messaging.
          </p>
          <div className="mt-5">
            <Link to="/">
              <Button className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90">
                Try the Customer Response Assistant
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        <p>Built by Aurics.AI: An AI-Native GTM Studio</p>
      </footer>
    </div>
  );
}
