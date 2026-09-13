export function EnrollVisual() {
  return (
    <div className="flex h-full min-h-[300px] flex-col rounded-[24px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_22px_60px_rgba(7,5,24,0.22)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#AFA9CF]">
          Lead ready
        </span>

        <span className="rounded-full bg-[#7569CA]/20 px-2.5 py-1 text-[10px] font-bold text-[#D9D4FF]">
          Ready
        </span>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-4">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#766ACB]/18 text-xs font-extrabold text-[#D6D1FF]">
            JM
          </span>

          <div>
            <p className="text-sm font-extrabold text-white">Jordan Miller</p>
            <p className="mt-0.5 text-xs text-[#AAA7B9]">Not ready yet</p>
          </div>
        </div>
      </div>

      <div className="my-5 flex justify-center">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-5 fill-none stroke-[#9389DF] stroke-2"
        >
          <path
            d="M5 12h14M14 7l5 5-5 5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="mt-auto rounded-xl bg-[linear-gradient(100deg,#7569CA,#6258B5)] px-4 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(55,45,126,0.3)]">
        Start Nurture
      </div>
    </div>
  );
}
