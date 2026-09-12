import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { PlayIcon } from "@/components/icons/PlayIcon";

export function FinalCtaSection() {
  return (
    <Section
      id="founding-customers"
      aria-labelledby="final-cta-heading"
      className="bg-[#FBFCFE] pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-[#E7EBF3] bg-white px-6 py-16 text-center shadow-[0_28px_80px_rgba(42,45,76,0.09)] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ECEAF7] blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#18B67E]">
              Effortless Lead Nurture
            </p>

            <h2
              id="final-cta-heading"
              className="mt-4 font-[family:var(--font-manrope)] text-4xl font-bold tracking-[-0.04em] text-[#181A24] sm:text-5xl lg:text-6xl"
            >
              Stop relying on memory to keep good leads alive.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5F6678]">
              Keep your CRM. Keep running your business. Let Sellaboo handle
              the ongoing nurture that keeps not-ready-yet leads hearing from
              you until they're ready to take the next step.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3.5 sm:flex-row sm:items-center">
              <Button
                href="https://app.sellaboo.com/pricing"
                className="min-h-[57px] gap-2.5 px-6 shadow-[0_14px_34px_rgba(63,58,100,0.24)] hover:shadow-[0_19px_42px_rgba(63,58,100,0.29)]"
              >
                Start Nurturing Leads
                <ArrowIcon />
              </Button>

              <Button
                href="/demo"
                variant="secondary"
                className="min-h-[57px] gap-2.5 px-6 shadow-[0_10px_30px_rgba(42,45,76,0.07)]"
              >
                <PlayIcon />
                See How It Works
              </Button>
            </div>

            <p className="mt-6 text-sm leading-6 text-[#5F6678]">
              One lead. One click. Nurture handled.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
