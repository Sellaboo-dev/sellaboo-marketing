import type { Metadata } from "next";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FOUNDING_CUSTOMER_URL } from "@/lib/marketing-links";

export const metadata: Metadata = {
  title: "Watch How Sellaboo Works",
  description:
    "See how Sellaboo helps home service businesses keep leads engaged through consistent, organized follow-up.",
};

const benefits = [
  {
    title: "Keep every opportunity moving",
    description:
      "Consistent follow-up continues even while your team is focused on serving customers.",
  },
  {
    title: "See what happens next",
    description:
      "Review completed activity, scheduled follow-ups, and lead progress in one organized place.",
  },
  {
    title: "Stay in control",
    description:
      "Pause, resume, or advance follow-up when the needs of a lead or your business change.",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="mt-0.5 h-5 w-5 shrink-0 text-[#18B67E]"
      fill="none"
    >
      <path
        d="m4.5 10.25 3.25 3.25 7.75-7.75"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DemoPage() {
  return (
    <>
      <MarketingHeader />

      <main className="bg-[#FBFCFE]">
        <section className="px-0 py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#18B67E]">
                See Sellaboo in Action
              </p>

              <h1 className="mt-4 font-[family:var(--font-manrope)] text-4xl font-bold tracking-[-0.045em] text-[#181A24] sm:text-5xl lg:text-6xl">
                Watch How Sellaboo Works
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5F6678]">
                See how Sellaboo helps home service businesses stay connected
                with new leads while owners and their teams remain focused on
                serving customers and running the business.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[28px] border border-[#E7EBF3] bg-white p-2 shadow-[0_24px_70px_rgba(42,45,76,0.12)] sm:p-3">
              <div className="aspect-video overflow-hidden rounded-[20px] bg-[#181A24]">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/2hHHm1qmvxs?rel=0"
                  title="Watch How Sellaboo Works"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-[#E7EBF3] bg-white py-16 sm:py-20">
          <Container>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-3">
                  <CheckIcon />

                  <div>
                    <h2 className="font-[family:var(--font-manrope)] text-lg font-bold text-[#181A24]">
                      {benefit.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-[#5F6678]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-[family:var(--font-manrope)] text-3xl font-bold tracking-[-0.035em] text-[#181A24] sm:text-4xl">
                Ready to protect more of the leads you already earn?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5F6678]">
                Join Sellaboo and give every new opportunity the consistent
                follow-up it deserves.
              </p>

              <div className="mt-8 flex justify-center">
                <Button
                  href={FOUNDING_CUSTOMER_URL}
                  className="min-h-[57px] gap-2.5 px-6 shadow-[0_14px_34px_rgba(63,58,100,0.24)] hover:shadow-[0_19px_42px_rgba(63,58,100,0.29)]"
                >
                  Become a Founding User
                  <ArrowIcon />
                </Button>
              </div>

              <p className="mt-5 text-sm text-[#5F6678]">
                Questions?{" "}
                <a
                  href="mailto:contact@sellaboo.com"
                  className="font-semibold text-[#3F3A64] underline underline-offset-4 hover:text-[#2F2A51]"
                >
                  Contact us
                </a>
                .
              </p>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
