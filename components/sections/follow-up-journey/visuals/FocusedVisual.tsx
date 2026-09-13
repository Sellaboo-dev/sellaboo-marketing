export function FocusedVisual() {
  return (
    <div className="flex h-full min-h-[300px] flex-col rounded-[24px] border border-[rgba(98,224,178,0.22)] bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(98,224,178,0.08))] p-5 shadow-[0_22px_60px_rgba(7,5,24,0.22)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#B7CFC6]">
          Your business
        </span>

        <span className="rounded-full bg-[#62E0B2]/15 px-2.5 py-1 text-[10px] font-bold text-[#7CEAC2]">
          Focused
        </span>
      </div>

      <div className="mt-6 flex justify-center">
        <span className="flex size-14 items-center justify-center rounded-[18px] bg-[#62E0B2]/12 text-[#72E6BC]">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-7 fill-none stroke-current stroke-2"
          >
            <path
              d="M4 20V10l8-6 8 6v10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 20v-6h8v6M3 20h18"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <p className="mt-4 text-center text-sm font-extrabold text-white">
        Keep running your business
      </p>

      <p className="mx-auto mt-2 max-w-[190px] text-center text-[11px] leading-5 text-[#ACA9B9]">
        Sellaboo keeps nurturing future opportunities in the background.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-white/10 bg-black/10 px-2 py-3 text-center">
          <p className="text-lg font-extrabold text-[#72E6BC]">✓</p>
          <p className="mt-1 text-[10px] font-bold text-[#D9D7E3]">
            Nurture active
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/10 px-2 py-3 text-center">
          <p className="text-lg font-extrabold text-[#D8D3FF]">+</p>
          <p className="mt-1 text-[10px] font-bold text-[#D9D7E3]">
            Time back
          </p>
        </div>
      </div>

      <div className="mt-auto pt-5">
        <div className="rounded-xl bg-[#62E0B2] px-3 py-3 text-center text-xs font-extrabold text-[#173A30]">
          Stay focused on today
        </div>
      </div>
    </div>
  );
}
