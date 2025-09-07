import AboutSection from '@/components/generals/(about)/about-section'
import BackButton from '@/components/generals/back-button';
import { HoverBackground } from '@/components/ui/hover-background';
import React from 'react'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;  
  return (
    <div className='w-screen '>
        <BackButton locale={locale}/>
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
      <AboutSection locale={locale}/>

      </HoverBackground>
    </div>
  )
}

