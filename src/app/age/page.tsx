import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Age Calculator – Exact Age in Years, Months & Days",
  description: "Calculate exact age in years, months and days between two dates with an online age calculator.",
  alternates: {
    canonical: "/age",
  },
};

export default function AgePage() {
  return (
    <ComingSoon
      title="Age Calculator"
      description="See exact age in years, months and days between birthdays and today or any other date. A clear age calculator is coming soon."
    />
  );
}

