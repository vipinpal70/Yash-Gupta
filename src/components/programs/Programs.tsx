import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { programs } from "@/data/programs";

export function Programs({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="programs" className="py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        {showHeading ? (
          <SectionHeading
            eyebrow="04 / Programs"
            title={
              <>
                Choose the level of{" "}
                <span className="font-serif italic text-emerald">
                  support
                </span>{" "}
                you need.
              </>
            }
          />
        ) : null}

        <RevealGroup
          className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
          stagger={0.1}
        >
          {programs.map((program) => (
            <RevealItem key={program.slug} className="h-full">
              <ProgramCard {...program} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
