"use client";

import Link from "next/link";
import Image from "next/image";
import { nav } from "@/data/yash-gupta-landing";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-6 border-b border-emerald/15 bg-background/90 px-5 py-5 backdrop-blur-xl sm:px-10">
      <Link
        href="/#top"
        className="group flex flex-shrink-0 items-center gap-3.5 transition-opacity hover:opacity-95"
        aria-label="Yash Gupta"
      >
        <Image
          src="/apple-icon"
          alt="YG"
          width={40}
          height={40}
          className="size-10 rounded-xl object-contain shadow-[0_2px_12px_rgba(30,79,216,0.35)] ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
          priority
          unoptimized
        />
        <div className="flex flex-col justify-center leading-none">
          <span className="font-serif text-[18px] font-bold tracking-tight text-foreground">
            Yash
          </span>
          <span className="font-serif text-[18px] font-bold tracking-tight text-foreground">
            Gupta
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-9 whitespace-nowrap text-xs uppercase tracking-[0.18em]">
        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-bold text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="border border-emerald px-5 py-3 font-bold text-emerald transition-colors hover:bg-emerald hover:text-background"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
