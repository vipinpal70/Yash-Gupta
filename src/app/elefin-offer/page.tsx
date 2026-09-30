import type { Metadata } from "next";
import { ShimmerText } from "@/components/landing/ShimmerText";
import { Reveal } from "@/components/ui/Reveal";
import { ElefinOfferSection } from "@/components/elefin/ElefinOfferSection";
import { CashbackProofCarousel } from "@/components/proof/CashbackProofCarousel";
import { elefinOffer } from "@/data/elefin-offer";

export const metadata: Metadata = {
  title: `${elefinOffer.brokerName} Fee Cashback`,
  description: `${elefinOffer.description} Offer runs ${elefinOffer.window.display}.`,
  alternates: { canonical: "/elefin-offer" },
};

export default function ElefinOfferPage() {
  return (
    <>
      <header className="px-5 pt-14 sm:px-10 sm:pt-20 lg:pt-28">
        <Reveal
          y={40}
          className="flex flex-col gap-6 border-b border-emerald/15 pb-16 sm:pb-20 lg:pb-24"
        >
          <span className="flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-emerald">
            <span className="h-px w-10 bg-emerald" />
            {elefinOffer.heading} · {elefinOffer.window.display}
          </span>
          <h1 className="text-balance font-sans text-[clamp(32px,4vw,60px)] font-extrabold leading-[1.1] tracking-tight">
            {elefinOffer.title}
          </h1>
          <p className="max-w-2xl text-pretty text-[17px] font-light leading-[1.75] text-muted">
            {elefinOffer.subtitle}
          </p>
        </Reveal>
      </header>
      <ElefinOfferSection />
      <CashbackProofCarousel />
    </>
  );
}
