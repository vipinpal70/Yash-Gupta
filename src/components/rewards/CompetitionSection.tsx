import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { LeaderboardTable } from "@/components/rewards/LeaderboardTable";
import { competition } from "@/data/rewards";
import { daysUntil } from "@/lib/utils";

function StepGrid() {
  return (
    <RevealGroup
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      stagger={0.08}
    >
      {competition.steps.map((step, index) => (
        <RevealItem key={step.title}>
          <div className="flex h-full flex-col gap-5 border border-emerald/20 bg-ink p-9">
            <span className="font-serif text-[44px] font-extrabold leading-none text-emerald">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-serif text-2xl font-bold leading-tight">
              {step.title}
            </h3>
            <p className="text-pretty text-[15px] font-light leading-[1.7] text-muted">
              {step.description}
            </p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

function CompetitionStatus() {
  const current = competition.current;

  if (!current) {
    return (
      <Reveal>
        <div className="flex flex-col items-start gap-4 border border-dashed border-emerald/30 bg-ink p-8 sm:p-10">
          <span className="text-[11px] uppercase tracking-[0.28em] text-emerald">
            Next Competition
          </span>
          <h3 className="font-serif text-2xl font-bold tracking-tight">
            No competition is running right now
          </h3>
          <p className="max-w-md text-pretty text-[15px] font-light leading-[1.7] text-muted">
            Register your interest and you&rsquo;ll be notified as soon as
            entries open for the next one.
          </p>
          <a
            href={competition.registerCta.href}
            className="mt-2 inline-block w-fit border border-emerald px-8 py-[18px] text-[12px] uppercase tracking-[0.2em] text-emerald transition-colors hover:bg-emerald hover:text-background"
          >
            {competition.registerCta.label}
          </a>
        </div>
      </Reveal>
    );
  }

  const daysLeft = daysUntil(current.endDate);

  return (
    <div className="flex flex-col gap-6">
      <Reveal>
        <div className="flex flex-col gap-8 border border-emerald/40 bg-[linear-gradient(160deg,rgba(91,155,255,0.16),rgba(91,155,255,0.02)_60%)] p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex w-fit items-center gap-1.5 bg-emerald px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-background">
              <span className="size-1.5 rounded-full bg-background" />
              Live Now
            </span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-emerald">
              {daysLeft} {daysLeft === 1 ? "day" : "days"} left
            </span>
          </div>

          <h3 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            {current.name}
          </h3>

          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <dt className="text-[11px] uppercase tracking-[0.24em] text-muted">
                Period
              </dt>
              <dd className="text-sm font-semibold text-foreground">
                {current.period}
              </dd>
            </div>
            <div className="flex flex-col gap-1.5">
              <dt className="text-[11px] uppercase tracking-[0.24em] text-muted">
                Minimum Capital
              </dt>
              <dd className="text-sm font-semibold text-foreground">
                {current.minimumCapital}
              </dd>
            </div>
            <div className="flex flex-col gap-1.5">
              <dt className="text-[11px] uppercase tracking-[0.24em] text-muted">
                Ranking
              </dt>
              <dd className="text-sm font-semibold text-foreground">
                {current.ranking}
              </dd>
            </div>
          </dl>

          {current.totalPrizePool ? (
            <div className="flex flex-col gap-1.5 border-t border-emerald/20 pt-6">
              <span className="text-[11px] uppercase tracking-[0.24em] text-muted">
                Total Prize Pool
              </span>
              <span className="font-serif text-4xl font-bold text-emerald">
                {current.totalPrizePool}
              </span>
            </div>
          ) : null}

          {current.rewards?.length ? (
            <ul className="flex flex-col gap-3 border-t border-emerald/20 pt-6 sm:flex-row sm:gap-8">
              {current.rewards.map((reward) => (
                <li
                  key={reward.place}
                  className="flex items-center justify-between gap-4 text-sm sm:flex-col sm:items-start sm:gap-1"
                >
                  <span className="text-[11px] uppercase tracking-[0.24em] text-muted">
                    {reward.place}
                  </span>
                  <span className="font-semibold text-foreground">
                    {reward.amount}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}

          <a
            href={competition.joinCta.href}
            className="inline-block w-fit bg-emerald px-8 py-[18px] text-[12px] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground"
          >
            {competition.joinCta.label}
          </a>
        </div>
      </Reveal>

      {current.leaderboard?.length ? (
        <Reveal delay={0.1}>
          <LeaderboardTable entries={current.leaderboard} />
        </Reveal>
      ) : null}
    </div>
  );
}

function RulesAndDisclosures() {
  return (
    <div className="flex flex-col gap-10 border-t border-emerald/15 pt-16">
      <Reveal y={40} className="flex flex-col gap-6">
        <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
          {competition.rulesEyebrow}
        </span>
        <h3 className="text-balance font-serif text-[clamp(28px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight">
          {competition.rulesTitle.map((part, i) => (
            <span key={i} className={part.plain ? "text-emerald" : ""}>
              {part.text}
            </span>
          ))}
        </h3>
        <p className="max-w-lg text-pretty text-base font-light leading-[1.75] text-muted">
          {competition.rulesDescription}
        </p>
      </Reveal>

      <RevealGroup
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        stagger={0.08}
      >
        {competition.rules.map((rule) => (
          <RevealItem key={rule.title}>
            <div className="flex h-full flex-col gap-3 border border-emerald/20 bg-ink p-8">
              <h4 className="font-serif text-lg font-bold tracking-tight">
                {rule.title}
              </h4>
              <p className="text-pretty text-[15px] font-light leading-[1.7] text-muted">
                {rule.description}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <ul className="flex flex-col gap-2">
        {competition.disclosures.map((line) => (
          <li key={line} className="text-xs leading-relaxed text-[#5A6476]">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CompetitionSection() {
  return (
    <section
      id="competition"
      className="flex flex-col gap-16 border-t border-emerald/15 px-5 py-22 sm:px-10 sm:py-28 lg:py-40"
    >
      <Reveal y={40} className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
            {competition.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(34px,4.4vw,70px)] font-extrabold leading-[1] tracking-tight">
            {competition.title.map((part, i) => (
              <span key={i} className={part.plain ? "text-emerald" : ""}>
                {part.text}
              </span>
            ))}
          </h2>
        </div>
        <p className="max-w-[420px] text-pretty text-base font-light leading-[1.75] text-muted lg:justify-self-end">
          {competition.description}
        </p>
      </Reveal>

      <StepGrid />
      <CompetitionStatus />
      <RulesAndDisclosures />
    </section>
  );
}
