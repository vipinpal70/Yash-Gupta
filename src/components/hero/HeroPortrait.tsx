"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { siteConfig } from "@/data/site";

export function HeroPortrait() {
  return (
    <div className="relative w-full max-w-sm">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-emerald/25 blur-[90px]"
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative aspect-[5/6] overflow-hidden rounded-[28px] border border-emerald/20 bg-surface shadow-[0_30px_80px_-24px_rgba(0,0,0,0.7)]">
        <Image
          src="/yash-portrait.jpg"
          alt={`${siteConfig.name}, trading educator`}
          fill
          priority
          sizes="(min-width: 1024px) 384px, 80vw"
          className="object-cover grayscale contrast-[1.08] brightness-[0.95]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-emerald/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          style={{
            background:
              "linear-gradient(160deg, rgba(34,197,94,0.25), transparent 55%)",
          }}
        />
      </div>

      <div className="absolute inset-x-6 -bottom-6 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-background/85 px-5 py-3.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
            Trading Educator
          </p>
        </div>
        <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald/30 bg-emerald/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-light">
          <span className="size-1.5 shrink-0 rounded-full bg-emerald" />
          {siteConfig.focusAreas.slice(0, 2).join(" · ")}
        </span>
      </div>
    </div>
  );
}
