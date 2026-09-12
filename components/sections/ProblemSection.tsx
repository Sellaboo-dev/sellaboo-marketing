import { Container } from "@/components/ui/Container";

const problems = [
  {
    number: "01",
    title: "You get busy",
    description:
      "Calls, appointments, estimates, customers, and day-to-day work compete for attention. Even great businesses can lose track of which lead needs the next follow-up.",
  },
  {
    number: "02",
    title: "Not every lead is ready now",
    description:
      "Some prospects need days, weeks, or even months before they're ready to move forward. Those are often good opportunities — they just need consistent nurture.",
  },
  {
    number: "03",
    title: "Follow-up becomes inconsistent",
    description:
      "When nurturing depends on reminders, tasks, workflows, or someone remembering what to send next, good leads can quietly fall through the cracks.",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5 fill-none stroke-current stroke-2"
    >
      <path
        d="M5 12h14M14 7l5 5-5 5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProblemSection() {
  return (
    <section
      id="the-problem"
      className="relative isolate overflow-hidden bg-[#211D3B] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(135deg,#211D3B_0%,#2C2651_48%,#211D3B_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-28 -top-32 -z-20 h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(118,98,220,0.28)_0%,rgba(118,98,220,0.08)_48%,transparent_72%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-[-80px] -z-20 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(24,182,126,0.2)_0%,rgba(24,182,126,0.06)_46%,transparent_72%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
      />

      <Container className="lg:max-w-[1180px]">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#C9C4F2] shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md">
            <span className="size-2 rounded-full bg-[#18B67E] shadow-[0_0_0_5px_rgba(24,182,126,0.12)]" />
            Why good leads get lost
          </div>

          <h2 className="font-[var(--font-heading)] text-[clamp(36px,5vw,58px)] font-extrabold leading-[1.08] tracking-[-0.045em] text-white">
            The problem isn't getting leads into your CRM.
            <br />
            <span className="bg-[linear-gradient(100deg,#C9C3FF_8%,#FFFFFF_48%,#6EE2B7_100%)] bg-clip-text text-transparent">
              It's making sure the nurture actually happens.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[clamp(17px,1.6vw,20px)] leading-[1.75] text-[#C2C6D4]">
            Your CRM can probably automate follow-up. But that often means
            building workflows, creating campaigns, managing tasks, writing
            messages, and keeping the system running. Sellaboo is focused on
            making that one important job effortless: keeping good leads
            nurtured until they're ready.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
          {problems.map((problem, index) => (
            <article
              key={problem.number}
              className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.075] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.095] hover:shadow-[0_26px_68px_rgba(0,0,0,0.22)]"
            >
              <div
                aria-hidden="true"
                className={`absolute right-0 top-0 size-36 translate-x-10 -translate-y-10 rounded-full blur-xl transition-transform duration-300 group-hover:scale-110 ${
                  index === 1
                    ? "bg-[radial-gradient(circle,rgba(24,182,126,0.2),transparent_68%)]"
                    : "bg-[radial-gradient(circle,rgba(126,106,224,0.24),transparent_68%)]"
                }`}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-[15px] border border-white/10 bg-white/10 text-sm font-extrabold text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                    {problem.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`size-2.5 rounded-full ${
                      index === 1 ? "bg-[#18B67E]" : "bg-[#8577E8]"
                    }`}
                  />
                </div>

                <h3 className="mt-7 font-[var(--font-heading)] text-[23px] font-extrabold tracking-[-0.025em] text-white">
                  {problem.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#BEC3D2]">
                  {problem.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:mt-14">
          <a
            href="#how-sellaboo-works"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/8 px-5 py-3 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition duration-300 hover:gap-3.5 hover:border-white/20 hover:bg-white/12"
          >
            See how Sellaboo makes nurture effortless
            <ArrowIcon />
          </a>
        </div>
      </Container>
    </section>
  );
}
