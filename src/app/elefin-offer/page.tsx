import type { Metadata } from "next";
import { ShimmerText } from "@/components/landing/ShimmerText";
import { Reveal } from "@/components/ui/Reveal";
import { ElefinOfferSection } from "@/components/elefin/ElefinOfferSection";
import { CashbackProofCarousel } from "@/components/proof/CashbackProofCarousel";
import { CashbackCalculator } from "@/components/elefin/CashbackCalculator";
import { ZeroFeesOrbit } from "@/components/elefin/ZeroFeesOrbit";
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
          className="grid grid-cols-1 items-center gap-12 border-b border-emerald/15 pb-16 sm:pb-20 lg:grid-cols-2 lg:pb-24"
        >
          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.32em] text-emerald">
              <span className="h-px w-10 bg-emerald" />
              {elefinOffer.heading} · {elefinOffer.window.display}
            </span>
            <h1 className="text-balance font-sans text-[clamp(32px,4vw,60px)] font-extrabold leading-[1.1] tracking-tight">
              {elefinOffer.title.map((part, i) =>
                part.shimmer ? (
                  <ShimmerText key={i}>{part.text}</ShimmerText>
                ) : (
                  <span key={i} className="text-foreground">
                    {part.text}
                  </span>
                ),
              )}
            </h1>
            <p className="max-w-xl text-pretty text-[17px] font-light leading-[1.75] text-muted">
              {elefinOffer.subtitle}
            </p>
          </div>
          <ZeroFeesOrbit />
        </Reveal>
      </header>
      <ElefinOfferSection />
      <CashbackProofCarousel />
      <CashbackCalculator />
    </>
  );
}
