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
    title: "Click Enroll",
    description:
      "With one simple click, the lead is enrolled and ready for consistent follow-up.",
    visual: "enroll",
  },
  {
    id: "follow-up-starts",
    step: 3,
    title: "Follow-Up Starts in Seconds",
    description:
      "Sellaboo begins the follow-up process immediately, without complicated campaign setup or email writing.",
    visual: "started",
  },
  {
    id: "lead-stays-engaged",
    step: 4,
    title: "Your Lead Keeps Hearing From You",
    description:
      "Thoughtful, consistent follow-up keeps you in front of your prospects while you handle the rest of your day.",
    visual: "engaged",
  },
  {
    id: "stay-focused",
    step: 5,
    title: "You Stay Focused on Your Business",
    description:
  "While Sellaboo keeps your follow-up moving, you can stay focused on serving customers, winning new work, and growing your business.",
    visual: "focused",
  },
];
