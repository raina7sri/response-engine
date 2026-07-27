// Deterministic reasoning + generation layer for the Customer Response Engine.
//
// The theme signals, pillars, response-composition rules, and APPROVED_EXAMPLES below
// are an ILLUSTRATIVE SAMPLE PLAYBOOK — implemented in an education/tutoring domain
// so the reasoning is concrete. A real deployment would supply its own organization-
// specific playbook (themes, pillars, rules, approved-example set) with the same
// interface. See docs/architecture.md and docs/product-decisions.md.
//
// A live model call would replace `generateResponse` while preserving this structured
// output shape and the seeded approved-example retrieval boundary.

export type Center = string;

export interface GeneratorInput {
  review: string;
  reviewerName?: string;
  center: Center;
  stars: number;
  additionalContext?: string;
  regenerateSeed?: number;
}

export interface Analysis {
  reviewType: string;
  sentiment: string;
  primaryThemes: string[];
  relevantPillars: string[];
  importantConcern: string | null;
  privacySensitivity: string | null;
}

export interface GenerationResult {
  analysis: Analysis;
  recommendedResponse: string;
  whyThisResponseWorks: string[];
  reviewConsiderations: string[];
  aiInsight: string | null;
}

// --- Theme detection --------------------------------------------------------

interface ThemeSignal {
  key: string;
  label: string;
  pillar: string;
  keywords: RegExp;
}

const THEME_SIGNALS: ThemeSignal[] = [
  {
    key: "reading",
    label: "Reading progress",
    pillar: "Personalized learning",
    keywords: /\b(read(?:ing)?|phonics|comprehension|fluency|book)\b/i,
  },
  {
    key: "math",
    label: "Math support",
    pillar: "Personalized learning",
    keywords: /\b(math|algebra|geometry|fractions?|multiplication)\b/i,
  },
  {
    key: "writing",
    label: "Writing",
    pillar: "Personalized learning",
    keywords: /\b(writing|essay|paragraph|composition)\b/i,
  },
  {
    key: "study",
    label: "Study skills",
    pillar: "Academic progress and confidence",
    keywords: /\b(study skills?|organization|homework habits?)\b/i,
  },
  {
    key: "homework",
    label: "Homework help",
    pillar: "Supportive learning environment",
    keywords: /\b(homework|assignments?)\b/i,
  },
  {
    key: "testprep",
    label: "Test prep",
    pillar: "Assessment-first support",
    keywords: /\b(sat|act|test prep|standardized|isee|ssat)\b/i,
  },
  {
    key: "summer",
    label: "Summer learning",
    pillar: "Summer learning",
    keywords: /\b(summer|break|camp)\b/i,
  },
  {
    key: "confidence",
    label: "Confidence",
    pillar: "Academic progress and confidence",
    keywords: /\b(confidence|confident|self[- ]esteem|proud|believe(?:s|d)?)\b/i,
  },
  {
    key: "grades",
    label: "Grades and results",
    pillar: "Academic progress and confidence",
    keywords: /\b(grades?|score|improved|A[- ]|A\+|gpa)\b/i,
  },
  {
    key: "teacher",
    label: "Teacher and staff",
    pillar: "Experienced educators",
    keywords: /\b(teacher|tutor|instructor|staff|educator)\b/i,
  },
  {
    key: "schedule",
    label: "Scheduling and flexibility",
    pillar: "Flexible scheduling",
    keywords: /\b(schedul|flexible|availab|book(?:ed|ing)?|time slot)\b/i,
  },
  {
    key: "communication",
    label: "Communication with parents",
    pillar: "Parent communication and progress reviews",
    keywords: /\b(communicat|updates?|progress report|meeting|conference)\b/i,
  },
  {
    key: "assessment",
    label: "Assessment",
    pillar: "Assessment-first support",
    keywords: /\b(assessment|evaluat|diagnostic|placement)\b/i,
  },
  {
    key: "environment",
    label: "Learning environment",
    pillar: "Supportive learning environment",
    keywords: /\b(welcoming|patient|kind|warm|environment|atmosphere|caring)\b/i,
  },
  {
    key: "value",
    label: "Price and value",
    pillar: "Tutoring investment and value",
    keywords: /\b(price|cost|expensive|value|worth|money|afford|investment|pricey)\b/i,
  },
  {
    key: "local",
    label: "Local center",
    pillar: "Local center identity",
    keywords: /\b(neighborhood|local|nearby|community)\b/i,
  },
];

