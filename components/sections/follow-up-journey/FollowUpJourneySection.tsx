import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

import { followUpJourneySteps } from "./FollowUpJourneyData";
import { JourneyStep } from "./JourneyStep";

export function FollowUpJourneySection() {
  return (
    <Section
      id="follow-up-journey"
      aria-labelledby="follow-up-journey-heading"
      className="bg-white py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#18B67E]">
            From New Lead to Follow-Up
          </p>

          <h2
            id="follow-up-journey-heading"
            className="mt-4 font-[family:var(--font-manrope)] text-4xl font-bold tracking-[-0.04em] text-[#181A24] sm:text-5xl"
          >
            Your Lead Nurture starts in seconds
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5F6678]">
            One simple click initiates a complete workflow and moves every new lead into consistent,
            reliable, follow-up, while you stay focused on running your business.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:mt-24 lg:grid-cols-5 lg:gap-6">
          {followUpJourneySteps.map((step) => (
            <JourneyStep key={step.id} step={step} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
