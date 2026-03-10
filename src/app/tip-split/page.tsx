import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Tip & Split Bill Calculator – Per-Person Total & Tip",
  description: "Work out tip amounts and per-person totals quickly with an online tip & split bill calculator.",
  alternates: {
    canonical: "/tip-split",
  },
};

export default function TipSplitPage() {
  return (
    <ComingSoon
      title="Tip & Split Bill Calculator"
      description="Calculate fair tips and per-person totals at restaurants in a couple of taps. A simple tip & split bill calculator is on the roadmap."
    />
  );
}

