import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://garbhamrit.in",
      lastModified: "2026-10-07",
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}