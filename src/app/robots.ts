import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // Allow all crawlers, including AI bots (GPTBot, ClaudeBot, PerplexityBot,
    // Google-Extended, CCBot) — resolved policy for bread.coop.
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://bread.coop/sitemap.xml",
    host: "https://bread.coop",
  };
}
