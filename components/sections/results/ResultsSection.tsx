import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ResultCard } from "./ResultCard";
import { resultOutcomes } from "./ResultsSectionData";

export function ResultsSection() {
  return (
    <Section
      id="results"
      aria-labelledby="results-heading"
      className="bg-[#FBFCFE]"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#18B67E]">
              Built for better follow-up
            </p>

            <h2
              id="results-heading"
              className="font-[family:var(--font-manrope)] text-4xl font-bold tracking-[-0.03em] text-[#181A24] sm:text-5xl"
            >
              Automated lead nurture and conversion without the complicated learning curve of a CRM.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5F6678]">
              For the Agent who doesn't want to learn a complicated CRM but still
              wants automated lead nurture and conversion while you're focusing
              on serving current customers. More nurturing = More conversations = 
              More booked jobs = More closed sales = More revenue.
            </p>
          </div>
        </Reveal>

        <Stagger
          className="mt-14 grid gap-6 lg:grid-cols-3"
          delay={120}
        >
          {resultOutcomes.map((outcome) => (
            <ResultCard
              key={outcome.id}
              outcome={outcome}
            />
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}