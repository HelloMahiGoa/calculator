"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/basic", label: "Basic", icon: CalcIcon },
];

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href + "/"));
}

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden"
      aria-label="Bottom navigation"
    >
      <div className="pointer-events-none mx-auto flex max-w-md justify-center px-4 pb-3">
        <div className="pointer-events-auto flex w-full max-w-sm items-center justify-between rounded-3xl border border-amber-500/40 bg-gradient-to-r from-stone-950/95 via-stone-950/95 to-stone-900/95 px-3 py-1.5 shadow-[0_0_40px_rgba(251,191,36,0.3)] backdrop-blur-xl">
        {ITEMS.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-2xl px-2 py-1 text-[11px] font-semibold tracking-wide transition-all duration-200 ${
                active
                  ? "bg-amber-500 text-stone-950 shadow-[0_10px_30px_rgba(251,191,36,0.5)]"
                  : "text-stone-300 hover:bg-stone-800/60"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <item.icon active={active} />
              {item.label}
            </Link>
          );
        })}
        </div>
      </div>
      <div className="safe-area-padding" aria-hidden="true" />
    </nav>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={active ? "opacity-100" : "opacity-80"}
      aria-hidden="true"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 10v10h14V10" />
    </svg>
  );
}

function CalcIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={active ? "opacity-100" : "opacity-80"}
      aria-hidden="true"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M8 6h8M8 10h8" />
      <path d="M8 14h2M12 14h2M16 14h0" />
      <path d="M8 18h2M12 18h2" />
    </svg>
  );
}

