import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Speed Converter – Free Online Speed Unit Converter",
  description: "Convert between km/h, mph, m/s and more with a fast online speed converter.",
  alternates: {
    canonical: "/unit-speed",
  },
};

export default function UnitSpeedPage() {
  return (
    <ComingSoon
      title="Speed Converter"
      description="Convert km/h, mph, m/s and more to compare speeds for driving, running and physics problems. A simple speed converter is coming soon."
    />
  );
}

