"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { loadFavorites, saveFavorites, toggleFavorite, type CalculatorId } from "@/lib/favorites";

type CategoryId =
  | "everyday"
  | "math-science"
  | "finance"
  | "life-utility"
  | "health"
  | "school"
  | "dev";

type CalcCard = {
  id: CalculatorId;
  title: string;
  description: string;
  href: string;
  badge?: string;
  category: CategoryId;
};

const CARDS: CalcCard[] = [
  {
    id: "basic",
    title: "Basic Calculator",
    description: "Home, office & students. Real keypad + history + memory.",
    href: "/basic",
    badge: "Live",
    category: "everyday",
  },
  {
    id: "scientific",
    title: "Scientific Calculator",
    description: "Trigonometry, powers, roots and more.",
    href: "/scientific",
    badge: "Planned",
    category: "math-science",
  },
  {
    id: "graphing",
    title: "Graphing Calculator",
    description: "Plot functions and explore curves visually.",
    href: "/graphing",
    badge: "Planned",
    category: "math-science",
  },
  {
    id: "financial",
    title: "Financial Calculator",
    description: "Loans, EMIs, interest, savings and cashflows.",
    href: "/financial",
    badge: "Planned",
    category: "finance",
  },
  {
    id: "printing",
    title: "Printing Calculator",
    description: "Calculator tape style for bookkeeping and receipts.",
    href: "/printing",
    badge: "Planned",
    category: "everyday",
  },
  {
    id: "programmable",
    title: "Programmable Calculator",
    description: "Reusable programs and advanced operations.",
    href: "/programmable",
    badge: "Planned",
    category: "math-science",
  },
  // Converters & math helpers
  {
    id: "unit-length",
    title: "Length Converter",
    description: "Meters, feet, inches, kilometers and more.",
    href: "/unit-length",
    badge: "Planned",
    category: "math-science",
  },
  {
    id: "unit-weight",
    title: "Weight Converter",
    description: "Kilograms, pounds, ounces and more.",
    href: "/unit-weight",
    badge: "Planned",
    category: "math-science",
  },
  {
    id: "unit-temperature",
    title: "Temperature Converter",
    description: "Celsius, Fahrenheit and Kelvin.",
    href: "/unit-temperature",
    badge: "Planned",
    category: "math-science",
  },
  {
    id: "unit-area",
    title: "Area Converter",
    description: "Square meters, feet, acres and more.",
    href: "/unit-area",
    badge: "Planned",
    category: "math-science",
  },
  {
    id: "unit-volume",
    title: "Volume Converter",
    description: "Liters, milliliters, cups, gallons and more.",
    href: "/unit-volume",
    badge: "Planned",
    category: "math-science",
  },
  {
    id: "unit-speed",
    title: "Speed Converter",
    description: "km/h, mph, m/s and more.",
    href: "/unit-speed",
    badge: "Planned",
    category: "math-science",
  },
  {
    id: "fraction-percent",
    title: "Fraction & Percentage",
    description: "Convert fractions, decimals and percentages.",
    href: "/fraction-percent",
    badge: "Planned",
    category: "math-science",
  },
  {
    id: "matrix",
    title: "Matrix Calculator",
    description: "Determinant, inverse and basic matrix operations.",
    href: "/matrix",
    badge: "Planned",
    category: "math-science",
  },
  // Finance & business
  {
    id: "loan-emi",
    title: "Loan / EMI",
    description: "Monthly payments, interest and payoff schedule.",
    href: "/loan-emi",
    badge: "Planned",
    category: "finance",
  },
  {
    id: "compound-interest",
    title: "Compound Interest",
    description: "See how your savings grow over time.",
    href: "/compound-interest",
    badge: "Planned",
    category: "finance",
  },
  {
    id: "mortgage-payoff",
    title: "Mortgage Payoff",
    description: "Estimate payoff dates and extra payment impact.",
    href: "/mortgage-payoff",
    badge: "Planned",
    category: "finance",
  },
  {
    id: "currency",
    title: "Currency Converter",
    description: "Convert between currencies with live rates.",
    href: "/currency",
    badge: "Planned",
    category: "finance",
  },
  {
    id: "tip-split",
    title: "Tip & Split Bill",
    description: "Tip amount and per-person total.",
    href: "/tip-split",
    badge: "Planned",
    category: "life-utility",
  },
  {
    id: "discount",
    title: "Discount Calculator",
    description: "Sale price and savings for any discount.",
    href: "/discount",
    badge: "Planned",
    category: "finance",
  },
  {
    id: "tax-vat",
    title: "Tax / VAT",
    description: "Add or remove tax/VAT from a price.",
    href: "/tax-vat",
    badge: "Planned",
    category: "finance",
  },
  // Life & utility
  {
    id: "age",
    title: "Age Calculator",
    description: "Exact age in years, months and days.",
    href: "/age",
    badge: "Planned",
    category: "life-utility",
  },
  {
    id: "date-diff",
    title: "Date Difference",
    description: "Days between two dates.",
    href: "/date-diff",
    badge: "Planned",
    category: "life-utility",
  },
  {
    id: "time-duration",
    title: "Time Duration",
    description: "Add or subtract hours and minutes.",
    href: "/time-duration",
    badge: "Planned",
    category: "life-utility",
  },
  {
    id: "fuel-cost",
    title: "Fuel Cost & Mileage",
    description: "Trip fuel cost and mileage estimates.",
    href: "/fuel-cost",
    badge: "Planned",
    category: "life-utility",
  },
  {
    id: "recipe-scaler",
    title: "Recipe Scaler",
    description: "Scale ingredient quantities up or down.",
    href: "/recipe-scaler",
    badge: "Planned",
    category: "life-utility",
  },
  // Health
  {
    id: "bmi",
    title: "BMI Calculator",
    description: "Body Mass Index with category ranges.",
    href: "/bmi",
    badge: "Planned",
    category: "health",
  },
  {
    id: "bmr",
    title: "BMR & Calories",
    description: "Basal metabolic rate and daily calories.",
    href: "/bmr",
    badge: "Planned",
    category: "health",
  },
  {
    id: "heart-rate",
    title: "Target Heart Rate",
    description: "Heart rate zones by age.",
    href: "/heart-rate",
    badge: "Planned",
    category: "health",
  },
  {
    id: "water-intake",
    title: "Water Intake",
    description: "Suggested daily water goal.",
    href: "/water-intake",
    badge: "Planned",
    category: "health",
  },
  // School
  {
    id: "gpa",
    title: "GPA Calculator",
    description: "Grade Point Average for courses and credits.",
    href: "/gpa",
    badge: "Planned",
    category: "school",
  },
  {
    id: "grade-needed",
    title: "Grade Needed",
    description: "Score required on the final to hit a target.",
    href: "/grade-needed",
    badge: "Planned",
    category: "school",
  },
  {
    id: "marks-percent",
    title: "Marks & Percentage",
    description: "Convert marks to percentages and vice versa.",
    href: "/marks-percent",
    badge: "Planned",
    category: "school",
  },
  // Dev / tech
  {
    id: "base-converter",
    title: "Base Converter",
    description: "Binary, decimal, hex and more.",
    href: "/base-converter",
    badge: "Planned",
    category: "dev",
  },
  {
    id: "ip-subnet",
    title: "IP Subnet Calculator",
    description: "CIDR ranges, masks and host counts.",
    href: "/ip-subnet",
    badge: "Planned",
    category: "dev",
  },
  {
    id: "unix-time",
    title: "Unix Time Converter",
    description: "Unix timestamp to date and back.",
    href: "/unix-time",
    badge: "Planned",
    category: "dev",
  },
];

