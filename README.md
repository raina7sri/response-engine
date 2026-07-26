# Customer Response Engine

> Part of **[Aurics](https://github.com/raina7sri/aurics)** — AI-native GTM & marketing tools, built in the open. · [aurics.ai](https://aurics.ai)

A production implementation of a reusable AI-native customer-response workflow.

**Live demo:** [customer-response-engine.lovable.app](https://customer-response-engine.lovable.app) *(current hosted deployment; a static GitHub Pages build is planned)*

---

## Overview

Customer-facing teams repeatedly interpret and respond to reviews, requests, concerns, objections, and feedback. The drafting is only one part of the work. Teams must also apply organizational messaging, customer knowledge, risk boundaries, and business judgment consistently across people and channels.

Rather than asking a person to analyze every message manually, this workflow performs **repeatable AI reasoning** and leaves **business-context decisions** to the human.

The system interprets the message, identifies relevant themes, applies an approved communications playbook, and produces an explainable draft. The human decides what changed, what's sensitive, and what ships.

## Who It Is For

Any customer-facing team that answers the same questions repeatedly — and needs to ensure every response reflects the organization's messaging, customer knowledge, and judgment while remaining consistent across people and channels.

This workflow redesigns that process. Rather than asking people to analyze every message manually, the system performs repeatable reasoning and leaves only business-context decisions to the human.

## Current Implementation

The current implementation supports **customer-review responses** using an organization-specific communications playbook and human review. The bundled playbook is an **illustrative sample** implemented in a tutoring / education domain (theme detection, response pillars, and approved-example set) so the reasoning is concrete for demo purposes. A real deployment would supply its own playbook keyed to its own domain and voice.

**Known limitations of this sample.** The bundled reasoning is intentionally pattern-based (regex + rules) — it reflects themes and applies playbook pillars, but does not deeply extract distinctive customer evidence like specific staff names, unique student outcomes, or unusual observations. A **client-specific build** (as described in `docs/production-roadmap.md` — Stage 2) layers in richer evidence extraction, semantic retrieval over an approved-example set, and a governed model call — while preserving the same workflow shape and reviewer UI shown here.

Only capabilities implemented in code are described. Nothing on this page is aspirational unless the section is explicitly labeled *Production Evolution* or *Potential Implementations*.

## Workflow

```
Customer communication
       ↓
AI reasoning and analysis          ← themes, sentiment, concerns, privacy signals
       ↓
Approved communications playbook   ← messaging pillars, guardrails, examples
       ↓
Draft response
       ↓
Explanation / rationale            ← "why this response works" + review considerations
       ↓
Human business-context review      ← changed circumstances, sensitivity, approval
       ↓
Final response
```

The **system determines** what themes are present, what sentiment the message carries, which messaging pillars are relevant, whether a privacy-sensitive detail was shared, and what a playbook-aligned draft would say — with its reasoning made visible.

The **human determines** whether business context has changed since the playbook was written, whether the draft is appropriate for this specific customer, and whether the response is ready to publish.

## Human–AI Decision Boundary

**System responsibilities** (as currently implemented):
- Interpret the incoming message.
- Identify themes and intent.
- Apply structured response guidance from the approved playbook.
- Draft an aligned response.
- Make the reasoning visible ("why this response works", review considerations).

**Human responsibilities** (out of scope for the system):
- Changed business circumstances (a policy update the playbook doesn't yet know about).
- Strategic appropriateness (should this specific customer get *any* public response).
- Sensitive customer context (facts the reviewer disclosed that shouldn't be echoed).
- Legal, policy, or reputational considerations.
- Final approval and publication.

The system does not claim autonomy. It is a governed drafting assistant.

## Potential Implementations

The workflow pattern — *repeatable AI reasoning over messages + governed playbook application + explainable drafts + human approval* — is not limited to reviews. It could be applied, with a new playbook and integrations, to:

- Customer feedback triage
- Service concerns
- Reputation responses
- Customer support
- Customer success outreach
- Sales objections
- Partner communications

Each of these would be its **own implementation** — requiring its own domain knowledge, playbook, guardrails, evaluation criteria, and channel integrations. They are not shipped in this repository.

## Architecture

**Current state (what runs today):**
- **Frontend:** React 19 + TanStack Router + Tailwind v4 + shadcn/ui.
- **Framework:** TanStack Start (React SSR meta-framework) built with Vite 8 + Bun.
- **Response reasoning:** deterministic, encoded logic (see `src/lib/response-generator.ts`) — theme regexes, sentiment lexicon, playbook pillars, and response-composition rules.
- **Playbook representation:** typed data (`ThemeSignal[]`, `pillar` strings, `APPROVED_EXAMPLES` list) so it's inspectable and swappable.
- **Human review step:** the UI presents the draft + rationale side-by-side for a person to edit or copy before publishing.
- **No backend, no data storage, no external API calls, no user accounts.** Session state lives in the browser.

**No LLM is called in the current implementation.** The `generateResponse` function is a deterministic reasoning layer that produces the same structured output shape a live model would — designed so the model call can be swapped in later without changing the UI or the playbook interface.

See [docs/architecture.md](docs/architecture.md) for diagrams (current vs *potential production*) and full data-flow.

## Production Evolution

*Aspirational — not implemented.* A production version of this workflow would layer in:

- Secured model integration (with per-call cost/latency observability).
- Organization-specific retrieval over playbook + brand knowledge.
- Approved-response retrieval (semantic search across a curated example bank).
- Knowledge-source management (who owns what, when it was last updated).
- Evaluation and quality monitoring (offline eval sets, online drift).
- User authentication and role-based permissions.
- Full audit history (who drafted / who edited / who published).
- CRM or support-platform integrations (Zendesk, Intercom, HubSpot, Salesforce).
- Channel integrations (Google Business Profile, Trustpilot, in-app, email).
- Observability (traces, spans, retries).
- Privacy and data-retention controls.

See [docs/production-roadmap.md](docs/production-roadmap.md) for a staged plan.

## Running Locally

**Prerequisites:** [Bun](https://bun.com) 1.1+ (or Node 20+ with npm — Bun is preferred; the lockfile is `bun.lock`).

```bash
bun install
bun run dev        # start the dev server (default: http://localhost:5173)
bun run build      # production build via Vite + Nitro
bun run preview    # serve the production build locally
bun run lint       # ESLint (TypeScript + React)
bun run format     # Prettier
```

No environment variables are required for the current implementation.

## Design Principles

- **Encode repeatable judgment; preserve contextual judgment.** The system handles what has a right answer given the playbook; humans handle what depends on business context.
- **Make the reasoning inspectable.** Every draft ships with the themes it detected, the pillars it invoked, and considerations it flagged.
- **Treat organizational messaging as governed knowledge.** The playbook is data, not prompts buried in code.
- **Don't ask people to perform work the system can determine reliably.** Repeated interpretation is what the system is for.
- **Keep humans accountable for high-consequence decisions.** No autonomous publishing.

## Portfolio Context

This repository is published as one implementation in an open portfolio of AI-native GTM tools. It demonstrates AI-native workflow design, human-in-the-loop product thinking, explainability and governance as first-class concerns, and rapid delivery of a real customer-facing workflow — from concept to a client using it in production.

See [aurics.ai](https://aurics.ai) for the full set of tools.

## License

MIT — see [LICENSE](LICENSE).
