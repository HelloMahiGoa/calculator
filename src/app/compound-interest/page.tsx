import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Compound Interest Calculator – Savings Growth Over Time",
  description: "See how your savings grow with compound interest and regular contributions using an online calculator.",
  alternates: {
    canonical: "/compound-interest",
  },
};

export default function CompoundInterestPage() {
  return (
    <ComingSoon
      title="Compound Interest Calculator"
      description="Visualise how your savings grow with compound interest, contributions and time. A friendly compound interest calculator is coming soon."
    />
  );
}

