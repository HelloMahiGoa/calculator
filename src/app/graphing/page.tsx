import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Graphing Calculator",
  description: "Graphing calculator to plot functions and curves. Coming soon to Calculators.digital.",
};

export default function GraphingPage() {
  return (
    <ComingSoon
      title="Graphing Calculator"
      description="Plot functions, explore curves and intersections. The full graphing experience is coming soon."
      tag="Planned · Graphing"
    />
  );
}

