import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Area Converter – Free Online Area Unit Converter",
  description: "Convert between square meters, square feet, acres, hectares and more with an easy online area converter.",
  alternates: {
    canonical: "/unit-area",
  },
};

export default function UnitAreaPage() {
  return (
    <ComingSoon
      title="Area Converter"
      description="Convert square meters, square feet, acres, hectares and more for property, projects and homework. A clean area converter is coming soon."
    />
  );
}

