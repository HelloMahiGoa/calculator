import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Temperature Converter – Free Online Celsius, Fahrenheit & Kelvin Converter",
  description: "Convert between Celsius, Fahrenheit and Kelvin with a fast, mobile-first temperature converter.",
  alternates: {
    canonical: "/unit-temperature",
  },
};

export default function UnitTemperaturePage() {
  return (
    <ComingSoon
      title="Temperature Converter"
      description="Quickly switch between Celsius, Fahrenheit and Kelvin without formulas. A focused temperature converter is on the roadmap."
    />
  );
}

