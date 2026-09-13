import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Container } from "@/components/ui/Container";

import { followUpJourneySteps } from "./FollowUpJourneyData";
import { JourneyStep } from "./JourneyStep";

export function FollowUpJourneySection() {
  return (
    <section
      id="follow-up-journey"
      aria-labelledby="follow-up-journey-heading"
      className="relative isolate overflow-hidden bg-[#211D3B] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(135deg,#211D3B_0%,#292348_48%,#202A43_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-48 top-20 -z-20 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(107,91,204,0.28)_0%,rgba(107,91,204,0.06)_48%,transparent_72%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-56 right-[-100px] -z-20 size-[620px] rounded-full bg-[radial-gradient(circle,rgba(24,182,126,0.22)_0%,rgba(24,182,126,0.05)_48%,transparent_72%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]"
      />

      <Container className="lg:max-w-[1280px]">
        <Reveal>
          <div className="mx-auto max-w-[840px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#DDD9FF] backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#62E0B2] shadow-[0_0_0_5px_rgba(98,224,178,0.12)]" />
              From New Lead to Ongoing Nurture
            </div>

            <h2
              id="follow-up-journey-heading"
              className="mt-5 font-[var(--font-heading)] text-[clamp(38px,5.2vw,60px)] font-extrabold leading-[1.07] tracking-[-0.045em] !text-white"
            >
              Start nurture in seconds.{" "}
              <span className="bg-[linear-gradient(100deg,#D9D2FF_5%,#9C91EE_48%,#69E2B7_100%)] bg-clip-text text-transparent">
                Let Sellaboo keep it going.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[clamp(17px,1.5vw,19px)] leading-[1.75] text-[#C9C7D8]">
              Add the lead, start nurture, and get back to your business.
              Sellaboo keeps the follow-up moving so good opportunities
              continue hearing from you even when the timing isn't right yet.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 lg:mt-20">
          <div
            aria-hidden="true"
            className="absolute left-[8%] right-[8%] top-[31px] hidden h-[2px] bg-[linear-gradient(90deg,#7569CA_0%,#7569CA_48%,#53D7A7_72%,#62E0B2_100%)] lg:block"
          />

          <Stagger
            className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-5"
            delay={90}
          >
            {followUpJourneySteps.map((step) => (
              <JourneyStep key={step.id} step={step} />
            ))}
          </Stagger>
        </div>

        <Reveal
          variant="fade-up"
          delay={160}
          distance={18}
          duration={700}
          threshold={0.18}
          className="mt-12"
        >
          <div className="mx-auto flex max-w-[780px] items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.07] px-5 py-3 text-center text-[13px] font-bold text-[#E4E2EC] backdrop-blur-md sm:w-fit">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#62E0B2] opacity-20" />
              <span className="relative inline-flex size-2 rounded-full bg-[#62E0B2]" />
            </span>
            One action starts the nurture. Sellaboo keeps the relationship
            moving.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
