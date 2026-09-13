import { JourneyVisual } from "./JourneyVisual";
import { FollowUpJourneyStep } from "./FollowUpJourneyData";

type Props = {
  step: FollowUpJourneyStep;
};

export function JourneyStep({ step }: Props) {
  const successStage = step.step >= 4;

  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative z-10 flex justify-center lg:justify-start">
        <div
          className={[
            "flex size-[62px] items-center justify-center rounded-full border-[6px] border-[#25203F]",
            "text-sm font-extrabold shadow-[0_8px_28px_rgba(0,0,0,0.22)]",
            successStage
              ? "bg-[#62E0B2] text-[#173B30]"
              : "bg-[linear-gradient(145deg,#8174DA,#6358B5)] text-white",
          ].join(" ")}
        >
          0{step.step}
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="min-h-[150px] lg:min-h-[190px]">
          <h3 className="font-[var(--font-heading)] text-[22px] font-extrabold leading-[1.18] tracking-[-0.025em] !text-white">
            {step.title}
          </h3>

          <p className="mt-3 text-[14px] leading-6 text-[#BDBACD]">
            {step.description}
          </p>
        </div>

        <div className="mt-5 flex-1 transition duration-300 group-hover:-translate-y-1.5">
          <JourneyVisual visual={step.visual} />
        </div>
      </div>
    </article>
  );
}
