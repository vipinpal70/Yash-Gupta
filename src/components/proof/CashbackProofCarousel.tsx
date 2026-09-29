"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ShimmerText } from "@/components/landing/ShimmerText";
import { cashbackProof } from "@/data/cashback-proof";

export function CashbackProofCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-proof-card]");
    const cardWidth = card instanceof HTMLElement ? card.offsetWidth + 20 : 260;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }

  return (
    <section className="flex flex-col gap-14 border-t border-emerald/15 px-5 py-22 sm:px-10 sm:py-28 lg:py-40">
      <Reveal y={40} className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-6">
          <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
            {cashbackProof.eyebrow}
          </span>
          <h2 className="text-balance font-serif text-[clamp(30px,3.8vw,58px)] font-extrabold leading-[1.05] tracking-tight">
            Real cashback, sent to{" "}
            <ShimmerText>real members.</ShimmerText>
          </h2>
          <p className="max-w-[420px] text-pretty text-base font-light leading-[1.75] text-muted">
            {cashbackProof.description}
          </p>
        </div>

        <div className="flex flex-col gap-2 border border-emerald/35 bg-[linear-gradient(160deg,rgba(91,155,255,0.14),rgba(91,155,255,0.02)_60%)] px-8 py-7 sm:min-w-[260px]">
          <span className="font-serif text-5xl font-bold leading-none text-emerald sm:text-6xl">
            {cashbackProof.totalPaid}
          </span>
          <span className="text-[11px] uppercase tracking-[0.24em] text-muted">
            {cashbackProof.totalPaidLabel}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory justify-start gap-5 overflow-x-auto scroll-smooth pb-2 scrollbar-none [-ms-overflow-style:none] lg:justify-center [&::-webkit-scrollbar]:hidden"
          >
            {cashbackProof.screenshots.map((shot) => (
              <div
                key={shot.src}
                data-proof-card
                className="w-[210px] shrink-0 snap-center sm:w-[240px] lg:w-[260px]"
              >
                <div className="overflow-hidden border border-emerald/25 bg-ink">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={739}
                    height={1600}
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 240px, 210px"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-end gap-2 lg:hidden">
            <button
              type="button"
              aria-label="Scroll to previous"
              onClick={() => scrollByCard(-1)}
              className="flex size-9 items-center justify-center border border-emerald/30 text-foreground transition-colors hover:border-emerald hover:text-emerald"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Scroll to next"
              onClick={() => scrollByCard(1)}
              className="flex size-9 items-center justify-center border border-emerald/30 text-foreground transition-colors hover:border-emerald hover:text-emerald"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </Reveal>

      <p className="flex max-w-2xl items-start gap-2 text-xs leading-relaxed text-[#5A6476]">
        <ShieldCheck className="mt-0.5 size-3.5 shrink-0" />
        Recipient names, UPI IDs and transaction details have been redacted
        to protect the privacy of community members — only the payment
        confirmation is shown.
      </p>
    </section>
  );
}
