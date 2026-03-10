import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Date Difference Calculator – Days Between Two Dates",
  description: "Find the number of days between two dates with an online date difference calculator.",
  alternates: {
    canonical: "/date-diff",
  },
};

export default function DateDiffPage() {
  return (
    <ComingSoon
      title="Date Difference Calculator"
      description="Count days between two dates for projects, trips and deadlines. A straightforward date difference calculator is on the roadmap."
    />
  );
}

