import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Resources } from "@/components/resources/Resources";
import { LearningLibrary } from "@/components/resources/LearningLibrary";
import { PartnersSection } from "@/components/partners/PartnersSection";
import { FinalCta } from "@/components/cta/FinalCta";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical, no-noise resources on risk management, market analysis and pre-trade preparation, plus the strategy library and partner brokers behind the education.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="05 / Resources"
        title={
          <>
            Useful tools.{" "}
            <span className="font-serif italic text-emerald">
              Zero noise.
            </span>
          </>
        }
        description="Practical frameworks for preparation, risk and analysis — built to be used before every trade, not just read once."
      />
      <Resources showHeading={false} />
      <LearningLibrary />
      <PartnersSection />
      <FinalCta />
    </>
  );
}
