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
        label: "Sellaboo starts",
    },
    {
        number: "03",
        label: "Follow-up continues",
    },
    {
        number: "04",
        label: "Customer responds",
    },
    {
        number: "05",
        label: "Appointment booked",
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
                "absolute right-1/2 top-[23px] hidden h-px w-full origin-right",
                "border-t-2 border-dashed sm:block",
                isSuccessStage
                    ? "border-[rgba(24,182,126,0.5)]"
                    : "border-[rgba(83,73,158,0.45)]",
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
                    "relative z-10 inline-flex size-12 shrink-0",
                    "items-center justify-center rounded-full border bg-white",
                    "text-sm font-extrabold",
                    "shadow-[0_10px_25px_rgba(42,45,76,0.08)]",
                    isSuccessStage
                        ? "border-[rgba(24,182,126,0.32)] text-[#16825f]"
                        : "border-[rgba(83,73,158,0.28)] text-[var(--color-primary)]",
                ].join(" ")}
            >
                {step.number}
            </span>

            <span
                data-timeline-label
                className="relative z-10 text-left text-[13px] font-bold text-[#656d7f] sm:max-w-[130px] sm:text-center"
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
            aria-label="The five stages of the Sellaboo follow-up journey"
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
