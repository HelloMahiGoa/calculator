import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Volume Converter – Free Online Volume Unit Converter",
  description: "Convert liters, milliliters, cups, gallons and more with a simple online volume converter.",
  alternates: {
    canonical: "/unit-volume",
  },
};

export default function UnitVolumePage() {
  return (
    <ComingSoon
      title="Volume Converter"
      description="Switch between liters, milliliters, cups, gallons and more for cooking, labs and everyday use. A focused volume converter is on the way."
    />
  );
}

