import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Grade Needed Calculator – Target Score for Your Exam",
  description: "Work out the score you need on a final or test to hit a target grade with an online grade needed calculator.",
  alternates: {
    canonical: "/grade-needed",
  },
};

export default function GradeNeededPage() {
  return (
    <ComingSoon
      title="Grade Needed Calculator"
      description="See what score you need on your next exam or assignment to reach a target grade or GPA. A clear grade needed calculator is coming soon."
    />
  );
}

