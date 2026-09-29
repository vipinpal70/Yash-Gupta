import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Programs } from "@/components/programs/Programs";
import { FinalCta } from "@/components/cta/FinalCta";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Online Mentorship, the 1-to-1 Inner Circle, and Offline Mentorship — choose the level of support that fits how you trade.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="04 / Programs"
        title={
          <>
            Choose the level of{" "}
            <span className="font-serif italic text-emerald">support</span>{" "}
            you need.
          </>
        }
        description="Every path leads back to the same framework: understand the market, plan the trade, execute without emotion, and manage risk first."
      />
      <Programs showHeading={false} />
      <FinalCta />
    </>
  );
}
