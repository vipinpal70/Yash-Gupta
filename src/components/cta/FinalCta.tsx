import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { ShimmerText } from "../landing/ShimmerText";

export function FinalCta() {
  return (
    <section className="py-28 sm:py-32 lg:py-40">
      <Container className="flex flex-col items-center gap-10 text-center">
        <Reveal>
          <h2 className="max-w-3xl font-sans text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Your trading journey deserves a{" "}
            <ShimmerText>better process.</ShimmerText>
            {/* <span className="font-serif italic text-emerald">
              better process.
            </span> */}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Build a clearer framework for analysis, execution and risk — and
            surround yourself with traders who take the craft seriously.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton>
            <Button href={siteConfig.communityUrl} variant="primary" arrow="up-right">
              Join the Community
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button href="https://forms.gle/VqZUrjizGNitygR17" external variant="secondary" arrow="right">
              Book Mentorship
            </Button>
          </MagneticButton>
        </Reveal>
      </Container>
    </section>
  );
}
