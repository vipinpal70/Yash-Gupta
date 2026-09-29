import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { AboutSection } from "@/components/about/AboutSection";
import { Methodology } from "@/components/methodology/Methodology";
import { FinalCta } from "@/components/cta/FinalCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Experience matters. Process matters more — the philosophy behind Yash Gupta's approach to crypto and gold markets.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Yash Gupta"
        title={
          <>
            Trading is a craft.{" "}
            <span className="font-serif italic text-emerald">
              Treat it like one.
            </span>
          </>
        }
        description="A closer look at the philosophy, framework and standards behind the education."
      />
      <AboutSection />
      <Methodology />
      <FinalCta />
    </>
  );
}
