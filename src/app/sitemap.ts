import type { MetadataRoute } from "next";

const BASE = "https://calculators.digital";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: BASE, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/basic`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/scientific`, lastModified, changeFrequency: "weekly", priority: 0.4 },
    { url: `${BASE}/graphing`, lastModified, changeFrequency: "weekly", priority: 0.4 },
    { url: `${BASE}/financial`, lastModified, changeFrequency: "weekly", priority: 0.4 },
    { url: `${BASE}/printing`, lastModified, changeFrequency: "weekly", priority: 0.3 },
    { url: `${BASE}/programmable`, lastModified, changeFrequency: "weekly", priority: 0.3 },
  ];
}
