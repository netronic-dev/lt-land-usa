import dynamic from "next/dynamic";
import initTranslations from "../i18n";

const PageLayout = dynamic(() => import("@/components/PageLayout/PageLayout"));

const HeroSection = dynamic(
  () => import("@/components/HeroSection/HeroSection")
);

const AboutUsSection = dynamic(
  () => import("@/components/AboutUsSection/AboutUsSection")
);
const CheckOutSection = dynamic(
  () => import("@/components/CheckOutSection/CheckOutSection")
);

const CustomerReviewsSection = dynamic(
  () => import("@/components/CustomerReviewsSection/CustomerReviewsSection")
);

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
      <AboutUsSection t={t} />
      <WorldwidePresenceSection />
      <LasertagProfitabilitySection />
      <CustomerReviewsSection />
      <CheckOutSection />
      <QualityAndReliabilitySection />
      <DiverseGameplaySection />
      <TestDriveSection />
      <PartnershipSection />
      <LookForwardSection />
    </PageLayout>
  );
}
