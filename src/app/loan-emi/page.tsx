import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Loan / EMI Calculator – Monthly Payment & Interest Schedule",
  description: "Estimate monthly EMIs, total interest and payoff timelines with an online loan calculator.",
  alternates: {
    canonical: "/loan-emi",
  },
};

export default function LoanEmiPage() {
  return (
    <ComingSoon
      title="Loan / EMI Calculator"
      description="Plan your loans with clear EMIs, total interest and payoff timelines. A dedicated loan & EMI calculator is on the way."
    />
  );
}

