import PrivacyPolicySection from '@/components/generals/(privacy-policy)/privacy-policy-section';
import BackButton from '@/components/generals/back-button';
import { HoverBackground } from '@/components/ui/hover-background';
import { allowedLocales, LocaleType } from '@/constants/languages';
import React from 'react'

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Type-safe fallback
  const safeLocale: LocaleType = allowedLocales.includes(locale as LocaleType)
    ? (locale as LocaleType)
    : "en";  return (
    <div>
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

        <PrivacyPolicySection locale={locale} />
            </HoverBackground>
      
    </div>
  )
}

