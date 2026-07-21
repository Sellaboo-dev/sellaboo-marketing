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
        fill="var(--color-primary)"
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
    <div className="rounded-[18px] border border-[rgba(63,58,100,0.12)] bg-white p-4 shadow-[0_14px_35px_rgba(42,45,76,0.08)]">
      <div className="flex items-start gap-3">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[13px] bg-[var(--color-primary)] text-white">
          <PersonIcon />
        </span>

        <div className="min-w-0">
          <span className="block text-[9px] font-extrabold uppercase tracking-[0.05em] text-[#979eae]">
            New estimate request
          </span>

          <strong className="mt-1 block text-[12px] text-[var(--color-heading)]">
            Jordan Miller
          </strong>

          <p className="mt-2 text-[10px] leading-4 text-[var(--color-body)]">
            Air conditioner stopped cooling
          </p>
        </div>
      </div>

      <span className="mt-4 block rounded-full bg-[var(--color-primary-light)] px-3 py-1.5 text-center text-[9px] font-bold text-[var(--color-primary)]">
        Source: Website form
      </span>
    </div>
  );
}

function SellabooPreview() {
  return (
    <div className="relative flex min-h-[178px] items-center justify-center overflow-hidden rounded-[18px] border border-[rgba(63,58,100,0.12)] bg-[radial-gradient(circle,rgba(236,234,247,0.95),rgba(255,255,255,0.9)_64%)]">
      <span className="absolute size-36 rounded-full border border-[rgba(63,58,100,0.08)]" />
      <span className="absolute size-28 rounded-full border border-[rgba(63,58,100,0.11)]" />
      <span className="absolute size-20 rounded-full border border-[rgba(63,58,100,0.14)]" />

      <span className="absolute left-[18%] top-[25%] size-1.5 rounded-full bg-[#aaa5c9]" />
      <span className="absolute right-[18%] top-[32%] size-1 rounded-full bg-[var(--color-success)]" />
      <span className="absolute bottom-[22%] left-[25%] size-1 rounded-full bg-[var(--color-primary)]" />

      <div className="relative z-10 size-16 drop-shadow-[0_16px_24px_rgba(63,58,100,0.24)]">
        <SellabooMark />
      </div>

      <span className="absolute bottom-4 inline-flex items-center gap-1.5 rounded-full border border-[rgba(24,182,126,0.18)] bg-white/90 px-3 py-1.5 text-[9px] font-extrabold text-[#16825f] shadow-sm">
        <span className="size-1.5 rounded-full bg-[var(--color-success)]" />
        Follow-up active
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
      text: "Still have questions? I’m happy to help.",
      day: "Day 3",
    },
    {
      text: "Ready to move forward?",
      day: "Day 7",
    },
  ];

  return (
    <div className="rounded-[18px] border border-[rgba(63,58,100,0.12)] bg-white p-4 shadow-[0_14px_35px_rgba(42,45,76,0.07)]">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-extrabold text-[var(--color-primary)]">
          Following up automatically
        </span>

        <span className="inline-flex items-center gap-1 text-[8px] font-bold text-[#16825f]">
          <span className="size-1.5 rounded-full bg-[var(--color-success)]" />
          Active
        </span>
      </div>

      <div className="space-y-2">
        {messages.map((message) => (
          <div
            key={message.day}
            className="flex items-center gap-2"
          >
            <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[rgba(63,58,100,0.17)] bg-[var(--color-primary-light)] text-[var(--color-primary)]">
              <MailIcon />
            </span>

            <div className="min-w-0 flex-1 rounded-[10px] border border-[var(--color-border)] bg-[#fbfcfe] px-3 py-2 text-[9px] font-semibold text-[#4f5769]">
              {message.text}
            </div>

            <span className="shrink-0 text-[8px] font-bold text-[#9aa0af]">
              {message.day}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5 border-t border-[var(--color-border)] pt-3 text-[8px] font-bold text-[#747c8e]">
        All messages personalized
        <span className="inline-flex size-4 items-center justify-center rounded-full bg-[#eaf9f4] text-[#16825f]">
          <CheckIcon />
        </span>
      </div>
    </div>
  );
}

function ReplyPreview() {
  return (
    <div className="rounded-[18px] border border-[rgba(24,182,126,0.17)] bg-white p-4 shadow-[0_14px_35px_rgba(20,119,87,0.08)]">
      <span className="block text-center text-[10px] font-extrabold text-[#16825f]">
        Customer replied!
      </span>

      <div className="mt-4 flex items-start gap-3 rounded-[13px] border border-[var(--color-border)] bg-[#fbfcfe] p-3">
        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7169a8,#9891c5)] text-[9px] font-extrabold text-white">
          JM
        </span>

        <div>
          <p className="text-[10px] font-semibold leading-4 text-[var(--color-heading)]">
            Yes, I’d like to schedule something.
          </p>

          <span className="mt-2 block text-right text-[8px] text-[#a0a6b4]">
            9:41 AM
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2 rounded-[10px] bg-[#eaf9f4] px-3 py-2 text-[9px] font-extrabold text-[#16825f]">
        <BellIcon />
        Your team notified
      </div>

      <p className="mt-3 text-center text-[8px] font-bold text-[#16825f]">
        Lead status: Engaged
      </p>
    </div>
  );
}

function BookedPreview() {
  return (
    <div className="rounded-[18px] border border-[rgba(24,182,126,0.2)] bg-white p-4 text-center shadow-[0_14px_35px_rgba(20,119,87,0.08)]">
      <span className="mx-auto inline-flex size-11 items-center justify-center rounded-full bg-[var(--color-success)] text-white shadow-[0_0_0_7px_rgba(24,182,126,0.08)]">
        <CheckIcon />
      </span>

      <strong className="mt-4 block text-[12px] text-[var(--color-heading)]">
        Estimate scheduled
      </strong>

      <span className="mt-2 block text-[10px] font-semibold text-[#858c9c]">
        Tomorrow
      </span>

      <span className="mt-1 block text-[11px] font-extrabold text-[var(--color-primary)]">
        2:30 PM
      </span>

      <div className="mt-4 flex items-center justify-center gap-2 rounded-[10px] bg-[#eaf9f4] px-3 py-2 text-[9px] font-extrabold text-[#16825f]">
        <CalendarIcon />
        Added to calendar
      </div>

      <p className="mt-3 text-[8px] font-bold text-[#16825f]">
        Lead status: Converted
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
        "group relative flex h-full flex-col overflow-hidden rounded-[24px]",
        "border bg-white/88 p-4 shadow-[0_18px_50px_rgba(42,45,76,0.075)]",
        "transition duration-300 hover:-translate-y-1",
        "hover:shadow-[0_25px_65px_rgba(42,45,76,0.12)]",
        step.successStage
          ? "border-[rgba(24,182,126,0.2)]"
          : "border-[rgba(225,228,239,0.95)]",
      ].join(" ")}
    >
      <div
        aria-hidden="true"
        className={[
          "absolute right-0 top-0 size-28 translate-x-10 -translate-y-10 rounded-full",
          "transition-transform duration-300 group-hover:scale-110",
          step.successStage
            ? "bg-[radial-gradient(circle,rgba(24,182,126,0.1),transparent_68%)]"
            : "bg-[radial-gradient(circle,rgba(63,58,100,0.08),transparent_68%)]",
        ].join(" ")}
      />

      <div className="relative">
        <StepPreview type={step.type} />
      </div>

      <div className="relative flex flex-1 flex-col px-2 pb-2 pt-6 text-center">
        <span
          className={[
            "text-[10px] font-extrabold uppercase tracking-[0.055em]",
            step.successStage
              ? "text-[#16825f]"
              : "text-[var(--color-primary)]",
          ].join(" ")}
        >
          {step.eyebrow}
        </span>

        <h3 className="mt-3 font-[var(--font-heading)] text-[20px] font-extrabold leading-[1.25] tracking-[-0.03em] text-[var(--color-heading)]">
          {step.title}
        </h3>

        <p className="mt-4 text-[14px] leading-6 text-[var(--color-body)]">
          {step.description}
        </p>

        <span
          aria-hidden="true"
          className={[
            "mx-auto mt-auto inline-flex size-10 items-center justify-center rounded-full border pt-0 text-[12px] font-extrabold",
            step.successStage
              ? "border-[rgba(24,182,126,0.22)] bg-[#eaf9f4] text-[#16825f]"
              : "border-[rgba(63,58,100,0.15)] bg-[var(--color-primary-light)] text-[var(--color-primary)]",
          ].join(" ")}
        >
          {step.number}
        </span>
      </div>
    </article>
  );
}
