// Central, editable site configuration.
// Values marked "placeholder" should be replaced with real, verified information
// before launch — nothing here should be treated as an independently verified claim.

export const siteConfig = {
  name: "Yash Gupta",
  brand: "YASH.",
  tagline: "Trading With Clarity",
  url: "https://www.yash-trading.com", // placeholder — update once a domain is live
  description:
    "A process-driven approach to crypto, gold, market analysis, trading psychology and risk management.",
  email: "contact@yash-trading.com", // placeholder contact address

  // Configurable credibility figure. Update or remove if not independently verifiable.
  experience: {
    years: "12+",
    label: "Years in the Markets",
  },

  focusAreas: ["Crypto", "Gold", "Risk Management"],

  // Community statistics are intentionally omitted until real, verifiable numbers
  // are supplied. When available, wire them in here rather than hardcoding copy.
  communityStats: null as null | { members: string; label: string }[],

  mentorshipUrl: "#contact",
  communityUrl: "#", // placeholder — replace with live community invite link

  social: {
    discord: "", // e.g. "https://discord.gg/your-invite"
    telegram: "",
    instagram: "",
    youtube: "",
    x: "",
    linkedin: "",
  },
};

export type SocialKey = keyof typeof siteConfig.social;
