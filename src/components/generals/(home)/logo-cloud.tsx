"use client"

import { isUrduTypedLanguage, LocaleType } from "@/constants/languages"
import { companiesSectionTitlesArray } from "@/constants/translations/companies-trusted"

type HomeLogoCloudProps = {
  locale?: LocaleType
}

export default function HomeLogoCloud({ locale = "en" }: HomeLogoCloudProps) {
  // Pick correct title/subtitle based on locale, fallback to English
  const section =
    companiesSectionTitlesArray.find((s:any) => s.code === locale) ||
    companiesSectionTitlesArray.find((s:any) => s.code === "en")!

  const isRtl = isUrduTypedLanguage(section.code)

  return (
    <section
      className="bg-background py-16 w-full flex justify-center"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {section.title}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">{section.subtitle}</p>
        </div>

        {/* Logo Cloud */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <img
            className="h-6 w-auto dark:invert"
            src="https://html.tailus.io/blocks/customers/nvidia.svg"
            alt="Nvidia"
          />
          <img
            className="h-5 w-auto dark:invert"
            src="https://html.tailus.io/blocks/customers/column.svg"
            alt="Column"
          />
          <img
            className="h-5 w-auto dark:invert"
            src="https://html.tailus.io/blocks/customers/github.svg"
            alt="GitHub"
          />
          <img
            className="h-6 w-auto dark:invert"
            src="https://html.tailus.io/blocks/customers/nike.svg"
            alt="Nike"
          />
          <img
            className="h-5 w-auto dark:invert"
            src="https://html.tailus.io/blocks/customers/laravel.svg"
            alt="Laravel"
          />
          <img
            className="h-8 w-auto dark:invert"
            src="https://html.tailus.io/blocks/customers/lilly.svg"
            alt="Lilly"
          />
          <img
            className="h-6 w-auto dark:invert"
            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
            alt="Lemon Squeezy"
          />
          <img
            className="h-7 w-auto dark:invert"
            src="https://html.tailus.io/blocks/customers/openai.svg"
            alt="OpenAI"
          />
          <img
            className="h-5 w-auto dark:invert"
            src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
            alt="Tailwind CSS"
          />
          <img
            className="h-6 w-auto dark:invert"
            src="https://html.tailus.io/blocks/customers/vercel.svg"
            alt="Vercel"
          />
          <img
            className="h-6 w-auto dark:invert"
            src="https://html.tailus.io/blocks/customers/zapier.svg"
            alt="Zapier"
          />
        </div>
      </div>
    </section>
  )
}
