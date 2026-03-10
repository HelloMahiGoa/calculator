import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Recipe Scaler – Scale Ingredient Quantities Up or Down",
  description: "Scale recipe ingredient quantities up or down for any number of servings with an online recipe scaler.",
  alternates: {
    canonical: "/recipe-scaler",
  },
};

export default function RecipeScalerPage() {
  return (
    <ComingSoon
      title="Recipe Scaler"
      description="Scale recipes up or down for any number of people without mental math. A friendly recipe scaler is coming soon."
    />
  );
}

