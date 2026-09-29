import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup } from "@/components/ui/Reveal";
import { MethodologyStep } from "@/components/methodology/MethodologyStep";
import { methodologySteps } from "@/data/methodology";

export function Methodology() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="03 / Methodology"
          title={
            <>
              A better trade starts{" "}
              <span className="font-serif italic text-emerald">before</span>{" "}
              the entry.
            </>
          }
        />

        <RevealGroup className="relative flex flex-col" stagger={0.12}>
          <div
            aria-hidden="true"
            className="absolute inset-y-2 left-[15px] w-px bg-foreground/10 sm:left-[19px]"
          />
          {methodologySteps.map((step) => (
            <MethodologyStep key={step.number} {...step} />
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
