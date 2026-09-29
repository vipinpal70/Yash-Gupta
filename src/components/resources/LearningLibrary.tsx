import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { learningLibrary } from "@/data/resources";

export function LearningLibrary() {
  return (
    <section className="border-t border-foreground/10 py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Learning Library"
          title={
            <>
              Strategy, tools and{" "}
              <span className="font-serif italic text-emerald">
                live support.
              </span>
            </>
          }
          description="Included as part of mentorship and community access — not one-off downloads, but an ongoing library."
        />

        <RevealGroup
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {learningLibrary.map((resource) => (
            <RevealItem key={resource.slug}>
              <ResourceCard {...resource} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
