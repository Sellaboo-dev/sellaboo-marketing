export function StartedVisual() {
  return (
    <div className="flex h-full min-h-[300px] flex-col rounded-[24px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_22px_60px_rgba(7,5,24,0.22)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#B2AECA]">
          Sellaboo
        </span>

        <span className="rounded-full bg-[#62E0B2]/15 px-2.5 py-1 text-[10px] font-bold text-[#7CEAC2]">
          Active
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#62E0B2]/12 text-[#72E6BC]">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-5 fill-none stroke-current stroke-2"
          >
            <path
              d="M5 12l4 4L19 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <div>
          <p className="text-sm font-extrabold text-white">Nurture started</p>
          <p className="mt-0.5 text-xs text-[#AAA7B9]">Running automatically</p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <div className="rounded-xl border border-white/10 bg-black/10 px-3 py-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-[#E7E5EF]">
                Initial follow-up
              </p>
              <p className="mt-1 text-[10px] text-[#9F9BAD]">Sent just now</p>
            </div>

            <span className="text-[10px] font-bold text-[#72E6BC]">Sent</span>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/10 px-3 py-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-[#E7E5EF]">
                Next touchpoint
              </p>
              <p className="mt-1 text-[10px] text-[#9F9BAD]">Scheduled</p>
            </div>

            <span className="size-2 rounded-full bg-[#8174DA]" />
          </div>
        </div>
      </div>

      <div className="mt-auto pt-5">
        <div className="rounded-xl bg-[#62E0B2]/12 px-3 py-3 text-center text-xs font-extrabold text-[#72E6BC]">
          Nurture keeps moving
        </div>
      </div>
    </div>
  );
}
