import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Marks & Percentage Calculator – Convert Marks to Percent",
  description: "Convert raw marks to percentages (and back) with an online marks & percentage calculator.",
  alternates: {
    canonical: "/marks-percent",
  },
};

export default function MarksPercentPage() {
  return (
    <ComingSoon
      title="Marks & Percentage Calculator"
      description="Convert marks to percentages and percentages back to marks for exams in a couple of taps. A simple marks & percentage calculator is on the roadmap."
    />
  );
}

