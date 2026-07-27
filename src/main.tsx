// SPA entry point — mounts TanStack Router into #root.
// The old TanStack Start SSR entry (src/server.ts / src/start.ts) is retired.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

// Register router types for React 19 + TanStack Router.
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error(
    "Root element not found — index.html must contain <div id=\"root\"></div>",
  );
}

createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
