"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { label: "Listen", body: "Collect everyday problems and edge‑cases from real use." },
  { label: "Design", body: "Sketch layouts that feel like a physical device, not a form." },
  { label: "Refine", body: "Test with real numbers, smooth the rough edges, trim the noise." },
];

const stepVariants = {
  hidden: { opacity: 0, x: -16, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 20,
      mass: 0.6,
      delay: i * 0.14,
    },
  }),
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
      delay: i * 0.14,
    },
  }),
};

const lineVariants = {
  hidden: { scaleY: 0, opacity: 0.5 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 24,
      delay: 0.2,
    },
  },
};

export function AboutTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div
      ref={ref}
      className="relative rounded-3xl border border-[#e0d9cf] bg-[#fdfaf4] p-5"
    >
      <motion.div
        className="absolute inset-y-6 left-6 w-px origin-top bg-gradient-to-b from-[#0f172a] via-[#d4cfc9] to-transparent"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />
      {steps.map((step, index) => (
        <motion.div
          key={step.label}
          className="relative ml-10 mb-6 last:mb-0"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stepVariants}
          custom={index}
        >
          <motion.div
            className="absolute -left-10 top-1.5 h-2.5 w-2.5 rounded-full bg-[#0f172a] ring-4 ring-[#fdfaf4]"
            variants={dotVariants}
            custom={index}
          />
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b8580]"
            style={{ fontFamily: "var(--font-about-heading), Georgia, serif" }}
          >
            {step.label}
          </p>
          <p className="mt-1 text-[14px] leading-relaxed text-[#403a35]">{step.body}</p>
        </motion.div>
      ))}
    </div>
  );
}
