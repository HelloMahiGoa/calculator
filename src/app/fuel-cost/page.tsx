import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Fuel Cost & Mileage Calculator – Trip Cost Estimator",
  description: "Estimate trip fuel cost and mileage using distance, fuel price and consumption with an online calculator.",
  alternates: {
    canonical: "/fuel-cost",
  },
};

export default function FuelCostPage() {
  return (
    <ComingSoon
      title="Fuel Cost & Mileage Calculator"
      description="Estimate fuel cost and mileage for road trips and daily commutes with clear, simple inputs. A fuel cost & mileage calculator is on the roadmap."
    />
  );
}

