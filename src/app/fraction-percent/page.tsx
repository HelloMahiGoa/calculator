import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Fraction & Percentage Calculator – Free Online Converter",
  description: "Convert between fractions, decimals and percentages with a clear, step-by-step online calculator.",
  alternates: {
    canonical: "/fraction-percent",
  },
};

export default function FractionPercentPage() {
  return (
    <ComingSoon
      title="Fraction & Percentage Calculator"
      description="Convert fractions to decimals and percentages (and back again) for homework, exams and everyday use. A guided fraction & percentage calculator is on the roadmap."
    />
  );
}

