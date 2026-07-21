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
    eyebrow: "Capture every opportunity",
    title: "Never lose another lead",
    description:
      "Every new inquiry enters one reliable follow-up system, so promising opportunities do not disappear into sticky notes, spreadsheets, or forgotten callbacks.",
    supportingPoints: [
      "Every lead stays organized",
      "No forgotten callbacks",
      "No missed follow-up opportunities",
    ],
  },
  {
    id: "focus",
    eyebrow: "Keep work moving",
    title: "Stay focused on your customers",
    description:
      "While you are serving customers and running the business, Sellaboo keeps each lead conversation moving forward automatically.",
    supportingPoints: [
      "Less manual follow-up",
      "More time for customers",
      "Consistent communication",
    ],
  },
  {
    id: "growth",
    eyebrow: "Convert more demand",
    title: "Turn more leads into booked jobs",
    description:
      "Consistent follow-up helps you create more conversations, secure more appointments, and win more value from the leads you already paid to generate.",
    supportingPoints: [
      "More lead conversations",
      "More booked appointments",
      "More opportunities to win",
    ],
  },
];
