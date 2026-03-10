import type { Metadata } from "next";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";

export const metadata: Metadata = {
  title: "What's next (March 2025)",
  description:
    "A short update on what we shipped recently and what we're working on next.",
  alternates: { canonical: "/blog/whats-next-march-2025" },
  openGraph: {
    title: "What's next (March 2025)",
    description:
      "A short update on what we shipped recently and what we're working on next.",
    url: "/blog/whats-next-march-2025",
  },
};

export default function Page() {
  return (
    <BlogArticleLayout
      title="What's next (March 2025)"
      date="2025-03-10"
    >
      <p>
        This month we've been focusing on the About and Roadmap pages, the contact form, and the blog you're reading now. We want the site to feel like a single place: calculators plus a bit of context and a way to get in touch.
      </p>
      <p>
        Next up we're polishing the printing calculator (clear tape, copy all), improving mobile keyboard behaviour, and adding a few more unit converters. We're also looking at themes and export options—nothing to announce yet, but they're on the list.
      </p>
      <p>
        If you have a calculator you'd love to see or feedback on an existing one, use the Contact page. We read everything.
      </p>
    </BlogArticleLayout>
  );
}
