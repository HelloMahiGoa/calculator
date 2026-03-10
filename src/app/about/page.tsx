import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { AboutHeroGraphic } from "@/components/about/AboutHeroGraphic";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutQuietPanel } from "@/components/about/AboutQuietPanel";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-about-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-about-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Calculators.digital and the idea behind these calculators that feel like real devices.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div
      className={`${fraunces.variable} ${sourceSans.variable} min-h-screen bg-[#f6f4f0] text-[#2c2925]`}
      style={{ fontFamily: "var(--font-about-body), system-ui, sans-serif" }}
    >
      {/* Top bar */}
      <div className="border-b border-[#e8e4de] bg-[#f6f4f0]">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="text-[13px] font-medium uppercase tracking-widest text-[#6b6560] transition-colors hover:text-[#2c2925]"
          >
            ← Home
          </Link>
          <span className="text-[11px] uppercase tracking-widest text-[#a39e98]">
            About
          </span>
        </div>
      </div>

      <article className="mx-auto max-w-5xl px-5 pb-20 pt-12 sm:pt-16">
        {/* Hero section: left text, right motion graphic */}
        <header className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#f6f4f0] via-[#faf8f5] to-[#f0ebe4] px-6 py-10 sm:px-10 sm:py-12 lg:mb-16">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#0d9488]/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#f59e0b]/5 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <p
                className="inline-block rounded-full border border-[#d4cfc9] bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b6560]"
                style={{ fontFamily: "var(--font-about-heading), Georgia, serif" }}
              >
                About the project
              </p>
              <h1
                className="mt-4 text-[2.25rem] font-semibold leading-[1.15] tracking-tight text-[#1a1816] sm:text-[2.75rem]"
                style={{ fontFamily: "var(--font-about-heading), Georgia, serif" }}
              >
                Calculators that feel like objects, not pop‑ups.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#5c5652]">
                Calculators.digital is a small, independent project. The goal is simple:
                give you trustworthy, quiet tools for everyday math—without logins,
                notifications, or clutter.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#5c5652]">
                Every calculator starts from a real‑world scenario: paying a bill,
                planning a loan, grading an exam, or checking your health numbers.
                The interface is tuned for that job first, not for ads or growth hacks.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0d9488] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(13,148,136,0.35)] transition hover:bg-[#0f766e] hover:shadow-[0_6px_20px_rgba(13,148,136,0.4)]"
                >
                  Try the calculators
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#d4cfc9] bg-white/80 px-4 py-2.5 text-sm font-medium text-[#2c2925] transition hover:border-[#0d9488]/40 hover:text-[#0d9488]"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            <AboutHeroGraphic />
          </div>
        </header>

        {/* Value strip */}
        <section className="mb-14 flex flex-wrap justify-center gap-3 sm:gap-4" aria-label="Why use us">
          {[
            { label: "No sign‑up", sub: "Use instantly" },
            { label: "30+ calculators", sub: "Basic to niche" },
            { label: "Works offline", sub: "After first load" },
            { label: "Ad-Free", sub: "No banners" },
            { label: "Free forever", sub: "No paywall" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center rounded-2xl border border-[#e8e4de] bg-white/70 px-5 py-3 text-center shadow-sm transition hover:border-[#0d9488]/30 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-[#1a1816]">{item.label}</span>
              <span className="mt-0.5 text-[11px] text-[#6b6560]">{item.sub}</span>
            </div>
          ))}
        </section>

        {/* First detailed section: left text, right animated timeline */}
        <section className="mb-16 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <h2
              className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8b8580]"
              style={{ fontFamily: "var(--font-about-heading), Georgia, serif" }}
            >
              How these tools are made
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#2c2925]">
              Each calculator goes through a small but careful loop: collect the real
              use‑cases, prototype the interface, test it with real numbers, then
              remove anything that slows you down. The end result should feel like a
              familiar desk calculator, but with all the benefits of being on the web.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#5c5652]">
              Rather than building one giant &quot;do‑everything&quot; calculator, the
              site focuses on narrow tools: one for loans, one for tips, one for
              unit conversions, one for GPA, and so on. This keeps each screen calm
              and makes the answers easier to trust.
            </p>
          </div>

          <AboutTimeline />
        </section>

        {/* Second detailed section: right text, left motion graphic */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <AboutQuietPanel />

          <div>
            <h2
              className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8b8580]"
              style={{ fontFamily: "var(--font-about-heading), Georgia, serif" }}
            >
              What&apos;s here today & what&apos;s next
            </h2>
            <p className="text-[17px] leading-[1.7] text-[#2c2925]">
              Today you&apos;ll find basic, scientific, printing, financial, health,
              school and utility calculators—each designed to answer one kind of
              question really well. Over time, more niche tools will be added,
              guided by what people actually need rather than by checklists.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#5c5652]">
              New calculators, small UX improvements, and better explanations are
              added in small, frequent updates. If there&apos;s a calculator you&apos;d
              love to see or a detail that could be sharper,{" "}
              <Link
                href="/contact"
                className="font-medium text-[#0d9488] underline decoration-[#0d9488]/40 underline-offset-2 transition-colors hover:text-[#0f766e] hover:decoration-[#0d9488]"
              >
                get in touch
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Try these calculators */}
        <section className="mt-16">
          <h2
            className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-[#8b8580]"
            style={{ fontFamily: "var(--font-about-heading), Georgia, serif" }}
          >
            Try these calculators
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/basic", label: "Basic", desc: "Everyday math, history & memory" },
              { href: "/scientific", label: "Scientific", desc: "Trig, powers, logs & more" },
              { href: "/printing", label: "Printing", desc: "Tape-style for receipts" },
              { href: "/", label: "All calculators", desc: "Browse the full collection" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-2xl border border-[#e8e4de] bg-white/80 p-5 shadow-sm transition hover:border-[#0d9488]/40 hover:shadow-lg hover:bg-white"
              >
                <span className="text-base font-semibold text-[#1a1816] group-hover:text-[#0d9488]">
                  {item.label}
                </span>
                <span className="mt-1 text-[13px] text-[#5c5652]">{item.desc}</span>
                <span className="mt-3 text-[12px] font-medium text-[#0d9488] opacity-0 transition group-hover:opacity-100">
                  Open →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mt-16 rounded-3xl border border-[#e0d9cf] bg-gradient-to-br from-[#0d9488]/08 via-[#fdfaf4] to-[#f6f4f0] px-6 py-10 text-center sm:px-10 sm:py-12">
          <h2
            className="text-xl font-semibold text-[#1a1816] sm:text-2xl"
            style={{ fontFamily: "var(--font-about-heading), Georgia, serif" }}
          >
            Ready to calculate?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[15px] text-[#5c5652]">
            Pick a calculator above or browse the full collection. No account needed.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#0d9488] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(13,148,136,0.35)] transition hover:bg-[#0f766e]"
            >
              Browse all calculators
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#0d9488] underline decoration-[#0d9488]/40 underline-offset-2 hover:decoration-[#0d9488]"
            >
              Suggest a calculator
            </Link>
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
      </article>
    </div>
  );
}
