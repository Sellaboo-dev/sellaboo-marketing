import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FOUNDING_CUSTOMER_URL } from "@/lib/marketing-links";
import { OpportunityPath } from "./OpportunityPath";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { PlayIcon } from "@/components/icons/PlayIcon";

const industries = [
  "Real Estate",
  "Mortgage Lending",
  "Insurance",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Remodeling",
];

function IndustryProof() {
  return (
    <div id="who-its-for" className="w-full">
      <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#777F92]">
        Built for businesses that depend on leads to grow
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
        {industries.map((industry) => (
          <span
            key={industry}
            className="rounded-full border border-[#E2E4F1] bg-white/90 px-3 py-1.5 text-[12px] font-bold text-[#555D70] shadow-[0_5px_16px_rgba(42,45,76,0.045)] backdrop-blur-sm"
          >
            {industry}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-14 sm:pt-18 lg:pb-28 lg:pt-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(135deg,#F7F5FF_0%,#FFFFFF_43%,#F4FCF9_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-28 -top-24 -z-20 h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(108,92,231,0.18)_0%,rgba(108,92,231,0.06)_48%,transparent_72%)] blur-xl"
      />

      <div
        aria-hidden="true"
        className="absolute right-[-120px] top-[-80px] -z-20 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(104,87,197,0.2)_0%,rgba(104,87,197,0.075)_46%,transparent_72%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[-180px] left-[33%] -z-20 h-[470px] w-[470px] rounded-full bg-[radial-gradient(circle,rgba(24,182,126,0.13)_0%,rgba(24,182,126,0.04)_48%,transparent_72%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.32] [background-image:linear-gradient(rgba(85,75,145,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(85,75,145,0.035)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
      />

      <Container className="grid items-center gap-16 lg:max-w-[1320px] lg:grid-cols-[minmax(0,0.92fr)_minmax(560px,1.08fr)] lg:gap-16">
        <div className="relative z-10 text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#DCD8F3] bg-white/80 px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#514B87] shadow-[0_10px_30px_rgba(71,61,124,0.08)] backdrop-blur-xl">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#18B67E] opacity-20" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[#18B67E]" />
            </span>

            Effortless lead nurture for busy businesses
          </div>

          <h1 className="mx-auto max-w-[720px] font-[var(--font-heading)] text-[clamp(46px,5.8vw,68px)] font-extrabold leading-[1.02] tracking-[-0.058em] text-[#181A24] lg:mx-0">
            Stop letting good leads{" "}
            <span className="relative inline-block">
              <span className="bg-[linear-gradient(100deg,#594FC2_4%,#745ED8_48%,#18A978_100%)] bg-clip-text text-transparent">
                fall through the cracks.
              </span>

              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-[2%] right-[1%] -z-10 h-3 -rotate-1 rounded-full bg-[linear-gradient(90deg,rgba(102,85,200,0.12),rgba(24,182,126,0.22))]"
              />
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-[620px] text-[clamp(17px,1.55vw,20px)] leading-[1.72] text-[#5F6678] lg:mx-0">
            Sellaboo keeps nurturing the leads who aren't ready yet —
            automatically — so you don't have to build complicated CRM
            workflows or remember who needs another follow-up.
          </p>

          <div className="mx-auto mt-6 flex max-w-[620px] items-center justify-center gap-3 rounded-2xl border border-[#E5E2F3] bg-white/65 px-4 py-3.5 shadow-[0_8px_28px_rgba(64,55,110,0.055)] backdrop-blur-md lg:mx-0 lg:justify-start">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#E9F8F2]">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="size-4 text-[#18A978]"
                aria-hidden="true"
              >
                <path
                  d="M4.5 10.25 8 13.5 15.5 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-sm font-bold text-[#333747] sm:text-[15px]">
              Keep your CRM.{" "}
              <span className="text-[#5A50B5]">
                Sellaboo handles the nurture.
              </span>
            </p>
          </div>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3.5 sm:flex-row sm:items-center lg:justify-start">
            <Button
              href={FOUNDING_CUSTOMER_URL}
              className="min-h-[59px] gap-2.5 px-7 shadow-[0_16px_38px_rgba(77,65,151,0.28)] hover:shadow-[0_20px_46px_rgba(77,65,151,0.34)]"
            >
              Start Nurturing Leads
              <ArrowIcon />
            </Button>

            <Button
              href="/demo"
              variant="secondary"
              className="min-h-[59px] gap-2.5 border-[#DCD9EB] bg-white/80 px-7 shadow-[0_10px_30px_rgba(42,45,76,0.07)] backdrop-blur-sm"
            >
              <PlayIcon />
              See How It Works
            </Button>
          </div>

          <div className="mt-12 flex justify-center lg:justify-start">
            <IndustryProof />
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 rounded-[48px] bg-[linear-gradient(135deg,rgba(102,85,200,0.11),rgba(255,255,255,0.03)_48%,rgba(24,182,126,0.11))] blur-2xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-6 -top-6 -z-10 size-28 rounded-full border border-[#DAD5F5] bg-[#F4F1FF]/70"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-5 -z-10 size-20 rounded-[24px] bg-[#DDF6EC]/70 rotate-12"
          />

          <OpportunityPath />
        </div>
      </Container>
    </section>
  );
}
