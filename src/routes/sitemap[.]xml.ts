import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Used only if the request carries no usable host (e.g. a direct unit-test call).
const FALLBACK_BASE_URL = "https://response-engine.netlify.app";

/**
 * Derive the site origin from the incoming request rather than hardcoding it, so
 * <loc> entries stay correct across the production domain, deploy previews, and
 * any custom domain added later. Netlify terminates TLS at the edge and forwards
 * the original host/scheme, so those headers win over the internal request URL.
 */
function resolveBaseUrl(request: Request): string {
  const headers = request.headers;
  const forwardedHost = headers.get("x-forwarded-host") ?? headers.get("host");

  if (forwardedHost) {
    const proto = headers.get("x-forwarded-proto") ?? "https";
    return `${proto}://${forwardedHost}`;
  }

  try {
    return new URL(request.url).origin;
  } catch {
    return FALLBACK_BASE_URL;
  }
}

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const baseUrl = resolveBaseUrl(request);

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/guides/positive-feedback", changefreq: "monthly", priority: "0.8" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${baseUrl}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
