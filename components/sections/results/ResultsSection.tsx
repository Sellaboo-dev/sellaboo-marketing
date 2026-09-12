import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Container } from "@/components/ui/Container";
import { ResultCard } from "./ResultCard";
import { resultOutcomes } from "./ResultsSectionData";

export function ResultsSection() {
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="relative isolate overflow-hidden bg-[#5148A6] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(135deg,#4A4298_0%,#5B50B5_48%,#3E478F_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-36 -top-40 -z-20 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(151,132,255,0.42)_0%,rgba(151,132,255,0.12)_46%,transparent_72%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-52 right-[-90px] -z-20 size-[580px] rounded-full bg-[radial-gradient(circle,rgba(24,182,126,0.34)_0%,rgba(24,182,126,0.08)_48%,transparent_72%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.22] [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_94%)]"
      />

      <Container className="lg:max-w-[1180px]">
        <Reveal>
          <div className="mx-auto max-w-[850px] text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#E4E0FF] shadow-[0_10px_30px_rgba(30,25,78,0.12)] backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#62E0B2] shadow-[0_0_0_5px_rgba(98,224,178,0.12)]" />
              Built for busy businesses
            </div>

            <h2
              id="results-heading"
              className="font-[var(--font-heading)] text-[clamp(38px,5.2vw,60px)] font-extrabold leading-[1.07] tracking-[-0.045em] !text-white"
            >
              Consistent lead nurture{" "}
              <span className="bg-[linear-gradient(100deg,#FFFFFF_5%,#D8D1FF_46%,#72E4BA_100%)] bg-clip-text text-transparent">
                without another complicated system to manage.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[740px] text-[clamp(17px,1.6vw,20px)] leading-[1.72] text-[#D6D5E8]">
              Sellaboo helps you stay in front of good leads who aren't ready
              yet, without relying on memory, manual reminders, or complicated
              CRM workflows. Your team can stay focused on today's customers
              while Sellaboo keeps tomorrow's opportunities moving.
            </p>
          </div>
        </Reveal>

        <Stagger
          className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-3"
          delay={120}
        >
          {resultOutcomes.map((outcome, index) => (
            <ResultCard
              key={outcome.id}
              outcome={outcome}
              index={index}
            />
          ))}
        </Stagger>

        <Reveal
          variant="fade-up"
          delay={160}
          distance={18}
          duration={700}
          threshold={0.18}
          className="mt-12"
        >
          <div className="mx-auto flex max-w-[720px] items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.08] px-5 py-3 text-center text-[13px] font-bold text-[#E0DFEC] backdrop-blur-md sm:w-fit">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#62E0B2] opacity-25" />
              <span className="relative inline-flex size-2 rounded-full bg-[#62E0B2]" />
            </span>
            Your team handles today's work. Sellaboo keeps tomorrow's
            opportunities moving.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
