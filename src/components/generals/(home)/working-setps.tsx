"use client"

import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"
import dynamic from "next/dynamic"
import uploadAnim from "@/anim/upload.json"
import aiprocess from "@/anim/process-ai.json"
import summary from "@/anim/summary.json"
import { motion } from "framer-motion"

// ✅ Dynamically import Lottie for lazy loading (client-side only)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

const steps = [
  {
    anim: uploadAnim,
    title: "Upload Your File",
    subtitle:
      "Drag and drop PDFs, spreadsheets, or documents into the platform and prepare them for AI-powered chat.",
  },
  {
    anim: aiprocess,
    title: "AI Processes Instantly",
    subtitle:
      "Our pipeline indexes and understands your file instantly, ready to answer your questions with accuracy.",
  },
  {
    anim: summary,
    title: "Chat & Summarize",
    subtitle:
      "Ask questions in any of the supported languages, get precise answers, and generate clear summaries.",
  },
]

export default function HowItWorks({ locale = "en" }: HomeLogoCloudProps) {
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
          <h2 className="text-3xl font-semibold lg:text-4xl">How It Works</h2>
          <p className="mt-3 text-muted-foreground">
            A simple three-step process to transform any file into instant
            knowledge with AI.
          </p>
        </div>

        {/* Steps */}
        {steps.map((step, i) => {
          const isEven = i % 2 !== 0
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.4 }} // ✅ Only animate when ~40% visible
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
                  animationData={step.anim}
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
                <p className="text-muted-foreground leading-relaxed opacity-[.6] italic">
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
