import dynamic from "next/dynamic";
import initTranslations from "../i18n";
import { HeroSection } from "@/components/HeroSection";

const PageLayout = dynamic(() => import("@/components/PageLayout/PageLayout"), {
  ssr: false,
});

const AboutUsSection = dynamic(
  () => import("@/components/AboutUsSection/AboutUsSection"),
  {
    ssr: false,
  }
);
const CheckOutSection = dynamic(
  () => import("@/components/CheckOutSection/CheckOutSection"),
  {
    ssr: false,
  }
);

const CustomerReviewsSection = dynamic(
  () => import("@/components/CustomerReviewsSection/CustomerReviewsSection"),
  {
    ssr: false,
  }
);

const QualityAndReliabilitySection = dynamic(
  () =>
    import(
      "@/components/QualityAndReliabilitySection/QualityAndReliabilitySection"
    ),
  {
    ssr: false,
  }
);
const WorldwidePresenceSection = dynamic(
  () =>
    import("@/components/WorldwidePresenceSection/WorldwidePresenceSection"),
  {
    ssr: false,
  }
);

const DiverseGameplaySection = dynamic(
  () => import("@/components/DiverseGameplaySection/DiverseGameplaySection"),
  {
    ssr: false,
  }
);

const LasertagProfitabilitySection = dynamic(
  () =>
    import(
      "@/components/LasertagProfitabilitySection/LasertagProfitabilitySection"
    ),
  {
    ssr: false,
  }
);

const TestDriveSection = dynamic(
  () => import("@/components/TestDriveSection/TestDriveSection"),
  {
    ssr: false,
  }
);

const PartnershipSection = dynamic(
  () => import("@/components/PartnershipSection/PartnershipSection"),
  {
    ssr: false,
  }
);

const LookForwardSection = dynamic(
  () => import("@/components/LookForwardSection/LookForwardSection"),
  {
    ssr: false,
  }
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
