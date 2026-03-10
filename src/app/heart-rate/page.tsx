import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Target Heart Rate Calculator – Heart Rate Zones by Age",
  description: "Find target heart rate zones for exercise based on age with an online heart rate calculator.",
  alternates: {
    canonical: "/heart-rate",
  },
};

export default function HeartRatePage() {
  return (
    <ComingSoon
      title="Target Heart Rate Calculator"
      description="See estimated heart rate zones by age for warm-up, fat-burning and cardio training. A target heart rate calculator is on the roadmap."
    />
  );
}

