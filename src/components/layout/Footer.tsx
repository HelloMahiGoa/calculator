import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-6 max-w-5xl overflow-hidden rounded-3xl border border-stone-900/80 bg-gradient-to-br from-stone-950/95 via-stone-950/90 to-stone-900/90 px-4 py-5 text-[12px] text-stone-400">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2 sm:max-w-xs">
          <p className="inline-flex items-center gap-1 text-sm font-semibold text-stone-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Calculators.digital
          </p>
          <p className="text-[12px] text-stone-400">
            A growing collection of basic, scientific, printing and everyday calculators that feel like real devices—
            made for quick, no‑friction work on phone and desktop.
          </p>
        </div>
        <div className="grid flex-1 gap-4 text-[11px] sm:grid-cols-3 sm:text-[12px]">
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
              Everyday
            </p>
            <p className="text-stone-300">Basic, printing and tape‑style calculators for home and office.</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
              Money &amp; business
            </p>
            <p className="text-stone-300">
              Loan / EMI, mortgage payoff, discounts, tax / VAT, currency and everyday bill helpers.
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
              Health &amp; school
            </p>
            <p className="text-stone-300">
              BMI, BMR, water intake, GPA, grade needed plus date and time calculators for planning.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-stone-800/80 pt-3 text-[11px] text-stone-500">
        <p>
          © {year} Calculators.digital · No sign‑up · Works offline after load.
        </p>
        <div className="flex gap-3">
          <Link href="/" className="text-stone-400 hover:text-stone-200">
            Roadmap
          </Link>
          <Link href="/" className="text-stone-400 hover:text-stone-200">
            Feedback
          </Link>
          <Link href="/" className="text-stone-400 hover:text-stone-200">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}

