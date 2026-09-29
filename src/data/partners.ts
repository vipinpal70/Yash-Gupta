// Placeholder partner list. These are real, well-known brokers and prop
// firms shown as illustrative examples of the kind of platforms this brand
// would partner with — not confirmed partnerships. Replace names, hrefs
// (with real affiliate links) and the disclaimer once agreements are signed.
// Do not present this list as live/confirmed partnerships until then.

export type Partner = {
  name: string;
  category: "Partner Broker" | "Prop Firm";
  href: string;
};

export const partners: Partner[] = [
  { name: "Elefin", category: "Partner Broker", href: "#" },
  { name: "XM", category: "Partner Broker", href: "#" },
  { name: "Vantage", category: "Partner Broker", href: "#" },
  { name: "CoinSwitch", category: "Partner Broker", href: "#" },
  { name: "FundedSqaud", category: "Prop Firm", href: "#" },
  { name: "Blue Guardian", category: "Prop Firm", href: "#" },
];

export const partnersDisclaimer =
  "Partner links are provided for convenience. Review each platform's terms, fees and regulatory status before opening an account or depositing funds.";
