"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const orb1 = {
  y: [0, -20, 14, -8, 0],
  x: [0, 10, -6, 4, 0],
  scale: [1, 1.2, 0.85, 1.1, 1],
  opacity: [0.25, 0.5, 0.3, 0.45, 0.25],
  transition: {
    duration: 13,
    repeat: Infinity,
    ease: [0.4, 0, 0.6, 1] as const,
  },
};

const orb2 = {
  y: [0, 16, -12, 10, 0],
  x: [0, -8, 12, -4, 0],
  scale: [1, 0.9, 1.25, 0.95, 1],
  opacity: [0.2, 0.45, 0.25, 0.4, 0.2],
  transition: {
    duration: 15,
    repeat: Infinity,
    ease: [0.45, 0, 0.55, 1] as const,
    delay: 1.5,
  },
};

const orb3 = {
  y: [0, -8, 12, -4, 0],
  scale: [1, 1.15, 0.9, 1.05, 1],
  opacity: [0.15, 0.35, 0.2, 0.3, 0.15],
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: [0.5, 0, 0.5, 1] as const,
    delay: 0.8,
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 22,
      delay: 0.2 + i * 0.08,
    },
  }),
};

const rows = [
  { label: "Offline after first load", value: "Ready", highlight: true },
  { label: "Keyboard‑friendly controls", value: "Tab, Enter, Esc", highlight: false },
  { label: "Accessible contrast", value: "Checked for dark mode", highlight: false },
];

export function AboutQuietPanel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative order-last h-64 overflow-hidden rounded-3xl border border-[#e0d9cf] bg-[#14121f] px-5 py-4 text-[11px] text-slate-100 lg:order-first"
      initial={{ opacity: 0.9 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute -top-6 right-4 h-24 w-24 rounded-full bg-[#4f46e5]/30 blur-xl"
        animate={orb1}
      />
      <motion.div
        className="absolute bottom-0 left-[-20%] h-40 w-40 rounded-full bg-[#facc15]/30 blur-2xl"
        animate={orb2}
      />
      <motion.div
        className="absolute right-1/3 top-1/2 h-20 w-20 rounded-full bg-[#0d9488]/20 blur-xl"
        animate={orb3}
      />

      <div className="relative flex h-full flex-col justify-between">
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 6 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 120, damping: 24, delay: 0.1 }}
        >
          <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-200">
            Quiet by design
          </span>
          <span className="text-[10px] text-slate-400">No accounts · No feeds</span>
        </motion.div>

        <div className="mt-4 space-y-2">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              className="flex items-center justify-between rounded-xl bg-slate-900/60 px-3 py-2"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={rowVariants}
              custom={i}
            >
              <span className="text-[11px] text-slate-200">{row.label}</span>
              <span
                className={`text-[10px] ${row.highlight ? "text-emerald-300" : "text-slate-400"}`}
              >
                {row.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
