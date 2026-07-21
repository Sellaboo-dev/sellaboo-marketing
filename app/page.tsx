import { HeroSection } from "@/components/hero/HeroSection";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { HowItWorksSection } from "@/components/sections/how-it-works/HowItWorksSection";
import { ProblemSection } from "@/components/sections/ProblemSection";

export default function HomePage() {
  return (
    <>
      <MarketingHeader />

      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
      </main>
    </>
  );
}
