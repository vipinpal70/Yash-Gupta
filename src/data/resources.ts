import {
  BookOpen,
  FileText,
  MessageCircleQuestion,
  PlayCircle,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

export type Resource = {
  slug: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  icon?: LucideIcon;
};

export const resources: Resource[] = [
  {
    slug: "trading-checklist",
    title: "Trading Checklist",
    description: "Pre-trade preparation.",
    cta: "Get the Checklist",
    href: "/contact",
    icon: FileText,
  },
  {
    slug: "risk-management-guide",
    title: "Risk Management Guide",
    description: "Capital preservation.",
    cta: "Get the Guide",
    href: "/contact",
    icon: FileText,
  },
  {
    slug: "market-analysis-resources",
    title: "Market Analysis Resources",
    description: "Structure and context.",
    cta: "Explore Resources",
    href: "/contact",
    icon: FileText,
  },
  {
    slug: "beginner-resources",
    title: "Beginner Resources",
    description: "Start with the fundamentals.",
    cta: "Start Here",
    href: "/contact",
    icon: FileText,
  },
];

export const featuredResource = {
  title: "The Trader's Risk Management Checklist",
  description:
    "A practical pre-trade framework for defining risk, position size and invalidation before execution.",
  cta: "Get the Checklist",
  href: "/contact",
};

// Content included as part of mentorship / community access, rather than
// standalone free downloads — kept as a separate group for clarity.
export const learningLibrary: Resource[] = [
  {
    slug: "strategy-playbooks",
    title: "Strategy Playbooks",
    description: "Documented setups, rules and invalidation criteria.",
    cta: "View Playbooks",
    href: "/contact",
    icon: BookOpen,
  },
  {
    slug: "indicator-toolkit",
    title: "Indicator Toolkit",
    description: "Tools for reading structure, volatility and context.",
    cta: "Explore Toolkit",
    href: "/contact",
    icon: SlidersHorizontal,
  },
  {
    slug: "recorded-sessions",
    title: "Recorded Sessions",
    description: "The full course library and past live sessions.",
    cta: "Browse Library",
    href: "/contact",
    icon: PlayCircle,
  },
  {
    slug: "doubt-solving-sessions",
    title: "Doubt-Solving Sessions",
    description: "Live, recurring Q&A to work through what's unclear.",
    cta: "See Schedule",
    href: "/contact",
    icon: MessageCircleQuestion,
  },
];