const CATEGORY_META: Record<
  CategoryId,
  { label: string; accent: string; icon: string; description: string }
> = {
  everyday: {
    label: "Everyday",
    accent: "from-amber-500/20 to-amber-400/0",
    icon: "⌚",
    description: "Quick daily math and tape-style flows.",
  },
  "math-science": {
    label: "Math & Science",
    accent: "from-sky-500/20 to-sky-400/0",
    icon: "∑",
    description: "From scientific keys to graphing and matrices.",
  },
  finance: {
    label: "Money & Business",
    accent: "from-emerald-500/20 to-emerald-400/0",
    icon: "₹",
    description: "Loans, EMIs, interest, discounts and tax.",
  },
  "life-utility": {
    label: "Life & Utility",
    accent: "from-fuchsia-500/20 to-fuchsia-400/0",
    icon: "📅",
    description: "Dates, time, fuel, recipes and more.",
  },
  health: {
    label: "Health",
    accent: "from-rose-500/20 to-rose-400/0",
    icon: "♥",
    description: "BMI, calories, heart rate and hydration.",
  },
  school: {
    label: "School & Exams",
    accent: "from-indigo-500/20 to-indigo-400/0",
    icon: "📚",
    description: "Grades, GPA and exam targets.",
  },
  dev: {
    label: "For Developers",
    accent: "from-purple-500/20 to-purple-400/0",
    icon: "{ }",
    description: "Bases, IP ranges and timestamps.",
  },
};

