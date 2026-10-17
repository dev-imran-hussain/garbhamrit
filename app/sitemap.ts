import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.garbhamrit.com",
      lastModified: "2026-10-17",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://garbhamrit.com",
      lastModified: "2026-10-17",
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}