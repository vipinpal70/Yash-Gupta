import Link from "next/link";
import Image from "next/image";
import { footer } from "@/data/yash-gupta-landing";
import { SocialIcon } from "@/components/ui/SocialIcon";

const socialHoverStyles: Record<string, string> = {
  instagram:
    "hover:border-transparent hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white hover:shadow-[0_0_20px_rgba(253,29,29,0.35)]",
  youtube:
    "hover:border-[#FF0000] hover:bg-[#FF0000]/15 hover:text-[#FF0000] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]",
  telegram:
    "hover:border-[#229ED9] hover:bg-[#229ED9]/15 hover:text-[#229ED9] hover:shadow-[0_0_15px_rgba(34,158,217,0.3)]",
};

export function Footer() {
  return (
    <footer className="flex flex-col gap-6 border-t border-emerald/15 px-5 py-9 text-xs text-[#6E7A8F] sm:px-10">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Link
          href="/#top"
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
          aria-label="Yash Gupta"
        >
          <Image
            src="/yg-monogram.png"
            alt="YG"
            width={36}
            height={36}
            className="size-11 rounded-xl object-contain shadow-[0_2px_12px_rgba(30,79,216,0.35)] ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
            unoptimized
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="font-serif text-[17px] font-bold tracking-tight text-foreground">
              Yash
            </span>
            <span className="font-serif text-[17px] font-bold tracking-tight text-foreground">
              Gupta
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          {footer.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/5 px-4 py-2 text-xs font-medium text-foreground/80 transition-all duration-300 ${
                socialHoverStyles[social.network] ||
                "hover:border-emerald hover:bg-emerald/15 hover:text-emerald"
              }`}
              aria-label={social.label}
            >
              <SocialIcon network={social.network} className="size-4" />
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-emerald/10 pt-6">
        <span className="max-w-xl leading-relaxed">
          {footer.disclaimer}
        </span>
        <span>© {new Date().getFullYear()} Yash Gupta. All rights reserved.</span>
      </div>
    </footer>
  );
}
