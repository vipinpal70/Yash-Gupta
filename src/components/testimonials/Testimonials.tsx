import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="06 / Student Stories"
          title={
            <>
              The value is in the{" "}
              <span className="font-serif italic text-emerald">process.</span>
            </>
          }
        />

        <RevealGroup
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          stagger={0.1}
        >
          {testimonials.map((testimonial) => (
            <RevealItem key={testimonial.quote} className="h-full">
              <TestimonialCard {...testimonial} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
