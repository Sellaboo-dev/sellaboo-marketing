import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { PlayIcon } from "@/components/icons/PlayIcon";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function FinalCtaSection() {
  return (
    <Section
      id="founding-customers"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-[#FBFCFE] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-180px] top-[-120px] size-[420px] rounded-full bg-[radial-gradient(circle,rgba(117,105,202,0.10)_0%,transparent_70%)]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-180px] right-[-120px] size-[480px] rounded-full bg-[radial-gradient(circle,rgba(98,224,178,0.12)_0%,transparent_70%)]"
      />

      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[34px] border border-[#665BC0]/20 bg-[linear-gradient(135deg,#51489B_0%,#6255B5_47%,#405E8C_100%)] px-6 py-16 text-center shadow-[0_36px_100px_rgba(46,40,97,0.22)] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-30 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]"
            />

            <div
              aria-hidden="true"
              className="absolute -left-28 -top-32 -z-20 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(177,164,255,0.34)_0%,rgba(177,164,255,0.08)_48%,transparent_72%)] blur-2xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-44 right-[-80px] -z-20 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(98,224,178,0.28)_0%,rgba(98,224,178,0.06)_48%,transparent_72%)] blur-2xl"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 -z-10 h-px w-[68%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)]"
            />

            <div className="relative mx-auto max-w-[900px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.10] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#F1EFFF] backdrop-blur-md">
                <span className="size-2 rounded-full bg-[#62E0B2] shadow-[0_0_0_5px_rgba(98,224,178,0.13)]" />
                Effortless Lead Nurture
              </div>

              <h2
                id="final-cta-heading"
                className="mx-auto mt-6 max-w-[840px] font-[var(--font-heading)] text-[clamp(40px,5.6vw,68px)] font-extrabold leading-[1.04] tracking-[-0.05em] !text-white"
              >
                Stop relying on memory to{" "}
                <span className="bg-[linear-gradient(100deg,#EEE9FF_5%,#C8BEFF_45%,#72E6BC_100%)] bg-clip-text text-transparent">
                  keep good leads alive.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[720px] text-[clamp(17px,1.5vw,19px)] leading-[1.75] text-[#E0DDED]">
                Keep your CRM. Keep running your business. Let Sellaboo handle
                the ongoing nurture that keeps not-ready-yet leads hearing from
                you until they're ready to take the next step.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
                <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-3.5 py-2 text-[12px] font-bold text-[#F1EFF8] backdrop-blur-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-4 fill-none stroke-[#72E6BC]"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  Keep your CRM
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-3.5 py-2 text-[12px] font-bold text-[#F1EFF8] backdrop-blur-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-4 fill-none stroke-[#72E6BC]"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  One-click nurture
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-3.5 py-2 text-[12px] font-bold text-[#F1EFF8] backdrop-blur-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-4 fill-none stroke-[#72E6BC]"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                  No complicated workflows
                </div>
              </div>

              <div className="mt-10 flex flex-col items-stretch justify-center gap-3.5 sm:flex-row sm:items-center">
                <Button
                  href="https://app.sellaboo.com/pricing"
                  className="min-h-[60px] gap-2.5 !bg-[#62E0B2] px-7 !text-[#173A30] shadow-[0_18px_42px_rgba(24,80,65,0.24)] transition hover:-translate-y-0.5 hover:!bg-[#72E6BC] hover:shadow-[0_22px_48px_rgba(24,80,65,0.30)]"
                >
                  Start Nurturing Leads
                  <ArrowIcon />
                </Button>

                <Button
                  href="/demo"
                  variant="secondary"
                  className="min-h-[60px] gap-2.5 border-white/18 !bg-white/[0.10] px-7 !text-white shadow-[0_12px_32px_rgba(20,16,53,0.16)] backdrop-blur-md transition hover:-translate-y-0.5 hover:!bg-white/[0.16]"
                >
                  <PlayIcon />
                  See How It Works
                </Button>
              </div>

              <div className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/[0.08] px-4 py-2 text-[12px] font-bold text-[#E6E3EF]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#62E0B2] opacity-20" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#62E0B2]" />
                </span>

                One lead. One click. Nurture handled.
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
