import type { APIRoute } from "astro";

import { getSiteUrl } from "@/lib/site";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? getSiteUrl();
  const robots = `User-agent: GPTBot
Disallow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap-index.xml", baseUrl).toString()}
`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
