"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { elefinBirthdayOffer } from "@/data/elefin-birthday-offer";
import { getOfferStatus } from "@/lib/utils";
import { useNow } from "@/lib/useNow";

export function ElefinBirthdayBanner() {
  const now = useNow();
  const status =
    now === null
      ? "upcoming"
      : getOfferStatus(
          elefinBirthdayOffer.window.start,
          elefinBirthdayOffer.window.end,
          now,
        );

  // Once the window has closed there's nothing left to promote.
  if (status === "ended") return null;

  const isLive = status === "live";

  return (
    <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-gold/50 bg-[linear-gradient(160deg,#2A2008_0%,#0F0C04_100%)] px-3 py-1.5 shadow-[0_1px_0_0_rgba(255,214,138,0.25)_inset,0_14px_30px_-10px_rgba(201,164,92,0.55)] sm:gap-3 sm:px-4 sm:py-2">
      <span className="relative flex size-1.5 shrink-0">
        {isLive ? (
          <motion.span
            className="absolute inline-flex size-full rounded-full bg-gold"
            animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        ) : null}
        <span className="relative inline-flex size-1.5 rounded-full bg-gold" />
      </span>

      <p className="min-w-0 truncate text-[10px] leading-snug text-[#F4E6C8] sm:text-[11px]">
        <span className="font-bold uppercase tracking-[0.12em] text-gold">
          {elefinBirthdayOffer.window.display}
        </span>{" "}
        ·{" "}
        {isLive
          ? `Get ${elefinBirthdayOffer.amount} cashback`
          : `${elefinBirthdayOffer.amount} cashback coming`}
      </p>

      <Link
        href={elefinBirthdayOffer.href}
        className="shrink-0 rounded-full bg-gold px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-[#DCB876]"
      >
        {isLive ? "Claim" : "Details"}
      </Link>
    </div>
  );
}
