"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ElefinBirthdayForm } from "@/components/elefin/ElefinBirthdayForm";
import { elefinBirthdayOffer } from "@/data/elefin-birthday-offer";
import { getOfferStatus, type OfferStatus } from "@/lib/utils";
import { useNow } from "@/lib/useNow";

const STATUS_LABEL: Record<OfferStatus, string> = {
  upcoming: "Coming Soon",
  live: "Live Now",
  ended: "Offer Ended",
};

function StatusBadge({ status }: { status: OfferStatus }) {
  if (status === "live") {
    return (
      <span className="inline-flex w-fit items-center gap-2 bg-emerald px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-background">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-background/70" />
          <span className="relative inline-flex size-1.5 rounded-full bg-background" />
        </span>
        {STATUS_LABEL[status]}
      </span>
    );
  }

  if (status === "ended") {
    return (
      <span className="inline-flex w-fit items-center gap-2 border border-foreground/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
        {STATUS_LABEL[status]}
      </span>
    );
  }

  return (
    <span className="inline-flex w-fit items-center gap-2 border border-emerald/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald">
      {STATUS_LABEL[status]}
    </span>
  );
}

export function ElefinBirthdayOfferSection() {
  const now = useNow();
  // Default to "upcoming" until the client determines the real date —
  // it self-corrects immediately after hydration (see useNow).
  const status: OfferStatus =
    now === null
      ? "upcoming"
      : getOfferStatus(elefinBirthdayOffer.window.start, elefinBirthdayOffer.window.end, now);

  return (
    <section className="flex flex-col gap-14 px-5 py-22 sm:px-10 sm:py-28 lg:py-40">
      <Reveal className="flex flex-col items-start gap-5">
        <StatusBadge status={status} />
      </Reveal>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <RevealGroup className="flex flex-col border-t border-emerald/25" stagger={0.08}>
          {elefinBirthdayOffer.steps.map((step, index) => (
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
        </RevealGroup>

        <Reveal delay={0.1}>
          {status === "live" ? (
            <ElefinBirthdayForm />
          ) : status === "upcoming" ? (
            <div className="flex h-full flex-col items-start gap-4 border border-dashed border-emerald/30 bg-ink p-8 sm:p-10">
              <span className="text-[11px] uppercase tracking-[0.28em] text-emerald">
                Opens {elefinBirthdayOffer.window.display}
              </span>
              <h3 className="font-serif text-2xl font-bold tracking-tight">
                Registration isn&rsquo;t open yet
              </h3>
              <p className="text-[15px] font-light leading-[1.7] text-muted">
                Check back on {elefinBirthdayOffer.window.startDisplay}, or
                watch the community for the announcement.
              </p>
            </div>
          ) : (
            <div className="flex h-full flex-col items-start gap-4 border border-emerald/20 bg-ink p-8 sm:p-10">
              <h3 className="font-serif text-2xl font-bold tracking-tight">
                This offer has ended
              </h3>
              <p className="text-[15px] font-light leading-[1.7] text-muted">
                The {elefinBirthdayOffer.window.display} window has closed.
                Check the Rewards page for what&rsquo;s currently running.
              </p>
              <a
                href="/rewards"
                className="mt-2 inline-block w-fit border border-emerald px-8 py-[18px] text-[12px] uppercase tracking-[0.2em] text-emerald transition-colors hover:bg-emerald hover:text-background"
              >
                See Current Rewards
              </a>
            </div>
          )}
        </Reveal>
      </div>

      <p className="max-w-2xl text-xs leading-relaxed text-[#5A6476]">
        One bonus per new account. Deposit and trade requirements are set by{" "}
        {elefinBirthdayOffer.brokerName} — review their terms before
        depositing.
      </p>
    </section>
  );
}