function detectThemes(review: string): ThemeSignal[] {
  const found = THEME_SIGNALS.filter((s) => s.keywords.test(review));
  // De-dupe by label and cap
  const seen = new Set<string>();
  const out: ThemeSignal[] = [];
  for (const s of found) {
    if (!seen.has(s.label)) {
      seen.add(s.label);
      out.push(s);
    }
  }
  return out.slice(0, 4);
}

// --- Sentiment --------------------------------------------------------------

const NEGATIVE_TERMS =
  /\b(rude|unprofessional|waste|refund|cancel|angry|awful|terrible|worst|disappointed|frustrat|slow|late|ignored|mistake|problem|issue|concern|complain|expensive|overpriced)\b/i;
const POSITIVE_TERMS =
  /\b(love|great|excellent|amazing|wonderful|fantastic|recommend|helpful|kind|patient|improved|progress|thank)\b/i;

function detectSentiment(review: string, stars: number): string {
  if (!review.trim()) {
    if (stars >= 4) return "Positive (star-only)";
    if (stars === 3) return "Mixed (star-only)";
    return "Negative (star-only)";
  }
  const neg = NEGATIVE_TERMS.test(review);
  const pos = POSITIVE_TERMS.test(review);
  if (stars >= 5 && !neg) return "Strongly positive";
  if (stars === 4 && neg) return "Positive with a concern";
  if (stars === 4) return "Positive";
  if (stars === 3) return "Mixed";
  if (stars <= 2) return "Negative";
  if (pos && !neg) return "Positive";
  if (neg && !pos) return "Negative";
  return "Mixed";
}

// --- Review type ------------------------------------------------------------

function detectReviewType(review: string, stars: number): string {
  const text = review.trim();
  if (!text) return "Star-only rating";
  const words = text.split(/\s+/).length;
  if (stars <= 2) return "Complaint";
  if (stars === 3) return "Mixed experience";
  if (words < 20) return "Brief endorsement";
  if (/\b(my (son|daughter|child|kid)|our (son|daughter|child|kid))\b/i.test(text))
    return "Parent testimonial";
  return "Detailed positive review";
}

// --- Concerns and privacy ---------------------------------------------------

function detectImportantConcern(review: string, stars: number): string | null {
  if (stars <= 3 || NEGATIVE_TERMS.test(review)) {
    if (/\b(schedul|book|time slot|cancel|reschedul)\b/i.test(review))
      return "Scheduling experience";
    if (
      /\b(rude|unprofessional|staff|tutor|teacher)\b/i.test(review) &&
      NEGATIVE_TERMS.test(review)
    )
      return "Staff interaction";
    if (/\b(price|cost|expensive|overpriced|refund|money)\b/i.test(review))
      return "Price or billing";
    if (/\b(progress|results|improv)\b/i.test(review) && NEGATIVE_TERMS.test(review))
      return "Perceived lack of progress";
    if (stars <= 2) return "Overall experience fell short";
    if (stars === 3) return "Mixed experience worth acknowledging";
  }
  return null;
}

