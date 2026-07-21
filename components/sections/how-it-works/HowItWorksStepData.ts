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
    title: "A customer reaches out.",
    description:
      "A form is submitted, a phone call comes in, or someone requests an estimate.",
  },
  {
    number: "02",
    type: "sellaboo",
    eyebrow: "Sellaboo takes over",
    title: "No one has to remember what happens next.",
    description:
      "The conversation is enrolled automatically and every next step stays visible.",
  },
  {
    number: "03",
    type: "followup",
    eyebrow: "Follow-up continues",
    title: "Every message arrives at the right time.",
    description:
      "Consistent, personalized follow-up keeps the opportunity moving without adding work for your team.",
  },
  {
    number: "04",
    type: "reply",
    eyebrow: "Customer responds",
    title: "Your team knows when someone is ready.",
    description:
      "The reply is visible immediately, so your team can step in without searching or guessing.",
    successStage: true,
  },
  {
    number: "05",
    type: "booked",
    eyebrow: "Appointment booked",
    title: "Your team steps in when it matters most.",
    description:
      "More promising conversations reach a clear next step and become scheduled appointments.",
    successStage: true,
  },
];
