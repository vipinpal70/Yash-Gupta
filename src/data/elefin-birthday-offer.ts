// Second, separate Elefin campaign — a new-account signup bonus, distinct
// from the fee-cashback offer in elefin-offer.ts. Update the window/copy
// here each time it runs. Status (Coming Soon / Live / Ended) is computed
// automatically from `window.start` / `window.end` — see getOfferStatus in
// src/lib/utils.ts — so there is nothing to flip manually on the day.

export const elefinBirthdayOffer = {
  brokerName: "Elefin",
  eyebrow: "Birthday Cashback",
  amount: "₹1,000",
  window: {
    start: "2026-10-07",
    end: "2026-10-09",
    display: "7 – 9 October",
    startDisplay: "7 October",
  },
  minDeposit: "$100",
  minTrades: 1,
  description:
    "For three days only, new Elefin accounts that deposit and place a trade can claim ₹1,000 cashback.",
  // Placeholder — replace with the real Elefin referral/signup link before launch.
  referralUrl: "#",
  steps: [
    {
      title: "Create a new Elefin account",
      description: "Sign up using the referral link below.",
    },
    {
      title: "Deposit $100 and place a trade",
      description: "Fund your new account and take at least one trade.",
    },
    {
      title: "Enter your email to claim it",
      description: "Submit the email tied to your new account below.",
    },
  ],
  href: "/elefin-birthday-offer",
};