function detectPrivacySensitivity(review: string): string | null {
  const flags: string[] = [];
  if (/\b(adhd|dyslex|autis|iep|504|learning disab|learning differenc)\b/i.test(review))
    flags.push("learning difference mentioned");
  if (/\b(grade [k1-9]|kindergarten|[1-9](st|nd|rd|th) grade)\b/i.test(review))
    flags.push("child's grade level");
  if (/\b(score|gpa|reading level)\b/i.test(review)) flags.push("specific scores");
  if (/\bmy (son|daughter)\b/i.test(review) && /\b[A-Z][a-z]{2,}\b/.test(review))
    flags.push("possible child name");
  if (!flags.length) return null;
  return `Do not amplify: ${flags.join(", ")}.`;
}

// --- Pillar selection -------------------------------------------------------

function selectPillars(themes: ThemeSignal[], stars: number): string[] {
  const pillars: string[] = [];
  for (const t of themes) {
    if (!pillars.includes(t.pillar)) pillars.push(t.pillar);
    if (pillars.length >= 2) break;
  }
  if (!pillars.length) {
    pillars.push(stars >= 4 ? "Experienced educators" : "Supportive learning environment");
  }
  return pillars;
}

// --- Reviewer name / child name extraction ---------------------------------

// Common non-name reviewer values from review platforms — treat as no-name so we
// don't produce awkward openings like "Thank you, Anonymous, for taking the time..."
const NON_NAME_VALUES = new Set([
  "anonymous",
  "guest",
  "user",
  "customer",
  "reviewer",
  "google",
  "a",
  "unknown",
  "n/a",
  "na",
]);

function firstNameOnly(name: string | undefined): string | null {
  if (!name) return null;
  const clean = name.trim().split(/\s+/)[0];
  if (!clean) return null;
  if (NON_NAME_VALUES.has(clean.toLowerCase())) return null;
  // Titlecase
  return clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
}

function childNameIfDisclosed(review: string): string | null {
  // Match "my son/daughter Name" pattern; only use if reviewer publicly disclosed.
  const m = review.match(/\bmy (?:son|daughter|child|kid)[,]?\s+([A-Z][a-z]{1,20})\b/);
  if (m) return m[1];
  return null;
}

// --- Response composition ---------------------------------------------------

function pillarSentence(pillar: string, center: Center): string {
  switch (pillar) {
    case "Personalized learning":
      return "Every plan we build is shaped around the individual student, so what happens in each session is intentional rather than generic.";
    case "Assessment-first support":
      return "Starting with a clear picture of where a student is helps us focus each session on what will actually move things forward.";
    case "Experienced educators":
      return "Our team of experienced educators takes real care in how they work with each family.";
    case "Academic progress and confidence":
      return "Steady progress and growing confidence tend to build together, and that is what we try to protect week to week.";
    case "Parent communication and progress reviews":
      return "Keeping parents in the loop on what is working, and what to adjust, is part of how we do this well.";
    case "Supportive learning environment":
      return "We want the center to feel like a place students actually want to walk into.";
    case "Flexible scheduling":
      return "We know families are juggling a lot, so we try to make scheduling work around real life.";
    case "Summer learning":
      return "Summer is a good window to reinforce skills without the pressure of the school year.";
    case "Tutoring investment and value":
      return "Tutoring is a real investment, and our goal is to make sure it is a worthwhile one.";
    case "Local center identity":
      return `We are proud to be part of the community around ${center}.`;
    default:
      return "";
  }
}

// Note: the second comma after `${reviewer}` is intentional English punctuation
// ("Thank you, Priya, for taking the time..."). Prior version omitted it.
function openingThank(reviewer: string | null, stars: number, hasConcern: boolean = false): string {
  const name = reviewer ? `, ${reviewer},` : "";
  if (stars >= 5) return `Thank you${name} for taking the time to share this.`;
  // 4★ WITHOUT a detected concern reads as purely positive — don't imply criticism
  // (per Rule 9 in docs/product-decisions.md-adjacent guidance from live testing).
  if (stars === 4 && hasConcern)
    return `Thank you${name} for the kind words and for the honest feedback.`;
  if (stars === 4) return `Thank you${name} for taking the time to share this.`;
  if (stars === 3)
    return `Thank you${name} for the thoughtful feedback — both the positives and the concerns.`;
  return `Thank you${name} for taking the time to share this. We are sorry the experience fell short of what you were hoping for.`;
}

