import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "GPA Calculator – Grade Point Average for Courses & Credits",
  description: "Calculate Grade Point Average (GPA) from course grades and credits with an online GPA calculator.",
  alternates: {
    canonical: "/gpa",
  },
};

export default function GpaPage() {
  return (
    <ComingSoon
      title="GPA Calculator"
      description="Enter course grades and credits to see your GPA clearly, semester by semester. A student-friendly GPA calculator is on the roadmap."
    />
  );
}

