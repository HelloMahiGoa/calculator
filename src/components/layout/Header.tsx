"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/basic", label: "Basic" },
  // Future: { href: "/scientific", label: "Scientific" },
];

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 transition-opacity hover:opacity-90 active:opacity-80"
      aria-label="Calculators.digital – Home"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500" aria-hidden>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8M8 10h8M8 14h4M15 14h1" />
        </svg>
      </span>
      <span className="logo-text text-lg font-semibold tracking-tight text-stone-100 sm:text-xl">
        Calculators
        <span className="text-amber-400">.digital</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 border-b border-stone-800/80 bg-stone-950/80 backdrop-blur-xl safe-area-padding"
      role="banner"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Logo />

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 sm:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-stone-800/60 hover:text-stone-100 ${
                pathname === item.href ? "text-amber-300" : "text-stone-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-stone-400 hover:bg-stone-800/60 hover:text-stone-100 sm:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav drawer */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-stone-800/80 bg-stone-900/95 backdrop-blur-xl transition-[height,opacity] duration-200 ease-out sm:hidden ${
          menuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col py-2" aria-label="Mobile navigation">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-3 text-sm font-medium text-stone-300 hover:bg-stone-800/60 hover:text-stone-100"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
