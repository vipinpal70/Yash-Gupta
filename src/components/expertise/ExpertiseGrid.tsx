import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ExpertiseCard } from "@/components/expertise/ExpertiseCard";
import { expertise } from "@/data/expertise";

export function ExpertiseGrid() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[520px] rounded-full bg-emerald/20 blur-[140px]"
      />

      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="02 / Expertise"
          title={
            <>
              What I help you{" "}
              <span className="font-serif italic text-gold">build.</span>
            </>
          }
          tone="dark"
        />

        <RevealGroup
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {expertise.map((item) => (
            <RevealItem key={item.number}>
              <ExpertiseCard {...item} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
