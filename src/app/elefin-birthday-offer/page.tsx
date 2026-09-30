import type { Metadata } from "next";
import { ShimmerText } from "@/components/landing/ShimmerText";
import { Reveal } from "@/components/ui/Reveal";
import { ElefinBirthdayOfferSection } from "@/components/elefin/ElefinBirthdayOfferSection";
import { CashbackProofCarousel } from "@/components/proof/CashbackProofCarousel";
import { elefinBirthdayOffer } from "@/data/elefin-birthday-offer";

export const metadata: Metadata = {
  title: `${elefinBirthdayOffer.eyebrow} — ${elefinBirthdayOffer.amount}`,
  description: `${elefinBirthdayOffer.description} Runs ${elefinBirthdayOffer.window.display}.`,
  alternates: { canonical: "/elefin-birthday-offer" },
};

export default function ElefinBirthdayOfferPage() {
  return (
    <>
      <header className="px-5 pt-14 sm:px-10 sm:pt-20 lg:pt-28">
        <Reveal
          y={40}
          className="flex flex-col gap-6 border-b border-emerald/15 pb-16 sm:pb-20 lg:pb-24"
        >
          <span className="flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-emerald">
            <span className="h-px w-10 bg-emerald" />
            {elefinBirthdayOffer.eyebrow} · {elefinBirthdayOffer.window.display}
          </span>
          <h1 className="text-balance font-sans text-[clamp(34px,4.5vw,72px)] font-extrabold leading-[1.02] tracking-tight">
            Get {elefinBirthdayOffer.amount} in{" "}
            <ShimmerText>just one minute.</ShimmerText>
          </h1>
          <p className="max-w-xl text-pretty text-[17px] font-light leading-[1.75] text-muted">
            {elefinBirthdayOffer.description}
          </p>
        </Reveal>
      </header>
      <ElefinBirthdayOfferSection />
      <CashbackProofCarousel />
    </>
  );
}
