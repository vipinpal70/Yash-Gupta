import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/data/yash-gupta-landing";

export function AboutSection() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 items-center gap-12 border-t border-emerald/15 px-5 py-22 sm:px-10 sm:py-28 lg:grid-cols-2 lg:py-40"
    >
      <Reveal y={40} className="border border-emerald/28 p-3.5">
        <div className="aspect-4/3 overflow-hidden bg-ink">
          <Image
            src={about.image}
            alt="Yash Gupta at his trading desk"
            width={1600}
            height={1200}
            className="block h-full w-full object-cover object-[60%_50%]"
          />
        </div>
      </Reveal>

      <Reveal y={40} className="flex flex-col gap-7">
        <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
          {about.eyebrow}
        </span>
        <h2 className="font-sans text-[clamp(34px,4.1vw,62px)] font-extrabold leading-none">
          {about.title[0].text}
          <span className="text-emerald">{about.title[1].text}</span>
        </h2>
        <p className="text-pretty text-base font-medium leading-[1.75] text-[#CCD6E6]">
          {about.lead}
        </p>
        <p className="text-pretty text-base font-light leading-[1.75] text-muted">
          {about.body}
        </p>
      </Reveal>
    </section>
  );
}
