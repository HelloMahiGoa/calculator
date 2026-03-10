import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Length Converter",
  description: "Convert between meters, feet, inches, kilometers and more. Coming soon to Calculators.digital.",
};

export default function LengthConverterPage() {
  return (
    <ComingSoon
      title="Length Converter"
      description="A clean unit converter for meters, feet, inches, kilometers and more."
      tag="Planned · Converter"
    />
  );
}

