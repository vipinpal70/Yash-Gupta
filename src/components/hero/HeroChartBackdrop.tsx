"use client";

import { motion } from "motion/react";

const linePath =
  "M0,420 L80,382 L160,408 L240,338 L320,360 L400,276 L480,308 L560,214 L640,248 L720,156 L800,188 L880,104 L960,138 L1040,64 L1120,92 L1200,34";

export function HeroChartBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      <div className="absolute -top-32 right-[-8%] size-[560px] rounded-full bg-emerald/15 blur-[150px]" />
      <div className="absolute bottom-[-10%] left-[-10%] size-[420px] rounded-full bg-emerald/10 blur-[130px]" />

      <svg
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-40"
      >
        <defs>
          <linearGradient id="heroLineFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
            <stop offset="45%" stopColor="#22c55e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6ee7a4" stopOpacity="0.3" />
          </linearGradient>
          <filter id="heroLineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d={linePath}
          fill="none"
          stroke="url(#heroLineFade)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#heroLineGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </svg>
    </div>
  );
}
