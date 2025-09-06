"use client"

import React from "react"
import { Mail, SendHorizonal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextEffect } from "./text-effect"
import { AnimatedGroup } from "./animated-group"
import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"
import { heroContent } from "@/constants/translations/hero-translation"

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 1.5 },
    },
  },
}

export default function HeroSection({ locale = "en" }: HomeLogoCloudProps) {
  // Translation
  const content =
    heroContent[locale as keyof typeof heroContent] || heroContent["en"]

  // RTL check
  const isRtl = isUrduTypedLanguage(locale)

  return (
    <main
      className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "center",
      }}
    >
      <section>
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Title */}
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="text-balance text-5xl font-medium md:text-6xl"
            >
              {content.title}
            </TextEffect>

            {/* Subtitle */}
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mx-auto mt-6 max-w-2xl text-pretty text-lg"
            >
              {content.subtitle}
            </TextEffect>

            {/* Form */}
            <AnimatedGroup
              // @ts-ignore
              variants={{
                container: {
                  visible: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.75 },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-12"
            >
              <form className="mx-auto max-w-sm relative">
                <div className="bg-background relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 has-[input:focus]:ring-muted">
                  {/* mail icon changes side based on RTL */}
                  <Mail
                    className={`pointer-events-none absolute my-auto size-4 ${
                      isRtl ? "right-4 inset-y-0" : "left-4 inset-y-0"
                    }`}
                  />

                  <input
                    placeholder={content.inputPlaceholder}
                    className={`h-12 w-full bg-transparent focus:outline-none ${
                      isRtl ? "pr-12 text-right" : "pl-12 text-left"
                    }`}
                    type="email"
                  />

                  <div className="md:pr-1.5 lg:pr-0">
                    <Button
                      aria-label="submit"
                      size="sm"
                      className="rounded-(--radius)"
                    >
                      <span className="hidden md:block">{content.buttonText}</span>
                      <SendHorizonal
                        className="relative mx-auto size-5 md:hidden"
                        strokeWidth={2}
                      />
                    </Button>
                  </div>
                </div>
              </form>
            </AnimatedGroup>
          </div>
        </div>
      </section>
    </main>
  )
}
