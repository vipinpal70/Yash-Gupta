import { Reveal } from "@/components/ui/Reveal";
import { elefinOffer } from "@/data/elefin-offer";

export function ElefinOfferSection() {
  return (
    <section className="px-5 py-16 sm:px-10 sm:py-24 lg:py-32">
      <Reveal className="mx-auto flex max-w-4xl flex-col border-t border-emerald/25">
        {elefinOffer.steps.map((step) => (
          <div
            key={step.title}
            className="grid grid-cols-[48px_1fr] items-baseline gap-5 border-b border-emerald/25 py-7 sm:grid-cols-[56px_1fr]"
          >
            <span className="font-sans text-xl font-extrabold text-emerald sm:text-2xl">
              {step.number}
            </span>
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-sans text-lg font-bold sm:text-xl">
                  {step.title}
                  {step.href ? (
                    <a
                      href={step.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2.5 inline-flex items-center gap-1 text-sm font-semibold text-emerald hover:underline"
                    >
                      [Open Elefin] →
                    </a>
                  ) : null}
                </span>
                {step.description ? (
                  <p className="mt-1 text-[15px] font-light text-muted">
                    {step.description}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
        <p className="max-w-xl pt-8 text-xs leading-relaxed text-[#5A6476]">
          This offer is run in partnership with {elefinOffer.brokerName} for{" "}
          {elefinOffer.window.display} and is limited to verified community
          members. Eligibility is confirmed manually, not automatically.
        </p>
      </Reveal>
    </section>
  );
}
