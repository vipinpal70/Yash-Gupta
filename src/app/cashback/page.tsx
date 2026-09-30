import type { Metadata } from "next";
import { ShimmerText } from "@/components/landing/ShimmerText";
import { Reveal } from "@/components/ui/Reveal";
import { CashbackSection } from "@/components/rewards/CashbackSection";
import { CashbackProofCarousel } from "@/components/proof/CashbackProofCarousel";
import { CompetitionSection } from "@/components/rewards/CompetitionSection";
import { Brokers } from "@/components/landing/Brokers";
import { rewardsPage } from "@/data/rewards";

export const metadata: Metadata = {
  title: "Cashback & Rewards",
  description:
    "Cashback on eligible trading activity with partner brokers, and periodic community trading competitions ranked on discipline, not raw returns.",
  alternates: { canonical: "/rewards" },
};

export default function RewardsPage() {
  return (
    <>
      <header className="px-5 pt-14 sm:px-10 sm:pt-20 lg:pt-28">
        <Reveal
          y={40}
          className="flex flex-col gap-6 border-b border-emerald/15 pb-16 sm:pb-20 lg:pb-24"
        >
          <span className="flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-emerald">
            <span className="h-px w-10 bg-emerald" />
            {rewardsPage.eyebrow}
          </span>
          <h1 className="text-balance font-sans text-[clamp(34px,4.5vw,72px)] font-extrabold leading-[1.02] tracking-tight">
            {rewardsPage.title.map((part, i) =>
              part.shimmer ? (
                <ShimmerText key={i}>{part.text}</ShimmerText>
              ) : (
                <span key={i}>{part.text} <br /></span>
              ),
            )}
          </h1>
          <p className="max-w-xl text-pretty text-[17px] font-light leading-[1.75] text-muted">
            {rewardsPage.description}
          </p>
        </Reveal>
      </header>
      <Brokers />
      {/* <CashbackSection /> */}
      <CashbackProofCarousel />
      {/* <CompetitionSection /> */}
    </>
  );
}
