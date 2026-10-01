"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Plus, Wallet } from "lucide-react";

type Props = {
  base: number;
  anchorDate: string;
  seed: number;
  label: string;
  sublabel: string;
  caption: string;
  added: string;
  addedLabel: string;
};

const DAY_MS = 24 * 60 * 60 * 1000;
const MIN_DAILY = 50_000;
const MAX_DAILY = 60_000;

// Small deterministic PRNG (mulberry32). Given the same seed it always yields
// the same sequence, so the daily increments are fixed forever.
function mulberry32(seed: number) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Returns the running cashback total. We build a fixed array of random daily
// increments (50,000–60,000) from `seed` — one per day since `anchorDate` — and
// add them onto `base`. Because the result depends only on the calendar date
// (not on when the page was first opened), it is identical on every refresh and
// for every visitor, grows by one increment each day, and never resets — no
// database or localStorage required.
function getDailyCashback(base: number, anchorDate: string, seed: number) {
  const anchor = new Date(anchorDate).getTime();
  const daysElapsed = Math.max(0, Math.floor((Date.now() - anchor) / DAY_MS));

  const rng = mulberry32(seed);
  const dailyIncrements: number[] = [];
  for (let i = 0; i < daysElapsed; i++) {
    dailyIncrements.push(
      Math.floor(rng() * (MAX_DAILY - MIN_DAILY + 1)) + MIN_DAILY,
    );
  }

  return dailyIncrements.reduce((total, amount) => total + amount, base);
}

export function CashbackWalletCard({
  base,
  anchorDate,
  seed,
  label,
  sublabel,
  caption,
  added,
  addedLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const targetRef = useRef<number | null>(null);
  const [value, setValue] = useState(0);

  // Count up from 0 to the daily-updated total once the card scrolls into view.
  useEffect(() => {
    if (!inView) return;
    // Resolve the running daily total once, the first time the card appears.
    if (targetRef.current === null)
      targetRef.current = getDailyCashback(base, anchorDate, seed);
    const target = targetRef.current;
    const start = performance.now();
    const duration = 2200;
    let frame: number;

    function step(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(target * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, base, anchorDate, seed]);

  const formatted = value.toLocaleString("en-IN", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <div
      ref={ref}
      className="relative h-full overflow-hidden rounded-2xl border border-emerald/30 bg-[linear-gradient(160deg,rgba(91,155,255,0.16),rgba(91,155,255,0.02)_62%)] p-8 sm:p-10"
    >
      {/* soft glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-emerald/20 blur-3xl"
      />

      <div className="relative flex h-full flex-col gap-10">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-emerald/40 bg-emerald/15 text-emerald">
            <Wallet className="size-6" />
          </span>
          <div className="flex flex-col">
            <span className="font-sans text-lg font-bold leading-snug text-foreground">
              {label}
            </span>
            <span className="text-[13px] font-light text-muted">{sublabel}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-serif text-[clamp(34px,6vw,52px)] font-bold leading-none tracking-tight text-foreground tabular-nums">
            ₹ {formatted}
          </span>
          <span className="text-[13px] uppercase tracking-[0.2em] text-muted">
            {caption}
          </span>
        </div>

        <div className="mt-auto flex items-center gap-3 self-start rounded-full border border-emerald/25 bg-background/40 py-2.5 pl-2.5 pr-5">
          <span className="flex size-9 items-center justify-center rounded-full border border-emerald/50 bg-emerald/15 text-emerald">
            <Plus className="size-4" />
          </span>
          <span className="text-[15px] font-light text-muted">
            <span className="font-semibold text-emerald-light">{added}</span>{" "}
            {addedLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
