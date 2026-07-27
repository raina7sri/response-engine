// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Note on hosting: this app is TanStack Start (SSR-first) and deploys to Netlify.
  //
  // The preset is pinned rather than left to nitro's zero-config platform detection:
  // detection only resolves to "netlify" when the build runs with Netlify's env vars
  // present, and silently falls back to `cloudflare-module` otherwise — which emits a
  // Worker instead of a Netlify function. Pinning keeps the output layout identical
  // everywhere, so `publish` in netlify.toml always matches what the build produced.
  //
  // Inside a Lovable sandbox @lovable.dev/vite-tanstack-config force-overrides preset
  // and output back to Cloudflare, so this does not affect Lovable previews.
  //
  // A GitHub Pages / static-SPA build is possible but requires converting the app to
  // TanStack Router's SPA mode — see docs/production-roadmap.md.
  nitro: { preset: "netlify" },
});
