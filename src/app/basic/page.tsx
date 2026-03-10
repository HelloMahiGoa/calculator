import type { Metadata } from "next";
import { BasicCalculator } from "@/components/calculator/BasicCalculator";
import { BottomNav } from "@/components/layout/BottomNav";
import { BasicCalculatorJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { CalculatorHistoryContent } from "@/components/content/BasicContents";

export const metadata: Metadata = {
  title: "Basic Calculator – Free Online Calculator for Everyday Math",
  description:
    "Use this free online basic calculator for quick everyday math. Add, subtract, multiply, divide and work with percentages. Includes history tape, memory keys, copy and share.",
  alternates: {
    canonical: "/basic",
  },
  openGraph: {
    title: "Basic Calculator – Free Online Calculator for Everyday Math",
    description:
      "A clean four-function calculator with history tape, memory keys, copy and share. Perfect for home, office and students.",
    url: "/basic",
    images: [
      {
        url: "/images/basic-calculator.avif",
        width: 1200,
        height: 630,
        alt: "Basic calculator interface on Calculators.digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Basic Calculator – Free Online Calculator for Everyday Math",
    description:
      "Free basic calculator with history, memory, copy and share. Designed for mobile and desktop.",
    images: ["/images/basic-calculator.avif"],
  },
};

const BASE = "https://calculators.digital";

export default function BasicPage() {
  return (
    <>
      <BasicCalculatorJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: BASE },
          { name: "Basic Calculator", url: `${BASE}/basic` },
        ]}
      />
      {/* Mobile layout: centered calculator */}
      <div className="calculator-page-bg flex min-h-[calc(100dvh-3.5rem-56px)] flex-col items-center justify-center px-4 py-6 safe-area-padding sm:hidden">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold text-stone-200">
            Basic Calculator
          </h1>
          <p className="mt-1 text-sm text-stone-500">
            For home, office &amp; students
          </p>
        </div>
        <BasicCalculator />
      </div>

      {/* Desktop / tablet layout: intro + calculator */}
      <div className="hidden min-h-[calc(100dvh-4rem)] items-center justify-center bg-gradient-to-b from-[#050509] via-[#080712] to-[#0b0a0f] px-6 py-8 safe-area-padding sm:flex">
        <div className="relative mx-auto flex w-full max-w-6xl items-center gap-10 lg:gap-16">
          <div className="pointer-events-none absolute -left-24 top-[-6rem] h-56 w-56 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="pointer-events-none absolute right-[-8rem] bottom-[-6rem] h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />

          <section className="relative flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/80 px-3 py-1 text-[11px] font-medium text-stone-200 ring-1 ring-stone-700/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Basic · Four-function · History &amp; memory
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-50 lg:text-4xl">
              Everyday basic calculator
            </h1>
            <p className="mt-2 max-w-md text-sm text-stone-400">
              A desk-style calculator for quick everyday math. Tap like a real keypad or keep both
              hands on your keyboard.
            </p>

            <div className="mt-6 space-y-3 text-xs text-stone-300">
              {/* History */}
              <div className="group flex items-stretch gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/70 to-orange-500/80 text-sm text-stone-950 shadow-[0_12px_30px_rgba(251,191,36,0.55)]">
                  ☰
                </div>
                <div className="relative flex-1 overflow-hidden rounded-2xl bg-stone-950/80 p-3 ring-1 ring-stone-800/80">
                  <div className="pointer-events-none absolute inset-y-0 right-[-40%] w-2/3 bg-gradient-to-l from-amber-500/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-200">
                    History tape
                  </p>
                  <p className="mt-1 text-[11px] text-stone-400">
                    Your last calculations stay in a local tape. Tap any row to reuse the result
                    instead of re‑typing it.
                  </p>
                </div>
              </div>

              {/* Memory */}
              <div className="group flex items-stretch gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/70 to-teal-500/80 text-[11px] font-semibold text-stone-950 shadow-[0_12px_30px_rgba(52,211,153,0.55)]">
                  M+
                </div>
                <div className="relative flex-1 overflow-hidden rounded-2xl bg-stone-950/80 p-3 ring-1 ring-stone-800/80">
                  <div className="pointer-events-none absolute inset-y-0 right-[-40%] w-2/3 bg-gradient-to-l from-emerald-500/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
                    Memory keys
                  </p>
                  <p className="mt-1 text-[11px] text-stone-400">
                    MC, MR, M+, M− work like a real desk calculator, with a tiny M indicator on the
                    screen whenever memory is in use.
                  </p>
                </div>
              </div>

              {/* Keyboard */}
              <div className="group flex items-stretch gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/70 to-indigo-500/80 text-sm text-stone-950 shadow-[0_12px_30px_rgba(56,189,248,0.55)]">
                  ⌨
                </div>
                <div className="relative flex-1 overflow-hidden rounded-2xl bg-stone-950/80 p-3 ring-1 ring-stone-800/80">
                  <div className="pointer-events-none absolute inset-y-0 right-[-40%] w-2/3 bg-gradient-to-l from-sky-500/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-200">
                    Keyboard shortcuts
                  </p>
                  <p className="mt-1 text-[11px] text-stone-400">
                    Use your number row plus <span className="font-mono">+ − * /</span>,{" "}
                    <span className="font-mono">Enter</span>, <span className="font-mono">Backspace</span>,{" "}
                    <span className="font-mono">Del</span> and <span className="font-mono">Esc</span> to drive
                    the calculator without leaving the keyboard.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative flex-1">
            <BasicCalculator />
          </section>
        </div>
      </div>

      {/* Shared content section for SEO */}
      <CalculatorHistoryContent />

      <BottomNav />
    </>
  );
}

