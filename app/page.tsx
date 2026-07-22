import { HeroSection } from "@/components/hero/HeroSection";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HowItWorksSection } from "@/components/sections/how-it-works/HowItWorksSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ResultsSection } from "@/components/sections/results/ResultsSection";
import { WhySellabooSection } from "@/components/sections/why-sellaboo/WhySellabooSection";
import { FollowUpJourneySection } from "@/components/sections/follow-up-journey/FollowUpJourneySection";
import { FinalCtaSection } from "@/components/sections/final-cta/FinalCtaSection";

export default function HomePage() {
  return (
  <>
    <MarketingHeader />

    <main>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ResultsSection />
      <WhySellabooSection />
      <FollowUpJourneySection />
      <FinalCtaSection />
    </main>

    <SiteFooter />
  </>
);
}