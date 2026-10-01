"use client";

import { ShimmerText } from "@/components/landing/ShimmerText";

export function ZeroFeesOrbit() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex size-[280px] shrink-0 items-center justify-center select-none sm:size-[340px] lg:size-[380px]"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(91,155,255,0.28),rgba(30,79,216,0.08)_50%,transparent_70%)] blur-2xl" />

      {/* Ring 1: Counter-rotating outer ring with subtle border */}
      <div className="absolute inset-2 rounded-full border border-emerald/20 [animation:yg-spin_35s_linear_infinite_reverse]" />

      {/* Ring 2: Rotating dashed outer ring */}
      <div className="absolute inset-6 rounded-full border border-dashed border-emerald/35 [animation:yg-spin_22s_linear_infinite]" />

      {/* Ring 3: 360 Rotating SVG Circular Text */}
      <div className="absolute inset-4 [animation:yg-spin_25s_linear_infinite]">
        <svg viewBox="0 0 300 300" className="size-full overflow-visible">
          <path
            id="zeroFeesCirclePath"
            d="M 150, 150 m -118, 0 a 118,118 0 1,1 236,0 a 118,118 0 1,1 -236,0"
            fill="none"
          />
          <text className="fill-emerald/90 text-[10.5px] font-bold uppercase tracking-[0.34em]">
            <textPath href="#zeroFeesCirclePath" startOffset="0%">
              • OPERATION ZERO FEES • 100% FEE RETURN • ELEFIN CASHBACK •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Ring 4: Inner accent ring with orbiting glowing dot */}
      <div className="absolute inset-16 rounded-full border border-emerald/30 [animation:yg-spin_16s_linear_infinite_reverse]">
        <div className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-emerald shadow-[0_0_12px_#5B9BFF]" />
        <div className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-emerald shadow-[0_0_12px_#5B9BFF]" />
      </div>

      {/* Center Circle Core with Big 0 FEES */}
      <div className="relative flex size-[170px] flex-col items-center justify-center rounded-full border border-emerald/50 bg-ink/90 p-4 shadow-[0_0_50px_rgba(91,155,255,0.35)] backdrop-blur-xl sm:size-[210px]">
        <div className="absolute inset-1.5 rounded-full border border-dashed border-emerald/30 [animation:yg-spin_30s_linear_infinite]" />

        <div className="z-10 flex flex-col items-center justify-center text-center">
          <ShimmerText className="font-sans text-[clamp(44px,6vw,68px)] font-black leading-none tracking-tight">
            0
          </ShimmerText>
          <span className="font-serif text-[18px] font-extrabold uppercase tracking-[0.22em] text-foreground sm:text-[22px]">
            FEES
          </span>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-emerald sm:text-[10px]">
            100% Return
          </span>
        </div>
      </div>
    </div>
  );
}
