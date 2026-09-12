import { ResultOutcome } from "./ResultsSectionData";

type ResultCardProps = {
  outcome: ResultOutcome;
  index: number;
};

function OpportunityIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-6 fill-none stroke-current stroke-2"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path
        d="M5.5 20c.6-4 2.8-6 6.5-6s5.9 2 6.5 6"
        strokeLinecap="round"
      />
      <path
        d="M18.5 5.5v4M16.5 7.5h4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FocusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-6 fill-none stroke-current stroke-2"
    >
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3" />
      <path
        d="M12 2v3M12 19v3M2 12h3M19 12h3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConversationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-6 fill-none stroke-current stroke-2"
    >
      <path
        d="M5 5.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-5 3v-3H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10h9M7.5 13h5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="size-3.5 fill-none stroke-current stroke-[2.4]"
    >
      <path
        d="m4.5 10 3.3 3.2L15.5 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardIcon({ index }: { index: number }) {
  if (index === 0) {
    return <OpportunityIcon />;
  }

  if (index === 1) {
    return <FocusIcon />;
  }

  return <ConversationIcon />;
}

export function ResultCard({ outcome, index }: ResultCardProps) {
  const isGreen = index === 2;
  const isMiddle = index === 1;

  return (
    <article
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-[28px]",
        "border p-7 shadow-[0_22px_60px_rgba(28,23,70,0.18)]",
        "backdrop-blur-xl transition duration-300",
        "hover:-translate-y-1.5 hover:shadow-[0_30px_75px_rgba(28,23,70,0.25)]",
        isGreen
          ? "border-[rgba(105,229,184,0.28)] bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(88,211,166,0.13))]"
          : isMiddle
            ? "border-white/18 bg-[linear-gradient(145deg,rgba(255,255,255,0.17),rgba(144,126,239,0.13))]"
            : "border-white/18 bg-white/[0.13]",
      ].join(" ")}
    >
      <div
        aria-hidden="true"
        className={[
          "absolute right-0 top-0 size-44 translate-x-12 -translate-y-12 rounded-full blur-xl",
          "transition-transform duration-300 group-hover:scale-110",
          isGreen
            ? "bg-[radial-gradient(circle,rgba(98,224,178,0.25),transparent_68%)]"
            : "bg-[radial-gradient(circle,rgba(184,172,255,0.22),transparent_68%)]",
        ].join(" ")}
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <span
            className={[
              "inline-flex size-13 items-center justify-center rounded-[17px] border shadow-[0_10px_28px_rgba(24,20,62,0.14)]",
              isGreen
                ? "border-[rgba(98,224,178,0.28)] bg-[#62E0B2]/15 text-[#85F0C8]"
                : "border-white/15 bg-white/10 text-[#E2DEFF]",
            ].join(" ")}
          >
            <CardIcon index={index} />
          </span>

          <span
            className={[
              "inline-flex size-8 items-center justify-center rounded-full border text-[11px] font-extrabold",
              isGreen
                ? "border-[rgba(98,224,178,0.25)] bg-[#62E0B2]/10 text-[#85F0C8]"
                : "border-white/15 bg-white/[0.08] text-[#D9D4FF]",
            ].join(" ")}
          >
            0{index + 1}
          </span>
        </div>

        <p
          className={[
            "mt-7 text-[11px] font-extrabold uppercase tracking-[0.08em]",
            isGreen ? "text-[#85F0C8]" : "text-[#D8D2FF]",
          ].join(" ")}
        >
          {outcome.eyebrow}
        </p>

        <h3 className="mt-3 font-[var(--font-heading)] text-[26px] font-extrabold leading-[1.18] tracking-[-0.03em] !text-white">
          {outcome.title}
        </h3>

        <p className="mt-4 flex-1 text-[15px] leading-7 text-[#D5D4E3]">
          {outcome.description}
        </p>

        <div className="my-6 h-px bg-white/10" />

        <ul className="space-y-3.5">
          {outcome.supportingPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-[13px] font-bold text-[#F1F0F7]"
            >
              <span
                className={[
                  "inline-flex size-6 shrink-0 items-center justify-center rounded-full",
                  isGreen
                    ? "bg-[#62E0B2]/15 text-[#85F0C8]"
                    : "bg-white/10 text-[#DCD7FF]",
                ].join(" ")}
              >
                <CheckIcon />
              </span>

              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
