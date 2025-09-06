"use client"

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Settings2,
  Sparkles,
  Zap,
  FileText,
  Languages,
  MessageSquare,
} from 'lucide-react'
import { ReactNode } from 'react'
import { featuresContent } from '@/constants/translations/features-content'
import { HomeLogoCloudProps, isUrduTypedLanguage } from '@/constants/languages'

const icons = [Zap, Settings2, Sparkles, FileText, Languages, MessageSquare]

export default function Features({ locale = "en" }: HomeLogoCloudProps) {
  // Pick translations, fallback to English
  const content =
    featuresContent[locale as keyof typeof featuresContent] ||
    featuresContent["en"]

  // RTL check
  const isRtl = isUrduTypedLanguage(locale)

  return (
    <section
      className="py-16 md:py-32 dark:bg-transparent"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "center",
      }}
    >
      <div className="@container mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Feature grid */}
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16 md:max-w-4xl lg:max-w-5xl md:grid-cols-2 lg:grid-cols-3">
          {content.cards.map((card, i) => {
            const Icon = icons[i] || Zap
            return (
              <Card key={i} className="group shadow-zinc-950/5">
                <CardHeader className="pb-3">
                  <CardDecorator>
                    <Icon className="size-6" aria-hidden />
                  </CardDecorator>
                  <h3 className="mt-6 font-medium">{card.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{card.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
)
