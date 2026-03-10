import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Financial Calculator",
  description: "Financial calculator for loans, EMIs, savings and interest. Coming soon to Calculators.digital.",
};

export default function FinancialPage() {
  return (
    <ComingSoon
      title="Financial Calculator"
      description="Loans, EMIs, savings and interest tools will live here. Perfect for planning money decisions."
      tag="Planned · Finance"
    />
  );
}

