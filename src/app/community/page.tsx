import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CommunitySection } from "@/components/community/CommunitySection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { FinalCta } from "@/components/cta/FinalCta";

export const metadata: Metadata = {
  title: "Community",
  description:
    "A focused community for traders learning market analysis, discipline and risk management across crypto and gold.",
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        align="center"
        title={
          <>
            A room for traders who take the{" "}
            <span className="font-serif italic text-emerald">process</span>{" "}
            seriously.
          </>
        }
        description="No signals, no noise — just education, discussion and traders holding each other to a better standard."
      />
      <CommunitySection showHeading={false} />
      <Testimonials />
      <FinalCta />
    </>
  );
}
