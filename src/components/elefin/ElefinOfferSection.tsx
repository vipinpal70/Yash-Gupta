import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ElefinRegisterForm } from "@/components/elefin/ElefinRegisterForm";
import { elefinOffer } from "@/data/elefin-offer";

const steps = [
  {
    title: "Register with your email",
    description:
      "Use the email linked to your Elefin broker account so it can be matched during review.",
  },
  {
    title: "We verify your membership",
    description:
      "Our team manually checks that you're part of the community before confirming eligibility.",
  },
  {
    title: "Trade fee-free with Elefin",
    description: `Confirmed members trade with a full fee return through ${elefinOffer.window.display}.`,
  },
];

export function ElefinOfferSection() {
  return (
    <section className="grid grid-cols-1 gap-10 px-5 py-22 sm:px-10 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:py-40">
      <Reveal className="flex flex-col border-t border-emerald/25">
        {steps.map((step, index) => (
          <div
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
          </div>
        ))}
        <p className="max-w-md pt-8 text-xs leading-relaxed text-[#5A6476]">
          This offer is run in partnership with {elefinOffer.brokerName} for{" "}
          {elefinOffer.window.display} and is limited to verified community
          members. Eligibility is confirmed manually, not automatically.
        </p>
      </Reveal>

      <RevealGroup stagger={0.1}>
        <RevealItem>
          <ElefinRegisterForm />
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
