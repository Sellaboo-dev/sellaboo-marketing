import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhySellabooFeature } from "./WhySellabooFeature";
import { whySellabooFeatures } from "./WhySellabooData";
import { Reveal } from "@/components/motion/Reveal";

export function WhySellabooSection() {
    return (
        <Section
            id="why-sellaboo"
            aria-labelledby="why-sellaboo-heading"
            className="bg-[#FBFCFE] py-24 sm:py-28 lg:py-32"
        >
            <Container>
                <Reveal>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#18B67E]">
                            Why Sellaboo
                        </p>

                        <h2
                            id="why-sellaboo-heading"
                            className="mt-4 font-[family:var(--font-manrope)] text-4xl font-bold tracking-[-0.04em] text-[#181A24] sm:text-5xl"
                        >
                            Lead nurture without the hours of learning and setting up a complicated CRM.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-[#5F6678]">
                            Sellaboo is built to help small businesses owners start consistent
                            lead follow-up quickly, without complicated campaign builders,
                            workflows, or unnecessary configuration.
                        </p>
                    </div>

                    <div className="mt-20 space-y-20 lg:mt-24 lg:space-y-28">
                        {whySellabooFeatures.map((feature, index) => (
                            <Reveal
                                key={feature.id}
                                delay={120}
                            >
                                <WhySellabooFeature
                                    feature={feature}
                                    reverse={index % 2 === 1}
                                />
                            </Reveal>
                        ))}
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
}
