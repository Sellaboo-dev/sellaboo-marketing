import { WhySellabooFeature as Feature } from "./WhySellabooData";

type Props = {
  feature: Feature;
  index: number;
  reverse?: boolean;
};

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

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="size-4 fill-none stroke-current stroke-2"
    >
      <path
        d="M4 10h11M11 6l4 4-4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeadNurtureVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div className="rounded-[24px] border border-[#E3E0F2] bg-white p-5 shadow-[0_22px_60px_rgba(57,50,105,0.12)] sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#8A849E]">
              New lead
            </p>

            <p className="mt-1 font-[var(--font-heading)] text-lg font-extrabold text-[#222333]">
              Jordan Miller
            </p>
          </div>

          <span className="rounded-full bg-[#F0EEFA] px-3 py-1 text-[11px] font-bold text-[#625AA3]">
            New
          </span>
        </div>

        <div className="mt-5 rounded-2xl border border-[#EBE9F4] bg-[#FAFAFD] p-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#EEEAFB] text-[#625AA3]">
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
            </span>

            <div>
              <p className="text-sm font-bold text-[#242532]">
                Interested in your services
              </p>

              <p className="mt-1 text-xs text-[#777D8D]">
                Website inquiry · 2 minutes ago
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          tabIndex={-1}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(100deg,#514A91,#6259B3)] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(81,74,145,0.24)]"
        >
          Start Nurture
          <ArrowIcon />
        </button>

        <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#ECFAF5] px-4 py-3 text-sm font-bold text-[#15986B]">
          <span className="flex size-5 items-center justify-center rounded-full bg-[#CFF3E5]">
            <CheckIcon />
          </span>
          Nurture active
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute -bottom-6 -right-5 -z-10 h-32 w-36 rounded-[28px] bg-[#DDF7ED]"
      />
    </div>
  );
}

function OneClickVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div className="rounded-[26px] border border-[#DED9F1] bg-[linear-gradient(145deg,#F8F6FF_0%,#FFFFFF_54%,#F1FBF7_100%)] p-6 shadow-[0_22px_60px_rgba(57,50,105,0.12)] sm:p-8">
        <div className="mx-auto max-w-[330px]">
          <p className="text-center text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#858096]">
            One simple action
          </p>

          <div className="mt-5 rounded-[22px] border border-[#E5E2F1] bg-white p-5 shadow-[0_12px_32px_rgba(57,50,105,0.07)]">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#F0EDFA] font-[var(--font-heading)] text-sm font-extrabold text-[#5F56A3]">
                JM
              </span>

              <div className="min-w-0 flex-1">
                <p className="font-[var(--font-heading)] text-base font-extrabold text-[#242532]">
                  Jordan Miller
                </p>

                <p className="mt-0.5 text-xs text-[#777D8D]">
                  Not ready yet
                </p>
              </div>

              <span className="size-2.5 rounded-full bg-[#F0B95A]" />
            </div>
          </div>

          <div className="relative py-6">
            <div className="mx-auto h-8 w-px bg-[linear-gradient(to_bottom,#D3CEE9,#8F83D1)]" />

            <span className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9D3EE] bg-white text-[#625AA3] shadow-sm">
              <ArrowIcon />
            </span>
          </div>

          <button
            type="button"
            tabIndex={-1}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(100deg,#514A91,#6259B3)] px-5 py-4 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(81,74,145,0.26)]"
          >
            Start Nurture
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#15986B]">
            <span className="flex size-5 items-center justify-center rounded-full bg-[#DDF6EC]">
              <CheckIcon />
            </span>
            Ongoing follow-up handled
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute -left-6 -top-6 -z-10 size-28 rounded-full bg-[#E9E4FB]"
      />
    </div>
  );
}

function FocusedJobVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div className="rounded-[26px] border border-[#E1DEEF] bg-white p-5 shadow-[0_22px_60px_rgba(57,50,105,0.11)] sm:p-6">
        <div className="grid gap-4 sm:grid-cols-[0.9fr_auto_1.1fr] sm:items-center">
          <div className="rounded-2xl border border-[#E8E6F0] bg-[#F9F9FC] p-4">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#918C9F]">
              Your CRM
            </p>

            <p className="mt-2 font-[var(--font-heading)] text-lg font-extrabold text-[#252632]">
              Stays in place
            </p>

            <div className="mt-4 space-y-2">
              {["Contacts", "Pipeline", "Customer data"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#666C7B]"
                >
                  <span className="size-1.5 rounded-full bg-[#C5C1D6]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden text-[#8B83C2] sm:block">
            <ArrowIcon />
          </div>

          <div className="rounded-2xl border border-[#CFEFDF] bg-[linear-gradient(145deg,#F7FFFB,#EAF9F3)] p-4">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-xl bg-[#D8F5E8] text-[#15986B]">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-4.5 fill-none stroke-current stroke-2"
                >
                  <path
                    d="M5 5.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-5 3v-3H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#15986B]">
                Sellaboo
              </p>
            </div>

            <p className="mt-3 font-[var(--font-heading)] text-lg font-extrabold text-[#20272A]">
              Handles the nurture
            </p>

            <div className="mt-4 space-y-2">
              {[
                "Consistent follow-up",
                "Ongoing nurture",
                "Ready to re-engage",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 text-xs font-bold text-[#3E6154]"
                >
                  <span className="flex size-4 items-center justify-center rounded-full bg-[#D9F5E9] text-[#15986B]">
                    <CheckIcon />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-[#EEEAF7] bg-[#FAF9FE] px-4 py-3 text-center text-xs font-bold text-[#625AA3]">
          Keep the tools you already use. Add effortless nurture.
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute -bottom-8 -left-8 -z-10 h-32 w-40 rounded-[32px] bg-[#EEEAFB]"
      />
    </div>
  );
}

function FeatureVisual({ index }: { index: number }) {
  if (index === 0) {
    return <LeadNurtureVisual />;
  }

  if (index === 1) {
    return <OneClickVisual />;
  }

  return <FocusedJobVisual />;
}

export function WhySellabooFeature({
  feature,
  index,
  reverse = false,
}: Props) {
  const accentGreen = index === 2;

  return (
    <article
      className={[
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reverse ? "lg:[&>*:first-child]:order-2" : "",
      ].join(" ")}
    >
      <div
        className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[30px] border border-[#E7E4F2] bg-[linear-gradient(145deg,#F8F6FF_0%,#FFFFFF_54%,#F3FBF8_100%)] px-6 py-10 shadow-[0_24px_70px_rgba(65,57,117,0.08)] sm:px-10"
        aria-hidden="true"
      >
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-20 size-52 rounded-full bg-[radial-gradient(circle,rgba(111,94,205,0.14),transparent_68%)]"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-20 size-56 rounded-full bg-[radial-gradient(circle,rgba(24,182,126,0.13),transparent_68%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(91,81,154,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(91,81,154,0.04)_1px,transparent_1px)] [background-size:28px_28px]"
        />

        <div className="relative w-full">
          <FeatureVisual index={index} />
        </div>
      </div>

      <div className="max-w-[540px]">
        <div className="flex items-center gap-3">
          <span
            className={[
              "inline-flex size-8 items-center justify-center rounded-full text-[11px] font-extrabold",
              accentGreen
                ? "bg-[#E3F8EF] text-[#15986B]"
                : "bg-[#EFECFA] text-[#6158A1]",
            ].join(" ")}
          >
            0{index + 1}
          </span>

          <p
            className={[
              "text-[11px] font-extrabold uppercase tracking-[0.1em]",
              accentGreen ? "text-[#15986B]" : "text-[#625AA3]",
            ].join(" ")}
          >
            {feature.eyebrow}
          </p>
        </div>

        <h3 className="mt-5 font-[var(--font-heading)] text-[clamp(32px,3.5vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#1C1D27]">
          {feature.title}
        </h3>

        <p className="mt-5 text-[17px] leading-8 text-[#626979]">
          {feature.description}
        </p>

        <div className="mt-7 flex items-center gap-3 text-sm font-bold text-[#3E4351]">
          <span
            className={[
              "flex size-7 shrink-0 items-center justify-center rounded-full",
              accentGreen
                ? "bg-[#DEF6EB] text-[#15986B]"
                : "bg-[#EEEBF9] text-[#6158A1]",
            ].join(" ")}
          >
            <CheckIcon />
          </span>

          {index === 0 && "Give not-ready leads somewhere to go."}
          {index === 1 && "Start nurture without building another workflow."}
          {index === 2 && "Keep your CRM. Let Sellaboo do one job well."}
        </div>
      </div>
    </article>
  );
}
