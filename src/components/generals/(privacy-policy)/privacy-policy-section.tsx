"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { privacyPolicyContent } from "@/constants/translations/privacy-policy-content"
import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"

export default function PrivacyPolicy({ locale = "en" }: HomeLogoCloudProps) {
  const content =
    privacyPolicyContent[locale as keyof typeof privacyPolicyContent] ||
    privacyPolicyContent["en"]

  const isRtl = isUrduTypedLanguage(locale)

  return (
    <section
      className="relative w-full py-20 md:py-32 px-4 md:px-6"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">
            {content.title}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            {content.subtitle}
          </p>
        </div>

        {/* Markdown rendering with custom styles */}
        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h3: ({ node, ...props }) => (
                <h3
                  {...props}
                  className="text-2xl font-bold mt-12 mb-6 text-foreground"
                />
              ),
              p: ({ node, ...props }) => (
                <p
                  {...props}
                  className="text-muted-foreground leading-relaxed mb-6"
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  {...props}
                  className="list-disc pl-5 space-y-2 text-muted-foreground mb-6"
                />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  {...props}
                  className="list-decimal pl-5 space-y-2 text-muted-foreground mb-6"
                />
              ),
            }}
          >
            {content.content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  )
}
