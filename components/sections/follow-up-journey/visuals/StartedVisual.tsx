export function StartedVisual() {
  return (
    <div className="flex h-full min-h-[320px] flex-col rounded-[22px] border border-[#E7EBF3] bg-white p-5 shadow-[0_20px_60px_-36px_rgba(24,26,36,0.28)]">
      <div className="flex items-center justify-between">
        <div className="h-3 w-28 rounded-full bg-[#ECEAF7]" />

        <span className="rounded-full bg-[#18B67E] px-3 py-1 text-xs font-semibold text-white">
          Active
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF9F3]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-8 w-8 fill-none stroke-[#18B67E]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>

        <h3 className="mt-4 text-center text-lg font-semibold text-[#181A24]">
          Follow-Up Started
        </h3>

        <p className="mx-auto mt-3 max-w-[210px] text-center text-sm leading-6 text-[#5F6678]">
          Sellaboo immediately begins reaching out so every lead receives
          consistent follow-up.
        </p>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between rounded-xl border border-[#E7EBF3] bg-[#FBFCFE] px-4 py-3">
            <div>
              <p className="text-sm font-medium text-[#181A24]">
                Initial Welcome
              </p>

              <p className="text-xs text-[#5F6678]">
                Sent just now
              </p>
            </div>

            <span className="rounded-full bg-[#EAF9F3] px-2.5 py-1 text-xs font-semibold text-[#18B67E]">
              Sent
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[#E7EBF3] bg-[#FBFCFE] px-4 py-3">
            <div>
              <p className="text-sm font-medium text-[#181A24]">
                Follow-Up #2
              </p>

              <p className="text-xs text-[#5F6678]">
                Tomorrow at 9:00 AM
              </p>
            </div>

            <span className="rounded-full bg-[#ECEAF7] px-2.5 py-1 text-xs font-semibold text-[#3F3A64]">
              Scheduled
            </span>
          </div>
        </div>

        <div className="mt-auto pt-5">
          <div className="rounded-xl bg-[#18B67E] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm">
            Follow-Up Running
          </div>
        </div>
      </div>
    </div>
  );
}
