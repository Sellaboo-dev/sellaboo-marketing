export type ResultOutcome = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  supportingPoints: readonly string[];
};

export const resultOutcomes: readonly ResultOutcome[] = [
  {
    id: "capture",
    eyebrow: "Keep opportunities visible",
    title: "Good leads don't have to disappear.",
    description:
      "Sellaboo gives not-ready-yet leads a clear nurture path, so they are less likely to be forgotten after the first few conversations.",
    supportingPoints: [
      "Leads stay organized",
      "Nurture keeps moving",
      "Fewer forgotten follow-ups",
    ],
  },
  {
    id: "focus",
    eyebrow: "Reduce manual follow-up",
    title: "Stay focused on today's customers.",
    description:
      "While you are serving customers and running the business, Sellaboo keeps nurturing future opportunities in the background.",
    supportingPoints: [
      "Less manual follow-up",
      "More time for current customers",
      "Consistent communication",
    ],
  },
  {
    id: "growth",
    eyebrow: "Stay in the conversation",
    title: "Be there when the lead is ready.",
    description:
      "Consistent nurture helps your business remain familiar and responsive while prospects decide when the timing is right to move forward.",
    supportingPoints: [
      "Ongoing lead nurture",
      "More consistent touchpoints",
      "More chances to re-engage",
    ],
  },
];
