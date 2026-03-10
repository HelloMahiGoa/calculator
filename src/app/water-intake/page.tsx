import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Water Intake Calculator – Suggested Daily Water Goal",
  description: "Estimate a suggested daily water intake goal based on body weight and activity with an online calculator.",
  alternates: {
    canonical: "/water-intake",
  },
};

export default function WaterIntakePage() {
  return (
    <ComingSoon
      title="Water Intake Calculator"
      description="Get a simple daily water goal based on your body and lifestyle. A straightforward water intake calculator is coming soon."
    />
  );
}

