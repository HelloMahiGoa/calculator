import Link from "next/link";
import type { Metadata } from "next";
import { BottomNav } from "@/components/layout/BottomNav";
import { HubCards } from "@/components/layout/HubCards";

export const metadata: Metadata = {
  title: "Free Online Calculators for Real Life | Calculators.digital",
  description:
    "Use free online calculators that feel like real devices. Basic, scientific and printing calculators with history tapes, memory keys and mobile-first design.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Calculators.digital – Free Online Calculators for Real Life",
    description:
      "A growing collection of basic, scientific and printing calculators with real-keypad design, history tapes and mobile-first layouts.",
    url: "/",
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
    title: "Calculators.digital – Free Online Calculators for Real Life",
    description:
      "Free online basic, scientific and printing calculators with real-device styling and keyboard support.",
    images: ["/images/basic-calculator.avif"],
  },
};

export default function HomeHubPage() {
  return (
    <>
      <div className="relative min-h-[calc(100dvh-3.5rem-56px)] overflow-hidden bg-gradient-to-b from-[#050509] via-[#080712] to-[#0b0a0f] px-4 py-6 safe-area-padding sm:min-h-[calc(100dvh-4rem)] sm:py-10">
        {/* Glow layers */}
        <div className="pointer-events-none absolute -left-32 top-[-10rem] h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="pointer-events-none absolute right-[-4rem] top-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-10 bottom-[-8rem] h-72 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-center">
          {/* Hero copy */}
          <section className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/60 px-3 py-1 text-[11px] font-medium text-stone-300 ring-1 ring-stone-700/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live basic calculator · history · memory · mobile-first
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-50 sm:text-4xl lg:text-5xl">
              Calculators that feel
              <span className="relative mx-2 inline-block">
                <span className="absolute -inset-1 rounded-full bg-amber-500/20 blur-lg" aria-hidden="true" />
                <span className="relative bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                  real
                </span>
              </span>
              in your hand.
            </h1>
            <p className="mt-3 max-w-xl text-sm text-stone-400 sm:text-base">
              A growing collection of calculators designed like premium devices, not boring forms.
              Tap like a real keypad, keep a history tape, and save your favourites for later.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/basic"
                className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-950 shadow-[0_18px_45px_rgba(251,191,36,0.45)] transition hover:bg-amber-400"
              >
                Open Basic Calculator
                <span aria-hidden>↗</span>
              </Link>
              <div className="flex items-center gap-2 text-[11px] text-stone-400">
                <span className="rounded-full bg-stone-900/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-stone-300">
                  No sign‑up
                </span>
                <span className="rounded-full bg-stone-900/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-stone-300">
                  Works offline after load
                </span>
              </div>
            </div>

            <dl className="mt-6 flex flex-wrap gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-stone-900/90 text-[11px] font-semibold text-amber-300 shadow-inner shadow-black/40 flex items-center justify-center">
                  1
                </span>
                <div>
                  <dt className="font-semibold text-stone-200">Live now</dt>
                  <dd>Basic calculator with history & memory.</dd>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-stone-900/90 text-[11px] font-semibold text-indigo-300 shadow-inner shadow-black/40 flex items-center justify-center">
                  20+
                </span>
                <div>
                  <dt className="font-semibold text-stone-200">Planned</dt>
                  <dd>Scientific, graphing, finance, health, and more.</dd>
                </div>
              </div>
            </dl>
          </section>

          {/* Hero preview card */}
          <section className="flex-1">
            <div className="mx-auto max-w-sm rounded-[2.25rem] border border-stone-800/80 bg-gradient-to-b from-stone-900/90 via-stone-950 to-black/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-out hover:-translate-y-1 hover:rotate-1">
              <div className="mb-3 flex items-center justify-between text-[10px] font-medium text-stone-400">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Basic · Live
                </span>
                <span className="rounded-full bg-stone-900/80 px-2 py-1 text-[10px] text-stone-300">
                  Tap to feel it
                </span>
              </div>
              <div className="calculator-shell mx-auto w-full max-w-[320px] select-none rounded-[2rem] p-4">
                <div className="calculator-screen mb-4 rounded-2xl border border-zinc-800/80 px-4 py-5">
                  <p className="min-h-[1.25rem]" aria-hidden="true" />
                  <p className="calculator-screen-text min-h-[3.5rem] truncate text-right font-mono text-4xl font-light tabular-nums text-white sm:min-h-[4rem] sm:text-5xl">
                    1 234.56
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs text-stone-300">
                  <span className="rounded-xl bg-stone-900/80 px-3 py-2 text-center">History</span>
                  <span className="rounded-xl bg-stone-900/80 px-3 py-2 text-center">Copy</span>
                  <span className="rounded-xl bg-stone-900/80 px-3 py-2 text-center">Share</span>
                  <span className="rounded-xl bg-stone-900/80 px-3 py-2 text-center">MC/MR</span>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-stone-400">
                Real-device styling, sticky bottom nav, and a history tape you can reuse.
              </p>
            </div>
          </section>
        </div>

        <div className="relative mt-10 space-y-10">
          {/* Highlights row */}
          <section className="mx-auto max-w-5xl">
            <div className="grid gap-4 text-xs text-stone-300 sm:grid-cols-3">
              <div className="flex items-start gap-3 rounded-2xl border border-stone-800/80 bg-stone-950/60 p-3">
                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-300">
                  ⌨
                </div>
                <div>
                  <p className="font-semibold text-stone-100">Made for keyboards & thumbs</p>
                  <p className="mt-1 text-[11px] text-stone-400">Type with keys or tap big thumb-friendly buttons.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-stone-800/80 bg-stone-950/60 p-3">
                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-stone-100">No sign‑up, no clutter</p>
                  <p className="mt-1 text-[11px] text-stone-400">Open, calculate, close. Your history stays on this device.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-stone-800/80 bg-stone-950/60 p-3">
                <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                  ⚡
                </div>
                <div>
                  <p className="font-semibold text-stone-100">Designed for phones first</p>
                  <p className="mt-1 text-[11px] text-stone-400">Safe-area padding, tap feedback and fast load times.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap strip */}
          <section className="mx-auto max-w-5xl rounded-3xl border border-stone-800/80 bg-gradient-to-r from-stone-950/80 via-stone-900/70 to-stone-950/80 px-4 py-3 text-xs text-stone-300 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-300">
                →
              </span>
              <div>
                <p className="font-semibold text-stone-100">On the roadmap</p>
                <p className="text-[11px] text-stone-400">
                  Up next: Scientific, Loan / EMI, BMI, Graphing, Currency and more.
                </p>
              </div>
            </div>
            <div className="mt-2 flex gap-1 text-[11px] text-stone-400 sm:mt-0">
              <span className="inline-flex items-center gap-1 rounded-full bg-stone-900/80 px-2 py-1">
                <span className="h-1 w-6 rounded-full bg-emerald-400/80" aria-hidden />
                Early
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-stone-900/80 px-2 py-1">
                <span className="h-1 w-6 rounded-full bg-amber-400/80" aria-hidden />
                Building
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-stone-900/80 px-2 py-1">
                <span className="h-1 w-6 rounded-full bg-sky-400/80" aria-hidden />
                Launch
              </span>
            </div>
          </section>

          <div className="relative">
            <HubCards />
          </div>

          {/* Simple footer / meta */}
          <footer className="mx-auto max-w-5xl border-t border-stone-900/80 pt-5 text-[11px] text-stone-500">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p>Calculators.digital · calculators that feel like real devices.</p>
              <div className="flex gap-3">
                <span className="cursor-default text-stone-600">Roadmap</span>
                <span className="cursor-default text-stone-600">Feedback</span>
                <span className="cursor-default text-stone-600">About</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

