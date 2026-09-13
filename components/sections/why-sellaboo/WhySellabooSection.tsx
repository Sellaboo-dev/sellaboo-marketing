import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { WhySellabooFeature } from "./WhySellabooFeature";
import { whySellabooFeatures } from "./WhySellabooData";

export function WhySellabooSection() {
  return (
    <section
      id="why-sellaboo"
      aria-labelledby="why-sellaboo-heading"
      className="relative isolate overflow-hidden bg-[#FCFCFF] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-30 h-[560px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F5FF_48%,rgba(247,245,255,0)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-48 top-36 -z-20 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(112,92,210,0.11)_0%,rgba(112,92,210,0.03)_48%,transparent_72%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 top-[680px] -z-20 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(24,182,126,0.10)_0%,rgba(24,182,126,0.025)_48%,transparent_72%)] blur-2xl"
      />

      <Container className="lg:max-w-[1180px]">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DDD8F6] bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#635AA5] shadow-[0_10px_30px_rgba(63,58,100,0.06)]">
              <span className="size-2 rounded-full bg-[#18B67E] shadow-[0_0_0_5px_rgba(24,182,126,0.10)]" />
              Why Sellaboo
            </div>

            <h2
              id="why-sellaboo-heading"
              className="mt-5 font-[var(--font-heading)] text-[clamp(38px,5vw,58px)] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#181A24]"
            >
              Keep your CRM.{" "}
              <span className="bg-[linear-gradient(100deg,#57509B_0%,#6259B2_45%,#18A978_100%)] bg-clip-text text-transparent">
                Make lead nurture effortless.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[750px] text-[clamp(17px,1.5vw,19px)] leading-[1.75] text-[#61687A]">
              Sellaboo is built for businesses that want consistent lead
              nurture without spending hours building campaigns, managing
              workflows, writing follow-up sequences, or learning another
              complicated system.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-20 sm:mt-20 lg:mt-24 lg:space-y-28">
          {whySellabooFeatures.map((feature, index) => (
            <Reveal
              key={feature.id}
              delay={100}
              variant="fade-up"
              distance={24}
              duration={700}
              threshold={0.12}
            >
              <WhySellabooFeature
                feature={feature}
                index={index}
                reverse={index % 2 === 1}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
