import type { Metadata } from "next";
import { GraphingCalculator } from "@/components/calculator/GraphingCalculator";
import { GraphingContent } from "@/components/content/GraphingContent";
import { CalculatorHistoryContent } from "@/components/content/BasicContents";

export const metadata: Metadata = {
  title: "Graphing Calculator – Plot Functions & Curves Online",
  description:
    "Use this free online graphing calculator to plot functions of x, explore curves, zoom and pan around the coordinate plane.",
  alternates: {
    canonical: "/graphing",
  },
  openGraph: {
    title: "Graphing Calculator – Plot Functions & Curves Online",
    description:
      "Plot functions, explore curves and see how equations behave visually with a clean, mobile-first graphing calculator.",
    url: "/graphing",
  },
};

export default function GraphingPage() {
  return (
    <>
      {/* Mobile layout: centered graphing calculator */}
      <div className="calculator-page-bg flex min-h-[calc(100dvh-3.5rem-56px)] flex-col items-center justify-center px-4 py-6 safe-area-padding sm:hidden">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold text-stone-200">
            Graphing Calculator
          </h1>
          <p className="mt-1 text-sm text-stone-500">
            Plot functions of x and explore curves
          </p>
        </div>
        <GraphingCalculator />
      </div>

      {/* Desktop / tablet layout: intro + graphing calculator */}
      <div className="hidden min-h-[calc(100dvh-4rem)] items-center justify-center bg-gradient-to-b from-[#050509] via-[#050417] to-[#020208] px-6 py-8 safe-area-padding sm:flex">
        <div className="relative mx-auto flex w-full max-w-6xl items-start gap-10 lg:gap-16">
          <div className="pointer-events-none absolute -left-28 top-[-7rem] h-60 w-60 rounded-full bg-sky-500/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[-6rem] bottom-[-6rem] h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />

          <section className="relative flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/80 px-3 py-1 text-[11px] font-medium text-stone-200 ring-1 ring-stone-700/80">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Graphing · Functions of x
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-50 lg:text-4xl">
              Graphing calculator for visual maths
            </h1>
            <p className="mt-2 max-w-md text-sm text-stone-400">
              Plot functions of <span className="font-mono text-stone-100">x</span>, explore how curves move and zoom
              around the coordinate plane. Perfect for algebra, trigonometry and quick visual checks.
            </p>

            <div className="mt-6 space-y-3 text-xs text-stone-300">
              {/* Multiple functions */}
              <div className="group flex items-stretch gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/80 to-indigo-500/80 text-xs font-semibold text-stone-950 shadow-[0_12px_30px_rgba(56,189,248,0.55)]">
                  f(x)
                </div>
                <div className="relative flex-1 overflow-hidden rounded-2xl bg-stone-950/80 p-3 ring-1 ring-stone-800/80">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-200">
                    Functions of x
                  </p>
                  <p className="mt-1 text-[11px] text-stone-400">
                    Enter expressions in <span className="font-mono">x</span> using +, −, ×, ÷, powers (^), square roots,
                    reciprocals, trig functions and logs to see how they behave on a live graph.
                  </p>
                </div>
              </div>

              {/* Zoom & pan */}
              <div className="group flex items-stretch gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/80 to-teal-500/80 text-xs font-semibold text-stone-950 shadow-[0_12px_30px_rgba(52,211,153,0.55)]">
                  ⤢
                </div>
                <div className="relative flex-1 overflow-hidden rounded-2xl bg-stone-950/80 p-3 ring-1 ring-stone-800/80">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
                    Zoom &amp; pan
                  </p>
                  <p className="mt-1 text-[11px] text-stone-400">
                    Scroll to zoom in and out around your cursor and drag to pan the view, so you can focus on
                    intersections, turning points or any part of the curve.
                  </p>
                </div>
              </div>

              {/* Visual intuition */}
              <div className="group flex items-stretch gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/80 to-orange-500/80 text-xs font-semibold text-stone-950 shadow-[0_12px_30px_rgba(251,191,36,0.55)]">
                  📈
                </div>
                <div className="relative flex-1 overflow-hidden rounded-2xl bg-stone-950/80 p-3 ring-1 ring-stone-800/80">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-200">
                    Visual intuition
                  </p>
                  <p className="mt-1 text-[11px] text-stone-400">
                    See how algebraic changes affect the shape of a curve, spot symmetry and quickly check answers
                    for homework, exams or day‑to‑day maths.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative flex-1">
            <GraphingCalculator />
          </section>
        </div>
      </div>

      {/* SEO content sections for graphing */}
      <GraphingContent />

      {/* Shared calculator history sections (invention, timeline, milestones) */}
      <CalculatorHistoryContent />
    </>
  );
}

