import { ShimmerText } from "@/components/landing/ShimmerText";
import { Reveal } from "@/components/ui/Reveal";
import { fiveXTraders } from "@/data/yash-gupta-landing";

export function FiveXTraders() {
  return (
    <section id="5x" className="px-5 pb-22 sm:px-10 sm:pb-28 lg:pb-40">
      <Reveal y={40}>
        <div className="relative overflow-hidden border border-emerald/35 bg-[linear-gradient(135deg,#0E1A3A_0%,#0A0E17_60%)] p-8 shadow-[0_40px_120px_rgba(30,79,216,0.18)] sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-28 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(91,155,255,0.35),rgba(91,155,255,0)_65%)]"
          />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
                  {fiveXTraders.eyebrow}
                </span>
                <span className="border border-emerald/40 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[#CCD6E6]">
                  {fiveXTraders.badge}
                </span>
              </div>
              <h2 className="font-sans text-[clamp(44px,5.5vw,88px)] font-extrabold leading-[1] tracking-tight">
                <ShimmerText>{fiveXTraders.title[0].text}</ShimmerText>
                {fiveXTraders.title[1].text}
              </h2>
              <p className="max-w-[460px] text-pretty text-[17px] font-light leading-[1.75] text-[#CCD6E6]">
                {fiveXTraders.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={fiveXTraders.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit bg-emerald px-8 py-[18px] text-[12px] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground"
                >
                  {fiveXTraders.cta.label}
                </a>
                <a
                  href={fiveXTraders.secondaryCta.href}
                  className="w-fit border border-foreground/24 px-8 py-[18px] text-[12px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-emerald hover:text-emerald"
                >
                  {fiveXTraders.secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="flex flex-col border-t border-emerald/25">
              {fiveXTraders.features.map((feature) => (
                <div
                  key={feature.no}
                  className="grid grid-cols-[56px_1fr] items-baseline gap-5 border-b border-emerald/25 py-7"
                >
                  <span className="font-serif text-xl font-extrabold text-emerald">
                    {feature.no}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-serif text-xl font-bold">
                      {feature.title}
                    </span>
                    <span className="text-[15px] font-light text-muted">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
