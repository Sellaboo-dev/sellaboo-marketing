import type { CSSProperties } from "react";
import { Sequence } from "@/components/motion/Sequence";

type TimelineStepData = {
  number: string;
  label: string;
};

type TimelineConnectorProps = {
  sequenceIndex: number;
  isSuccessStage: boolean;
};

type TimelineStepProps = {
  step: TimelineStepData;
  index: number;
};

type SequenceItemStyle = CSSProperties & {
  "--sequence-index": number;
};

const timelineSteps: TimelineStepData[] = [
  {
    number: "01",
    label: "Lead arrives",
  },
  {
    number: "02",
    label: "Start nurture",
  },
  {
    number: "03",
    label: "Nurture continues",
  },
  {
    number: "04",
    label: "Lead re-engages",
  },
  {
    number: "05",
    label: "Next step",
  },
];

function getSequenceStyle(sequenceIndex: number): SequenceItemStyle {
  return {
    "--sequence-index": sequenceIndex,
  };
}

function TimelineConnector({
  sequenceIndex,
  isSuccessStage,
}: TimelineConnectorProps) {
  return (
    <span
      aria-hidden="true"
      data-timeline-connector
      data-sequence-item
      style={getSequenceStyle(sequenceIndex)}
      className={[
        "absolute right-1/2 top-[25px] hidden h-[3px] w-full origin-right rounded-full sm:block",
        isSuccessStage
          ? "bg-[linear-gradient(90deg,#665BC4,#18B67E)]"
          : "bg-[linear-gradient(90deg,#8B82C5,#665BC4)]",
      ].join(" ")}
    />
  );
}

function TimelineStep({ step, index }: TimelineStepProps) {
  const isFirstStep = index === 0;
  const isSuccessStage = index >= 3;
  const markerSequenceIndex = index * 2;
  const connectorSequenceIndex = markerSequenceIndex - 1;

  return (
    <li
      data-timeline-step
      className="relative flex items-center gap-4 sm:flex-col sm:gap-3"
    >
      {!isFirstStep ? (
        <TimelineConnector
          sequenceIndex={connectorSequenceIndex}
          isSuccessStage={isSuccessStage}
        />
      ) : null}

      <span
        data-timeline-marker
        data-sequence-item
        style={getSequenceStyle(markerSequenceIndex)}
        className={[
          "relative z-10 inline-flex size-[52px] shrink-0",
          "items-center justify-center rounded-full border-4 border-white",
          "text-sm font-extrabold",
          "shadow-[0_12px_30px_rgba(42,45,76,0.13)]",
          isSuccessStage
            ? "bg-[#E8FAF3] text-[#16825F] ring-1 ring-[rgba(24,182,126,0.24)]"
            : "bg-[#F0EDFF] text-[#594FC2] ring-1 ring-[rgba(89,79,194,0.2)]",
        ].join(" ")}
      >
        {step.number}
      </span>

      <span
        data-timeline-label
        className={[
          "relative z-10 text-left text-[13px] font-extrabold sm:max-w-[130px] sm:text-center",
          isSuccessStage ? "text-[#16825F]" : "text-[#555D70]",
        ].join(" ")}
      >
        {step.label}
      </span>
    </li>
  );
}

export function HowItWorksTimeline() {
  return (
    <Sequence
      as="ol"
      aria-label="The five stages of the Sellaboo nurture journey"
      delay={120}
      duration={700}
      threshold={0.18}
      className="grid gap-4 sm:grid-cols-5 sm:gap-0"
    >
      {timelineSteps.map((step, index) => (
        <TimelineStep key={step.number} step={step} index={index} />
      ))}
    </Sequence>
  );
}
