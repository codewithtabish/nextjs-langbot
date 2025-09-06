import HeroSection from "@/components/generals/(hero)/hero-section";
import CtaParentSection from "@/components/generals/(home)/home-cta-section";
import Features from "@/components/generals/(home)/home-features";
import StatsSection from "@/components/generals/(home)/home-status";
import HomeLogoCloud from "@/components/generals/(home)/logo-cloud";
import Pricing from "@/components/generals/(home)/pricing-section";
import WorkingSteps from "@/components/generals/(home)/working-setps";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div>
      <HeroSection locale={locale} />
      <Features locale={locale} />
      <HomeLogoCloud locale={locale} />
      <StatsSection locale={locale}/>
      <WorkingSteps locale={locale}/>
      <Pricing/>
          <div className='min-w-screen'>
      <CtaParentSection/>

      </div>
    </div>
  );
}
