import type { HowItWorksStep } from "./HowItWorksStepData";

type Props = {
  step: HowItWorksStep;
};

function PersonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5 fill-none stroke-current stroke-2"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path
        d="M5.5 20c.6-4 2.8-6 6.5-6s5.9 2 6.5 6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5 fill-none stroke-current stroke-2"
    >
      <path
        d="m6 12 4 4 8-9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4 fill-none stroke-current stroke-2"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path
        d="m5 7 7 5 7-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4 fill-none stroke-current stroke-2"
    >
      <path
        d="M6.5 10a5.5 5.5 0 0 1 11 0c0 5 2 5 2 6H4.5c0-1 2-1 2-6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 19h4" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5 fill-none stroke-current stroke-2"
    >
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path
        d="M8 3v4M16 3v4M4 10h16"
        strokeLinecap="round"
      />
      <path
        d="m9 15 2 2 4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SellabooMark() {
  return (
    <svg viewBox="0 0 42 42" aria-hidden="true" className="size-full">
      <rect
        x="1"
        y="1"
        width="40"
        height="40"
        rx="13"
        fill="#4E477F"
      />

      <path
        fill="white"
        d="M12.7 14.4h13.1c2.4 0 4 1.3 4 3.3 0 1.5-.9 2.6-2.4 3.2 1.8.5 2.9 1.8 2.9 3.6 0 2.4-1.9 4-4.8 4H12.7v-4.2h12c.8 0 1.3-.4 1.3-1s-.5-1-1.3-1h-7.8c-2.9 0-4.8-1.6-4.8-3.9 0-1.8 1.1-3.1 2.8-3.6h-2.2v-4.4Z"
      />
    </svg>
  );
}

