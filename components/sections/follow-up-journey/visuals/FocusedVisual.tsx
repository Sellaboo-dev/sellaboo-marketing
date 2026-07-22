export function FocusedVisual() {
  return (
    <div className="flex h-full min-h-[320px] flex-col rounded-[22px] border border-[#E7EBF3] bg-white p-5 shadow-[0_20px_60px_-36px_rgba(24,26,36,0.28)]">
      <div className="flex items-center justify-between">
        <div className="h-3 w-28 rounded-full bg-[#ECEAF7]" />

        <span className="rounded-full bg-[#3F3A64] px-3 py-1 text-xs font-semibold text-white">
          Focused
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ECEAF7]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-8 w-8 fill-none stroke-[#3F3A64]"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 20h18" />
            <path d="M5 20V9l7-5 7 5v11" />
            <path d="M9 20v-6h6v6" />
            <path d="M16 8h3v4" />
          </svg>
        </div>

        <h3 className="mt-4 text-center text-lg font-semibold text-[#181A24]">
          Business Running
        </h3>

        <p className="mx-auto mt-3 max-w-[210px] text-center text-sm leading-6 text-[#5F6678]">
          Follow-up keeps moving forward while you stay focused on serving
          customers and growing your business.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[#E7EBF3] bg-[#FBFCFE] p-4 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF9F3]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-[#18B67E]"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l4 4L19 6" />
              </svg>
            </div>

            <p className="mt-3 text-xs font-semibold text-[#181A24]">
              Follow-Up Active
            </p>
          </div>

          <div className="rounded-xl border border-[#E7EBF3] bg-[#FBFCFE] p-4 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#ECEAF7]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-[#3F3A64]"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v18" />
                <path d="M5 12h14" />
              </svg>
            </div>

            <p className="mt-3 text-xs font-semibold text-[#181A24]">
              More Time Back
            </p>
          </div>
        </div>

        <div className="mt-auto pt-5">
          <div className="rounded-xl bg-[#3F3A64] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm">
            Stay Focused on Growth
          </div>
        </div>
      </div>
    </div>
  );
}
