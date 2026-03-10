import type { Metadata } from "next";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";

export const metadata: Metadata = {
  title: "Keyboard- and tap-friendly design",
  description:
    "How we're making calculators work for both keyboard users and touch screens—without compromising either.",
  alternates: { canonical: "/blog/keyboard-and-tap-friendly-design" },
  openGraph: {
    title: "Keyboard- and tap-friendly design",
    description:
      "How we're making calculators work for both keyboard users and touch screens—without compromising either.",
    url: "/blog/keyboard-and-tap-friendly-design",
  },
};

export default function Page() {
  return (
    <BlogArticleLayout
      title="Keyboard- and tap-friendly design"
      date="2025-02-15"
    >
      <p>
        A good calculator should work the way you work: fast on a keyboard when you're at a desk, and easy to tap when you're on your phone. That's easier said than done.
      </p>
      <p>
        On desktop, we support standard key mappings: numbers, operators, Enter for equals, Escape to clear. Tab order and focus are consistent so you can keep your hands on the keys. On mobile, buttons are sized for thumbs, with clear tap targets and no double-tap zoom surprises.
      </p>
      <p>
        We're still refining shortcuts and keypad behaviour (it's on the roadmap). The goal is the same: whether you type or tap, the calculator gets out of your way.
      </p>
    </BlogArticleLayout>
  );
}
