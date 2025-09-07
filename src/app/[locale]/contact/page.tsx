import ContactSection from '@/components/(contact)/contact-section';
import BackButton from '@/components/generals/back-button';
import React from 'react'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;    return (
    <div>
        <BackButton locale={locale}/>
        <ContactSection locale={locale}/>
    
    </div>
  )
}

