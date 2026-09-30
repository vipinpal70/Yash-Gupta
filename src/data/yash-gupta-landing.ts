// Content for the one-page Yash Gupta landing site, transcribed from the
// approved design (Yash Gupta trading website/Yash Gupta.dc.html).

export const brand = {
  name: "Yash Gupta",
  tag: "Trader",
};

export const nav = [
  // { href: "/#why", label: "Who is YG" },
  { href: "/#5x", label: "5x Traders" },
  { href: "/#mentorship", label: "Mentorship" },
  { href: "/cashback", label: "Cashback" },
  { href: "/#hunt", label: "Traders Hunt" },
  { href: "/#tools", label: "Indicators" },
  { href: "/broker", label: "Broker" },
  // { href: "/#about", label: "About" },
];

export const hero = {
  eyebrow: "Yash Gupta · Crypto & Gold Trader · Mentor",
  headline: [
    { text: "The quiet discipline of trading " },
    { text: "Bitcoin", shimmer: true },
    { text: " & " },
    { text: "Gold", shimmer: true },
    { text: "." },
  ],
  paragraph:
    "I'm Yash Gupta and for 12+ years I've traded Crypto and Gold. I have created several strategies with my own multi-timeframe system and I teach it exactly the way I use it. One thing that I have realised over the years is that to become profitable all you need to learn is Trade Mathematics, Risk Management and Repeatable Execution.",
  stats: [] as { value: string; label: string }[],
  // { value: "55,000+", label: "BTC points · 6 mo" },
  // { value: "20,000+", label: "Gold points · 6 mo" },
  // { value: "12+ yrs", label: "Trading experience" },
  ctaPrimary: { label: "Learn with Yash", href: "#mentorship" },
  ctaSecondary: { label: "The Indicators", href: "#tools" },
  badge: { value: "12+", label: "years trading\ncrypto & gold" },
};

export const tickerItems = [
  "BTC MTF — 55,000+ points",
  "Gold MTF — 20,000+ points",
  "Traders' Villa",
  "One-on-One",
  "Traders Marathon",
  "Traders' Circle",
  "5x Traders Discord",
  "Traders Hunt",
  "12+ years trading",
];

export const bigStats = [
  {
    label: "BTC MTF Indicator",
    value: 55000,
    display: "55,000",
    caption: "points captured in just six months",
  },
  {
    label: "Gold MTF Indicator",
    value: 20000,
    display: "20,000",
    caption: "pips captured in just six months",
  },
];

export const whyYash = {
  eyebrow: "Why learn from Yash",
  title: [{ text: "A mentor who " }, { text: "trades what he teaches.", shimmer: true }],
  description:
    "New to the markets or already trading — here's what you get that you won't find in a course playlist.",
  cards: [
    {
      number: "01",
      title: "A live, verifiable edge",
      description:
        "8500+ pips and 25000+ points captured in last three months in Gold and BTC in our 5x exclusive community.",
    },
    {
      number: "02",
      title: "His own tools, in your hands",
      description:
        "He has converted his multi-timeframe strategy in indicators for Gold and BTC.",
    },
    {
      number: "03",
      title: "A learning format for every trader",
      description:
        "Leaerning-cation, one-on-one online or offline, intensive marathons, and an online trading circle.",
    },
    {
      number: "04",
      title: "A community that competes",
      description:
        "Traders Hunt puts your skills on a leaderboard — the best in the community are shortlisted and awarded.",
    },
  ],
};

export const mentorship = {
  eyebrow: "I — Mentorship",
  title: [{ text: "Four ways to learn, " }, { text: "one standard.", plain: true }],
  description:
    "From an immersive residential retreat to a private seat at the desk — each format is kept small by design.",
  marathon: {
    no: "No. 01",
    tag: "Intensive",
    title: "Traders Marathon",
    description:
      "A sustained run of live trading sessions, built to sharpen discipline, execution and consistency.",
    cta: "Join the next edition",
    href: "https://forms.gle/3oihr9LfSpyqJBS27",
  },
  circle: {
    no: "No. 02",
    tag: "Community",
    title: "Traders' Circle",
    description:
      "15 days intensive learning, and trading sessions with mentors along with 3 months access to indicators and 5x community.",
    cta: "Enter the circle",
    href: "https://forms.gle/RrsTcWoWxnDdPdtd6",
  },
  villa: {
    no: "No. 03",
    tag: "Flagship",
    title: "Traders' Villa",
    description:
      "An immersive, stay-in retreat. Live markets by day, trade reviews by night, among a small circle of serious traders.",
    cta: "Request an invitation",
    href: "https://forms.gle/pUPj7ZZXyuXaRJUk8",
  },
  oneOnOne: {
    no: "No. 04",
    title: "One-on-One",
    online:
      "Private live sessions over video. Your trades, your gaps, a plan shaped around you — from anywhere.",
    offline:
      "A seat beside Yash at the desk. Personal, in-person mentoring through live market hours.",
    cta: "Reserve a session",
    href: "https://forms.gle/xYge8dj7yxxST8t68",
  },
};

