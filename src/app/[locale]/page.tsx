import dynamic from "next/dynamic";
import initTranslations from "../i18n";

const PageLayout = dynamic(() => import("@/components/PageLayout/PageLayout"));

const HeroSection = dynamic(
  () => import("@/components/HeroSection/HeroSection")
);

// const WelcomeSection = dynamic(
//   () => import("@/components/WelcomeSection/WelcomeSection")
// );

// const WhySection = dynamic(() => import("@/components/WhySection/WhySection"));

const AboutUsSection = dynamic(
  () => import("@/components/AboutUsSection/AboutUsSection")
);
const CheckOutSection = dynamic(
  () => import("@/components/CheckOutSection/CheckOutSection")
);
// const BusinessSupportSection = dynamic(
//   () => import("@/components/BusinessSupportSection/BusinessSupportSection")
// );
const CustomerReviewsSection = dynamic(
  () => import("@/components/CustomerReviewsSection/CustomerReviewsSection")
);
// const PopularitySection = dynamic(
//   () => import("@/components/PopularitySection/PopularitySection")
// );
const QualityAndReliabilitySection = dynamic(
  () =>
    import(
      "@/components/QualityAndReliabilitySection/QualityAndReliabilitySection"
    )
);
const WorldwidePresenceSection = dynamic(
  () => import("@/components/WorldwidePresenceSection/WorldwidePresenceSection")
);

const DiverseGameplaySection = dynamic(
  () => import("@/components/DiverseGameplaySection/DiverseGameplaySection")
);

const LasertagProfitabilitySection = dynamic(
  () =>
    import(
      "@/components/LasertagProfitabilitySection/LasertagProfitabilitySection"
    )
);

const UnlockingBusinessSection = dynamic(
  () => import("@/components/UnlockingBusinessSection/UnlockingBusinessSection")
);

const TestDriveSection = dynamic(
  () => import("@/components/TestDriveSection/TestDriveSection")
);

const PartnershipSection = dynamic(
  () => import("@/components/PartnershipSection/PartnershipSection")
);

const LookForwardSection = dynamic(
  () => import("@/components/LookForwardSection/LookForwardSection")
);

export default async function Home({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const { t } = await initTranslations(locale, ["translation"]);

  return (
    <PageLayout>
      <HeroSection />
      {/* <WelcomeSection t={t} /> */}
      {/* <WhySection t={t} /> */}
      {/* <PopularitySection /> */}
      <AboutUsSection t={t} />
      <WorldwidePresenceSection />
      <LasertagProfitabilitySection />
      <CustomerReviewsSection />
      <CheckOutSection />
      <QualityAndReliabilitySection />
      {/* <BusinessSupportSection /> */}
      <DiverseGameplaySection />
      {/* <UnlockingBusinessSection /> */}
      <TestDriveSection />
      <PartnershipSection />
      <LookForwardSection />
    </PageLayout>
  );
}
