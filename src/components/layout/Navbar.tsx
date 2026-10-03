"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/yash-gupta-landing";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald/15 bg-background/90 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-6 px-5 py-4 sm:px-10">
        <Link
          href="/#top"
          className="group flex flex-shrink-0 items-center gap-3.5 transition-opacity hover:opacity-95"
          aria-label="Yash Gupta"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/yg-monogram.png"
            alt="YG"
            width={40}
            height={40}
            className="size-10 rounded-xl object-contain shadow-[0_2px_12px_rgba(30,79,216,0.35)] ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="font-serif text-[17px] font-bold tracking-tight text-foreground sm:text-[18px]">
              Yash
            </span>
            <span className="font-serif text-[17px] font-bold tracking-tight text-foreground sm:text-[18px]">
              Gupta
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-9 whitespace-nowrap text-xs uppercase tracking-[0.18em] lg:flex">
          <nav className="flex items-center gap-9">
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

        {/* Mobile controls: Enquire button + Hamburger toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/#contact"
            className="border border-emerald px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald transition-colors hover:bg-emerald hover:text-background"
          >
            Enquire
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex size-10 items-center justify-center rounded-lg border border-emerald/30 bg-emerald/10 text-foreground transition-colors hover:border-emerald hover:text-emerald"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-emerald/15 bg-background/95 px-5 py-6 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-4 text-xs uppercase tracking-[0.2em]">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border-b border-white/5 pb-3 font-bold text-muted transition-colors hover:text-emerald"
              >
                <span>{item.label}</span>
                <span className="text-emerald/50">→</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
