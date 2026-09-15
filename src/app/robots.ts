import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // API routes and the auth callback aren't pages; invite and shared-plan
      // links are secret and already carry noindex, but keep crawlers off them
      // entirely.
      disallow: ["/api/", "/auth/", "/invite/", "/plan/shared/"],
    },
    sitemap: "https://www.cookedup.app/sitemap.xml",
  };
}
