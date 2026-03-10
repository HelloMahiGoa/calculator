import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description: string;
  tag?: string;
  primaryHref?: string;
  primaryLabel?: string;
}

export function ComingSoon({
  title,
  description,
  tag = "Coming soon",
  primaryHref = "/basic",
  primaryLabel = "Open Basic Calculator",
}: ComingSoonProps) {
  return (
    <div className="calculator-page-bg flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center px-4 py-10 safe-area-padding sm:min-h-[calc(100dvh-4rem)]">
      <div className="relative w-full max-w-md text-center">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
        <span className="inline-flex items-center rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300 ring-1 ring-amber-500/40">
          {tag}
        </span>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-stone-50 sm:text-3xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-stone-400 sm:text-base">{description}</p>
        <div className="mt-6 flex justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-950 shadow-[0_18px_45px_rgba(251,191,36,0.45)] transition hover:bg-amber-400"
          >
            {primaryLabel}
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

