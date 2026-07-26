# Production Roadmap

Staged plan for evolving the current implementation into a production-grade customer-response workflow. **None of the stages below are shipped in this repository.** They describe what a production deployment would add, in the order it would make sense to add them.

No dates are given. No stage is committed. The order reflects dependency and value, not a schedule.

---

## Stage 1 — Harden the existing implementation

Make the current client-only implementation robust enough for daily production use by a small team.

- Add unit tests for the deterministic reasoning layer (`response-generator.ts`) — theme detection, sentiment, pillar selection, concern/privacy detection.
- Add a small offline "eval set" of representative messages with expected theme/sentiment tags, run on every change.
- Add basic session state (last N drafts kept locally) so a user can go back within a session.
- Add draft-length and response-quality asserts (no empty drafts, no repeated bullets, no leftover placeholders).
- Improve accessibility on the reviewer UI (keyboard flow, screen-reader labels, focus management on regenerate).
- Add error tracking on the reasoning path (which inputs blew up, without capturing the inputs themselves).

## Stage 2 — Add organization-specific knowledge and retrieval

Turn the bundled illustrative playbook into a real, per-org knowledge layer.

- Playbook loader: read themes, pillars, rules, and approved examples from a config file / data source per organization.
- Approved-example retrieval: semantic search over a curated set of approved past responses, so drafts inherit real brand voice.
- Brand knowledge index: policies, disclosures, off-limit topics, staff names to never mention, current promotions.
- Playbook editor (later): a lightweight admin surface so playbook owners can update rules without a code change.
- Live model call (when knowledge retrieval is in place): swap `generateResponse` to a model that takes retrieved playbook context + brand knowledge + the message, and produces the same structured output. Preserve determinism boundaries wherever the deterministic path is doing the right thing.

## Stage 3 — Add evaluation, monitoring, and governance

Make the system's quality measurable, not just asserted.

- Offline evaluation harness: sets of scored (message → expected-response-properties) pairs, run on every playbook or model change.
- Online monitoring: response length, playbook-rule triggers, review-decision outcomes (approved / heavily edited / rejected), model latency and cost per call.
- Drift detection: alert when the distribution of detected themes or sentiments shifts materially.
- Safety checks: PII scrubbing on inputs, no-mention rules on outputs, tone floor for low-star reviews.
- Rationale-quality checks: every draft must include a non-empty rationale and at least one consideration for low-star inputs.

## Stage 4 — Add authenticated team workflows and auditability

Move from single-user drafting to a team system with accountability.

- Authentication (SSO / OIDC / email + role).
- Roles: drafter, reviewer, publisher, playbook owner.
- Draft-review-approve workflow with per-role permissions.
- Full audit history: who drafted, what the system reasoned, who edited, what changed, who published, when.
- Comment / rejection reasons on drafts — feeds back into eval data.
- Playbook-change history with attribution.

## Stage 5 — Add channel and CRM integrations

Meet customer messages where they live and publish back where they'll be seen.

- Inbound channels: Google Business Profile reviews, Trustpilot, in-app support, email, Zendesk / Intercom tickets.
- CRM integrations: Zendesk, Intercom, HubSpot, Salesforce — pull customer context, write drafts back as internal notes, log published responses.
- Publish path per channel: reply directly where supported; where not, one-click copy with a clean formatted-response fallback.
- Rate limits, retries, and idempotency on every write.

## Stage 6 — Adapt the workflow to additional customer-communication domains

Prove the pattern by shipping a second implementation.

- Pick one adjacent domain (candidates listed in the README): customer support, service concerns, sales objections, customer success, feedback triage.
- Author the domain-specific playbook (themes, pillars, rules, approved examples).
- Wire domain-specific concern detectors and privacy rules.
- Reuse the reasoning + review UI shell; only the playbook and rules change.
- Compare metrics from Stage 3 across the two implementations to validate that the same workflow pattern works cross-domain.

---

Each stage builds on the previous one. The gate between stages is the health of what came before, not calendar time.
