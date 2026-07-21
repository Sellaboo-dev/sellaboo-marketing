import { HeroSection } from "@/components/hero/HeroSection";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { HowItWorksSection } from "@/components/sections/how-it-works/HowItWorksSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ResultsSection } from "@/components/sections/results/ResultsSection";

export default function HomePage() {
  return (
    <>
      <MarketingHeader />

      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ResultsSection />
      </main>
    </>
  );
}
