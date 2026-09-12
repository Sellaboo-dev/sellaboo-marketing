export type WhySellabooFeature = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export const whySellabooFeatures: readonly WhySellabooFeature[] = [
  {
    id: "lead-nurture",
    eyebrow: "Built for Busy Businesses",
    title: "A Simple Way to Nurture the Leads You Already Have",
    description:
      "Sellaboo gives not-ready-yet leads a dedicated nurture path, so they can keep hearing from your business without adding another complicated system for your team to manage.",
  },
  {
    id: "start-in-seconds",
    eyebrow: "Start Nurture in Seconds",
    title: "One Lead. One Click. Nurture Handled.",
    description:
      "Add a lead, start nurture, and get back to running your business. Sellaboo handles the ongoing follow-up without requiring you to build campaigns, workflows, or complicated automations.",
  },
  {
    id: "focused",
    eyebrow: "Focused on What Matters",
    title: "One Important Job, Done Simply",
    description:
      "Sellaboo isn't trying to replace your CRM or every tool you already use. It's focused on one important job: making consistent lead nurture easier to start and easier to keep running.",
  },
];
