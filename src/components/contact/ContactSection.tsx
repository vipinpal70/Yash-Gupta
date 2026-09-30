import Image from "next/image";
import { ShimmerText } from "@/components/landing/ShimmerText";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { contact } from "@/data/yash-gupta-landing";

export function ContactSection() {
  return (
    <section id="contact" className="px-5 pb-22 pt-6 sm:px-10 sm:pb-28 lg:pb-40">
      <div className="relative grid grid-cols-1 items-center gap-12 overflow-hidden border border-emerald/40 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(91,155,255,0.2),transparent_70%)] p-8 shadow-[0_0_120px_rgba(91,155,255,0.08)_inset] sm:p-16 lg:grid-cols-2">
        <Reveal y={40} className="relative z-[1] flex flex-col items-start gap-8">
          <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
            {contact.eyebrow}
          </span>
          <h2 className="text-balance font-sans text-[clamp(34px,4.5vw,72px)] font-extrabold leading-[1.02] tracking-tight">
            {contact.title[0].text}
            <ShimmerText>{contact.title[1].text}</ShimmerText>
          </h2>
          <p className="max-w-[480px] text-pretty text-base font-light leading-[1.75] text-muted">
            {contact.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald px-8 py-[18px] text-[12px] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground"
            >
              {contact.whatsapp.label}
            </a>
            <a
              href={contact.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/24 px-8 py-[18px] text-[12px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-emerald hover:text-emerald"
            >
              {contact.instagram.label}
            </a>
          </div>

          <div className="flex w-full flex-col gap-6 border-t border-foreground/12 pt-8">
            <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
              Or send a message
            </span>
            <ContactForm />
          </div>
        </Reveal>

        <div className="relative flex justify-center">
          <div className="absolute inset-x-[5%] inset-y-[10%] rounded-full bg-[radial-gradient(circle,rgba(91,155,255,0.35),rgba(91,155,255,0)_65%)] blur-[30px]" />
          <Reveal y={40} className="relative w-full max-w-[460px] border border-emerald/30 p-3">
            <Image
              src={contact.image}
              alt="Yash Gupta"
              width={1200}
              height={1500}
              className="block aspect-4/5 w-full object-cover object-[50%_12%]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
