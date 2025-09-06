"use client"

import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"
import { Player } from "@lottiefiles/react-lottie-player"
import { motion } from "framer-motion"

// Example steps data – you can add more steps and just swap JSON file paths later
const steps = [
  {
    anim: "/anim/upload.json",
    title: "Upload Your File",
    subtitle:
      "Drag and drop PDFs, spreadsheets, or documents into the platform and prepare them for AI-powered chat.",
  },
  {
    anim: "/anim/upload.json",
    title: "AI Processes Instantly",
    subtitle:
      "Our pipeline indexes and understands your file instantly, ready to answer your questions with accuracy.",
  },
  {
    anim: "/anim/upload.json",
    title: "Chat & Summarize",
    subtitle:
      "Ask questions in any of the supported languages, get precise answers, and generate clear summaries.",
  },
]

export default function WorkingSteps({ locale = "en" }: HomeLogoCloudProps) {
  const isRtl = isUrduTypedLanguage(locale)

  return (
    <section
      className="py-16 md:py-32"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 space-y-16">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            A simple three-step process to transform any file into instant
            knowledge with AI.
          </p>
        </div>

        {/* Steps */}
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Animation */}
            <div className="flex justify-center">
              <Player
                autoplay
                loop
                src={step.anim}
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Right: Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">{step.title}</h3>
              <p className="text-muted-foreground">{step.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
