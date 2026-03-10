import type { MetadataRoute } from "next";

const BASE = "https://calculators.digital";

const blogSlugs = [
  "whats-next-march-2025",
  "why-we-built-calculators-that-feel-real",
  "keyboard-and-tap-friendly-design",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const blogArticleUrls = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));
  return [
    { url: BASE, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/roadmap`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/blog`, lastModified, changeFrequency: "weekly", priority: 0.5 },
    ...blogArticleUrls,
    { url: `${BASE}/contact`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/basic`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/scientific`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/printing`, lastModified, changeFrequency: "weekly", priority: 0.5 },
    // Core planned calculator hubs
    { url: `${BASE}/graphing`, lastModified, changeFrequency: "weekly", priority: 0.4 },
    { url: `${BASE}/financial`, lastModified, changeFrequency: "weekly", priority: 0.4 },
    { url: `${BASE}/programmable`, lastModified, changeFrequency: "weekly", priority: 0.4 },
    // Everyday & utility
    { url: `${BASE}/age`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/date-diff`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/time-duration`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/fuel-cost`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/recipe-scaler`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    // Unit converters
    { url: `${BASE}/unit-length`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/unit-weight`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/unit-temperature`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/unit-area`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/unit-volume`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/unit-speed`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    // Math helpers
    { url: `${BASE}/fraction-percent`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/matrix`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    // Finance calculators
    { url: `${BASE}/loan-emi`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/compound-interest`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/mortgage-payoff`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/currency`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/tip-split`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/discount`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/tax-vat`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    // Health calculators
    { url: `${BASE}/bmi`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/bmr`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/heart-rate`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/water-intake`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    // School & exams
    { url: `${BASE}/gpa`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/grade-needed`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/marks-percent`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    // Developer tools
    { url: `${BASE}/base-converter`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/ip-subnet`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/unix-time`, lastModified, changeFrequency: "monthly", priority: 0.3 },
  ];
}
