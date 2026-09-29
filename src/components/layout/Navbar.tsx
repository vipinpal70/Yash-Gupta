"use client";

import Link from "next/link";
import { brand, nav } from "@/data/yash-gupta-landing";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-6 border-b border-emerald/15 bg-background/90 px-5 py-5 backdrop-blur-xl sm:px-10">
      <Link
        href="/#top"
        className="flex flex-shrink-0 items-baseline gap-3 whitespace-nowrap text-foreground"
      >
        <span className="font-serif text-2xl font-bold tracking-tight">
          {brand.name}
        </span>
        <span className="text-[10px] uppercase tracking-[0.32em] text-emerald">
          {brand.tag}
        </span>
      </Link>

      <div className="flex items-center gap-9 whitespace-nowrap text-xs uppercase tracking-[0.18em]">
        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="border border-emerald px-5 py-3 text-emerald transition-colors hover:bg-emerald hover:text-background"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
