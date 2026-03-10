import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Discount Calculator – Sale Price & Savings",
  description: "Find sale prices, savings and original prices from any discount with an online discount calculator.",
  alternates: {
    canonical: "/discount",
  },
};

export default function DiscountPage() {
  return (
    <ComingSoon
      title="Discount Calculator"
      description="Work out sale prices, savings and original prices from any discount in seconds. A handy discount calculator is coming soon."
    />
  );
}

