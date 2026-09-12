export type HowItWorksStep = {
  number: string;
  type: "lead" | "sellaboo" | "followup" | "reply" | "booked";
  eyebrow: string;
  title: string;
  description: string;
  successStage?: boolean;
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: "01",
    type: "lead",
    eyebrow: "A lead comes in",
    title: "A potential customer reaches out.",
    description:
      "A form is submitted, a call comes in, or someone asks for more information.",
  },
  {
    number: "02",
    type: "sellaboo",
    eyebrow: "Start nurture",
    title: "One simple action starts the process.",
    description:
      "Put the lead into Sellaboo and start nurture without building another complicated workflow or campaign.",
  },
  {
    number: "03",
    type: "followup",
    eyebrow: "Nurture continues",
    title: "Sellaboo keeps the relationship moving.",
    description:
      "Consistent follow-up continues automatically so good leads keep hearing from your business while they decide.",
  },
  {
    number: "04",
    type: "reply",
    eyebrow: "The lead re-engages",
    title: "Your team knows when interest returns.",
    description:
      "When a lead responds or shows renewed interest, your team can step back in at the right time.",
    successStage: true,
  },
  {
    number: "05",
    type: "booked",
    eyebrow: "Next step",
    title: "The opportunity moves forward.",
    description:
      "The conversation can become an appointment, estimate, consultation, showing, or whatever next step fits your business.",
    successStage: true,
  },
];
