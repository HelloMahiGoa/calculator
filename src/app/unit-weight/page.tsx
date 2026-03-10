import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Weight Converter – Free Online Unit Weight Converter",
  description: "Convert between kilograms, grams, pounds, ounces and more with a simple online weight converter.",
  alternates: {
    canonical: "/unit-weight",
  },
};

export default function UnitWeightPage() {
  return (
    <ComingSoon
      title="Weight Converter"
      description="Convert between kilograms, grams, pounds, ounces and more in one place. A clean, mobile-first weight converter is on the way."
    />
  );
}

