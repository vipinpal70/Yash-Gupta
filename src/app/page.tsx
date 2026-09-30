import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { ElefinOfferBanner } from "@/components/elefin/ElefinOfferBanner";
import { ElefinBirthdayBanner } from "@/components/elefin/ElefinBirthdayBanner";
import { Marquee } from "@/components/landing/Marquee";
import { BigStats } from "@/components/landing/BigStats";
import { WhyYash } from "@/components/landing/WhyYash";
import { Mentorship } from "@/components/mentorship/Mentorship";
import { FiveXTraders } from "@/components/landing/FiveXTraders";
import { Tools } from "@/components/landing/Tools";
import { TradersHunt } from "@/components/landing/TradersHunt";
import { Brokers } from "@/components/landing/Brokers";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
	title: "Yash Gupta — Crypto & Gold Trader, Mentor",
	description:
		"I'm Yash Gupta. For 12+ years I've traded Bitcoin and Gold with my own multi-timeframe system — and I teach it exactly the way I use it.",
	alternates: { canonical: "/" },
};

export default function Home() {
	return (
		<>
			<div className="flex w-full items-center justify-center px-5 pt-3 sm:px-10 sm:pt-6">
				<ElefinOfferBanner />
				{/* <ElefinBirthdayBanner /> */}
			</div>
			<Hero />
			<Marquee />
			<BigStats />
			{/* <WhyYash /> */}
			<Mentorship />
			<FiveXTraders />
			<Tools />
			<TradersHunt />
			<AboutSection />
			<ContactSection />
		</>
	);
}