export function HubCards() {
  const [favorites, setFavorites] = useState<CalculatorId[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setFavorites(loadFavorites());
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CARDS;
    return CARDS.filter(
      (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  }, [query]);

  const favSet = useMemo(() => new Set(favorites), [favorites]);

  const cardsByCategory = useMemo(() => {
    const groups: Partial<Record<CategoryId, CalcCard[]>> = {};
    for (const card of filtered) {
      if (!groups[card.category]) groups[card.category] = [];
      groups[card.category]!.push(card);
    }
    return groups;
  }, [filtered]);

  return (
    <div className="mx-auto max-w-5xl">
      {/* Featured strip */}
      <div className="mb-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-stone-900/80 px-3 py-1 text-[11px] font-medium text-stone-300">
          Featured
        </span>
        <Link
          href="/basic"
          className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-3 py-1 text-[11px] font-medium text-amber-200 ring-1 ring-amber-400/60"
        >
          <span aria-hidden>⭐</span>
          Basic
        </Link>
        <Link
          href="/loan-emi"
          className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200 ring-1 ring-emerald-500/40"
        >
          <span aria-hidden>₹</span>
          Loan / EMI
        </Link>
        <Link
          href="/bmi"
          className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-3 py-1 text-[11px] font-medium text-rose-200 ring-1 ring-rose-500/40"
        >
          <span aria-hidden>♥</span>
          BMI
        </Link>
        <Link
          href="/unit-length"
          className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-200 ring-1 ring-sky-500/40"
        >
          <span aria-hidden>↔</span>
          Length
        </Link>
      </div>

      <div className="rounded-2xl border border-stone-800 bg-stone-950/40 p-3">
        <input
          className="w-full rounded-xl border border-stone-800 bg-stone-950 px-4 py-3 text-sm text-stone-100 placeholder:text-stone-600"
          placeholder="Search calculators…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="mt-6 space-y-6">
        {(Object.keys(CATEGORY_META) as CategoryId[]).map((catId) => {
          const cards = cardsByCategory[catId];
          if (!cards || cards.length === 0) return null;
          const meta = CATEGORY_META[catId];
          return (
            <section key={catId} className="group rounded-3xl border border-stone-900/80 bg-gradient-to-br from-stone-950/80 via-stone-950/60 to-stone-900/60 p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-2xl bg-stone-900/90 text-sm">
                    <span aria-hidden>{meta.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-stone-100">{meta.label}</h2>
                    <p className="text-[11px] text-stone-500">{meta.description}</p>
                  </div>
                </div>
                <div className="hidden text-[11px] text-stone-500 sm:block">
                  {cards.length} calculator{cards.length > 1 ? "s" : ""}
                </div>
              </div>

              <div className="relative mt-2 grid gap-3 sm:grid-cols-2">
                <div className={`pointer-events-none absolute inset-x-10 bottom-0 top-2 -z-10 bg-gradient-to-b ${meta.accent} blur-3xl`} />
                {cards.map((c) => {
                  const fav = favSet.has(c.id);
                  return (
                    <div
                      key={c.id}
                      className="group/card relative overflow-hidden rounded-3xl border border-stone-800/80 bg-stone-950/60 p-4 shadow-lg shadow-black/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-semibold text-stone-50">{c.title}</h3>
                            {c.badge ? (
                              <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-300">
                                {c.badge}
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-1 text-xs text-stone-400">{c.description}</p>
                        </div>
                        <button
                          type="button"
                          className={`flex h-8 w-8 items-center justify-center rounded-2xl border text-xs transition ${
                            fav
                              ? "border-amber-500/60 bg-amber-500/15 text-amber-200"
                              : "border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-600"
                          }`}
                          aria-label={fav ? "Remove from favorites" : "Add to favorites"}
                          onClick={() => setFavorites((prev) => toggleFavorite(c.id, prev))}
                        >
                          {fav ? "★" : "☆"}
                        </button>
                      </div>

                      <Link
                        href={c.href}
                        className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-stone-100 px-3 py-2 text-[11px] font-semibold text-stone-900 transition-colors hover:bg-white"
                      >
                        Open
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

