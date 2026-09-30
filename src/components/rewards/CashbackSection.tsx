import { ShimmerText } from "@/components/landing/ShimmerText";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cashback } from "@/data/rewards";

export function CashbackSection() {
  return (
    <section
      id="cashback"
      className="flex flex-col gap-18 px-5 py-22 sm:px-10 sm:py-28 lg:py-40"
    >
      <Reveal y={40} className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
            {cashback.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(34px,4.4vw,70px)] font-extrabold leading-[1] tracking-tight">
            {cashback.title.map((part, i) => (
              <span key={i} className={part.plain ? "text-emerald" : ""}>
                {part.text}
              </span>
            ))}
          </h2>
        </div>
        <p className="max-w-[420px] text-pretty text-base font-light leading-[1.75] text-muted lg:justify-self-end">
          {cashback.description}
        </p>
      </Reveal>

      <div className="flex justify-center items-center">
        <RevealGroup className="flex flex-col border-t border-emerald/25" stagger={0.08}>
          {cashback.steps.map((step, index) => (
            <RevealItem
              key={step.title}
              className="grid grid-cols-[56px_1fr] items-baseline gap-5 border-b border-emerald/25 py-7"
            >
              <span className="font-serif text-xl font-extrabold text-emerald">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="font-serif text-xl font-bold">
                  {step.title}
                </span>
                <span className="text-[15px] font-light text-muted">
                  {step.description}
                </span>
              </div>
            </RevealItem>
          ))}
          <RevealItem className="pt-9">
            <a
              href={cashback.cta.href}
              className="inline-block w-fit bg-emerald px-8 py-[18px] text-[12px] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground"
            >
              {cashback.cta.label}
            </a>
          </RevealItem>
        </RevealGroup>
      {/* 
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-8 border border-emerald/35 bg-[linear-gradient(160deg,rgba(91,155,255,0.14),rgba(91,155,255,0.02)_60%)] p-8 sm:p-10">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] uppercase tracking-[0.28em] text-muted">
                Cashback Wallet
              </span>
              <span className="border border-emerald/40 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[#CCD6E6]">
                Illustrative
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-[0.28em] text-muted">
                Available Cashback
              </span>
              <ShimmerText
                as="div"
                className="font-serif text-3xl font-bold leading-tight sm:text-4xl"
              >
                Tracked automatically
              </ShimmerText>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-emerald/20 pt-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] uppercase tracking-[0.24em] text-muted">
                  This Month
                </span>
                <span className="text-sm font-semibold">
                  Updated after settlement
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] uppercase tracking-[0.24em] text-muted">
                  Payout Schedule
                </span>
                <span className="text-sm font-semibold">
                  Set, recurring cycle
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#5A6476]">
              Illustrative example. Actual cashback depends on your linked
              broker, account type and eligible trading activity.
            </p>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
