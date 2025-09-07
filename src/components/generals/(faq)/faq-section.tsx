"use client"

import { faqContent } from "@/constants/translations/faq-content"
import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"

export default function FAQsSection({ locale = "en" }: HomeLogoCloudProps) {
  // Load translated content or fallback to English
  const content =
    faqContent[locale as keyof typeof faqContent] || faqContent["en"]

  const isRtl = isUrduTypedLanguage(locale)

  return (
    <section
      className="scroll-py-16 py-16 md:scroll-py-32 md:py-32"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
          {/* Title + Subtitle */}
          <div className="text-center lg:text-left px-10">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              {content.title}
            </h2>
            <p className="text-muted-foreground">{content.subtitle}</p>
          </div>

          {/* FAQ Items */}
          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
            {content.faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="font-medium">{faq.question}</h3>
                <p className="text-muted-foreground mt-4">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
