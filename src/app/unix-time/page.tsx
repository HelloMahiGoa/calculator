import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Unix Time Converter – Timestamp to Date & Back",
  description: "Convert Unix timestamps to human-readable dates (and back) with an online Unix time converter.",
  alternates: {
    canonical: "/unix-time",
  },
};

export default function UnixTimePage() {
  return (
    <ComingSoon
      title="Unix Time Converter"
      description="Convert Unix timestamps to readable dates and times, or build timestamps from dates, in a dev-friendly interface. A Unix time converter is coming soon."
    />
  );
}

