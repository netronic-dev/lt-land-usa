"use client";

import { AboutUsSection } from "@/components/AboutUsSection";
import { CheckOutSection } from "@/components/CheckOutSection";
import { BusinessSupportSection } from "@/components/BusinessSupportSection";
import { CustomerReviewsSection } from "@/components/CustomerReviewsSection";
import { HeroSection } from "@/components/HeroSection";
import { PopularitySection } from "@/components/PopularitySection";
import { QualityAndReliabilitySection } from "@/components/QualityAndReliabilitySection";
import { WelcomeSection } from "@/components/WelcomeSection";
import { WhySection } from "@/components/WhySection";
import { WorldwidePresenceSection } from "@/components/WorldwidePresenceSection";
import { DiverseGameplaySection } from "@/components/DiverseGameplaySection";
import { OptimizingReturnsSection } from "@/components/OptimizingReturnsSection";
import { UnlockingBusinessSection } from "@/components/UnlockingBusinessSection";
import { TestDriveSection } from "@/components/TestDriveSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { LookForwardSection } from "@/components/LookForwardSection";
import PageLayout from "@/components/PageLayout/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <WelcomeSection />
      <WhySection />
      <PopularitySection />
      <AboutUsSection />
      <WorldwidePresenceSection />
      <CustomerReviewsSection />
      <CheckOutSection />
      <QualityAndReliabilitySection />
      <BusinessSupportSection />
      <DiverseGameplaySection />
      <OptimizingReturnsSection />
      <UnlockingBusinessSection />
      <TestDriveSection />
      <PartnershipSection />
      <LookForwardSection />
    </PageLayout>
  );
}
