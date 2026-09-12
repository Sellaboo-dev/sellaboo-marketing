import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HowItWorksStepCard } from "./HowItWorksStepCard";
import { howItWorksSteps } from "./HowItWorksStepData";
import { HowItWorksTimeline } from "./HowItWorksTimeline";

const FOUNDING_CUSTOMER_URL =
  "https://app.sellaboo.com/founding-beta";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="size-5 fill-none stroke-current stroke-2"
    >
      <path
        d="M4 10h11M11 6l4 4-4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-8 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]"
    >
      <svg
        viewBox="0 0 20 20"
        className="size-4 fill-current"
      >
        <path d="m7 5 8 5-8 5V5Z" />
      </svg>
    </span>
  );
}

function TargetIcon() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-[15px] bg-[#E8FAF3] text-[#16825F] shadow-[0_8px_24px_rgba(24,182,126,0.1)]"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-5 fill-none stroke-current stroke-2"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="size-4 fill-none stroke-current stroke-[2.4]"
    >
      <path
        d="m4.5 10 3.3 3.2L15.5 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrmVsSellaboo() {
  const crmSteps = [
    "Lead",
    "Segment",
    "Smart List",
    "Action Plan",
    "Workflow",
    "Templates",
    "Timing",
    "Tasks",
    "Follow-Up",
  ];

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[360px] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(101,84,196,0.12),rgba(24,182,126,0.05)_48%,transparent_72%)] blur-3xl"
      />

      <div className="grid overflow-hidden rounded-[32px] border border-[#E1E3EE] bg-white shadow-[0_28px_85px_rgba(43,39,79,0.12)] md:grid-cols-2">
        <div className="relative overflow-hidden bg-[#F4F5F8] p-7 sm:p-9 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(rgba(73,78,96,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(73,78,96,0.035)_1px,transparent_1px)] [background-size:30px_30px]"
          />

          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#858C9C]">
                Your CRM
              </p>

              <span className="rounded-full border border-[#DEE1E8] bg-white/80 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#9298A6]">
                Lots to manage
              </span>
            </div>

            <h3 className="mt-4 max-w-[440px] font-[var(--font-heading)] text-[clamp(24px,2.6vw,34px)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#343846]">
              Powerful, but there can be a lot to manage.
            </h3>

            <p className="mt-4 max-w-[450px] text-[14px] leading-6 text-[#777E8E]">
              Getting consistent nurture running can mean configuring several
              moving pieces and keeping them maintained.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3">
              {crmSteps.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="rounded-full border border-[#DDE0E7] bg-white px-3 py-2 text-[11px] font-bold text-[#6E7585] shadow-[0_5px_15px_rgba(42,45,76,0.04)]">
                    {item}
                  </span>

                  {index < crmSteps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="text-[13px] font-bold text-[#B2B7C2]"
                    >
                      →
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2.5 border-t border-[#DFE2E9] pt-5 text-[12px] font-bold text-[#858C9C]">
              <span className="size-2 rounded-full bg-[#A9AFBB]" />
              More setup. More moving pieces. More to remember.
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-[linear-gradient(145deg,#F3F0FF_0%,#FFFFFF_47%,#ECFBF5_100%)] p-7 sm:p-9 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-28 size-[340px] rounded-full bg-[radial-gradient(circle,rgba(104,87,197,0.18),transparent_68%)] blur-xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-28 -left-16 size-[300px] rounded-full bg-[radial-gradient(circle,rgba(24,182,126,0.18),transparent_68%)] blur-xl"
          />

          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#594FC2]">
                Sellaboo
              </p>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(24,182,126,0.18)] bg-white/80 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#16825F] shadow-[0_6px_18px_rgba(24,182,126,0.07)]">
                <span className="size-1.5 rounded-full bg-[#18B67E]" />
                Effortless nurture
              </span>
            </div>

            <h3 className="mt-4 max-w-[440px] font-[var(--font-heading)] text-[clamp(24px,2.6vw,34px)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#181A24]">
              One important job, made effortless.
            </h3>

            <p className="mt-4 max-w-[450px] text-[14px] leading-6 text-[#626A7C]">
              Add the lead, start nurture, and let Sellaboo keep the
              relationship moving until they're ready.
            </p>

            <div className="mt-9 flex items-center gap-3 sm:gap-4">
              <div className="flex min-h-[62px] min-w-[108px] items-center justify-center rounded-[18px] border border-[#DED9F3] bg-white px-5 text-[15px] font-extrabold text-[#353847] shadow-[0_10px_28px_rgba(58,50,104,0.08)]">
                Lead
              </div>

              <div
                aria-hidden="true"
                className="relative h-[2px] min-w-8 flex-1 overflow-hidden rounded-full bg-[#DAD6EB]"
              >
                <span className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,#665BC4,#18B67E)]" />
              </div>

              <div className="flex min-h-[62px] min-w-[138px] items-center justify-center gap-2 rounded-[18px] bg-[linear-gradient(110deg,#5B50B5,#18A978)] px-5 text-[15px] font-extrabold text-white shadow-[0_16px_36px_rgba(75,69,156,0.24)]">
                Nurture
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/18">
                  <CheckIcon />
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2.5 border-t border-[rgba(80,74,130,0.12)] pt-5 text-[12px] font-extrabold text-[#16825F]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#18B67E] opacity-20" />
                <span className="relative inline-flex size-2 rounded-full bg-[#18B67E]" />
              </span>
              One lead. One action. Nurture handled.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="how-sellaboo-works"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FD_47%,#F7FCFA_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 top-[18%] -z-20 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(105,88,198,0.1),transparent_70%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-44 bottom-[12%] -z-20 size-[540px] rounded-full bg-[radial-gradient(circle,rgba(24,182,126,0.09),transparent_70%)] blur-2xl"
      />

      <Container className="lg:max-w-[1320px]">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal
            variant="fade-up"
            distance={14}
            duration={650}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DDD9F2] bg-[#F5F2FF] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#594FC2]">
              <span className="size-2 rounded-full bg-[#18B67E]" />
              How Sellaboo works
            </div>
          </Reveal>

          <Reveal
            variant="fade-up"
            delay={80}
            distance={18}
            duration={700}
          >
            <h2 className="font-[var(--font-heading)] text-[clamp(40px,5.5vw,66px)] font-extrabold leading-[1.04] tracking-[-0.05em] text-[#181A24]">
              Your CRM can do a thousand things.{" "}
              <span className="bg-[linear-gradient(100deg,#6256C5_5%,#7461D8_46%,#18A978_100%)] bg-clip-text text-transparent">
                Sellaboo makes one important thing effortless.
              </span>
            </h2>
          </Reveal>

          <Reveal
            variant="fade-up"
            delay={160}
            distance={18}
            duration={700}
          >
            <p className="mx-auto mt-6 max-w-[720px] text-[clamp(17px,1.6vw,20px)] leading-[1.72] text-[#5F6678]">
              You don't need another complicated system to manage. Sellaboo is
              built around one simple action: put a lead into nurture and let
              Sellaboo handle the ongoing follow-up.
            </p>
          </Reveal>
        </div>

        <Reveal
          variant="fade-up"
          delay={120}
          distance={24}
          duration={800}
          threshold={0.16}
          className="mt-14 sm:mt-16"
        >
          <CrmVsSellaboo />
        </Reveal>

        <Reveal
          variant="fade-up"
          delay={120}
          distance={24}
          duration={800}
          threshold={0.16}
          className="mt-16 sm:mt-20"
        >
          <div className="rounded-[30px] border border-[#E1E3EF] bg-white/82 px-6 py-8 shadow-[0_24px_70px_rgba(42,45,76,0.085)] backdrop-blur-xl sm:px-9 lg:px-12">
            <HowItWorksTimeline />
          </div>
        </Reveal>

        <Stagger
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5"
          delay={150}
          duration={850}
          distance={34}
          threshold={0.18}
        >
          {howItWorksSteps.map((step) => (
            <HowItWorksStepCard
              key={step.number}
              step={step}
            />
          ))}
        </Stagger>

        <Reveal
          variant="fade-up"
          delay={100}
          distance={24}
          duration={750}
          threshold={0.16}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-[26px] border border-[rgba(24,182,126,0.18)] bg-[linear-gradient(105deg,#F4F1FF_0%,#FFFFFF_48%,#ECFBF5_100%)] p-6 shadow-[0_20px_60px_rgba(42,45,76,0.08)] sm:flex sm:items-center sm:gap-5 sm:p-7">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 size-52 rounded-full bg-[radial-gradient(circle,rgba(24,182,126,0.12),transparent_68%)]"
            />

            <div className="relative flex items-start gap-5 sm:items-center">
              <TargetIcon />

              <p className="font-[var(--font-heading)] text-[clamp(18px,2vw,24px)] font-extrabold leading-[1.45] tracking-[-0.025em] text-[#181A24]">
                Sellaboo doesn't replace your CRM or your team.{" "}
                <span className="text-[#16825F]">
                  It makes sure good leads keep hearing from your business
                  consistently until they're ready to take the next step.
                </span>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal
          variant="fade-up"
          delay={160}
          distance={20}
          duration={750}
          threshold={0.16}
          className="mt-10"
        >
          <div className="flex flex-col items-stretch justify-center gap-3.5 sm:flex-row sm:items-center">
            <Button
              href={FOUNDING_CUSTOMER_URL}
              className="min-h-[57px] gap-2.5 px-7 shadow-[0_14px_34px_rgba(63,58,100,0.22)]"
            >
              Start Nurturing Leads
              <ArrowIcon />
            </Button>

            <Button
              href="/demo"
              variant="secondary"
              className="min-h-[57px] gap-2.5 border-[#DDD9EB] bg-white/85 px-7 shadow-[0_10px_30px_rgba(42,45,76,0.07)]"
            >
              <PlayIcon />
              See How It Works
            </Button>
          </div>

          <p className="mt-5 text-center text-[13px] font-semibold text-[#777F91]">
            Limited Phase 1 customer spots available. Lock in early access and
            special pricing.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
