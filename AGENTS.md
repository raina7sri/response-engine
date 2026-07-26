# AGENTS.md — Repo Guidance for Coding Agents

Concise operating notes for AI coding agents (Claude Code, Cursor, etc.) working in this repository.

## What this repo is

A production implementation of an AI-native customer-response workflow. See [README.md](README.md) for the product framing and [docs/architecture.md](docs/architecture.md) for how it fits together.

## Non-negotiables

- **Preserve the term "AI Reasoning"** — it's a positioning choice, not a synonym for "AI." Don't rewrite it to "AI processing," "the AI," or similar.
- **Don't overpromise.** The current implementation supports customer-review responses using an illustrative sample playbook. Anything beyond that is *potential*, not implemented. Do not describe unimplemented features as if they were shipped.
- **Don't invent an LLM integration.** The response layer is deterministic and encoded. `generateResponse` in `src/lib/response-generator.ts` is where a live model call would slot in, but is not one today.
- **No client-identifying content.** Prior work anonymized client names, city references, and proprietary playbook content. Anything reintroduced must be either fully generic or explicitly labeled *illustrative sample*.
- **No secrets, ever.** No API keys, tokens, real emails, real phone numbers, real URLs.

## Stack

- **Framework:** TanStack Start (React 19, TanStack Router).
- **Build:** Vite 8 + Nitro (via `@lovable.dev/vite-tanstack-config`).
- **Runtime:** Bun preferred (`bun.lock` is authoritative); Node 20+ also works.
- **Styling:** Tailwind CSS v4 + shadcn/ui components.
- **Language:** TypeScript throughout, strict mode.

## Where things live

- `src/routes/` — TanStack file-based routes. `index.tsx` is the main assistant UI (~900 lines). `__root.tsx` is the shell + error boundary. `guides.positive-feedback.tsx` is a public content page. `sitemap[.]xml.ts` is a dynamic sitemap.
- `src/lib/response-generator.ts` — the AI reasoning + response composition layer. **The core of the product.** Deterministic; typed input/output.
- `src/lib/error-capture.ts` + `src/lib/error-page.ts` — SSR error normalization.
- `src/components/ui/` — shadcn/ui components. Don't rewrite these; they're stable.
- `src/server.ts` + `src/start.ts` — TanStack Start SSR entry + error middleware. Do not add business logic here.

## Working rules

- **Do run:** `bun install`, `bun run lint`, `bun run build` after non-trivial changes.
- **Don't rewrite** the response-generator interface (`GeneratorInput`, `GenerationResult`). That contract is what lets a live model call replace the deterministic layer later.
- **Don't add** new npm dependencies without a clear reason — the current tree is deliberately lean.
- **Don't add** authentication, user accounts, or persistence in this repo. Those belong in a production evolution (see `docs/production-roadmap.md`).
- **Don't add** analytics, tracking, or third-party scripts.

## When editing the playbook

The bundled playbook (theme signals, pillars, response templates, approved examples) is an *illustrative sample* in an education/tutoring domain. If you update it:

- Keep it clearly labeled as a sample in code comments.
- Don't reintroduce real client names, cities, or organization-specific content.
- Preserve the type shapes so a real deployment can drop in its own playbook without code changes.

## Deployment notes

- The current app is a TanStack Start app that builds to a Cloudflare-Workers-shaped fetch handler by default (via nitro).
- For static hosting (e.g., GitHub Pages), a pre-render / SSG config would need to be added — the app is client-heavy and has no runtime server logic, so it should be feasible.
- No env vars are required for the current implementation.
