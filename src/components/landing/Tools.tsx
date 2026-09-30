import Image from "next/image";
import { ShimmerText } from "@/components/landing/ShimmerText";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { tools } from "@/data/yash-gupta-landing";

export function Tools() {
  return (
    <section
      id="tools"
      className="flex flex-col gap-18 bg-[#E6ECF6] px-5 py-22 text-[#0A0D14] sm:px-10 sm:py-28 lg:py-40"
    >
      <Reveal y={40} className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="text-[11px] uppercase tracking-[0.32em] text-[#1E4FD8]">
            {tools.eyebrow}
          </span>
          <h2 className="font-sans text-[clamp(34px,4.4vw,70px)] font-extrabold leading-[1] tracking-tight">
            {tools.title[0].text}
            <span className="text-[#1E4FD8] font-bold">{tools.title[1].text}</span>
          </h2>
        </div>
        <p className="max-w-[420px] text-pretty text-base font-light leading-[1.75] text-[#3E4757] lg:justify-self-end">
          {tools.description}
        </p>
      </Reveal>

      <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.1}>
        {tools.cards.map((card) => (
          <RevealItem key={card.title}>
            <article className="flex h-full flex-col gap-9 bg-background p-7 text-foreground shadow-[0_30px_80px_rgba(10,20,40,0.25)] transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.5 sm:p-12">
              <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.28em]">
                <span className="text-emerald">{card.pair}</span>
                <span className="text-[#6E7A8F]">{card.period}</span>
              </div>
              <div className="relative aspect-[16/8] overflow-hidden border border-emerald/20 bg-[#0C111C]">
                <Image
                  src={card.chartImage}
                  alt={card.chartAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap items-end justify-between gap-6 border-t border-emerald/20 pt-7">
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-4xl font-bold leading-none">
                    {card.title}
                  </h3>
                  <span className="text-sm font-light text-muted">
                    {card.subtitle}
                  </span>
                </div>
                <ShimmerText className="font-serif text-[clamp(48px,4.7vw,72px)] font-bold leading-[1.05]">
                  {card.big}
                  <span className="align-top text-[0.5em]">+</span>
                </ShimmerText>
              </div>
              <a
                href={card.href ?? "#contact"}
                target={card.href?.startsWith("http") ? "_blank" : undefined}
                rel={card.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="border border-emerald px-6 py-[18px] text-center text-[12px] uppercase tracking-[0.22em] text-emerald transition-colors hover:bg-emerald hover:text-background"
              >
                {card.cta}
              </a>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>

      <p className="text-xs leading-relaxed text-[#5A6476]">
        {tools.disclaimer}
      </p>
    </section>
  );
}
