import Link from "next/link";
import type { Metadata } from "next";
import { HubCards } from "@/components/layout/HubCards";
import { HeroPreviewCard } from "@/components/layout/HeroPreviewCard";

export const metadata: Metadata = {
  title: "Free Online Calculators | No Sign-Up | Works offline | No Ads",
  description:
    "Use free online calculators that feel like real devices. Basic, scientific and printing calculators with history tapes, memory keys and mobile-first design.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Online Calculators | No Sign-Up | Works offline | No Ads",
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
    title: "Free Online Calculators | No Sign-Up | Works offline | No Ads",
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
            {/* Mobile hero */}
            <div className="sm:hidden">
              <div className="mx-auto max-w-md text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-stone-900/70 px-3 py-1 text-[11px] font-medium text-stone-300 ring-1 ring-stone-800/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live basic calculator · made for phones
                </div>
                <h1 className="mt-4 text-[26px] font-semibold leading-tight tracking-tight text-stone-50">
                  Calculators that feel{" "}
                  <span className="relative inline-block">
                    <span className="absolute -inset-1 rounded-full bg-amber-500/25 blur-lg" aria-hidden="true" />
                    <span className="relative bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                      real
                    </span>
                  </span>
                  <br />
                  in your hand.
                </h1>
                <p className="mt-3 text-[13px] text-stone-400">
                  Tap on big, thumb-friendly buttons, keep a running history tape, and save your favourite calculators
                  for later.
                </p>
                <div className="mt-5 space-y-3">
                  <Link
                    href="/basic"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-950 shadow-[0_18px_45px_rgba(251,191,36,0.45)] transition hover:bg-amber-400"
                  >
                    Open Basic Calculator
                    <span aria-hidden>↗</span>
                  </Link>
                  <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
                    <span className="rounded-full bg-stone-900/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-stone-300">
                      No sign‑up
                    </span>
                    <span className="rounded-full bg-stone-900/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-stone-300">
                      Works offline after load
                    </span>
                  </div>
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-3 text-[11px] text-stone-400">
                  <div className="flex flex-col items-center gap-1 rounded-2xl bg-stone-950/70 p-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-900 text-[11px] font-semibold text-amber-300 shadow-inner shadow-black/40">
                      1
                    </span>
                    <dt className="font-semibold text-stone-200">Live now</dt>
                    <dd className="text-[11px] text-stone-500">Basic calculator with history & memory.</dd>
                  </div>
                  <div className="flex flex-col items-center gap-1 rounded-2xl bg-stone-950/70 p-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-900 text-[11px] font-semibold text-indigo-300 shadow-inner shadow-black/40">
                      20+
                    </span>
                    <dt className="font-semibold text-stone-200">Planned</dt>
                    <dd className="text-[11px] text-stone-500">Scientific, graphing, finance, health & more.</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Desktop / tablet hero */}
            <div className="hidden sm:block">
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
                A growing collection of calculators designed like premium devices, not boring forms. Tap like a real
                keypad, keep a history tape, and save your favourites for later.
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
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-stone-900/90 text-[11px] font-semibold text-amber-300 shadow-inner shadow-black/40">
                    1
                  </span>
                  <div>
                    <dt className="font-semibold text-stone-200">Live now</dt>
                    <dd>Basic calculator with history & memory.</dd>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-stone-900/90 text-[11px] font-semibold text-indigo-300 shadow-inner shadow-black/40">
                    20+
                  </span>
                  <div>
                    <dt className="font-semibold text-stone-200">Planned</dt>
                    <dd>Scientific, graphing, finance, health, and more.</dd>
                  </div>
                </div>
              </dl>
            </div>
          </section>

          {/* Hero preview card */}
          <HeroPreviewCard />
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

          {/* Featured & all calculators */}
          <div className="relative">
            <section className="mx-auto max-w-5xl">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">
                    Featured calculators
                  </h2>
                  <p className="mt-1 text-[11px] text-stone-500">
                    Start with the most popular tools, then browse everything else below.
                  </p>
                </div>
                <p className="text-[11px] text-stone-500">
                  Finance, health, school, converters and more—no sign‑up, works in your browser.
                </p>
              </div>
            </section>

            <HubCards />
          </div>

          {/* SEO helper text */}
          <section className="mx-auto max-w-5xl space-y-3 rounded-3xl border border-stone-900/80 bg-stone-950/70 px-4 py-4 text-[11px] text-stone-400 sm:text-xs">
            <h2 className="text-sm font-semibold tracking-tight text-stone-100">
              What you can calculate with Calculators.digital
            </h2>
            <p>
              Use these free online calculators for everyday math, finances, health, school and quick unit conversions.
              Open the basic calculator for four‑function work with history and memory, or switch to specialised
              calculators for loans, BMI, GPA, dates, percentages and more as they launch.
            </p>
            <p>
              Every calculator is designed to feel like a real device, with big thumb‑friendly buttons, keyboard
              shortcuts on desktop and clear results you can reuse. Your history stays on this device—there is no
              account, no emails and no clutter.
            </p>
          </section>

          {/* FAQ section */}
          <section className="mx-auto max-w-5xl space-y-4 rounded-3xl border border-stone-900/80 bg-stone-950/70 px-4 py-4 text-[11px] text-stone-400 sm:text-xs">
            <h2 className="text-sm font-semibold tracking-tight text-stone-100">
              Frequently asked questions about these calculators
            </h2>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-stone-200">Are these calculators free to use?</p>
                <p className="mt-1">
                  Yes. All calculators on Calculators.digital are free to use in your browser, with no sign‑up or
                  subscription required.
                </p>
              </div>
              <div>
                <p className="font-semibold text-stone-200">Do you store my calculations or personal data?</p>
                <p className="mt-1">
                  No. Calculation history is kept locally in your browser so you can reuse it later, but it is not sent
                  to a server or tied to an account.
                </p>
              </div>
              <div>
                <p className="font-semibold text-stone-200">Can I use these calculators on my phone?</p>
                <p className="mt-1">
                  Yes. The layouts are designed for phones first, with safe‑area padding, large tap targets and offline
                  support after the first load.
                </p>
              </div>
              <div>
                <p className="font-semibold text-stone-200">What kinds of calculators are planned?</p>
                <p className="mt-1">
                  Alongside the basic, scientific and printing calculators, the roadmap includes finance (loan / EMI,
                  mortgage, discounts, tax), health (BMI, BMR, water), converters (length, area, currency) and student
                  tools (GPA, grade needed and more).
                </p>
              </div>
            </div>
          </section>

          {/* Footer is rendered globally in RootLayout */}
        </div>
      </div>
    </>
  );
}

