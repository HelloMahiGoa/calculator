import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Time Duration Calculator – Add or Subtract Hours & Minutes",
  description: "Add or subtract hours and minutes to find total durations with an online time duration calculator.",
  alternates: {
    canonical: "/time-duration",
  },
};

export default function TimeDurationPage() {
  return (
    <ComingSoon
      title="Time Duration Calculator"
      description="Add and subtract hours and minutes cleanly for schedules, work logs and travel planning. A focused time duration calculator is coming soon."
    />
  );
}

