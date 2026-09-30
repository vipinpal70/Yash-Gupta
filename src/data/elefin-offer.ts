// Limited-time promotional campaign for Elefin, one of the partner brokers
// listed on the Resources page (src/data/partners.ts). Update the window and
// copy here each time the offer runs; the page and any banners read from
// this single source.

export const elefinOffer = {
  brokerName: "Elefin",
  eyebrow: "Operation zero fees",
  heading: "Operation zero fees",
  title: "Fee cashback for the community directly in their elefin account.",
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
