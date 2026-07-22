export function LeadVisual() {
  return (
    <div className="flex h-full min-h-[320px] flex-col rounded-[22px] border border-[#E7EBF3] bg-white p-5 shadow-[0_20px_60px_-36px_rgba(24,26,36,0.28)]">
      <div className="flex items-center justify-between">
        <div className="h-3 w-28 rounded-full bg-[#ECEAF7]" />

        <span className="rounded-full bg-[#3F3A64] px-3 py-1 text-xs font-semibold text-white">
          New
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
            <path d="M15 19a6 6 0 0 0-12 0" />
            <circle cx="9" cy="7" r="4" />
            <path d="M19 8v6" />
            <path d="M16 11h6" />
          </svg>
        </div>

        <h3 className="mt-4 text-center text-lg font-semibold text-[#181A24]">
          Add New Lead
        </h3>

        <div className="mt-5 space-y-3">
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-[#5F6678]">
              Full Name
            </span>

            <div className="rounded-lg border border-[#E7EBF3] bg-[#FBFCFE] px-3 py-2 text-sm text-[#9AA1B1]">
              Michael Carter
            </div>
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-medium text-[#5F6678]">
              Email
            </span>

            <div className="rounded-lg border border-[#E7EBF3] bg-[#FBFCFE] px-3 py-2 text-sm text-[#9AA1B1]">
              michael@example.com
            </div>
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-medium text-[#5F6678]">
              Phone
            </span>

            <div className="rounded-lg border border-[#E7EBF3] bg-[#FBFCFE] px-3 py-2 text-sm text-[#9AA1B1]">
              (615) 555-0142
            </div>
          </label>
        </div>

        <div className="mt-auto pt-5">
          <div className="rounded-xl bg-[#3F3A64] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm">
            Create Lead
          </div>
        </div>
      </div>
    </div>
  );
}
