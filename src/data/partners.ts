// Placeholder partner list. These are real, well-known brokers and prop
// firms shown as illustrative examples of the kind of platforms this brand
// would partner with — not confirmed partnerships. Replace names, hrefs
// (with real affiliate links) and the disclaimer once agreements are signed.
// Do not present this list as live/confirmed partnerships until then.

export type Partner = {
  name: string;
  category: "Partner Broker" | "Prop Firm" | "Crypto Exchange";
  href: string;
  code?: string;
};

export const partners: Partner[] = [
  {
    name: "XM",
    category: "Partner Broker",
    href: "https://clicks.pipaffiliates.com/c?c=1154541&l=en&p=1",
    code: "YASHGUPTA",
  },
  {
    name: "Xellion",
    category: "Partner Broker",
    href: "http://account.xellion.com/signup/SRmN6ZTS",
    code: "YASHGUPTA",
  },
  {
    name: "Bitfunded",
    category: "Prop Firm",
    href: "https://www.bitfunded.com/client/register?regid=5552644533",
    code: "YASHGUPTA",
  },
  {
    name: "Funded Friday",
    category: "Prop Firm",
    href: "https://fundedfriday.com/checkout?ref=YASHGUPTA",
    code: "YASHGUPTA",
  },
  {
    name: "Coin DCX",
    category: "Crypto Exchange",
    href: "https://join.coindcx.com/invite/LcsTQ",
  },
  {
    name: "BingX",
    category: "Crypto Exchange",
    href: "https://bingx.com/partner/YashGupta",
    code: "YashGupta",
  },
  {
    name: "CoinSwitch",
    category: "Crypto Exchange",
    href: "https://coinswitch.co/pro/signup?code=qXSfkqh",
  },
  {
    name: "Funded Squad",
    category: "Prop Firm",
    href: "https://fundedsquad.com/?squad=2548",
    code: "YG",
  },
  {
    name: "Elefin",
    category: "Partner Broker",
    href: "https://partners.elefin.com/go/YASH",
    code: "YASH",
  },
];

export const partnersDisclaimer =
  "Broker links are provided for convenience. Review a platform's terms and regulatory status before depositing.";
