import type { MetadataRoute } from "next";

const siteUrl = "https://www.onuorahkingsley.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/experience", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/journal", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-09-06"),
    changeFrequency,
    priority,
  }));
}
