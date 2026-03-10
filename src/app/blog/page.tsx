import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Source_Sans_3 } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-blog-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-blog-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Updates, design notes, and behind-the-scenes from Calculators.digital.",
  alternates: { canonical: "/blog" },
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

// List of posts for the index only. Add an entry here when you add a new blog post page.
const postList: { slug: string; title: string; excerpt: string; date: string }[] = [
  {
    slug: "whats-next-march-2025",
    title: "What's next (March 2025)",
    excerpt: "A short update on what we shipped recently and what we're working on next.",
    date: "2025-03-10",
  },
  {
    slug: "why-we-built-calculators-that-feel-real",
    title: "Why we built calculators that feel real",
    excerpt:
      "Most online calculators are either too minimal or buried inside apps. Here's why we're focusing on tools that feel like physical devices.",
    date: "2025-03-01",
  },
  {
    slug: "keyboard-and-tap-friendly-design",
    title: "Keyboard- and tap-friendly design",
    excerpt:
      "How we're making calculators work for both keyboard users and touch screens—without compromising either.",
    date: "2025-02-15",
  },
];

export default function BlogPage() {
  const sorted = [...postList].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const [latest, ...rest] = sorted;

  return (
    <div
      className={`${fraunces.variable} ${sourceSans.variable} min-h-screen bg-[#f6f4f0] text-[#2c2925]`}
      style={{ fontFamily: "var(--font-blog-body), system-ui, sans-serif" }}
    >
      <div className="border-b border-[#e8e4de] bg-[#f6f4f0]">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="text-[13px] font-medium uppercase tracking-widest text-[#6b6560] transition-colors hover:text-[#2c2925]"
          >
            ← Home
          </Link>
          <span className="text-[11px] uppercase tracking-widest text-[#a39e98]">
            Blog
          </span>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-5 pb-20 pt-12 sm:pt-16">
        {/* Hero section with featured post */}
        <section className="relative mb-14 overflow-hidden rounded-3xl bg-gradient-to-br from-[#f6f4f0] via-[#faf8f5] to-[#f0ebe4] px-6 py-10 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="absolute -left-20 top-[-4rem] h-56 w-56 rounded-full bg-[#0d9488]/10 blur-3xl" />
            <div className="absolute right-[-3rem] bottom-[-4rem] h-64 w-64 rounded-full bg-[#f59e0b]/12 blur-3xl" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] lg:items-center">
            <div>
              <p
                className="inline-block rounded-full border border-[#d4cfc9] bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b6560]"
                style={{ fontFamily: "var(--font-blog-heading), Georgia, serif" }}
              >
                Blog
              </p>
              <h1
                className="mt-4 text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-[#1a1816] sm:text-[2.6rem]"
                style={{ fontFamily: "var(--font-blog-heading), Georgia, serif" }}
              >
                Notes from behind the calculators.
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#5c5652]">
                Design decisions, small updates, and ideas that shape Calculators.digital. Short reads, no fluff.
              </p>
            </div>

            {latest && (
              <Link
                href={`/blog/${latest.slug}`}
                className="group relative rounded-2xl border border-[#e0d9cf] bg-white/80 p-5 shadow-sm transition hover:border-[#0d9488]/40 hover:bg-white hover:shadow-lg"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b8580]">
                  Latest post
                </p>
                <time
                  className="mt-1 block text-[11px] font-medium uppercase tracking-wider text-[#a39e98]"
                  dateTime={latest.date}
                >
                  {formatDate(latest.date)}
                </time>
                <h2
                  className="mt-3 text-lg font-semibold text-[#1a1816] group-hover:text-[#0d9488]"
                  style={{ fontFamily: "var(--font-blog-heading), Georgia, serif" }}
                >
                  {latest.title}
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5c5652]">
                  {latest.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center text-[13px] font-medium text-[#0d9488]">
                  Read post
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            )}
          </div>
        </section>

        {/* All posts */}
        <section>
          <div className="mb-4 flex items-baseline justify-between gap-2">
            <h2
              className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8b8580]"
              style={{ fontFamily: "var(--font-blog-heading), Georgia, serif" }}
            >
              All posts
            </h2>
            <p className="text-[11px] text-[#8b8580]">
              {sorted.length} {sorted.length === 1 ? "post" : "posts"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-[#e8e4de] bg-white/70 p-5 text-left shadow-sm transition hover:border-[#0d9488]/35 hover:bg-white hover:shadow-md"
              >
                <time
                  className="text-[11px] font-medium uppercase tracking-wider text-[#8b8580]"
                  dateTime={post.date}
                >
                  {formatDate(post.date)}
                </time>
                <h3
                  className="mt-2 text-[15px] font-semibold text-[#1a1816] group-hover:text-[#0d9488]"
                  style={{ fontFamily: "var(--font-blog-heading), Georgia, serif" }}
                >
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#5c5652]">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center text-[12px] font-medium text-[#0d9488]">
                  Read more
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-[#e8e4de] pt-8">
          <Link
            href="/"
            className="inline-block text-[14px] font-medium text-[#6b6560] transition-colors hover:text-[#2c2925]"
          >
            ← Back to home
          </Link>
        </footer>
      </main>
    </div>
  );
}
