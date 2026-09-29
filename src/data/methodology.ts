export type MethodologyStepData = {
  number: string;
  title: string;
  description: string;
};

export const methodologySteps: MethodologyStepData[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Read the broader market environment, structure, volatility and context.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the setup, entry, invalidation, position size and acceptable risk.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Follow the predefined setup without allowing emotion to rewrite the plan.",
  },
  {
    number: "04",
    title: "Manage Risk",
    description:
      "Protect capital first, then evaluate performance across a meaningful sample of trades.",
  },
];
