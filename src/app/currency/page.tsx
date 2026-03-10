import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Currency Converter – Live Exchange Rate Calculator",
  description: "Convert between currencies with live or recent exchange rates in a simple online converter.",
  alternates: {
    canonical: "/currency",
  },
};

export default function CurrencyPage() {
  return (
    <ComingSoon
      title="Currency Converter"
      description="Quickly convert between currencies with clear amounts and recent rates. A focused currency converter is coming soon."
    />
  );
}

