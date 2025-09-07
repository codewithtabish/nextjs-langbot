"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"
import { pricingContent } from "@/constants/translations/pricing-content"

export default function Pricing({ locale = "en" }: HomeLogoCloudProps) {
  // Fallback to English if locale not found
  const content =
    pricingContent[locale as keyof typeof pricingContent] ||
    pricingContent["en"]

  const isRtl = isUrduTypedLanguage(locale)

  return (
    <section
      className="relative py-16 md:py-32"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            {content.sectionTitle}
          </h2>
          <p className="mt-4 text-muted-foreground">{content.sectionSubtitle}</p>
        </div>

        {/* Pricing Card */}
        <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
          <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
            {/* Left - Plan */}
            <div className="pb-12 text-center md:pb-0 md:pr-12">
              <h3 className="text-2xl font-semibold">{content.planTitle}</h3>
              <p className="mt-2 text-lg">{content.planDescription}</p>

              <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                <span className="text-4xl">$</span>
                {content.price}
                <span className="ml-1 text-lg font-normal text-muted-foreground">
                  {content.period}
                </span>
              </span>

              <div className="flex justify-center">
                <Button asChild size="lg">
                  <Link href="#">{content.cta}</Link>
                </Button>
              </div>

              <p className="text-muted-foreground mt-12 text-sm">{content.note}</p>
            </div>

            {/* Right - Features */}
            <div className="relative">
              <ul role="list" className="space-y-4">
                {content.features.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 text-sm">
                {content.teamNote}
              </p>

              {/* Logos */}
              <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
                <Image
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                  height={20}
                  width={100}
                  className="h-5 w-auto dark:invert"
                />
                <Image
                  src="https://html.tailus.io/blocks/customers/github.svg"
                  alt="GitHub Logo"
                  height={16}
                  width={100}
                  className="h-4 w-auto dark:invert"
                />
                <Image
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  alt="Nike Logo"
                  height={20}
                  width={100}
                  className="h-5 w-auto dark:invert"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
