import { ShimmerText } from "@/components/landing/ShimmerText";
import { Reveal } from "@/components/ui/Reveal";
import { tradersHunt } from "@/data/yash-gupta-landing";

export function TradersHunt() {
  return (
    <section
      id="hunt"
      className="relative grid grid-cols-1 items-center gap-12 overflow-hidden bg-[radial-gradient(ellipse_50%_70%_at_15%_50%,rgba(91,155,255,0.14),transparent_70%)] px-5 py-22 sm:px-10 sm:py-28 lg:grid-cols-2 lg:py-40"
    >
      <Reveal y={40} className="flex flex-col gap-8">
        <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
          {tradersHunt.eyebrow}
        </span>
        <h2 className="font-serif text-[clamp(44px,5.8vw,94px)] font-extrabold leading-[0.95] tracking-tight">
          {tradersHunt.title[0].text}
          <ShimmerText>{tradersHunt.title[1].text}</ShimmerText>
        </h2>
        <p className="max-w-[460px] text-pretty text-[17px] font-light leading-[1.75] text-muted">
          {tradersHunt.description}
        </p>
        <a
          href={tradersHunt.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit bg-emerald px-8 py-[18px] text-[12px] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground"
        >
          {tradersHunt.cta.label}
        </a>
      </Reveal>

      <Reveal y={40} className="flex flex-col border-t border-emerald/22">
        {tradersHunt.steps.map((step) => (
          <div
            key={step.roman}
            className="grid grid-cols-[80px_1fr] items-baseline gap-6 border-b border-emerald/22 py-8"
          >
            <span className="font-serif text-4xl font-bold text-emerald">
              {step.roman}
            </span>
            <div className="flex flex-col gap-1.5">
              <span className="font-serif text-[28px] font-bold">
                {step.title}
              </span>
              <span className="text-[15px] font-light text-muted">
                {step.description}
              </span>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
