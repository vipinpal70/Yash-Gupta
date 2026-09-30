"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, ExternalLink, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ShimmerText } from "@/components/landing/ShimmerText";

export type BrokerItem = {
  name: string;
  category: "Partner Broker" | "Prop Firm";
  href: string;
  code?: string;
  logoText: string;
  logoImage?: string;
  badgeBg: string;
  badgeTextColor: string;
  badgeBorder: string;
};

export const partnerBrokers: BrokerItem[] = [
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
  {
    name: "CoinSwitch",
    category: "Partner Broker",
    href: "https://coinswitch.co/pro/signup?code=qXSfkqh",
    logoText: "CS",
    logoImage: "/coinswitch.jpg",
    badgeBg: "bg-[#062C22]",
    badgeTextColor: "text-teal-400 font-extrabold",
    badgeBorder: "border-teal-500/30",
  },
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
];

export const partnerPropFirms: BrokerItem[] = [
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
    name: "Blue Guardian",
    category: "Prop Firm",
    href: "https://blueguardian.com/?afmc=YG",
    code: "YG",
    logoText: "BG",
    logoImage: "/blueguardian.png",
    badgeBg: "bg-[#0B1E3D]",
    badgeTextColor: "text-blue-400 font-extrabold",
    badgeBorder: "border-blue-500/30",
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

  const renderCard = (broker: BrokerItem) => (
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
              <h4 className="font-sans text-xl font-bold tracking-tight text-white transition-colors group-hover:text-emerald">
                {broker.name}
              </h4>
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
  );

  return (
    <section id="broker" className="px-5 pt-14 sm:px-10 sm:pt-20 lg:pt-28">
      <Container className="flex flex-col gap-12 sm:gap-16">
        {/* Main Header */}
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

        {/* Part 1: Partner Brokers */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-emerald/20 pb-3">
            <span className="h-2 w-2 rounded-full bg-emerald" />
            <h3 className="font-sans text-2xl font-bold tracking-tight text-white">
              Partner Brokers
            </h3>
          </div>
          <RevealGroup
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {partnerBrokers.map(renderCard)}
          </RevealGroup>
        </div>

        {/* Part 2: Partner Prop Firms */}
        <div className="flex flex-col gap-6 pt-4">
          <div className="flex items-center gap-3 border-b border-emerald/20 pb-3">
            <span className="h-2 w-2 rounded-full bg-emerald" />
            <h3 className="font-sans text-2xl font-bold tracking-tight text-white">
              Partner Prop Firms
            </h3>
          </div>
          <RevealGroup
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {partnerPropFirms.map(renderCard)}
          </RevealGroup>
        </div>

        {/* Disclaimer */}
        <Reveal y={10} className="text-center">
          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-muted mb-8">
            After purchase do not forget to whatsapp for cashback
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
