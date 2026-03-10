import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "IP Subnet Calculator – CIDR, Masks & Host Counts",
  description: "Calculate IP subnets, masks, CIDR ranges and host counts with an online IP subnet calculator.",
  alternates: {
    canonical: "/ip-subnet",
  },
};

export default function IpSubnetPage() {
  return (
    <ComingSoon
      title="IP Subnet Calculator"
      description="Plan and inspect IP subnets, CIDR ranges and host counts quickly for networking tasks. An IP subnet calculator is on the roadmap."
    />
  );
}

