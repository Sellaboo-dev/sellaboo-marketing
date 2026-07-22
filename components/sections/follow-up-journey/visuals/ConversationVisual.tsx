export function ConversationVisual() {
  return (
    <div className="flex h-full min-h-[320px] flex-col rounded-[22px] border border-[#E7EBF3] bg-white p-5 shadow-[0_20px_60px_-36px_rgba(24,26,36,0.28)]">
      <div className="flex items-center justify-between">
        <div className="h-3 w-28 rounded-full bg-[#ECEAF7]" />

        <span className="rounded-full bg-[#18B67E] px-3 py-1 text-xs font-semibold text-white">
          Engaged
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
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        <h3 className="mt-4 text-center text-lg font-semibold text-[#181A24]">
          Conversation Active
        </h3>

        <p className="mx-auto mt-3 max-w-[210px] text-center text-sm leading-6 text-[#5F6678]">
          Your lead is responding while you stay focused on running your
          business.
        </p>

        <div className="mt-6 space-y-3">
          <div className="self-start rounded-2xl rounded-bl-md bg-[#ECEAF7] px-4 py-3 text-sm text-[#3F3A64]">
            Just checking in to see if you had any questions.
          </div>

          <div className="self-end rounded-2xl rounded-br-md bg-[#18B67E] px-4 py-3 text-sm text-white">
            Yes! Can someone call me this afternoon?
          </div>

          <div className="flex items-center gap-2 pt-2">
            <div className="h-2.5 w-2.5 rounded-full bg-[#18B67E]" />

            <span className="text-xs font-medium text-[#18B67E]">
              Lead responded
            </span>
          </div>
        </div>

        <div className="mt-auto pt-5">
          <div className="rounded-xl border border-[#18B67E] bg-[#EAF9F3] px-4 py-3 text-center text-sm font-semibold text-[#18B67E]">
            Conversation Active
          </div>
        </div>
      </div>
    </div>
  );
}
