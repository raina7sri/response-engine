// Vite config for the Customer Response Engine SPA.
// Deploys as a pure client-side React SPA to GitHub Pages at /response-engine/.
// The app has no server-side logic (deterministic reasoning runs in the browser),
// so this is the natural hosting model — no SSR, no serverless, no runtime backend.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // GitHub Pages serves this repo at /response-engine/ — Vite prefixes asset URLs with this.
  // For local dev / other hosts (Netlify/Vercel), override with VITE_BASE env var.
  base: process.env.VITE_BASE ?? "/response-engine/",
  plugins: [
    // Auto-generates src/routeTree.gen.ts from src/routes/*.tsx files.
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
  },
});
