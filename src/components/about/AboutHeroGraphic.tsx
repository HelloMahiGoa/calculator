"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const card = {
  hidden: { y: 24, opacity: 0, rotateX: 10 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 72,
      damping: 20,
      mass: 0.8,
    },
  },
};

const cardContent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.28,
    },
  },
};

const lineReveal = {
  hidden: { opacity: 0, y: 6, clipPath: "inset(100% 0 0 0)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0 0)",
    transition: {
      type: "spring" as const,
      stiffness: 140,
      damping: 26,
      delay: i * 0.06,
    },
  }),
};

const badgeReveal = {
  hidden: { opacity: 0, scale: 0.9, x: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 22,
    },
  },
};

const tagPill = {
  hidden: { opacity: 0, scale: 0.85, y: 4 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 180,
      damping: 20,
      delay: 0.1 + i * 0.05,
    },
  }),
};

export function AboutHeroGraphic() {
  return (
    <motion.div
      className="relative hidden min-h-[18rem] overflow-hidden rounded-3xl border border-[#e0d9cf] bg-[#faf8f5] shadow-[0_4px_24px_rgba(0,0,0,0.04)] lg:block"
      style={{ perspective: "900px" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      {/* Soft gradient base */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,#fde68a_0%,transparent_50%)] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_80%_80%,#a5b4fc_0%,transparent_55%)] opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#fdfaf4]/90 via-transparent to-[#fdfaf4]/90" />

      <motion.div
        className="absolute -left-4 top-8 h-20 w-20 rounded-2xl bg-[#f59e0b]/18"
        animate={{
          y: [0, -20, 6, -10, 0],
          x: [0, 4, -3, 8, 0],
          scale: [1, 1.06, 0.97, 1.03, 1],
          rotate: [0, 2, -1, 1, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
        }}
      />
      <motion.div
        className="absolute right-4 top-12 h-16 w-16 rounded-full bg-[#22c55e]/12"
        animate={{
          y: [0, 14, -6, 10, 0],
          x: [0, -8, 4, -6, 0],
          scale: [1, 0.94, 1.06, 0.98, 1],
          rotate: [0, -3, 1, -1, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
          delay: 0.6,
        }}
      />
      <motion.div
        className="absolute right-6 bottom-12 h-14 w-14 rounded-xl bg-[#0d9488]/12"
        animate={{
          y: [0, -8, 12, -4, 0],
          x: [0, 6, -4, 3, 0],
          opacity: [0.35, 0.6, 0.45, 0.55, 0.35],
          scale: [1, 1.1, 0.92, 1.02, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: 1.2,
        }}
      />

      {/* Main card */}
      <motion.div
        className="absolute bottom-5 left-5 right-5 rounded-2xl border border-slate-700/40 bg-slate-900/95 shadow-xl backdrop-blur-sm"
        style={{ transformOrigin: "center bottom", minHeight: "10.5rem" }}
        variants={card}
      >
        <motion.div
          className="flex min-h-[10.5rem] flex-col justify-between gap-3 p-4 text-[11px] text-slate-100"
          variants={cardContent}
        >
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <motion.span
                className="inline-block rounded-full bg-slate-700/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200"
                variants={badgeReveal}
              >
                Everyday
              </motion.span>
              <motion.span
                className="text-[10px] text-slate-400"
                variants={lineReveal}
                custom={0}
              >
                Basic · Scientific · Printing
              </motion.span>
            </div>
            <motion.p
              className="text-xs leading-relaxed text-slate-300"
              variants={lineReveal}
              custom={1}
            >
              Tap like a keypad, or keep both hands on your keyboard.
            </motion.p>
          </div>
          <div className="space-y-1.5">
            <span className="text-[9px] font-medium uppercase tracking-wider text-slate-500">
              History
            </span>
            <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-400">
              {["History tape", "Memory keys", "No sign‑up", "No ads"].map((label, i) => (
                <motion.span
                  key={label}
                  className="rounded-full bg-slate-800/90 px-2 py-1 text-slate-300"
                  variants={tagPill}
                  custom={i}
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
