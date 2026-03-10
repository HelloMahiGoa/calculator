import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Mortgage Payoff Calculator – Extra Payments & Payoff Date",
  description: "Estimate mortgage payoff dates and see how extra payments change total interest with an online calculator.",
  alternates: {
    canonical: "/mortgage-payoff",
  },
};

export default function MortgagePayoffPage() {
  return (
    <ComingSoon
      title="Mortgage Payoff Calculator"
      description="See how extra payments can shorten your mortgage and reduce interest. A detailed mortgage payoff calculator is on the roadmap."
    />
  );
}

