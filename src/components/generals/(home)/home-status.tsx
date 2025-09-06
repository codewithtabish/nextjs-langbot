"use client"

import { Highlighter } from "@/components/magicui/highlighter"
import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"
import { statusContent } from "@/constants/translations/home-status-content"

export default function StatsSection({ locale = "en" }: HomeLogoCloudProps) {
  const content =
    statusContent[locale as keyof typeof statusContent] || statusContent["en"]

  const isRtl = isUrduTypedLanguage(locale)

  return (
    <section
      className="py-16 md:py-32"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        {/* Heading + Subtitle */}
        <div className="relative z-10 max-w-xl space-y-6">
      <h2 className="text-4xl font-medium lg:text-5xl">
  <Highlighter action="underline" color="#FF9800">
    {content.title?.slice(0, 15)}
  </Highlighter>{" "}
  <Highlighter action="highlight" color="#87CEFA">
    {content.title?.slice(15)}
  </Highlighter>
</h2>

          <p className="text-muted-foreground">{content.subtitle}</p>
        </div>

        {/* Layout */}
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Stats Column */}
          <div>
            <div className="mb-12 mt-12 grid grid-cols-3 gap-8 md:mb-0">
              {content.stats.map((stat, index) => (
                <div key={index} className="space-y-4">
                  <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                    {stat.value}
                  </div>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Column */}
          <div className="relative">
            <blockquote
              className={`${
                isRtl
                  ? "pr-4 border-r-4 border-l-0"
                  : "pl-4 border-l-4 border-r-0"
              }`}
            >
              <p>{content.testimonial.quote}</p>
              <div className="mt-6 space-y-3">
                <cite className="block font-medium">{content.testimonial.author}</cite>
                <span className="block text-sm text-muted-foreground">
                  {content.testimonial.role}
                </span>
                <img
                  className="h-5 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                  height="20"
                  width="auto"
                />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
