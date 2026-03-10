import type { Metadata } from "next";
import { ScientificCalculator } from "@/components/calculator/ScientificCalculator";
import { ScientificCalculatorJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ScientificContent } from "@/components/content/ScientificContent";

export const metadata: Metadata = {
  title: "Scientific Calculator – Free Online Scientific Calculator",
  description:
    "Use this free online scientific calculator for trigonometry, powers, roots and logarithms. Switch between degrees and radians, use memory keys, and copy or share results.",
  alternates: {
    canonical: "/scientific",
  },
  openGraph: {
    title: "Scientific Calculator – Free Online Scientific Calculator",
    description:
      "Trigonometry, powers, roots and logarithms in a clean scientific calculator with history and memory keys.",
    url: "/scientific",
    images: [
      {
        url: "/images/scientific-calculator.avif",
        width: 1200,
        height: 630,
        alt: "Scientific calculator interface on Calculators.digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Calculator – Free Online Scientific Calculator",
    description:
      "Free online scientific calculator with trig, powers, roots and logs. Designed for mobile and desktop.",
    images: ["/images/scientific-calculator.avif"],
  },
};

export default function ScientificPage() {
  return (
    <>
      <ScientificCalculatorJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://calculators.digital" },
          { name: "Scientific Calculator", url: "https://calculators.digital/scientific" },
        ]}
      />
      {/* Mobile layout */}
      <div className="calculator-page-bg flex min-h-[calc(100dvh-3.5rem-56px)] flex-col items-center justify-center px-4 py-6 safe-area-padding sm:hidden">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold text-stone-200">
            Scientific Calculator
          </h1>
          <p className="mt-1 text-sm text-stone-500">
            Trig, powers, roots &amp; logs
          </p>
        </div>
        <ScientificCalculator />
      </div>

      {/* Desktop / tablet layout */}
      <div className="hidden min-h-[calc(100dvh-4rem)] items-center justify-center bg-gradient-to-b from-[#050509] via-[#050417] to-[#020208] px-6 py-8 safe-area-padding sm:flex">
        <div className="relative mx-auto flex w-full max-w-6xl items-center gap-10 lg:gap-16">
          <div className="pointer-events-none absolute -left-28 top-[-7rem] h-60 w-60 rounded-full bg-sky-500/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[-6rem] bottom-[-6rem] h-80 w-80 rounded-full bg-emerald-500/25 blur-3xl" />

          <section className="relative flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/80 px-3 py-1 text-[11px] font-medium text-stone-200 ring-1 ring-stone-700/80">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Scientific · Trig · Powers · Logs
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-50 lg:text-4xl">
              Scientific calculator for real work
            </h1>
            <p className="mt-2 max-w-md text-sm text-stone-400">
              Evaluate trigonometric functions, powers, roots and logarithms without leaving your
              browser. Switch between degrees and radians in a single tap.
            </p>

            <div className="mt-6 space-y-3 text-xs text-stone-300">
              <div className="group flex items-stretch gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/80 to-indigo-500/80 text-xs font-semibold text-stone-950 shadow-[0_12px_30px_rgba(56,189,248,0.55)]">
                  sin
                </div>
                <div className="relative flex-1 overflow-hidden rounded-2xl bg-stone-950/80 p-3 ring-1 ring-stone-800/80">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-200">
                    Trigonometry
                  </p>
                  <p className="mt-1 text-[11px] text-stone-400">
                    Compute <span className="font-mono">sin</span>, <span className="font-mono">cos</span> and{" "}
                    <span className="font-mono">tan</span> in degrees or radians for physics and
                    engineering problems.
                  </p>
                </div>
              </div>
              <div className="group flex items-stretch gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/80 to-teal-500/80 text-xs font-semibold text-stone-950 shadow-[0_12px_30px_rgba(52,211,153,0.55)]">
                  x²
                </div>
                <div className="relative flex-1 overflow-hidden rounded-2xl bg-stone-950/80 p-3 ring-1 ring-stone-800/80">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
                    Powers &amp; roots
                  </p>
                  <p className="mt-1 text-[11px] text-stone-400">
                    Square, cube, square root, cube root and reciprocal without writing out each
                    step by hand.
                  </p>
                </div>
              </div>
              <div className="group flex items-stretch gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/80 to-orange-500/80 text-xs font-semibold text-stone-950 shadow-[0_12px_30px_rgba(251,191,36,0.55)]">
                  log
                </div>
                <div className="relative flex-1 overflow-hidden rounded-2xl bg-stone-950/80 p-3 ring-1 ring-stone-800/80">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-200">
                    Logs &amp; constants
                  </p>
                  <p className="mt-1 text-[11px] text-stone-400">
                    Base‑10 log, natural log, <span className="font-mono">π</span> and{" "}
                    <span className="font-mono">e</span> built in for higher‑level maths.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative flex-1">
            <ScientificCalculator />
          </section>
        </div>
      </div>

      <ScientificContent />
    </>
  );
}


