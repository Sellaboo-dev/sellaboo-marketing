export function LeadVisual() {
  return (
    <div className="flex h-full min-h-[300px] flex-col rounded-[24px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_22px_60px_rgba(7,5,24,0.22)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#AFA9CF]">
          New inquiry
        </span>

        <span className="rounded-full bg-[#7569CA]/20 px-2.5 py-1 text-[10px] font-bold text-[#D9D4FF]">
          New
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#766ACB]/18 text-[#CFC9FF]">
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
          <p className="text-sm font-extrabold text-white">Jordan Miller</p>
          <p className="mt-0.5 text-xs text-[#AAA7B9]">Website inquiry</p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-4">
        <p className="text-xs font-bold text-[#E7E5EF]">
          Interested in your services
        </p>

        <p className="mt-1.5 text-[11px] leading-5 text-[#A7A4B5]">
          A new opportunity has entered your pipeline.
        </p>
      </div>

      <div className="mt-auto pt-5">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-xs font-bold text-[#D5D1EC]">
          <span className="size-2 rounded-full bg-[#8174DA]" />
          Ready for nurture
        </div>
      </div>
    </div>
  );
}
