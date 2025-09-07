"use client"

import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"

// ✅ Dynamically import Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

// Import animations (replace with your real files)
import uploadAnim from "@/anim/upload.json"
import aiprocess from "@/anim/process-ai.json"
import summary from "@/anim/summary.json"
import { howItWorksContent } from "@/constants/translations/working-steps-content"

const animFiles = [uploadAnim, aiprocess, summary]

export default function HowItWorks({ locale = "en" }: HomeLogoCloudProps) {
  // ✅ Pick content by locale, fallback to English
  const content =
    howItWorksContent[locale as keyof typeof howItWorksContent] ||
    howItWorksContent["en"]

  // ✅ RTL handling
  const isRtl = isUrduTypedLanguage(locale)

  return (
    <section
      className="py-12 md:py-16"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 space-y-14">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl font-semibold lg:text-4xl">
            {content.sectionTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {content.sectionSubtitle}
          </p>
        </div>

        {/* Steps */}
        {content.steps.map((step, i) => {
          const isEven = i % 2 !== 0
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.4 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                isEven && "md:flex-row-reverse"
              }`}
            >
              {/* Animation */}
              <div
                className={`flex justify-center ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                <Lottie
                  animationData={animFiles[i]}
                  loop
                  autoplay
                  className="w-52 h-52 sm:w-60 sm:h-60"
                />
              </div>

              {/* Text */}
              <div
                className={`space-y-2 ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
              >
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed opacity-70 italic">
                  {step.subtitle}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
