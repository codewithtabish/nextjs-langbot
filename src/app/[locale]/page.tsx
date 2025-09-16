import DashboardBentoGrid from "@/components/dashboard/(main)/dashboard-bento-grid"
import HeroSection from "@/components/generals/(hero)/hero-section"
import CtaParentSection from "@/components/generals/(home)/home-cta-section"
import Features from "@/components/generals/(home)/home-features"
import StatsSection from "@/components/generals/(home)/home-status"
import HomeLogoCloud from "@/components/generals/(home)/logo-cloud"
import Pricing from "@/components/generals/(home)/pricing-section"
import WorkingStepsWrapper from "@/components/generals/(home)/working-steps-wrapper"
import { HeroHeader } from "@/components/generals/header"
import { HoverBackground } from "@/components/ui/hover-background"

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <div className="w-screen  ">
              <HeroHeader locale={locale}/>

      
              <HoverBackground
        colors={{
          
          
          // background: 'bg-',
          objects: [
            'bg-emerald-500/30',
            'bg-emerald-500/30',
            'bg-emerald-500/30',
            'bg-emerald-500/30',
            'bg-emerald-500/30',
            'bg-teal-500/30',
            'bg-green-500/30',
            'bg-lime-500/30',
            'bg-cyan-500/30',
            'bg-blue-500/30',
            'bg-blue-500/30',
            'bg-blue-500/30',
            'bg-blue-500/30',
            'bg-blue-500/30',
          ],
          glow: 'shadow-emerald-400/70',
        }}
        objectCount={12}
      >

      <HeroSection locale={locale} />
         <div className="md:max-w-6xl mx-auto py-10">
      <DashboardBentoGrid/>

      </div>
      <Features locale={locale} />
      <HomeLogoCloud locale={locale} />
      {/* <HomeVideoPlayer/> */}
      <StatsSection locale={locale} />
   
      <WorkingStepsWrapper locale={locale} /> {/* ✅ lazy-loaded */}
      <Pricing locale={locale} />
      <div className="min-w-screen">
        <CtaParentSection locale={locale}  />
      </div>
            </HoverBackground>

    </div>

  )
}
