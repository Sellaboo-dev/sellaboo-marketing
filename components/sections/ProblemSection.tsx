import { Container } from "@/components/ui/Container";

const problems = [
  {
    number: "01",
    title: "You get busy",
    description:
      "Calls, jobs, estimates, and customer issues compete for attention. Even strong teams can lose track of who needs the next follow-up.",
  },
  {
    number: "02",
    title: "Promising leads go quiet",
    description:
      "A lead who doesn't buy immediately is easy to get overlooked. Maybe the timing is off, they're unsure, or they're shopping competitors. People buy from those they trust, and consistent follow-up builds trust.",
  },
  {
    number: "03",
    title: "Follow-up becomes inconsistent",
    description:
      "Without a clear system, the next message depends on someone remembering, finding the time, and knowing exactly what to send.",
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
      className="relative overflow-hidden border-y border-[rgba(231,235,243,0.82)] bg-white py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(63,58,100,0.05),transparent_28%),radial-gradient(circle_at_92%_90%,rgba(24,182,126,0.045),transparent_26%)]"
      />

      <Container className="lg:max-w-[1180px]">
        <div className="mx-auto max-w-[790px] text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(63,58,100,0.12)] bg-[var(--color-primary-light)] px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[var(--color-primary)]">
            Why opportunities get lost
          </div>

          <h2 className="font-[var(--font-heading)] text-[clamp(36px,5vw,58px)] font-extrabold leading-[1.08] tracking-[-0.045em] text-[var(--color-heading)]">
            You already paid for the lead. Don't lose it because they weren't ready today.
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[clamp(17px,1.6vw,20px)] leading-[1.75] text-[var(--color-body)]">
            Sellaboo keeps following up with buyer and seller leads 
            until they're ready for a conversation. Your leads. Your brand. 
            Automatic follow-up.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="group relative overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[rgba(251,252,254,0.86)] p-7 shadow-[0_16px_45px_rgba(42,45,76,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(63,58,100,0.18)] hover:shadow-[0_24px_60px_rgba(42,45,76,0.11)]"
            >
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 size-28 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,rgba(63,58,100,0.08),transparent_68%)] transition-transform duration-300 group-hover:scale-110"
              />

              <div className="relative">
                <span className="inline-flex size-11 items-center justify-center rounded-[14px] bg-[var(--color-primary-light)] text-sm font-extrabold text-[var(--color-primary)]">
                  {problem.number}
                </span>

                <h3 className="mt-6 font-[var(--font-heading)] text-[22px] font-extrabold tracking-[-0.025em] text-[var(--color-heading)]">
                  {problem.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[var(--color-body)]">
                  {problem.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:mt-14">
          <a
            href="#how-sellaboo-works"
            className="inline-flex items-center gap-2.5 text-sm font-extrabold text-[var(--color-primary)] transition hover:gap-3.5 hover:text-[var(--color-primary-hover)]"
          >
            See how Sellaboo keeps opportunities moving
            <ArrowIcon />
          </a>
        </div>
      </Container>
    </section>
  );
}
