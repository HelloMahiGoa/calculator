import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Source_Sans_3 } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roadmap-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-roadmap-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roadmap",
  description: "What’s live, in progress, and planned for Calculators.digital—calculators, features, and improvements.",
  alternates: { canonical: "/roadmap" },
};

const launched = [
  { label: "Basic calculator", href: "/basic" },
  { label: "Scientific calculator", href: "/scientific" },
  { label: "Printing calculator", href: "/printing" },
  { label: "Graphing calculator", href: "/graphing" },
  { label: "Loan / EMI", href: "/loan-emi" },
  { label: "Mortgage payoff", href: "/mortgage-payoff" },
  { label: "Tax / VAT", href: "/tax-vat" },
  { label: "Discount", href: "/discount" },
  { label: "Compound interest", href: "/compound-interest" },
  { label: "Currency converter", href: "/currency" },
  { label: "BMI", href: "/bmi" },
  { label: "BMR", href: "/bmr" },
  { label: "Water intake", href: "/water-intake" },
  { label: "GPA", href: "/gpa" },
  { label: "Grade needed", href: "/grade-needed" },
  { label: "Tip & split", href: "/tip-split" },
  { label: "Date difference", href: "/date-diff" },
  { label: "Unit converters", href: "/unit-length" },
  { label: "Base converter", href: "/base-converter" },
  { label: "More calculators…", href: "/" },
];

const inProgress = [
  { label: "More unit converters", detail: "Area, volume, speed refinements" },
  { label: "Printing calculator UX", detail: "Clear tape, copy all" },
  { label: "Mobile keyboard shortcuts", detail: "Better keypad behaviour" },
];

const planned = [
  { label: "Customizable themes", detail: "Light / dark / high contrast" },
  { label: "Export history", detail: "Download or share tape" },
  { label: "Additional finance tools", detail: "Savings, ROI, break-even" },
  { label: "Accessibility improvements", detail: "Screen reader and focus polish" },
  { label: "Localization", detail: "Number formats and languages" },
];

export default function RoadmapPage() {
  return (
    <div
      className={`${fraunces.variable} ${sourceSans.variable} min-h-screen bg-[#f6f4f0] text-[#2c2925]`}
      style={{ fontFamily: "var(--font-roadmap-body), system-ui, sans-serif" }}
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
            Roadmap
          </span>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-5 pb-20 pt-12 sm:pt-16">
        <header className="mb-12">
          <h1
            className="text-[2rem] font-semibold tracking-tight text-[#1a1816] sm:text-[2.5rem]"
            style={{ fontFamily: "var(--font-roadmap-heading), Georgia, serif" }}
          >
            Roadmap
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#5c5652]">
            What’s live today, what we’re building next, and what’s on the list. Dates are rough—we ship when things are ready.
          </p>
        </header>

        <div className="space-y-12">
          {/* Launched */}
          <section>
            <h2
              className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#0d9488]"
              style={{ fontFamily: "var(--font-roadmap-heading), Georgia, serif" }}
            >
              <span className="h-2 w-2 rounded-full bg-[#0d9488]" aria-hidden />
              Launched
            </h2>
            <p className="mb-4 text-[13px] text-[#5c5652]">
              Live now. Click through to use.
            </p>
            <ul className="flex flex-wrap gap-2">
              {launched.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-block rounded-full border border-[#d4cfc9] bg-white/80 px-3 py-1.5 text-[13px] text-[#2c2925] transition hover:border-[#0d9488]/50 hover:bg-[#0d9488]/08 hover:text-[#0d9488]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* In progress */}
          <section>
            <h2
              className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#b45309]"
              style={{ fontFamily: "var(--font-roadmap-heading), Georgia, serif" }}
            >
              <span className="h-2 w-2 rounded-full bg-[#f59e0b]" aria-hidden />
              In progress
            </h2>
            <p className="mb-4 text-[13px] text-[#5c5652]">
              Currently being designed or built.
            </p>
            <ul className="space-y-3">
              {inProgress.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col gap-0.5 rounded-2xl border border-[#e8e4de] bg-white/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-[14px] font-medium text-[#1a1816]">{item.label}</span>
                  <span className="text-[12px] text-[#6b6560]">{item.detail}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Planned */}
          <section>
            <h2
              className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#6b6560]"
              style={{ fontFamily: "var(--font-roadmap-heading), Georgia, serif" }}
            >
              <span className="h-2 w-2 rounded-full bg-[#a39e98]" aria-hidden />
              Planned
            </h2>
            <p className="mb-4 text-[13px] text-[#5c5652]">
              On the list; order may change.
            </p>
            <ul className="space-y-3">
              {planned.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col gap-0.5 rounded-2xl border border-[#e8e4de] bg-white/40 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-[14px] font-medium text-[#2c2925]">{item.label}</span>
                  <span className="text-[12px] text-[#8b8580]">{item.detail}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="mt-16 border-t border-[#e8e4de] pt-8">
          <p className="text-[13px] text-[#5c5652]">
            Have a suggestion?{" "}
            <Link href="/contact" className="font-medium text-[#0d9488] underline decoration-[#0d9488]/40 underline-offset-2 hover:decoration-[#0d9488]">
              Get in touch
            </Link>
            .
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-[14px] font-medium text-[#6b6560] transition-colors hover:text-[#2c2925]"
          >
            ← Back to home
          </Link>
        </footer>
      </article>
    </div>
  );
}
