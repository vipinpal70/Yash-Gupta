import type { Metadata } from "next";
import { Brokers } from "@/components/landing/Brokers";
import { PageHeader } from "@/components/shared/PageHeader";
import { FinalCta } from "@/components/cta/FinalCta";

export const metadata: Metadata = {
  title: "Partner Brokers — Yash Gupta",
  description:
    "Official partner brokers and prop firms recommended by Yash Gupta. Sign up using exclusive community links & referral codes.",
  alternates: { canonical: "/broker" },
};

export default function BrokerPage() {
  return (
    <>
      {/* <PageHeader
        eyebrow="Partner Platforms"
        title={
          <>
            Trusted Brokers &amp;{" "}
            <span className="font-serif italic text-emerald">
              Prop Firms.
            </span>
          </>
        }
        description="Verified trading platforms with special community perks, zero-fee promotions, and partner discount codes."
      /> */}
      <Brokers />
      <FinalCta />
    </>
  );
}
