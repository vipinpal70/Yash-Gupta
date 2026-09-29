import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { communityPrinciples } from "@/data/community";
import { siteConfig } from "@/data/site";

export function CommunitySection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  const discordUrl = siteConfig.social.discord || siteConfig.communityUrl;
  const telegramUrl = siteConfig.social.telegram || siteConfig.communityUrl;

  return (
    <section
      id="community"
      className="relative overflow-hidden bg-ink py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 size-[640px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-emerald/25 blur-[160px]"
      />

      <Container className="relative flex flex-col items-center gap-14">
        {showHeading ? (
          <SectionHeading
            eyebrow="Community"
            align="center"
            tone="dark"
            title={
              <>
                Learn alongside traders who take the market{" "}
                <span className="font-serif italic text-gold">
                  seriously.
                </span>
              </>
            }
            description="A focused community for education, discussion and continuous improvement across crypto and gold markets."
          />
        ) : null}

        <Reveal
          delay={0.1}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton>
            <Button href={discordUrl} tone="dark" variant="primary" arrow="up-right">
              Join Discord
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button
              href={telegramUrl}
              tone="dark"
              variant="secondary"
              arrow="up-right"
            >
              Join Telegram
            </Button>
          </MagneticButton>
        </Reveal>

        <RevealGroup
          className="grid w-full grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 lg:grid-cols-4"
          stagger={0.08}
        >
          {communityPrinciples.map((principle) => (
            <RevealItem
              key={principle.title}
              className="flex flex-col gap-2 bg-ink p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {principle.title}
              </span>
              <span className="text-sm leading-relaxed text-white/65">
                {principle.description}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        {siteConfig.communityStats ? (
          <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-4">
            {siteConfig.communityStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 text-center"
              >
                <span className="font-serif text-4xl text-white">
                  {stat.members}
                </span>
                <span className="text-xs uppercase tracking-wide text-white/55">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
