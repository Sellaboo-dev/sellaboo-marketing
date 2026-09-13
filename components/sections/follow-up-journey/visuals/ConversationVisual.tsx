export function ConversationVisual() {
  return (
    <div className="flex h-full min-h-[300px] flex-col rounded-[24px] border border-[rgba(98,224,178,0.20)] bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(98,224,178,0.07))] p-5 shadow-[0_22px_60px_rgba(7,5,24,0.22)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#B7CFC6]">
          Conversation
        </span>

        <span className="rounded-full bg-[#62E0B2]/15 px-2.5 py-1 text-[10px] font-bold text-[#7CEAC2]">
          Engaged
        </span>
      </div>

      <div className="mt-5 space-y-3">
        <div className="mr-5 rounded-2xl rounded-bl-md bg-white/[0.09] px-3.5 py-3 text-[11px] leading-5 text-[#DDD9E8]">
          Just checking in to see if you had any questions.
        </div>

        <div className="ml-5 rounded-2xl rounded-br-md bg-[#62E0B2] px-3.5 py-3 text-[11px] font-semibold leading-5 text-[#173A30]">
          Yes! Can someone call me this afternoon?
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-xl border border-[#62E0B2]/15 bg-[#62E0B2]/10 px-3 py-3">
        <span className="relative flex size-2 shrink-0">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#62E0B2] opacity-25" />
          <span className="relative inline-flex size-2 rounded-full bg-[#62E0B2]" />
        </span>

        <div>
          <p className="text-xs font-extrabold text-[#78E8BF]">
            Lead re-engaged
          </p>
          <p className="mt-0.5 text-[10px] text-[#A9C8BD]">
            Your team knows when to step in
          </p>
        </div>
      </div>

      <div className="mt-auto pt-5">
        <div className="rounded-xl border border-[#62E0B2]/15 bg-white/[0.05] px-3 py-3 text-center text-xs font-bold text-[#D9F4E9]">
          Conversation is moving again
        </div>
      </div>
    </div>
  );
}
