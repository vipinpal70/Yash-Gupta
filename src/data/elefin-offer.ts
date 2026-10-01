// Limited-time promotional campaign for Elefin, one of the partner brokers
// listed on the Resources page (src/data/partners.ts). Update the window and
// copy here each time the offer runs; the page and any banners read from
// this single source.

export const elefinOffer = {
  brokerName: "Elefin",
  eyebrow: "Operation zero fees",
  heading: "Operation zero fees",
  title: [
    { text: "Fee cashback for the community "},
    { text: "directly in their elefin account.", shimmer: true  },
  ],
  subtitle:
    "For a limited window, verified community members trading with Elefin are eligible for a full fee return once in a week — effectively zero fees from 1st Oct - 15th Oct",
  window: {
    start: "2026-10-01",
    end: "2026-10-15",
    display: "1 – 15 October",
  },
  description:
    "For a limited window, verified community members trading with Elefin are eligible for a full fee return once in a week — effectively zero fees from 1st Oct - 15th Oct",
  eligibility:
    "Use the email linked to your Elefin broker account so it can be matched during review. Our team manually verifies eligibility before confirming zero fees.",
  href: "/elefin-offer",
  stepsHeading: "Get back your cashback in 4 simple steps",
  wallet: {
    label: "Community Cashback Wallet",
    sublabel: "Powered by Elefin",
    // Starting balance. The displayed total = base + a fixed random 50k–60k for
    // each day since `anchorDate`, so it climbs daily and is identical on every
    // refresh / for every visitor. `seed` fixes the daily sequence — change it
    // to reshuffle the amounts; move `anchorDate` back to start from a higher
    // total.
    base: 52356,
    anchorDate: "2026-10-01",
    seed: 7421,
    caption: "Available cashback",
    added: "+₹5740",
    addedLabel: "cashback added",
  },
  calculator: {
    eyebrow: "Illustrative estimate",
    title: [
      { text: "See what your trading " },
      { text: "could earn back.", shimmer: true },
    ],
    subtitle:
      "Adjust your monthly trading volume to see an illustrative cashback estimate.",
    sliderLabel: "Monthly trading volume",
    resultLabel: "Estimated monthly cashback",
    presets: [1, 10, 50, 100, 150, 250, 400, 500],
    lastIsPlus: true,
    // ₹940 ≈ $9.40 per lot in the reference — $ per lot and ₹ conversion rate.
    perLotUsd: 9.4,
    inrRate: 100,
    cashbackShare: 100,
    note: "Actual cashback depends on eligible commission generated through your trading activity.",
    footnote: "1 Lot is calculated with Standard Gold Lot*",
  },
  steps: [
    {
      number: "01",
      title: "Open your account in Elefin",
      description: "Create your trading account with Elefin.",
      href: "https://elefin.in",
    },
    {
      number: "02",
      title: "Make a deposit",
      description: "Deposit as much as you want.",
    },
    {
      number: "03",
      title: "Fill out the form",
      description: "Submit your details for verification.",
    },
    {
      number: "04",
      title: "Start trading!",
      description: "Enjoy zero fees once verified.",
    },
  ],
};