function LeadPreview() {
  return (
    <div className="rounded-[18px] border border-[#E1DDF3] bg-white p-4 shadow-[0_14px_35px_rgba(42,45,76,0.08)]">
      <div className="flex items-start gap-3">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[13px] bg-[#594FC2] text-white shadow-[0_8px_20px_rgba(89,79,194,0.2)]">
          <PersonIcon />
        </span>

        <div className="min-w-0">
          <span className="block text-[9px] font-extrabold uppercase tracking-[0.05em] text-[#979EAE]">
            New inquiry
          </span>

          <strong className="mt-1 block text-[12px] text-[#181A24]">
            Jordan Miller
          </strong>

          <p className="mt-2 text-[10px] leading-4 text-[#6B7282]">
            Interested in your services
          </p>
        </div>
      </div>

      <span className="mt-4 block rounded-full bg-[#F0EDFF] px-3 py-1.5 text-center text-[9px] font-bold text-[#594FC2]">
        Source: Website form
      </span>
    </div>
  );
}

function SellabooPreview() {
  return (
    <div className="relative flex min-h-[178px] items-center justify-center overflow-hidden rounded-[18px] border border-[#DDD8F3] bg-[linear-gradient(145deg,#F2EFFF_0%,#FFFFFF_50%,#ECFBF5_100%)]">
      <span className="absolute size-36 rounded-full border border-[rgba(89,79,194,0.08)]" />
      <span className="absolute size-28 rounded-full border border-[rgba(89,79,194,0.11)]" />
      <span className="absolute size-20 rounded-full border border-[rgba(89,79,194,0.15)]" />

      <span className="absolute left-[18%] top-[25%] size-1.5 rounded-full bg-[#AAA5C9]" />
      <span className="absolute right-[18%] top-[32%] size-1.5 rounded-full bg-[#18B67E]" />
      <span className="absolute bottom-[22%] left-[25%] size-1 rounded-full bg-[#594FC2]" />

      <div className="relative z-10 size-16 drop-shadow-[0_16px_24px_rgba(63,58,100,0.24)]">
        <SellabooMark />
      </div>

      <span className="absolute bottom-4 inline-flex items-center gap-1.5 rounded-full border border-[rgba(24,182,126,0.2)] bg-white/90 px-3 py-1.5 text-[9px] font-extrabold text-[#16825F] shadow-sm">
        <span className="size-1.5 rounded-full bg-[#18B67E]" />
        Nurture active
      </span>
    </div>
  );
}

function FollowupPreview() {
  const messages = [
    {
      text: "Hi Jordan! Just checking in...",
      day: "Day 1",
    },
    {
      text: "Still have questions? Happy to help.",
      day: "Day 3",
    },
    {
      text: "Checking in when the timing is right.",
      day: "Day 7",
    },
  ];

  return (
    <div className="rounded-[18px] border border-[#E1DDF3] bg-white p-4 shadow-[0_14px_35px_rgba(42,45,76,0.07)]">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-extrabold text-[#594FC2]">
          Nurture continues
        </span>

        <span className="inline-flex items-center gap-1 text-[8px] font-bold text-[#16825F]">
          <span className="size-1.5 rounded-full bg-[#18B67E]" />
          Active
        </span>
      </div>

      <div className="space-y-2">
        {messages.map((message) => (
          <div
            key={message.day}
            className="flex items-center gap-2"
          >
            <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[#DDD8F3] bg-[#F0EDFF] text-[#594FC2]">
              <MailIcon />
            </span>

            <div className="min-w-0 flex-1 rounded-[10px] border border-[#E7E9F0] bg-[#FBFCFE] px-3 py-2 text-[9px] font-semibold text-[#4F5769]">
              {message.text}
            </div>

            <span className="shrink-0 text-[8px] font-bold text-[#9AA0AF]">
              {message.day}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5 border-t border-[#E7E9F0] pt-3 text-[8px] font-bold text-[#747C8E]">
        Follow-up stays consistent
        <span className="inline-flex size-4 items-center justify-center rounded-full bg-[#E8FAF3] text-[#16825F]">
          <CheckIcon />
        </span>
      </div>
    </div>
  );
}

function ReplyPreview() {
  return (
    <div className="rounded-[18px] border border-[rgba(24,182,126,0.2)] bg-white p-4 shadow-[0_14px_35px_rgba(20,119,87,0.08)]">
      <span className="block text-center text-[10px] font-extrabold text-[#16825F]">
        Lead replied
      </span>

      <div className="mt-4 flex items-start gap-3 rounded-[13px] border border-[#E7E9F0] bg-[#FBFCFE] p-3">
        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7169A8,#9891C5)] text-[9px] font-extrabold text-white">
          JM
        </span>

        <div>
          <p className="text-[10px] font-semibold leading-4 text-[#181A24]">
            Yes, tomorrow afternoon works.
          </p>

          <span className="mt-2 block text-right text-[8px] text-[#A0A6B4]">
            9:41 AM
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2 rounded-[10px] bg-[#E8FAF3] px-3 py-2 text-[9px] font-extrabold text-[#16825F]">
        <BellIcon />
        Your team knows when to step in
      </div>

      <p className="mt-3 text-center text-[8px] font-bold text-[#16825F]">
        Lead status: Engaged
      </p>
    </div>
  );
}

function BookedPreview() {
  return (
    <div className="rounded-[18px] border border-[rgba(24,182,126,0.22)] bg-[linear-gradient(145deg,#FFFFFF,#F4FCF8)] p-4 text-center shadow-[0_14px_35px_rgba(20,119,87,0.08)]">
      <span className="mx-auto inline-flex size-11 items-center justify-center rounded-full bg-[#18B67E] text-white shadow-[0_0_0_7px_rgba(24,182,126,0.08)]">
        <CheckIcon />
      </span>

      <strong className="mt-4 block text-[12px] text-[#181A24]">
        Appointment scheduled
      </strong>

      <span className="mt-2 block text-[10px] font-semibold text-[#858C9C]">
        Tomorrow
      </span>

      <span className="mt-1 block text-[11px] font-extrabold text-[#594FC2]">
        2:30 PM
      </span>

      <div className="mt-4 flex items-center justify-center gap-2 rounded-[10px] bg-[#E8FAF3] px-3 py-2 text-[9px] font-extrabold text-[#16825F]">
        <CalendarIcon />
        Next step confirmed
      </div>

      <p className="mt-3 text-[8px] font-bold text-[#16825F]">
        Lead status: Re-engaged
      </p>
    </div>
  );
}

function StepPreview({ type }: Pick<HowItWorksStep, "type">) {
  switch (type) {
    case "lead":
      return <LeadPreview />;

    case "sellaboo":
      return <SellabooPreview />;

    case "followup":
      return <FollowupPreview />;

    case "reply":
      return <ReplyPreview />;

    case "booked":
      return <BookedPreview />;
  }
}

export function HowItWorksStepCard({ step }: Props) {
  return (
    <article
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-[26px]",
        "border bg-white/90 p-4 shadow-[0_18px_50px_rgba(42,45,76,0.075)]",
        "backdrop-blur-sm transition duration-300 hover:-translate-y-1.5",
        "hover:shadow-[0_26px_68px_rgba(42,45,76,0.12)]",
        step.successStage
          ? "border-[rgba(24,182,126,0.22)]"
          : "border-[#E1E3EF]",
      ].join(" ")}
    >
      <div
        aria-hidden="true"
        className={[
          "absolute right-0 top-0 size-32 translate-x-10 -translate-y-10 rounded-full blur-sm",
          "transition-transform duration-300 group-hover:scale-110",
          step.successStage
            ? "bg-[radial-gradient(circle,rgba(24,182,126,0.13),transparent_68%)]"
            : "bg-[radial-gradient(circle,rgba(101,84,196,0.11),transparent_68%)]",
        ].join(" ")}
      />

      <div className="relative">
        <StepPreview type={step.type} />
      </div>

      <div className="relative flex flex-1 flex-col px-2 pb-2 pt-6 text-center">
        <span
          className={[
            "text-[10px] font-extrabold uppercase tracking-[0.075em]",
            step.successStage
              ? "text-[#16825F]"
              : "text-[#594FC2]",
          ].join(" ")}
        >
          {step.eyebrow}
        </span>

        <h3 className="mt-3 font-[var(--font-heading)] text-[20px] font-extrabold leading-[1.25] tracking-[-0.03em] text-[#181A24]">
          {step.title}
        </h3>

        <p className="mt-4 text-[14px] leading-6 text-[#626A7C]">
          {step.description}
        </p>

        <span
          aria-hidden="true"
          className={[
            "mx-auto mt-6 inline-flex size-10 items-center justify-center rounded-full border text-[12px] font-extrabold",
            step.successStage
              ? "border-[rgba(24,182,126,0.24)] bg-[#E8FAF3] text-[#16825F]"
              : "border-[#DDD8F3] bg-[#F0EDFF] text-[#594FC2]",
          ].join(" ")}
        >
          {step.number}
        </span>
      </div>
    </article>
  );
}
