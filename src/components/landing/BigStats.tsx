import { ShimmerText } from "@/components/landing/ShimmerText";
import { CountUp } from "@/components/landing/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { bigStats } from "@/data/yash-gupta-landing";

export function BigStats() {
  return (
    <section className="grid grid-cols-1 border-b border-emerald/15 sm:grid-cols-2">
      {bigStats.map((stat, i) => (
        <Reveal
          key={stat.label}
          y={40}
          className={`flex flex-col gap-4 px-5 py-14 sm:px-10 sm:py-24 ${
            i === 0 ? "sm:border-r sm:border-emerald/15" : ""
          }`}
        >
          <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
            {stat.label}
          </span>
          <ShimmerText className="font-serif text-[clamp(54px,7.4vw,126px)] font-bold leading-[1.05] tracking-tight">
            <CountUp end={stat.value} />
          </ShimmerText>
          <span className="text-[15px] font-light text-muted">
            {stat.caption}
          </span>
        </Reveal>
      ))}
    </section>
  );
}
