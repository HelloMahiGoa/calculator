import type { Metadata } from "next";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";

export const metadata: Metadata = {
  title: "Why we built calculators that feel real",
  description:
    "Most online calculators are either too minimal or buried inside apps. Here's why we're focusing on tools that feel like physical devices.",
  alternates: { canonical: "/blog/why-we-built-calculators-that-feel-real" },
  openGraph: {
    title: "Why we built calculators that feel real",
    description:
      "Most online calculators are either too minimal or buried inside apps. Here's why we're focusing on tools that feel like physical devices.",
    url: "/blog/why-we-built-calculators-that-feel-real",
  },
};

export default function Page() {
  return (
    <BlogArticleLayout
      title="Why we built calculators that feel real"
      date="2025-03-01"
    >
      <p>
        When you pick up a calculator at your desk, you know what to expect: clear keys, a readable display, and no pop-ups. We wanted the same feeling on the web—without logins, ads, or clutter.
      </p>
      <p>
        Calculators.digital started from a simple question: what if everyday math tools on the web were as trustworthy and quiet as the ones in your drawer? So we're building a small set of calculators, each tuned for one job. Basic math, scientific functions, printing tape, loans, health numbers—each has its own page and its own focus.
      </p>
      <p>
        We're not trying to replace your favourite app. We're offering a no-friction alternative: open the link, do the calculation, close the tab. Your history stays on your device. No accounts, no feeds, no dark patterns. Just calculators that feel like objects, not pop-ups.
      </p>
    </BlogArticleLayout>
  );
}
