"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { motion, useScroll, useTransform } from "framer-motion";

type NavItem = {
  href: string;
  label: string;
  highlight?: "primary" | "ghost";
};

const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Link
        href="/"
        className="group flex items-center gap-2.5 transition-opacity hover:opacity-90 active:opacity-80"
        aria-label="Calculators.digital – Home"
      >
        <motion.span
          className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-amber-500/20 text-amber-300 shadow-[0_10px_26px_rgba(15,15,15,0.65)]"
          aria-hidden
          whileHover={{ rotate: 3, y: -1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.25),transparent_55%)] opacity-70" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10"
          >
            <rect x="4" y="2" width="16" height="20" rx="4" />
            <path d="M8 7h8M8 11h5" />
            <path d="M9 16h1.5M13.5 16H15" />
          </svg>
        </motion.span>
        <div className="flex flex-col leading-tight">
          <span className="logo-text text-[16px] font-semibold tracking-tight text-stone-50 sm:text-[17px]">
            <span className="font-[var(--font-sora)]">Calculators</span>
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
              .digital
            </span>
          </span>
          <span className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">
            Calculators that feel real
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function Header() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const shadowOpacity = useTransform(scrollY, [0, 80], [0.1, 0.45]);
  const boxShadow = useTransform(shadowOpacity, (o) => {
    const clamped = Math.max(0, Math.min(1, Number(o) || 0));
    return `0 18px 45px rgba(0,0,0,${clamped.toFixed(2)})`;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-xl safe-area-padding"
      style={{ boxShadow }}
      role="banner"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Main navigation">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            const isPrimary = item.highlight === "primary";

            if (isPrimary) {
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex items-center gap-1 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-all ${
                      isActive
                        ? "border-amber-400/80 bg-amber-500 text-stone-950 shadow-[0_10px_30px_rgba(251,191,36,0.35)]"
                        : "border-amber-400/40 bg-amber-500/10 text-amber-100 hover:bg-amber-500/80 hover:text-stone-950 hover:shadow-[0_10px_30px_rgba(251,191,36,0.35)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive ? "text-stone-50" : "text-stone-400 hover:text-stone-100"
                }`}
              >
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-2 bottom-0 h-[1px] rounded-full bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"
                  aria-hidden
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.18 }}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile nav using Headless UI Disclosure */}
        <Disclosure as="div" className="sm:hidden" defaultOpen={false}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-800/80 bg-stone-950/80 text-stone-300 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] transition-all duration-150 hover:border-amber-400/70 hover:text-amber-100"
                aria-label="Toggle menu"
              >
                {open ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                    className="transition-transform duration-150 rotate-0"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                    className="transition-transform duration-150"
                  >
                    <path d="M4 7h16M7 12h13M10 17h10" />
                  </svg>
                )}
              </Disclosure.Button>

              <Disclosure.Panel
                className="absolute inset-x-0 top-full origin-top border-t border-stone-800/80 bg-gradient-to-b from-stone-950/95 via-stone-950/90 to-stone-900/95 backdrop-blur-xl"
              >
                <nav
                  className="flex flex-col gap-1 px-3 py-3"
                  aria-label="Mobile navigation"
                >
                  {NAV_LINKS.map((item) => {
                    const isActive = pathname === item.href;
                    const isPrimary = item.highlight === "primary";

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-amber-500/15 text-amber-100"
                            : "text-stone-200 hover:bg-stone-800/70 hover:text-stone-50"
                        }`}
                      >
                        <span>
                          {item.label}
                          {isPrimary && (
                            <span className="ml-1 rounded-full bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200">
                              Live
                            </span>
                          )}
                        </span>
                        <span className="text-[11px] text-stone-500">Tap to open</span>
                      </Link>
                    );
                  })}
                </nav>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </motion.header>
  );
}
