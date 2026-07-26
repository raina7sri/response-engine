# Product Decisions

Decision records for the choices that most shape how the Customer Response Engine works.

---

### 1. The workflow begins with the customer message, not a manual classification step.

**Context.** Existing customer-communication tools often ask the user to pick a category first (complaint / question / feedback), then generate. That front-loads work the system can do reliably from the message itself.

**Decision.** Take the raw message + rating + org as input. Let the system detect themes, sentiment, and concerns automatically. Only ask the human for what the system genuinely can't know (additional business context).

**Rationale.** Repeatable interpretation is exactly what an AI reasoning layer is for. Asking humans to pre-classify is asking them to do work the system can do better and more consistently.

**Consequences.** The theme-detection layer becomes load-bearing — quality of the draft depends on it. This is why themes, sentiment, and concern flags are all rendered in the UI, so the human can see when the system reasoned incorrectly and adjust.

---

### 2. AI reasoning is shown to the user, not hidden.

**Context.** Many "AI response" tools produce a draft with no visible reasoning — the user has to trust or reject the output as a black box.

**Decision.** Every draft ships with three visible artifacts: detected themes, the "why this response works" bullets, and review considerations (privacy, price framing, tone flags, etc.).

**Rationale.** A human reviewing a draft needs to check two things: is the reasoning right, and is the output right. A visible reasoning trace lets them do both in seconds. It also builds the trust required to actually use the tool at pace.

**Consequences.** More UI real estate is spent on rationale panels than on the draft itself. This is intentional. The output is not what makes the tool trustworthy — the visible reasoning is.

---

### 3. Organizational playbook is separated from generation logic.

**Context.** Prompt-based approaches often bake the brand voice, pillars, and rules into a long prompt string. That's hard to inspect, hard to change, and impossible to reason about programmatically.

**Decision.** Represent the playbook as **typed data**: `ThemeSignal[]` for detection, `pillar` strings for messaging, `APPROVED_EXAMPLES` for stylistic anchors, and explicit rule functions (`reviewConsiderations`) for guardrails.

**Rationale.** A playbook is organizational knowledge that will change over time. Keeping it as data means it can be reviewed by the people who own it (marketing, communications, legal), versioned like any other content, and evaluated for coverage — not buried in an opaque prompt.

**Consequences.** Swapping domains (from reviews to support, or from one org to another) means editing the playbook data structures, not rewriting the app. The engine is domain-agnostic by construction.

---

### 4. Final judgment stays with the human.

**Context.** It's technically possible to auto-publish drafts and require a human only to intervene on flagged items. That's a common autonomy pattern.

**Decision.** No auto-publish. Every response requires an explicit human copy/edit/paste step.

**Rationale.** Customer-facing responses are high-consequence — for reputation, for legal risk, and for the customer relationship. The cost of a bad autonomous response is higher than the cost of a person spending 30 seconds to approve. Autonomy adds risk without meaningfully changing the workflow's economics.

**Consequences.** The UI is optimized for fast review, not for hands-off operation. Regenerate, copy, and quick-edit are the primary interactions.

---

### 5. Potential use cases are framed as *implementations*, not features.

**Context.** It's tempting to describe the workflow as "supports reviews, support, feedback, objections, and more." That reads as if all those use cases already work.

**Decision.** State exactly one implemented use case (review responses). Frame all others as *potential implementations of the same workflow pattern*, each requiring its own playbook, rules, and integrations.

**Rationale.** Overclaiming what's built erodes trust the moment someone opens the code. Honest positioning ("one implementation of a reusable pattern") is more credible and easier to defend in a technical conversation.

**Consequences.** The README, this file, and the roadmap all draw a hard line between "current" and "potential." A reviewer can tell in five seconds what actually runs.

---

## Important trade-offs

- **Deterministic reasoning vs. live LLM.** The current implementation uses encoded logic — fast, cheap, predictable, testable, and free to serve. Trade-off: it can only reason about themes present in the coded regexes; anything else is invisible. A live model call would generalize better but adds cost, latency, and non-determinism. The interface (`generateResponse` signature) is designed so the model call can replace the deterministic layer without touching the UI or playbook.
- **Illustrative sample playbook vs. abstract placeholder.** The bundled playbook is education-flavored (a real deployment domain), not abstract ("Theme A, Pillar 1"). Trade-off: a reviewer might mistake it for the tool's only supported domain. Mitigation: the playbook is labeled as illustrative in the code header and README, and the "adapting to another domain" section spells out the swap.
- **Client-only vs. server-backed.** The whole app runs in the browser. Trade-off: no per-user persistence, no shared history, no server-side telemetry. Fine for a portfolio implementation and for the current use pattern (fast, ad-hoc drafting).

## Known limitations

- Theme detection is regex-based — anything worded outside the coded patterns won't be picked up.
- Sentiment is a lexicon + star rating; nuanced sarcasm or backhanded compliments will misread.
- The response composition uses templated sentence assembly, not free generation — the outputs read as "safe brand voice," not as bespoke prose.
- No offline evaluation harness — quality is asserted by design, not measured by data yet.
- Playbook rules are English strings — they aren't machine-checked against the drafts they produce.

These are known and intentional for the current stage. See [production-roadmap.md](production-roadmap.md) for how each would be addressed.
