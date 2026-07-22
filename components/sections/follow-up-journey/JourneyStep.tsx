import { JourneyVisual } from "./JourneyVisual";
import { FollowUpJourneyStep } from "./FollowUpJourneyData";

type Props = {
  step: FollowUpJourneyStep;
};

export function JourneyStep({ step }: Props) {
  return (
    <article className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3F3A64] text-lg font-bold text-white">
          {step.step}
        </div>

        <div>
          <h3 className="font-[family:var(--font-manrope)] text-2xl font-bold text-[#181A24]">
            {step.title}
          </h3>

          <p className="mt-2 text-[#5F6678] leading-7">
            {step.description}
          </p>
        </div>
      </div>

      <JourneyVisual visual={step.visual} />
    </article>
  );
}
