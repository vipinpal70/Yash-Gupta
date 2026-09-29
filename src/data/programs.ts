export type Program = {
  slug: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  featured: boolean;
};

export const programs: Program[] = [
  {
    slug: "online-mentorship",
    category: "Live Online",
    title: "Online Mentorship",
    description:
      "Structured live learning from anywhere, built around a defined arc from fundamentals to consistency.",
    features: [
      "13–15 live sessions",
      "6 months of guided live trading",
      "Weekly doubt-solving sessions",
    ],
    cta: "Explore Online Mentorship",
    href: "/contact",
    featured: false,
  },
  {
    slug: "one-to-one-inner-circle",
    category: "1-to-1",
    title: "1-to-1 Inner Circle",
    description:
      "Personalized, concept-focused guidance built entirely around your trading journey.",
    features: [
      "1-to-1 concept-focused guidance",
      "Curriculum built around your gaps",
      "6 months of live trading support",
    ],
    cta: "Apply for the Inner Circle",
    href: "/contact",
    featured: true,
  },
  {
    slug: "offline-mentorship",
    category: "In-Person",
    title: "Offline Mentorship",
    description:
      "An immersive, in-person learning experience for traders who want focused, classroom-style depth.",
    features: [
      "4 days of classroom learning",
      "Taught directly by Yash Gupta",
      "6 months of guided live trading",
    ],
    cta: "Explore Offline Mentorship",
    href: "/contact",
    featured: false,
  },
];
