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
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-[15px] bg-[#eaf9f4] text-[#16825f]"
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

export function HowItWorksSection() {
    return (
        <section
            id="how-sellaboo-works"
            className="relative overflow-hidden bg-[var(--color-background)] py-20 sm:py-24 lg:py-28"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(63,58,100,0.065),transparent_29%),radial-gradient(circle_at_85%_84%,rgba(24,182,126,0.065),transparent_28%),linear-gradient(180deg,#fbfcfe_0%,#ffffff_50%,#fbfcfe_100%)]"
            />

            <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -z-10 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(101,92,157,0.055),transparent_68%)] blur-2xl"
            />

            <Container className="lg:max-w-[1320px]">
                <div className="mx-auto max-w-[840px] text-center">
                    <Reveal
                        variant="fade-up"
                        distance={14}
                        duration={650}
                    >
                        <div className="mb-5 inline-flex items-center rounded-full border border-[rgba(63,58,100,0.13)] bg-[var(--color-primary-light)] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.065em] text-[var(--color-primary)]">
                            How Sellaboo works
                        </div>
                    </Reveal>

                    <Reveal
                        variant="fade-up"
                        delay={80}
                        distance={18}
                        duration={700}
                    >
                        <h2 className="font-[var(--font-heading)] text-[clamp(40px,5.5vw,66px)] font-extrabold leading-[1.04] tracking-[-0.05em] text-[var(--color-heading)]">
                            One opportunity.{" "}
                            <span className="bg-[linear-gradient(90deg,var(--color-primary),var(--color-success))] bg-clip-text text-transparent">
                                Five simple moments.
                            </span>
                        </h2>
                    </Reveal>

                    <Reveal
                        variant="fade-up"
                        delay={160}
                        distance={18}
                        duration={700}
                    >
                        <p className="mx-auto mt-6 max-w-[710px] text-[clamp(17px,1.6vw,20px)] leading-[1.72] text-[var(--color-body)]">
                            Every lead moves through the same journey. Sellaboo
                            quietly handles the follow-up until your team is needed.
                        </p>
                    </Reveal>
                </div>

                <Reveal
                    variant="fade-up"
                    delay={120}
                    distance={24}
                    duration={800}
                    threshold={0.16}
                    className="mt-16 sm:mt-20"
                    >
                    <div className="rounded-[28px] border border-[rgba(225,228,239,0.9)] bg-white/80 px-6 py-8 shadow-[0_24px_70px_rgba(42,45,76,0.08)] backdrop-blur-xl sm:px-9 lg:px-12">
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
                    <div className="rounded-[24px] border border-[rgba(24,182,126,0.16)] bg-white/85 p-6 shadow-[0_18px_55px_rgba(42,45,76,0.07)] sm:flex sm:items-center sm:gap-5 sm:p-7">
                        <TargetIcon />

                        <p className="mt-4 font-[var(--font-heading)] text-[clamp(18px,2vw,24px)] font-extrabold leading-[1.45] tracking-[-0.025em] text-[var(--color-heading)] sm:mt-0">
                            Sellaboo doesn’t replace your team.{" "}
                            <span className="text-[#16825f]">
                                It makes sure every opportunity reaches them at the
                                right moment.
                            </span>
                        </p>
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
                            className="min-h-[57px] gap-2.5 px-7"
                        >
                            Become a Founding Customer
                            <ArrowIcon />
                        </Button>

                        <Button
                            href="#two-minute-demo"
                            variant="secondary"
                            className="min-h-[57px] gap-2.5 px-7 shadow-[0_10px_30px_rgba(42,45,76,0.07)]"
                        >
                            <PlayIcon />
                            Watch a 2-Minute Demo
                        </Button>
                    </div>

                    <p className="mt-5 text-center text-[13px] font-semibold text-[#777f91]">
                        Limited founding customer spots available. Lock in early
                        access and special pricing.
                    </p>
                </Reveal>
            </Container>
        </section>
    );
}