function reflection(themes: ThemeSignal[], stars: number): string {
  if (!themes.length) return "";
  const t = themes[0];
  const pos = stars >= 4;
  switch (t.key) {
    case "reading":
      return pos
        ? "Watching a student turn a corner with reading is one of the most rewarding things we get to be part of."
        : "Reading growth is deeply personal for a student, and we take that seriously.";
    case "math":
      return pos
        ? "Math often starts to click once a student feels genuinely supported through the tough parts."
        : "Math confidence can be fragile, and we try to be careful with it.";
    case "writing":
      return "Writing is one of those skills that grows quietly, and it is good to hear it noticed.";
    case "testprep":
      return pos
        ? "Preparing for a big test is as much about steadiness as it is about content."
        : "Test prep should feel like a plan, not a scramble, and we hear you.";
    case "summer":
      return "Summer is a good window to keep momentum without the pressure of the school year.";
    case "confidence":
      return "Confidence is often the quiet result of steady, well-fitted support, and it means a lot to hear it show up.";
    case "grades":
      return "Progress that shows up in day-to-day schoolwork is what we most hope for.";
    case "teacher":
      return pos
        ? "It means a lot to hear that the team came through the way we always hope they do."
        : "How our team shows up matters to us, and we take this seriously.";
    case "schedule":
      return "Scheduling should support the family, not add to the stress, so we appreciate you naming it.";
    case "communication":
      return "Keeping parents genuinely informed is part of the work, not an afterthought.";
    case "value":
      return "Tutoring is a real investment for a family, and it should feel like a worthwhile one.";
    case "environment":
      return "How the center feels day to day is something we care about a lot.";
    default:
      return "";
  }
}

function closing(stars: number, center: Center): string {
  if (stars >= 5) return `We are grateful you chose ${center}.`;
  if (stars === 4) return `We appreciate you being part of the ${center} community.`;
  if (stars === 3)
    return `We would welcome the chance to talk directly — please reach out to ${center} so we can better understand your experience.`;
  return `If you are open to it, please reach out to ${center} directly so we can better understand what happened and try to make it right.`;
}

function trimSentences(text: string, maxSentences: number): string {
  const parts = text.match(/[^.!?]+[.!?]+\s*/g) ?? [text];
  return parts.slice(0, maxSentences).join(" ").trim();
}

