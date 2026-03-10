import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Base Converter – Binary, Decimal, Hex & More",
  description: "Convert numbers between binary, decimal, hexadecimal and other bases with an online base converter.",
  alternates: {
    canonical: "/base-converter",
  },
};

export default function BaseConverterPage() {
  return (
    <ComingSoon
      title="Base Converter"
      description="Convert numbers between binary, decimal, hexadecimal and other bases for dev and networking work. A clean base converter is coming soon."
    />
  );
}

