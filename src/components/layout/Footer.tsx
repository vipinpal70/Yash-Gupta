import Link from "next/link";
import Image from "next/image";
import { footer } from "@/data/yash-gupta-landing";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-6 border-t border-emerald/15 px-5 py-9 text-xs text-[#6E7A8F] sm:px-10">
      <Link
        href="/#top"
        className="group flex items-center gap-3 transition-opacity hover:opacity-95"
        aria-label="Yash Gupta"
      >
        <Image
          src="/apple-icon"
          alt="YG"
          width={36}
          height={36}
          className="size-9 rounded-xl object-contain shadow-[0_2px_12px_rgba(30,79,216,0.35)] ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
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
      <span className="max-w-xl leading-relaxed">
        {footer.disclaimer} © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
