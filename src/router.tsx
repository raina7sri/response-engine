import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Match TanStack Router's route-matching base to Vite's build base so the app
    // works both at http://localhost:5173/ (dev, BASE_URL='/') and at
    // https://raina7sri.github.io/response-engine/ (prod, BASE_URL='/response-engine/').
    basepath: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
  });

  return router;
};