function composeResponse(input: GeneratorInput, themes: ThemeSignal[], pillars: string[]): string {
  const { review, stars, center, additionalContext, regenerateSeed = 0 } = input;
  const reviewer = firstNameOnly(input.reviewerName);
  const disclosedChildName = childNameIfDisclosed(review);
  const words = review.trim().split(/\s+/).filter(Boolean).length;

  // Star-only handling
  if (words === 0) {
    if (stars >= 4) {
      return reviewer
        ? `Thank you, ${reviewer}. We appreciate your support of ${center}.`
        : `Thank you. We appreciate your support of ${center}.`;
    }
    return reviewer
      ? `Thank you for the rating, ${reviewer}. If you are open to it, we would welcome the chance to hear more about your experience with ${center}.`
      : `Thank you for the rating. If you are open to it, we would welcome the chance to hear more about your experience with ${center}.`;
  }

  // Detect explicit-concern language so 4★ openings can avoid implying criticism
  // when the review is purely positive.
  const hasConcern = NEGATIVE_TERMS.test(review);
  const open = openingThank(reviewer, stars, hasConcern);
  const reflect = reflection(themes, stars);

  // Rotate pillar pick with regenerateSeed for variety on regenerate.
  const rotated =
    pillars.length > 1 && regenerateSeed % 2 === 1
      ? [pillars[1], pillars[0], ...pillars.slice(2)]
      : pillars;
  const pillarLine = pillarSentence(rotated[0], center);
  const secondPillar =
    rotated[1] && stars >= 4 && words > 40 ? pillarSentence(rotated[1], center) : "";

  const close = closing(stars, center);

  // Child-name touch (only if reviewer disclosed it publicly and it helps)
  let childTouch = "";
  if (disclosedChildName && stars >= 4 && regenerateSeed % 2 === 0) {
    childTouch = ` It sounds like ${disclosedChildName} has been putting in real effort, and that always matters.`;
  }

  // Additional context nudges
  let contextNudge = "";
  if (additionalContext) {
    if (/no longer works|former|used to work/i.test(additionalContext)) {
      // avoid naming staff
    }
    if (/scheduling|schedule/i.test(additionalContext) && stars <= 4) {
      contextNudge = " We also hear the feedback on scheduling and are looking at it directly.";
    }
    if (/do not mention pricing|no pricing/i.test(additionalContext)) {
      // handled by omission
    }
  }

  // Length rules
  let body: string;
  if (words < 15) {
    body = [open, reflect || pillarLine, close].filter(Boolean).join(" ");
    body = trimSentences(body, 2);
  } else if (words < 60) {
    body = [open, reflect, pillarLine, childTouch, contextNudge, close].filter(Boolean).join(" ");
    body = trimSentences(body, stars <= 3 ? 3 : 4);
  } else {
    body = [open, reflect, pillarLine, secondPillar, childTouch, contextNudge, close]
      .filter(Boolean)
      .join(" ");
    body = trimSentences(body, stars <= 3 ? 4 : 5);
  }

  // Clean whitespace
  return body.replace(/\s+/g, " ").trim();
}

// --- Why This Response Works ------------------------------------------------

function whyItWorks(
  themes: ThemeSignal[],
  pillars: string[],
  center: Center,
  stars: number,
): string[] {
  const themeLabel =
    themes[0]?.label ?? (stars >= 4 ? "the overall positive experience" : "the concern raised");
  const bullets: string[] = [];
  bullets.push(
    `Reflects ${themeLabel.toLowerCase()} conceptually without echoing the reviewer's phrasing.`,
  );
  bullets.push(
    `Reinforces ${pillars.slice(0, 2).join(" and ").toLowerCase()} without stacking every brand strength at once.`,
  );
  bullets.push(
    `Names ${center} naturally to support local trust and steady search signals, without keyword stuffing.`,
  );
  return bullets;
}

// --- Review Considerations --------------------------------------------------

function reviewConsiderations(
  input: GeneratorInput,
  themes: ThemeSignal[],
  concern: string | null,
  privacy: string | null,
): string[] {
  const items: string[] = [];
  const hasValue =
    themes.some((t) => t.key === "value") || /price|cost|value|expensive|worth/i.test(input.review);
  if (hasValue) {
    items.push(
      "Price came up — keep the framing on investment and value; do not position the brand as cheap or apologize for pricing.",
    );
  }
  if (input.stars <= 3 || concern) {
    items.push(
      "Acknowledge the concern directly, without debating specifics publicly. If details are needed, keep the follow-up offline.",
    );
  }
  if (privacy) {
    items.push(
      "A private detail about the student appeared in the review. Do not repeat or expand on it in the public response.",
    );
  }
  if (/certified|credential|licensed/i.test(input.review + " " + (input.additionalContext ?? ""))) {
    items.push(
      'Only use "certified teachers" if confirmed for this center; otherwise use "experienced educators."',
    );
  }
  if (/no longer works|former|used to work|left the center/i.test(input.additionalContext ?? "")) {
    items.push(
      "A named staff member is no longer at the center — do not repeat the name in the response.",
    );
  }
  if (input.stars <= 2) {
    items.push("This may warrant a direct offline follow-up in addition to the public reply.");
  }
  if (/old|older|last year|years ago/i.test(input.additionalContext ?? "")) {
    items.push(
      "Reviewer's experience is older — a brief acknowledgment of time passed can be appropriate, without over-explaining.",
    );
  }
  return items;
}

