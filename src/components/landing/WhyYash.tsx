import { ShimmerText } from "@/components/landing/ShimmerText";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { whyYash } from "@/data/yash-gupta-landing";

export function WhyYash() {
  return (
    <section id="why" className="flex flex-col gap-16 px-5 py-22 sm:px-10 sm:py-28 lg:py-40">
      <Reveal y={40} className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
            {whyYash.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(32px,4vw,62px)] font-extrabold leading-[1.02] tracking-tight">
            {whyYash.title.map((part, i) =>
              part.shimmer ? (
                <ShimmerText key={i}>{part.text}</ShimmerText>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </h2>
        </div>
        <p className="max-w-[420px] text-pretty text-base font-light leading-[1.75] text-muted lg:justify-self-end">
          {whyYash.description}
        </p>
      </Reveal>

      <RevealGroup
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.08}
      >
        {whyYash.cards.map((card) => (
          <RevealItem key={card.number}>
            <div className="flex h-full flex-col gap-5 border border-emerald/20 bg-ink p-9">
              <span className="font-serif text-[44px] font-extrabold leading-none text-emerald">
                {card.number}
              </span>
              <h3 className="font-serif text-2xl font-bold leading-tight">
                {card.title}
              </h3>
              <p className="text-pretty text-[15px] font-light leading-[1.7] text-muted">
                {card.description}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
