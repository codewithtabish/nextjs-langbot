"use client"

import { Button } from "@/components/ui/button"
import { Mail, SendHorizonal } from "lucide-react"
import { isUrduTypedLanguage, LocaleType } from "@/constants/languages"
import { callToActionContentArray } from "@/constants/translations/cta-content"

type Props = {
  locale?: LocaleType
}

export default function CallToActionSection({ locale = "en" }: Props) {
  const section =
    callToActionContentArray.find((s:any) => s.code === locale) ||
    callToActionContentArray.find((s:any) => s.code === "en")!

  const isRtl = isUrduTypedLanguage(section.code)

  return (
    <section
      className="py-16 md:py-32"
      style={{ direction: isRtl ? "rtl" : "ltr", textAlign: "center" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          {/* Title */}
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            {section.title}
          </h2>

          {/* Subtitle in two lines */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {section.subtitle}
          </p>

          {/* Form */}
          <form action="" className="mx-auto mt-10 max-w-sm lg:mt-12">
            <div
              className={`bg-background relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 has-[input:focus]:ring-muted`}
            >
              {/* Mail icon — dynamic side */}
              <Mail
                className={`text-caption pointer-events-none absolute inset-y-0 my-auto size-5 ${
                  isRtl ? "right-5" : "left-5"
                }`}
              />

              <input
                placeholder={
                  isRtl ? "ای میل پتہ درج کریں" : "Your email address"
                }
                className={`h-14 w-full bg-transparent focus:outline-none ${
                  isRtl ? "pr-12" : "pl-12"
                }`}
                type="email"
              />

              <div className="md:pr-1.5 lg:pr-0">
                <Button aria-label="submit" className="rounded-(--radius)">
                  <span className="hidden md:block">
                    {locale === "en" ? "Get Started" : section.title}
                  </span>
                  <SendHorizonal
                    className="relative mx-auto size-5 md:hidden"
                    strokeWidth={2}
                  />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
