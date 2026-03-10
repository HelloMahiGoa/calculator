import Link from "next/link";

const LEGAL_LINKS = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-6 max-w-5xl overflow-hidden rounded-3xl border border-stone-900/80 bg-gradient-to-br from-stone-950/95 via-stone-950/90 to-stone-900/90 px-4 py-5 text-[12px] text-stone-400">
      <div className="space-y-2 sm:max-w-xs">
        <p className="inline-flex items-center gap-1 text-sm font-semibold text-stone-100">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Calculators.digital
        </p>
        <p className="text-[12px] text-stone-400">
          A growing collection of calculators that feel like real devices—made for quick, no‑friction work on phone and desktop.
        </p>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-stone-800/80 pt-3 text-[11px] text-stone-500">
        <p>
          © {year} Calculators.digital · No sign‑up · Works offline after load.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {LEGAL_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="text-stone-400 hover:text-stone-200 transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

