"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Spotlight } from "@/components/ui/spotlight"
import { BorderBeam } from "@/components/ui/border-beam"
import { Rocket, Target, HeartHandshake, Lightbulb, Users } from "lucide-react"

import { aboutContent } from "@/constants/translations/about-content"
import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"

export default function AboutSection({ locale = "en" }: HomeLogoCloudProps) {
  const content =
    aboutContent[locale as keyof typeof aboutContent] || aboutContent["en"]

  const isRtl = isUrduTypedLanguage(locale)

  const missionRef = useRef(null)
  const visionRef = useRef(null)
  const valuesRef = useRef(null)

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 })
  const visionInView = useInView(visionRef, { once: true, amount: 0.3 })
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 })

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden px-4 py-28 md:px-6 md:py-36"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      {/* Spotlight gradient */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsl(var(--primary)) 0, hsl(var(--primary)/0.06) 50%, transparent 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsl(var(--primary)/0.08) 0, hsl(var(--primary)/0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsl(var(--primary)/0.06) 0, hsl(var(--primary)/0.03) 80%, transparent 100%)"
      />

      <div className="relative z-10 w-full max-w-6xl text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl py-6">
            {content.title}
          </h1>

          {/* Render subtitle markdown paragraphs */}
          <div className="mt-6 space-y-6 max-w-3xl mx-auto">
            {content.subtitle.split("\n\n").map((p, i) => (
              <p
                key={i}
                className="text-muted-foreground opacity-[.6]"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid gap-12 md:grid-cols-2 mb-20">
          {/* Mission */}
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, y: 40 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="p-8"
          >
            <BorderBeam
              duration={8}
              size={300}
              className="via-primary/40 from-transparent to-transparent"
            />
            <div className="mb-6 flex items-center justify-center">
              <Rocket className="text-primary h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              {content.missionTitle}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed opacity-[.6]">
              {content.mission}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            ref={visionRef}
            initial={{ opacity: 0, y: 40 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="p-8"
          >
            <BorderBeam
              duration={8}
              size={300}
              reverse
              className="from-transparent via-primary/40 to-transparent"
            />
            <div className="mb-6 flex items-center justify-center">
              <Target className="text-primary h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{content.visionTitle}</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed opacity-[.6]">
              {content.vision}
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          ref={valuesRef}
          initial={{ opacity: 0, y: 40 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-10">{content.valuesTitle}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {content.values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4 flex items-center justify-center">
                  {i === 0 && <Lightbulb className="text-primary h-8 w-8" />}
                  {i === 1 && <HeartHandshake className="text-primary h-8 w-8" />}
                  {i === 2 && <Users className="text-primary h-8 w-8" />}
                  {i === 3 && <Target className="text-primary h-8 w-8" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base opacity-[.6] md:max-w-[80%]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
