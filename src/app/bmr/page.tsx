import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "BMR & Calories Calculator – Basal Metabolic Rate",
  description: "Estimate your Basal Metabolic Rate (BMR) and daily calorie needs with an online BMR & calories calculator.",
  alternates: {
    canonical: "/bmr",
  },
};

export default function BmrPage() {
  return (
    <ComingSoon
      title="BMR & Calories Calculator"
      description="Estimate your BMR and daily calorie needs using standard formulas and simple inputs. A BMR & calories calculator is coming soon."
    />
  );
}

