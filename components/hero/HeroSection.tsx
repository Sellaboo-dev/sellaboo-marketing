import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FOUNDING_CUSTOMER_URL } from "@/lib/marketing-links";
import { OpportunityPath } from "./OpportunityPath";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { PlayIcon } from "@/components/icons/PlayIcon";

const industries = [
  "Real Estae",
  "Mortgage Lending",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Remodeling",
];

function IndustryProof() {
  return (
    <div id="who-its-for">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.05em] text-[#9299aa]">
        Designed specifically for growing small businesses
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
        {industries.map((industry, index) => (
          <div
            key={industry}
            className="flex items-center gap-2.5"
          >
            <span className="text-[13px] font-bold text-[#606779]">
              {industry}
            </span>

            {index < industries.length - 1 ? (
              <span
                aria-hidden="true"
                className="size-[3px] rounded-full bg-[#c6cad5]"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-16 sm:pt-20 lg:pb-24 lg:pt-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_13%,rgba(93,84,145,0.1),transparent_27%),radial-gradient(circle_at_8%_86%,rgba(24,182,126,0.045),transparent_25%),linear-gradient(180deg,#fbfcfe_0%,#ffffff_73%,#fbfcfe_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute right-[8%] top-20 -z-10 size-[350px] rounded-full bg-[radial-gradient(circle,rgba(98,90,151,0.13),transparent_68%)] blur-2xl"
      />

      <Container className="grid items-center gap-14 lg:max-w-[1320px] lg:grid-cols-[minmax(0,0.92fr)_minmax(560px,1.08fr)] lg:gap-16">
        <div className="relative z-10 text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[rgba(63,58,100,0.13)] bg-white/80 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[0.055em] text-[var(--color-primary)] shadow-[0_10px_30px_rgba(42,45,76,0.07)]">
            <span className="size-2 rounded-full bg-[var(--color-success)] shadow-[0_0_0_5px_rgba(24,182,126,0.12)]" />
            The lead follow-up system for small businesses
          </div>

          <h1 className="mx-auto max-w-[710px] font-[var(--font-heading)] text-[clamp(44px,5.8vw,64px)] font-extrabold leading-[1.045] tracking-[-0.055em] text-[var(--color-heading)] lg:mx-0">
            Convert your "not ready" leads with the lead follow-up platform{" "}
            <span className="relative inline-block text-[var(--color-primary)]">
              for busy small business owners.
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-[1%] right-[2%] -z-10 h-2.5 -rotate-1 rounded-full bg-[linear-gradient(90deg,rgba(63,58,100,0.08),rgba(24,182,126,0.2))]"
              />
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-[610px] text-[clamp(17px,1.55vw,20px)] leading-[1.7] text-[var(--color-body)] lg:mx-0">
            Businesses now get more revenue from the leads 
            they're already generating. Built for busy small business owners who 
            need to focus on running their business instead of chasing leads.        
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3.5 sm:flex-row sm:items-center lg:justify-start">
            <Button
              href={FOUNDING_CUSTOMER_URL}
              className="min-h-[57px] gap-2.5 px-6 shadow-[0_14px_34px_rgba(63,58,100,0.24)] hover:shadow-[0_19px_42px_rgba(63,58,100,0.29)]"
            >
              Become a Founding User
              <ArrowIcon />
            </Button>

            <Button
              href="/demo"
              variant="secondary"
              className="min-h-[57px] gap-2.5 px-6 shadow-[0_10px_30px_rgba(42,45,76,0.07)]"
            >
              <PlayIcon />
              Watch How Sellaboo Works
            </Button>
          </div>

          <div className="mt-12 flex justify-center lg:justify-start">
            <IndustryProof />
          </div>
        </div>

        <OpportunityPath />
      </Container>
    </section>
  );
}
