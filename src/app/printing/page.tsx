import type { Metadata } from "next";
import { PrintingCalculator } from "@/components/calculator/PrintingCalculator";
import { BottomNav } from "@/components/layout/BottomNav";
import { PrintingCalculatorJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PrintingContent } from "@/components/content/PrintingContent";

export const metadata: Metadata = {
  title: "Printing Calculator – Online Tape Calculator",
  description:
    "Use this free online printing calculator with a running tape. See every line, subtotal and copy the tape for bookkeeping or receipts.",
  alternates: {
    canonical: "/printing",
  },
  openGraph: {
    title: "Printing Calculator – Online Tape Calculator",
    description:
      "Desk-style printing calculator with a live tape you can copy and reuse.",
    url: "/printing",
    images: [
      {
        url: "/images/printing-calculator.avif",
        width: 1200,
        height: 630,
        alt: "Printing calculator with running tape on Calculators.digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Printing Calculator – Online Tape Calculator",
    description:
      "Free online printing calculator with a running tape for bookkeeping and receipts.",
    images: ["/images/printing-calculator.avif"],
  },
};

export default function PrintingPage() {
  return (
    <>
      <PrintingCalculatorJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://calculators.digital" },
          { name: "Printing Calculator", url: "https://calculators.digital/printing" },
        ]}
      />
      {/* Mobile */}
      <div className="calculator-page-bg flex min-h-[calc(100dvh-3.5rem-56px)] flex-col justify-center px-4 py-6 safe-area-padding sm:hidden">
        <h1 className="mb-4 text-center text-xl font-semibold text-stone-200">
          Printing Calculator
        </h1>
        <PrintingCalculator />
      </div>

      {/* Desktop / tablet */}
      <div className="hidden min-h-[calc(100dvh-4rem)] items-center justify-center bg-gradient-to-b from-[#050509] via-[#080712] to-[#0b0a0f] px-6 py-8 safe-area-padding sm:flex">
        <div className="relative mx-auto flex w-full max-w-6xl items-center gap-10 lg:gap-16">
          <div className="pointer-events-none absolute -left-24 top-[-6rem] h-56 w-56 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="pointer-events-none absolute right-[-8rem] bottom-[-6rem] h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />

          <section className="relative flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/80 px-3 py-1 text-[11px] font-medium text-stone-200 ring-1 ring-stone-700/80">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Everyday · Tape · Bookkeeping
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-50 lg:text-4xl">
              Printing calculator with live tape
            </h1>
            <p className="mt-2 max-w-md text-sm text-stone-400">
              Track every line of your calculation on a digital tape—perfect for cash‑ups, invoices and
              reconciliation work.
            </p>

            <div className="mt-6 space-y-3 text-xs text-stone-300">
              <div className="flex items-stretch gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/80 to-orange-500/80 text-[11px] font-semibold text-stone-950 shadow-[0_12px_30px_rgba(251,191,36,0.55)]">
                  ☰
                </div>
                <div className="flex-1 rounded-2xl bg-stone-950/80 p-3 ring-1 ring-stone-800/80">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-200">
                    Running tape
                  </p>
                  <p className="mt-1 text-[11px] text-stone-400">
                    Each operation is written to the tape with a subtotal, so you can check or copy the full
                    trail later.
                  </p>
                </div>
              </div>
              <div className="flex items-stretch gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/80 to-teal-500/80 text-[11px] font-semibold text-stone-950 shadow-[0_12px_30px_rgba(52,211,153,0.55)]">
                  ⌨
                </div>
                <div className="flex-1 rounded-2xl bg-stone-950/80 p-3 ring-1 ring-stone-800/80">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
                    Keyboard‑friendly
                  </p>
                  <p className="mt-1 text-[11px] text-stone-400">
                    Use digits, +, −, ×, ÷, Enter, Backspace, Del and Esc for fast data entry, just like a
                    desk calculator.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative flex-1">
            <PrintingCalculator />
          </section>
        </div>
      </div>

      <PrintingContent />

      <BottomNav />
    </>
  );
}