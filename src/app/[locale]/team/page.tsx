import TeamSection from '@/components/(team)/team-section';
import BackButton from '@/components/generals/back-button';
import React from 'react'

export default async function TeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;    return (
    <div>
        <BackButton locale={locale}/>
        <TeamSection locale={locale}/>
      
    </div>
  )
}

