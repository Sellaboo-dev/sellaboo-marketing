export type FollowUpJourneyVisual =
  | "lead"
  | "enroll"
  | "started"
  | "engaged"
  | "focused";

export type FollowUpJourneyStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  visual: FollowUpJourneyVisual;
};

export const followUpJourneySteps: readonly FollowUpJourneyStep[] = [
  {
    id: "lead-arrives",
    step: 1,
    title: "A New Lead Arrives",
    description:
      "A potential customer reaches out, creating a new opportunity for your business.",
    visual: "lead",
  },
  {
    id: "click-enroll",
    step: 2,
    title: "Start Nurture",
    description:
      "With one simple action, put the lead into Sellaboo and let the nurture begin.",
    visual: "enroll",
  },
  {
    id: "follow-up-starts",
    step: 3,
    title: "Sellaboo Keeps Following Up",
    description:
      "Consistent follow-up begins without requiring you to build another campaign, workflow, or sequence.",
    visual: "started",
  },
  {
    id: "lead-stays-engaged",
    step: 4,
    title: "Your Lead Keeps Hearing From You",
    description:
      "Sellaboo keeps your business in the conversation while the lead decides when the time is right to move forward.",
    visual: "engaged",
  },
  {
    id: "stay-focused",
    step: 5,
    title: "You Stay Focused on Your Business",
    description:
      "While Sellaboo keeps the nurture moving, you can focus on today's customers, new opportunities, and running your business.",
    visual: "focused",
  },
];
