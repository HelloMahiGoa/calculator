import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Programmable Calculator",
  description: "Programmable calculator with reusable programs and advanced operations. Coming soon to Calculators.digital.",
};

export default function ProgrammablePage() {
  return (
    <ComingSoon
      title="Programmable Calculator"
      description="Write small programs and reuse them for advanced calculations. Built for power users."
      tag="Planned · Programmable"
    />
  );
}

