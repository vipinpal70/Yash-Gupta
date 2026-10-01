"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ShimmerText } from "@/components/landing/ShimmerText";
import { cashbackProof } from "@/data/cashback-proof";

const PER_FRAME = 4;

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export function CashbackProofCarousel() {
  const frames = chunk(cashbackProof.screenshots, PER_FRAME);
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(frames.length - 1, index));
      setActive(clamped);
      const track = trackRef.current;
      if (!track) return;
      isScrolling.current = true;
      track.scrollTo({ left: clamped * track.offsetWidth, behavior: "smooth" });
      setTimeout(() => {
        isScrolling.current = false;
      }, 600);
    },
    [frames.length],
  );

  // Sync active dot when user manually swipes
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function onScroll() {
      if (isScrolling.current || !track) return;
      const idx = Math.round(track.scrollLeft / track.offsetWidth);
      setActive(idx);
    }
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="flex flex-col gap-14 border-t border-emerald/15 px-5 py-22 sm:px-10 sm:py-28 lg:py-40">
      <Reveal y={40} className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-6">
          <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
            {cashbackProof.eyebrow}
          </span>
          <h2 className="text-balance font-sans text-[clamp(30px,3.8vw,58px)] font-extrabold leading-[1.05] tracking-tight">
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
          {/* Carousel track — each slide is 100% wide and holds up to 4 images */}
          <div
            ref={trackRef}
            className="mx-auto flex max-w-5xl snap-x snap-mandatory overflow-x-hidden scroll-smooth"
          >
            {frames.map((frame, fi) => (
              <div
                key={fi}
                className="flex w-full shrink-0 snap-start justify-center gap-2 sm:gap-3"
              >
                {frame.map((shot) => (
                  <div
                    key={shot.src}
                    className="w-[calc(25%-6px)] min-w-0 overflow-hidden border border-emerald/25 bg-ink sm:w-[calc(25%-9px)]"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={739}
                      height={1600}
                      sizes="(min-width: 768px) 180px, 22vw"
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation row */}
          <div className="mt-6 flex items-center justify-between gap-4">
            {/* Dots */}
            <div className="flex gap-2">
              {frames.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 bg-emerald"
                      : "w-1.5 bg-emerald/30 hover:bg-emerald/60"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                className="flex size-9 items-center justify-center border border-emerald/30 text-foreground transition-colors hover:border-emerald hover:text-emerald disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => goTo(active + 1)}
                disabled={active === frames.length - 1}
                className="flex size-9 items-center justify-center border border-emerald/30 text-foreground transition-colors hover:border-emerald hover:text-emerald disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
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
