import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { resources, featuredResource } from "@/data/resources";

export function Resources({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        {showHeading ? (
          <SectionHeading
            eyebrow="05 / Resources"
            title={
              <>
                Useful tools.{" "}
                <span className="font-serif italic text-emerald">
                  Zero noise.
                </span>
              </>
            }
          />
        ) : null}

        <RevealGroup
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {resources.map((resource) => (
            <RevealItem key={resource.slug}>
              <ResourceCard {...resource} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] border border-emerald/25 bg-emerald/5 p-10 sm:flex-row sm:items-center sm:p-12">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">
                Featured Resource
              </span>
              <h3 className="max-w-md text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                {featuredResource.title}
              </h3>
              <p className="max-w-lg text-base leading-relaxed text-muted">
                {featuredResource.description}
              </p>
            </div>
            <Button
              href={featuredResource.href}
              variant="primary"
              arrow="up-right"
              className="shrink-0"
            >
              {featuredResource.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
