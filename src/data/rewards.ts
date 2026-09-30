export const rewardsPage = {
  eyebrow: "Rewards",
  title: [
    { text: "A little gift for " },
    { text: "trading well.", shimmer: true },
  ],
  description:
    "Cashback on eligible trading activity with partner brokers, and periodic community competitions that reward discipline over reckless risk.",
};

export const cashback = {
  eyebrow: "I — Cashback",
  title: [{ text: "Trade. Earn. " }, { text: "Get part of it back.", plain: true }],
  description:
    "A share of eligible trading activity with partner brokers comes back to you — tracked automatically, no extra steps.",
  cta: { label: "Ask About Cashback", href: "/#contact" },
  steps: [
    {
      title: "Trade with a partner broker",
      description:
        "Link an account with one of the partner brokers — no extra steps beyond your normal trading.",
    },
    {
      title: "Cashback accrues automatically",
      description:
        "A share of eligible trading activity is tracked in the background as you trade.",
    },
    {
      title: "Paid out on a set schedule",
      description:
        "Cashback is settled on a regular schedule, not held indefinitely or gated behind conditions.",
    },
  ],
};

export type LeaderboardEntry = {
  rank: number;
  displayName: string;
  maskedAccount: string;
  currentCapital: string;
  roi: string;
};

export type CurrentCompetition = {
  name: string;
  period: string;
  minimumCapital: string;
  ranking: string;
  startDate: string;
  endDate: string;
  // Both stay optional/omittable — only show figures once they're real.
  totalPrizePool?: string;
  rewards?: { place: string; amount: string }[];
  // Populate only with real, verified results. Masked/display names only —
  // never real emails or account logins.
  leaderboard?: LeaderboardEntry[];
};

export const competition = {
  eyebrow: "II — Competition",
  title: [{ text: "Compete on discipline, " }, { text: "not just P&L.", plain: true }],
  description:
    "Periodic trading competitions for the community, in four simple steps — verify once, trade normally, and let verified performance update your ranking.",
  steps: [
    {
      title: "Verify your trading account",
      description:
        "Confirm your registered email and broker login to establish eligibility.",
    },
    {
      title: "Lock your entry",
      description:
        "Meet the requirements and secure your starting account snapshot.",
    },
    {
      title: "Trade during the window",
      description:
        "Trade normally — eligible closed-trade performance counts toward your ranking.",
    },
    {
      title: "Climb the leaderboard",
      description:
        "Track your ranking as it updates from verified, closed-trade performance.",
    },
  ],
  registerCta: { label: "Register Interest", href: "/#contact" },
  joinCta: { label: "Join This Competition", href: "/#contact" },
  rulesEyebrow: "Competition Disclosure",
  rulesTitle: [{ text: "Know how you're " }, { text: "ranked.", plain: true }],
  rulesDescription:
    "Built on verified performance and fair rules. Rankings reward real trading skill, not balance changes.",
  rules: [
    {
      title: "Highest ROI wins",
      description:
        "Rankings are based on verified ROI during the competition window, not current account balance.",
    },
    {
      title: "Closed trades only",
      description:
        "Only eligible closed-trade performance during the competition period counts toward the final ranking.",
    },
    {
      title: "Funding changes are reviewed",
      description:
        "Deposits or withdrawals made after joining may be flagged for manual review.",
    },
    {
      title: "Rankings are reviewed before payout",
      description:
        "At the end of the window, rankings are frozen and reviewed before winners are confirmed.",
    },
  ],
  disclosures: [
    "This is a promotional trading competition, not investment advice — Yash Gupta is not a broker, investment adviser or fund manager.",
    "Rankings are calculated from verified broker data and are subject to eligibility checks and final review.",
    "Public leaderboards show display names only. Email addresses and broker account logins are never published.",
  ],
  // Populate once a real competition is confirmed — name, dates, minimum
  // capital, ranking method. Leave totalPrizePool/rewards/leaderboard out
  // until those figures and results are real and verified; the page shows
  // an upcoming/"register interest" state instead of fabricating any of it.
  current: null as CurrentCompetition | null,
};
