import Image from "next/image";
import { ShimmerText } from "@/components/landing/ShimmerText";
import { hero } from "@/data/yash-gupta-landing";

export function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden px-5 pt-8 sm:px-10 sm:pt-10 lg:pt-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 size-[640px] rounded-full bg-[radial-gradient(circle,rgba(91,155,255,0.28),rgba(91,155,255,0)_65%)] blur-[20px] [animation:yg-drift_18s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-60 -left-52 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.18),rgba(0,200,255,0)_65%)] blur-[20px] [animation:yg-drift_22s_ease-in-out_infinite_reverse]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-6vw] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[22vw] font-bold leading-[0.8] text-transparent [-webkit-text-stroke:1px_rgba(91,155,255,0.13)]"
      >
        BTC · XAU
      </div>

      <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative flex flex-col gap-9 pb-14 sm:pb-24 lg:pb-28">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-emerald">
            <span className="h-px w-10 bg-emerald" />
            {hero.eyebrow}
          </div>

          <h1 className="text-balance font-sans text-[2rem] font-extrabold leading-[1.02] tracking-tight sm:text-[2.875rem] lg:text-[3.5rem]">
            {hero.headline.map((part, i) =>
              part.shimmer ? (
                <ShimmerText key={i}>{part.text}</ShimmerText>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </h1>

          <p className="max-w-xl text-pretty text-[17px] font-light leading-[1.75] text-muted">
            {(() => {
              const highlight =
                "Trade Mathematics";
              if (hero.paragraph.includes(highlight)) {
                const [before, after] = hero.paragraph.split(highlight);
                return (
                  <>
                    {before}
                    <span className="font-semibold text-emerald-light">
                      {highlight}
                    </span>
                    {after}
                  </>
                );
              }
              return hero.paragraph;
            })()}
          </p>

          <div className="flex flex-wrap gap-6 border-t border-emerald/20 pt-2 sm:gap-12">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 pt-5">
                <span className="font-serif text-[28px] font-extrabold leading-[1.1]">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="bg-emerald px-8 py-[18px] text-[12px] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="border border-foreground/24 px-8 py-[18px] text-[12px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-emerald hover:text-emerald"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center self-start lg:mt-0">
          <div className="absolute left-0 right-[-20%] top-0 aspect-square rounded-full bg-[radial-gradient(circle,rgba(91,155,255,0.45),rgba(30,79,216,0.12)_45%,rgba(30,79,216,0)_68%)] blur-[10px]" />
          <div className="absolute left-[6%] right-[-14%] top-[6%] aspect-square rounded-full border border-emerald/25" />
          <Image
            src="/yash-gupta/yash-cutout.png"
            alt="Yash Gupta"
            width={1200}
            height={1244}
            priority
            className="relative mb-[-24%] mr-[-22%] block w-[128%] max-w-none [mask-image:linear-gradient(180deg,#000_56%,transparent_70%)] drop-shadow-[0_30px_80px_rgba(30,79,216,0.35)]"
          />
          <div className="absolute bottom-[32%] left-0 z-[2] flex size-[150px] items-center justify-center rounded-full border border-emerald/40 bg-background shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-2 rounded-full border border-dashed border-emerald/50 [animation:yg-spin_24s_linear_infinite]" />
            <div className="flex flex-col items-center gap-0.5">
              <ShimmerText className="font-serif text-[44px] font-extrabold leading-[1.05]">
                {hero.badge.value}
              </ShimmerText>
              <span className="whitespace-pre-line text-center text-[8px] uppercase leading-[1.5] tracking-[0.24em] text-muted">
                {hero.badge.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
