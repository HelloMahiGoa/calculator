"use client";

import { motion } from "framer-motion";
import { BasicCalculator } from "@/components/calculator/BasicCalculator";

export function HeroPreviewCard() {
  return (
    <section className="flex-1">
      <motion.div
        className="mx-auto max-w-sm rounded-[2.25rem] border border-stone-800/80 bg-gradient-to-b from-stone-900/90 via-stone-950 to-black/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mb-3 flex items-center justify-between text-[10px] font-medium text-stone-400">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Basic · Live
          </span>
          <span className="rounded-full bg-stone-900/80 px-2 py-1 text-[10px] text-stone-300">
            Tap to feel it
          </span>
        </div>
        <motion.div
          className="mx-auto w-full max-w-[min(100vw-2rem,380px)]"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
          <BasicCalculator />
        </motion.div>
        <p className="mt-3 text-[11px] text-stone-400">
          This is the live basic calculator—tap the keys, see your history tape and use memory just like a real desk
          device.
        </p>
      </motion.div>
    </section>
  );
}

