import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PartnerCard } from "@/components/partners/PartnerCard";
import { partners, partnersDisclaimer } from "@/data/partners";

export function PartnersSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section className="border-t border-foreground/10 py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-10">
        {showHeading ? (
          <SectionHeading
            eyebrow="Partners"
            title={
              <>
                Brokers &amp;{" "}
                <span className="font-serif italic text-emerald">
                  prop firms.
                </span>
              </>
            }
            description="A short list of the kind of platforms worth trading with — not the entire market."
          />
        ) : null}

        <RevealGroup
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {partners.map((partner) => (
            <RevealItem key={partner.name}>
              <PartnerCard {...partner} />
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="max-w-2xl text-xs leading-relaxed text-muted">
          {partnersDisclaimer}
        </p>
      </Container>
    </section>
  );
}
