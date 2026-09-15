import type { MetadataRoute } from "next";

const SITE_URL = "https://www.cookedup.app";

// Only the pages a stranger can read. /plan renders a sign-in prompt without a
// session, so it is left out.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