// --- AI Insight (rare) ------------------------------------------------------

function aiInsight(themes: ThemeSignal[], stars: number, review: string): string | null {
  if (stars >= 4 && themes.some((t) => t.key === "confidence") && !/grade|score/i.test(review)) {
    return "Confidence, mentioned without a grade or score, is a strong testimonial pattern — worth watching for in future reviews as a soft-signal theme.";
  }
  if (themes.some((t) => t.key === "schedule") && stars >= 4) {
    return "Scheduling praised as a positive is a quiet trust signal — a useful content angle for parent-facing pages.";
  }
  if (themes.some((t) => t.key === "reading") && stars >= 4) {
    return "Reading progress stories consistently resonate with prospective parents and are worth surfacing on the center's page.";
  }
  return null;
}

// --- Public API -------------------------------------------------------------

export function generateResponse(input: GeneratorInput): GenerationResult {
  const themes = detectThemes(input.review);
  const pillars = selectPillars(themes, input.stars);
  const concern = detectImportantConcern(input.review, input.stars);
  const privacy = detectPrivacySensitivity(input.review);
  const analysis: Analysis = {
    reviewType: detectReviewType(input.review, input.stars),
    sentiment: detectSentiment(input.review, input.stars),
    primaryThemes: themes.map((t) => t.label).slice(0, 3),
    relevantPillars: pillars,
    importantConcern: concern,
    privacySensitivity: privacy,
  };

  const recommendedResponse = composeResponse(input, themes, pillars);
  const whyThisResponseWorks = whyItWorks(themes, pillars, input.center, input.stars);
  const reviewConsiderationsList = reviewConsiderations(input, themes, concern, privacy);
  const insight = aiInsight(themes, input.stars, input.review);

  return {
    analysis,
    recommendedResponse,
    whyThisResponseWorks,
    reviewConsiderations: reviewConsiderationsList,
    aiInsight: insight,
  };
}

// --- Seeded approved examples (retrieval boundary stub) ---------------------

export interface ApprovedExample {
  label: string;
  scenario: string;
  example: string;
}

export const APPROVED_EXAMPLES: ApprovedExample[] = [
  {
    label: "Short five-star",
    scenario: "5★ · brief endorsement",
    example:
      "Thank you for taking the time to share this. It means a lot to hear that the experience has been a good one, and we are grateful you chose <enter organization>.",
  },
  {
    label: "Detailed positive",
    scenario: "5★ · detailed testimonial",
    example:
      "Thank you for such a thoughtful review. Every plan we build is shaped around the individual customer, so what happens in each interaction is intentional. It is genuinely rewarding to hear that the work is showing up in the way you described, and we are grateful to be part of it at <enter organization>.",
  },
  {
    label: "Reading progress",
    scenario: "5★ · reading growth",
    example:
      "Thank you for sharing this. Watching a learner turn a corner with reading is one of the most rewarding things we get to be part of, and it means a lot to hear it. We are grateful you chose <enter organization>.",
  },
  {
    label: "Price and value",
    scenario: "4★ · value framing",
    example:
      "Thank you for the honest feedback. Tutoring is a real investment for a family, and our goal is to make sure it is a worthwhile one — with support that fits individual needs and provides steady improvement over time. We appreciate you being part of our customer community at <enter organization>.",
  },
  {
    label: "Mixed",
    scenario: "3★ · mixed experience",
    example:
      "Thank you for the thoughtful feedback — both the positives and the concerns. We take this seriously and would welcome the chance to talk directly. Please reach out to us at <enter organization contact details> so we can better understand your experience.",
  },
  {
    label: "Negative",
    scenario: "1★ · complaint",
    example:
      "Thank you for taking the time to share this. We are sorry the experience fell short of what you were hoping for. If you are open to it, please reach out to us so we can better understand what happened and try to make it right.",
  },
];
