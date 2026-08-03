import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/booking/CalendlyEmbed";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Book a Live Sellaboo Demo",
  description:
    "Schedule a live walkthrough of Sellaboo and see how automated follow-up helps home service businesses keep more opportunities moving.",
};

const CALENDLY_URL =
  "https://calendly.com/sellaboo/30min?hide_event_type_details=1";

const items = [
  {
    title: "Automated Follow-Up",
    text: "See how every new lead can begin receiving professional follow-up automatically.",
  },
  {
    title: "Lead Management",
    text: "Learn how simple it is to organize and monitor every opportunity.",
  },
  {
    title: "Follow-Up Sequences",
    text: "Watch how conversations continue while you're focused on serving customers.",
  },
  {
    title: "Live Q&A",
    text: "Ask questions specific to your business and workflow.",
  },
];

export const dynamic = "force-static";

export default function BookPage() {
  return (
    <>
      <MarketingHeader />

      <main className="bg-[#FBFCFE]">
        <section className="py-10 sm:py-12 lg:py-14">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#18B67E]">
                Schedule Your Demo
              </p>

              <h1 className="mt-4 font-[family:var(--font-manrope)] text-4xl font-bold tracking-[-0.04em] text-[#181A24] sm:text-5xl lg:text-6xl">
                Book Your Live Sellaboo Demo
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5F6678]">
                See exactly how Sellaboo helps home service businesses keep more
                opportunities moving while owners stay focused on running their
                business.
              </p>
            </div>
          </Container>
        </section>

        <section className="pb-16 sm:pb-20">
          <Container>

            <div className="mb-10 text-center">
                <p className="text-sm text-[#5F6678]">
                    Not quite ready to schedule?
                </p>

        <a
            href="/demo"
            className="mt-3 inline-flex items-center gap-2 font-semibold text-[#3F3A64] transition hover:opacity-80"
        >
            ▶ Watch How Sellaboo Works
        </a>
        </div>
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center font-[family:var(--font-manrope)] text-3xl font-bold text-[#181A24]">
                Choose a Time That Works for You
              </h2>

              <CalendlyEmbed url={CALENDLY_URL} />

              <div className="mt-8 text-center">
                    <p className="font-semibold text-[#181A24]">
                        No pressure. No obligation.
                    </p>

                    <p className="mt-2 text-[#5F6678]">
                        We'll walk you through Sellaboo, answer your questions, and
                        help you decide whether it's a good fit for your business.
                    </p>
                </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-[#E7EBF3] bg-white py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#18B67E]">
                What You&apos;ll See
              </p>

              <h2 className="mt-4 font-[family:var(--font-manrope)] text-3xl font-bold tracking-[-0.035em] text-[#181A24] sm:text-4xl">
                A personalized look at the complete follow-up workflow
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#E7EBF3] bg-[#FBFCFE] p-8"
                >
                  <h3 className="font-[family:var(--font-manrope)] text-xl font-bold text-[#181A24]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#5F6678]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