export const fiveXTraders = {
  eyebrow: "Private Discord",
  badge: "Members only",
  title: [{ text: "5x", shimmer: true }, { text: " Traders" }],
  description:
    "An exclusive Discord for Yash's community members. Every day, he shares his market outlook and trade setups — straight from his desk.",
  cta: { label: "Join 5x Traders", href: "https://forms.gle/t3Fcv2JpMUQHa9776" },
  secondaryCta: { label: "Download 5x Trading Report", href: "#" },
  features: [
    {
      no: "01",
      title: "Daily market outlook",
      description: "Yash's read on Bitcoin and Gold before the session.",
    },
    {
      no: "02",
      title: "Trade setups",
      description: "The levels and setups he's watching, shared as they form.",
    },
    {
      no: "03",
      title: "Community only",
      description: "Access is exclusive to members of Yash's community.",
    },
  ],
};

export const tools = {
  eyebrow: "II — Trading Tools",
  title: [{ text: "The MTF " }, { text: "Indicators.", plain: true }],
  description:
    "Proprietary multi-timeframe tools that align the larger trend with your entry — the same instruments Yash trades with.",
  cards: [
    {
      pair: "BTC / USD",
      period: "Six-month record",
      chartImage: "/btc.jpeg",
      chartAlt: "BTC MTF indicator chart with buy and sell signals on a 15-minute chart",
      title: "BTC MTF Indicator",
      subtitle: "Over 55,000 points captured in six months",
      big: "55K",
      cta: "Request access",
      href: "https://forms.gle/EY1NSBgSD5Vh5uqH6",
    },
    {
      pair: "XAU / USD",
      period: "Six-month record",
      chartImage: "/gold.jpeg",
      chartAlt: "Gold MTF indicator chart with buy and sell signals on a 1-minute chart",
      title: "Gold MTF Indicator",
      subtitle: "Over 20,000 pips captured in six months",
      big: "20K",
      cta: "Request access",
      href: "https://forms.gle/guAACRcVGrm2XYgK7",
    },
  ],
  disclaimer:
    "Past performance does not guarantee future results. Trading involves substantial risk of loss.",
};

export const tradersHunt = {
  eyebrow: "III — Competitions",
  title: [{ text: "Traders " }, { text: "Hunt", shimmer: true }],
  description:
    "A competition for the community's finest. We shortlist, recognise and reward the traders who prove their edge.",
  cta: { label: "Enter Traders Hunt ↗", href: "https://trader-hunt.tradecartel.in/" },
  steps: [
    { roman: "i.", title: "Register", description: "Sign up on the Traders Hunt portal." },
    {
      roman: "ii.",
      title: "Trade & be shortlisted",
      description: "The most consistent performers make the list.",
    },
    {
      roman: "iii.",
      title: "Be recognised",
      description: "Top traders are awarded before the community.",
    },
  ],
};

export const about = {
  eyebrow: "IV — About",
  title: [{ text: "Meet " }, { text: "Yash Gupta.", plain: true }],
  lead: "With over 12+ years of experience in the Crypto and Financial markets, Yash Gupta has established himself as a leading expert in scalping, swing trading, capital management, and risk management. His deep market knowledge, sharp analytical skills and practical approach to trading have made him a trusted mentor for aspiring and seasoned traders alike. Yash’s commitment to helping others succeed in the fast-paced world of crypto trading has earned him a reputation for delivering results-driven strategies.",
  body: "Today he mentors traders to see the market with the same clarity: clean structure, strict risk management, repeatable execution.",
  image: "/yash-gupta/yash-desk.jpg",
};

export const contact = {
  eyebrow: "By enquiry",
  title: [{ text: "Trade with structure, " }, { text: "not noise.", shimmer: true }],
  description:
    "Reach the team to join a program, request indicator access, or reserve a place at the next Traders' Villa.",
  whatsapp: { label: "WhatsApp", href: "https://wa.me/919516814034" },
  instagram: { label: "Instagram", href: "https://www.instagram.com/iiamyashgupta" },
  image: "/yash-gupta/yash-chair.jpg",
};

export const footer = {
  name: "Yash Gupta",
  disclaimer:
    "Educational content only, not financial advice. Trading crypto and commodities carries high risk.",
};
