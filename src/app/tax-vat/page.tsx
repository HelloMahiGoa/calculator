import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Tax / VAT Calculator – Add or Remove Tax from Price",
  description: "Add or remove tax/VAT from prices and see before- and after-tax amounts with an online calculator.",
  alternates: {
    canonical: "/tax-vat",
  },
};

export default function TaxVatPage() {
  return (
    <ComingSoon
      title="Tax / VAT Calculator"
      description="Add or remove tax/VAT from any price and see net, tax and gross amounts clearly. A dedicated tax/VAT calculator is on the way."
    />
  );
}

