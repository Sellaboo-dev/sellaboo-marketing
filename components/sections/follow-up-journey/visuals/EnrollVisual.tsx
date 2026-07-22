export function EnrollVisual() {
  return (
    <div className="flex h-full min-h-[320px] flex-col rounded-[22px] border border-[#E7EBF3] bg-white p-5 shadow-[0_20px_60px_-36px_rgba(24,26,36,0.28)]">
      <div className="flex items-center justify-between">
        <div className="h-3 w-28 rounded-full bg-[#ECEAF7]" />

        <span className="rounded-full bg-[#3F3A64] px-3 py-1 text-xs font-semibold text-white">
          Ready
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
            <circle cx="9" cy="7" r="4" />
            <path d="M3 19a6 6 0 0 1 12 0" />
            <circle cx="18" cy="15" r="4" />
            <path d="m16.5 15 1 1 2-2" />
          </svg>
        </div>

        <h3 className="mt-4 text-center text-lg font-semibold text-[#181A24]">
          Enroll Lead
        </h3>

        <p className="mx-auto mt-3 max-w-[190px] text-center text-sm leading-6 text-[#5F6678]">
          This lead is ready to begin consistent follow-up.
        </p>

        <div className="mt-6 rounded-xl border border-[#E7EBF3] bg-[#FBFCFE] p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#181A24]">
              Follow-Up Sequence
            </span>

            <span className="rounded-full bg-[#ECEAF7] px-2.5 py-1 text-xs font-semibold text-[#3F3A64]">
              Selected
            </span>
          </div>

          <p className="mt-2 text-xs leading-5 text-[#5F6678]">
            New Lead Follow-Up
          </p>
        </div>

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-center gap-2 rounded-xl border border-[#3F3A64] bg-white px-4 py-3 text-sm font-semibold text-[#3F3A64] shadow-sm">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="8" r="3" />
              <path d="M3 19a5 5 0 0 1 10 0" />
              <path d="M18 8v6" />
              <path d="M15 11h6" />
            </svg>

            Enroll Lead
          </div>
        </div>
      </div>
    </div>
  );
}
