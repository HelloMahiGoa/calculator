import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Matrix Calculator – Determinant, Inverse & Matrix Operations",
  description: "Compute determinants, inverses and basic matrix operations with an online matrix calculator.",
  alternates: {
    canonical: "/matrix",
  },
};

export default function MatrixPage() {
  return (
    <ComingSoon
      title="Matrix Calculator"
      description="Work with matrices for linear algebra: determinants, inverses and basic operations in a clean online interface. A matrix calculator is coming soon."
    />
  );
}

