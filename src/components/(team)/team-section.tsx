"use client"

import Link from "next/link"
import { teamContent } from "@/constants/translations/team-content"
import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"

const members = [
  {
    name: "Talha Tabish",
    role: "Founder – Full‑Stack & AI Expert | Mobile & Backend Developer",
    avatar: "/team/talha.webp", // 👉 replace with your actual image path
    link: "#",
  },
  {
    name: "Elijah Jones",
    role: "Co‑Founder – CTO",
    avatar: "https://alt.tailus.io/images/team/member-two.webp",
    link: "#",
  },
  {
    name: "Isabella Garcia",
    role: "Sales Manager",
    avatar: "https://alt.tailus.io/images/team/member-three.webp",
    link: "#",
  },
  {
    name: "Henry Lee",
    role: "UX Engineer",
    avatar: "https://alt.tailus.io/images/team/member-four.webp",
    link: "#",
  },
  {
    name: "Ava Williams",
    role: "Interaction Designer",
    avatar: "https://alt.tailus.io/images/team/member-five.webp",
    link: "#",
  },
  {
    name: "Olivia Miller",
    role: "Visual Designer",
    avatar: "https://alt.tailus.io/images/team/member-six.webp",
    link: "#",
  },
]

export default function TeamSection({ locale = "en" }: HomeLogoCloudProps) {
  const content =
    teamContent[locale as keyof typeof teamContent] || teamContent["en"]

  const isRtl = isUrduTypedLanguage(locale)

  return (
    <section
      className="py-16 md:py-32 dark:bg-transparent"
      style={{
        direction: isRtl ? "rtl" : "ltr",
        textAlign: isRtl ? "right" : "left",
      }}
    >
      <div className="mx-auto max-w-5xl border-t px-6">
        {/* Subtitle tag */}
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          {content.subtitle}
        </span>

        {/* Title + Dream */}
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">{content.title}</h2>
            <p className="text-muted-foreground mt-4">{content.dream}</p>
          </div>
          <div className="mt-6 sm:mt-0">
            <p className="text-muted-foreground">{content.aboutText}</p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt={member.name}
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-xs">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      Linktree
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
