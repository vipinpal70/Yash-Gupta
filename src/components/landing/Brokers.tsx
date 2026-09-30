"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, ExternalLink, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ShimmerText } from "@/components/landing/ShimmerText";

export type BrokerItem = {
  name: string;
  category: "Partner Broker" | "Prop Firm" | "Crypto Exchange";
  href: string;
  code?: string;
  logoText: string;
  logoImage?: string;
  badgeBg: string;
  badgeTextColor: string;
  badgeBorder: string;
};

export const brokerPlatforms: BrokerItem[] = [
  {
    name: "XM",
    category: "Partner Broker",
    href: "https://clicks.pipaffiliates.com/c?c=1154541&l=en&p=1",
    code: "YASHGUPTA",
    logoText: "XM",
    logoImage: "/xm_logo.jpeg",
    badgeBg: "bg-[#1A1A1A]",
    badgeTextColor: "text-red-500 font-black",
    badgeBorder: "border-red-500/30",
  },
  {
    name: "Xellion",
    category: "Partner Broker",
    href: "http://account.xellion.com/signup/SRmN6ZTS",
    code: "YASHGUPTA",
    logoText: "XL",
    logoImage: "/xellion.png",
    badgeBg: "bg-[#0D2419]",
    badgeTextColor: "text-emerald-400 font-bold",
    badgeBorder: "border-emerald-500/30",
  },
  {
    name: "Bitfunded",
    category: "Prop Firm",
    href: "https://www.bitfunded.com/client/register?regid=5552644533",
    code: "YASHGUPTA",
    logoText: "BF",
    logoImage: "/bitfunded.webp",
    badgeBg: "bg-[#2A2008]",
    badgeTextColor: "text-amber-400 font-extrabold",
    badgeBorder: "border-amber-500/40",
  },
  {
    name: "Funded Friday",
    category: "Prop Firm",
    href: "https://fundedfriday.com/checkout?ref=YASHGUPTA",
    code: "YASHGUPTA",
    logoText: "FF",
    logoImage: "/Funded-Friday.webp",
    badgeBg: "bg-[#1E1B4B]",
    badgeTextColor: "text-indigo-300 font-extrabold",
    badgeBorder: "border-indigo-500/30",
  },
  {
    name: "Coin DCX",
    category: "Crypto Exchange",
    href: "https://join.coindcx.com/invite/LcsTQ",
    logoText: "DCX",
    logoImage: "/coin-dcx.webp",
    badgeBg: "bg-[#0A2540]",
    badgeTextColor: "text-blue-400 font-bold",
    badgeBorder: "border-blue-500/30",
  },
  {
    name: "BingX",
    category: "Crypto Exchange",
    href: "https://bingx.com/partner/YashGupta",
    code: "YashGupta",
    logoText: "BX",
    logoImage: "/bingx.webp",
    badgeBg: "bg-[#0F2942]",
    badgeTextColor: "text-cyan-400 font-extrabold",
    badgeBorder: "border-cyan-500/30",
  },
  {
    name: "CoinSwitch",
    category: "Crypto Exchange",
    href: "https://coinswitch.co/pro/signup?code=qXSfkqh",
    logoText: "CS",
    logoImage: "/coinswitch.webp",
    badgeBg: "bg-[#062C22]",
    badgeTextColor: "text-teal-400 font-extrabold",
    badgeBorder: "border-teal-500/30",
  },
  {
    name: "Funded Squad",
    category: "Prop Firm",
    href: "https://fundedsquad.com/?squad=2548",
    code: "YG",
    logoText: "FS",
    logoImage: "/funded-squad.webp",
    badgeBg: "bg-[#2C1802]",
    badgeTextColor: "text-orange-400 font-extrabold",
    badgeBorder: "border-orange-500/30",
  },
  {
    name: "Elefin",
    category: "Partner Broker",
    href: "https://partners.elefin.com/go/YASH",
    code: "YASH",
    logoText: "EL",
    logoImage: "/elefin.webp",
    badgeBg: "bg-[#0F172A]",
    badgeTextColor: "text-sky-400 font-extrabold",
    badgeBorder: "border-sky-500/30",
  },
];

export function Brokers() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  return (
    <section id="broker" className="px-5 pt-14 sm:px-10 sm:pt-20 lg:pt-28">
      <Container className="flex flex-col gap-12 sm:gap-16">
        {/* Header */}
        <Reveal y={40} className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-emerald" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-emerald">
                Partner Platforms
              </span>
            </div>
            <h2 className="font-sans text-[clamp(34px,4.4vw,70px)] font-extrabold leading-[1] tracking-tight">
              Partner <ShimmerText>Brokers.</ShimmerText>
            </h2>
          </div>
          <p className="max-w-[420px] text-pretty text-base font-light leading-[1.75] text-muted lg:justify-self-end">
            Verified trading platforms &amp; prop firms partnered with Yash Gupta. Sign up using the official referral links below.
          </p>
        </Reveal>

        {/* Grid of Cards */}
        <RevealGroup
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {brokerPlatforms.map((broker) => (
            <RevealItem key={broker.name}>
              <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-surface/90 p-6 sm:p-7 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald/40 hover:bg-surface-strong hover:shadow-[0_20px_50px_-20px_rgba(34,197,94,0.25)]">
                <div className="flex flex-col gap-6">
                  {/* Top row: Badge logo + Broker details */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${broker.badgeBg} ${broker.badgeTextColor} ${broker.badgeBorder} shadow-inner text-lg tracking-wider`}
                    >
                      {broker.logoImage ? (
                        <Image
                          src={broker.logoImage}
                          alt={broker.name}
                          width={56}
                          height={56}
                          className="size-full object-cover"
                        />
                      ) : (
                        broker.logoText
                      )}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <h3 className="font-sans text-xl font-bold tracking-tight text-white transition-colors group-hover:text-emerald">
                        {broker.name}
                      </h3>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        {broker.category}
                      </span>
                      <span className="mt-1 h-0.5 w-6 rounded-full bg-emerald/70" />
                    </div>
                  </div>

                  {/* Open Account Button */}
                  <a
                    href={broker.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-none bg-emerald px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-ink transition-all duration-300 hover:bg-emerald-light active:scale-[0.98]"
                  >
                    <span>Open Account</span>
                    <ExternalLink className="size-4 opacity-80" />
                  </a>
                </div>

                {/* Footer Code Badge */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  {broker.code ? (
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs">
                      <span className="text-muted font-medium">
                        Use Code:{" "}
                        <span className="font-mono font-bold text-white tracking-wide">
                          {broker.code}
                        </span>
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(broker.code!)}
                        className="flex items-center gap-1.5 rounded-none px-2.5 py-1 font-semibold text-emerald transition-colors hover:text-ink"
                        title="Copy Code"
                      >
                        {copiedCode === broker.code ? (
                          <>
                            <Check className="size-3.5 text-emerald-400" />
                            <span className="text-[10px] text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3.5" />
                            <span className="text-[10px]">Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-1.5 rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5 text-xs text-muted">
                      <ShieldCheck className="size-3.5 text-emerald-400" />
                      <span className="text-[11px] font-medium">Direct Partner Link</span>
                    </div>
                  )}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Disclaimer */}
        <Reveal y={10} className="text-center">
          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-muted mb-8">
            Broker links are provided for convenience. Review a platform&apos;s terms and regulatory status before depositing.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
