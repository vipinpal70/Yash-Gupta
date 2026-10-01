"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { elefinOffer } from "@/data/elefin-offer";
import { getOfferStatus } from "@/lib/utils";
import { useNow } from "@/lib/useNow";

export function ElefinOfferBanner() {
  const now = useNow();
  const status =
    now === null
      ? "upcoming"
      : getOfferStatus(elefinOffer.window.start, elefinOffer.window.end, now);

  // Once the window has closed there's nothing left to promote.
  if (status === "ended") return null;

  const isLive = status === "live";

  return (
    <div className="inline-flex w-full max-w-xl lg:max-w-2xl items-center justify-between gap-4 rounded-full border border-gold/55 bg-[linear-gradient(160deg,#2A2008_0%,#0F0C04_100%)] px-5 py-2 shadow-[0_2px_0_0_rgba(255,214,138,0.25)_inset,0_18px_40px_-10px_rgba(201,164,92,0.45)] sm:gap-6 sm:px-6 sm:py-3">
      <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
        <span className="relative flex size-2.5 shrink-0">
          {isLive ? (
            <motion.span
              className="absolute inline-flex size-full rounded-full bg-gold"
              animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          ) : null}
          <span className="relative inline-flex size-2.5 rounded-full bg-gold" />
        </span>

        <p className="min-w-0 truncate text-xs leading-snug text-[#F4E6C8] sm:text-[15px]">
          <span className="font-bold uppercase tracking-[0.14em] text-gold">
            {elefinOffer.window.display}
          </span>{" "}
          · {isLive ? "The Operation Zero Fees" : "The Operation Zero Fees"} with{" "}
          <span className="font-semibold text-white">{elefinOffer.brokerName}</span>
        </p>
      </div>

      <Link
        href={elefinOffer.href}
        className="shrink-0 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-all hover:scale-105 hover:bg-[#DCB876] sm:px-5 sm:py-2 sm:text-xs"
      >
        {isLive ? "Register" : "Details"}
      </Link>
    </div>
  );
}
