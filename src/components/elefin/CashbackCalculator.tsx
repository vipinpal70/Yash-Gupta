"use client";

import { useState } from "react";
import { Info, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ShimmerText } from "@/components/landing/ShimmerText";
import { elefinOffer } from "@/data/elefin-offer";

const { calculator } = elefinOffer;
const { presets, perLotUsd, inrRate, cashbackShare, lastIsPlus } = calculator;

function presetLabel(index: number) {
  const value = presets[index];
  return lastIsPlus && index === presets.length - 1 ? `${value}+` : `${value}`;
}

function formatInr(amount: number) {
  return amount.toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

function formatUsd(amount: number) {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function CashbackCalculator() {
  const [index, setIndex] = useState(0);

  const lots = presets[index];
  const usd = lots * perLotUsd;
  const inr = usd * inrRate;

  return (
    <section className="px-5 py-16 sm:px-10 sm:py-24 lg:pt-2">
      <Reveal y={40} className="mx-auto flex max-w-8xl flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-5">
          <span className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.32em] text-emerald">
            <span className="h-px w-10 bg-emerald" />
            {calculator.eyebrow}
          </span>
          <h2 className="max-w-3xl text-balance font-sans text-[clamp(28px,3.8vw,52px)] font-extrabold leading-[1.05] tracking-tight">
            {calculator.title.map((part, i) =>
              part.shimmer ? (
                <ShimmerText key={i}>{part.text}</ShimmerText>
              ) : (
                <span key={i} className="text-foreground">
                  {part.text}
                </span>
              ),
            )}
          </h2>
          <p className="max-w-xl text-pretty text-[17px] font-light leading-[1.75] text-muted">
            {calculator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-emerald/25 lg:grid-cols-2">
          {/* Left — controls */}
          <div className="flex flex-col gap-8 bg-surface p-8 sm:p-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
              {calculator.sliderLabel}
            </span>

            <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl font-extrabold leading-none text-foreground">
                {presetLabel(index)}
              </span>
              <span className="text-base font-light text-muted">lot</span>
            </div>

            <input
              type="range"
              min={0}
              max={presets.length - 1}
              step={1}
              value={index}
              onChange={(e) => setIndex(Number(e.target.value))}
              className="yg-range"
              aria-label={calculator.sliderLabel}
            />

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {presets.map((_, i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-pressed={active}
                    className={`rounded-lg border py-3 text-sm font-semibold transition-colors ${
                      active
                        ? "border-emerald bg-emerald/15 text-emerald"
                        : "border-emerald/20 text-muted hover:border-emerald/50 hover:text-foreground"
                    }`}
                  >
                    {presetLabel(i)}
                  </button>
                );
              })}
            </div>

            <p className="flex items-start gap-2 text-[13px] font-light leading-relaxed text-muted">
              <Info className="mt-0.5 size-3.5 shrink-0 text-emerald" />
              Estimate is based on eligible commission and your cashback share.
            </p>
          </div>

          {/* Right — result */}
          <div className="relative flex flex-col gap-7 overflow-hidden bg-[linear-gradient(155deg,var(--emerald-dark),var(--emerald))] p-8 text-background sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-white/20 blur-3xl"
            />

            <div className="relative flex flex-col gap-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-background/70">
                {calculator.resultLabel}
              </span>

              <div className="flex flex-col gap-1">
                <span className="font-serif text-[clamp(44px,6vw,64px)] font-extrabold leading-none tracking-tight tabular-nums">
                  ₹{formatInr(inr)}
                </span>
                <span className="text-lg font-medium text-background/80">
                  ≈ ${formatUsd(usd)}
                </span>
              </div>

              <dl className="flex flex-col gap-px overflow-hidden rounded-xl bg-white/10">
                <Row label="Monthly volume" value={`${presetLabel(index)} lot`} />
                <Row
                  label="Estimated eligible commission"
                  value={`$${formatUsd(usd)}`}
                />
                <Row label="Cashback share" value={`${cashbackShare}%`} />
              </dl>

              <span className="flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[13px] font-semibold">
                <Sparkles className="size-3.5" />
                {calculator.eyebrow}
              </span>

              <p className="text-sm font-light leading-relaxed text-background/85">
                {calculator.note}
              </p>
              <p className="text-sm font-light text-background/85">
                {calculator.footnote}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 bg-white/5 px-5 py-4">
      <dt className="text-sm font-light text-background/80">{label}</dt>
      <dd className="text-sm font-bold text-background">{value}</dd>
    </div>
  );
}
