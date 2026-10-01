"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Plus, Wallet } from "lucide-react";

type Props = {
  target: number;
  label: string;
  sublabel: string;
  caption: string;
  added: string;
  addedLabel: string;
};

export function CashbackWalletCard({
  target,
  label,
  sublabel,
  caption,
  added,
  addedLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const [pulse, setPulse] = useState(false);

  // Count up from 0 to the target once the card scrolls into view.
  useEffect(() => {
    if (!inView) return;
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
        setDone(true);
      }
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  // Keep the numbers moving — small live additions after the count-up settles.
  useEffect(() => {
    if (!done) return;
    const id = setInterval(() => {
      setValue((v) => v + 22.8);
      setPulse(true);
      setTimeout(() => setPulse(false), 6300);
    }, 8000);
    return () => clearInterval(id);
  }, [done]);

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
          <span
            className={`flex size-9 items-center justify-center rounded-full border border-emerald/50 bg-emerald/15 text-emerald transition-transform duration-500 ${
              pulse ? "scale-110" : "scale-100"
            }`}
          >
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
