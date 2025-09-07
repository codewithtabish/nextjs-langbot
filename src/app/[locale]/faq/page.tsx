import FAQsSection from '@/components/generals/(faq)/faq-section';
import BackButton from '@/components/generals/back-button';
import { allowedLocales, LocaleType } from '@/constants/languages';
import React from 'react'

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;  return (
    <div>
        <BackButton locale={locale}/>
      <FAQsSection locale={locale}/>
    </div>
  )
}

