import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "BMI Calculator – Body Mass Index & Category",
  description: "Calculate your Body Mass Index (BMI) and see standard BMI categories with an online BMI calculator.",
  alternates: {
    canonical: "/bmi",
  },
};

export default function BmiPage() {
  return (
    <ComingSoon
      title="BMI Calculator"
      description="Enter height and weight to see your BMI and how it fits into common categories. A clear, educational BMI calculator is on the way."
    />
  );
}

