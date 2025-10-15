"use client"

import Link from "next/link"
import Logo from "./(hero)/logo"
import { footerContent } from "@/constants/translations/footer-content"
import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"
import LanguageSwitcher from "./language-switcher"
import { ModeToggle } from "./mode-toggle"

export default function FooterSection({ locale = "en" }: HomeLogoCloudProps) {
  const nav =
    footerContent[locale as keyof typeof footerContent] || footerContent["en"]

  const isRtl = isUrduTypedLanguage(locale)

  const menuItems = [
    { name: nav.blog, href: "/blog" },
    { name: nav.about, href: "/about" },
    { name: nav.contact, href: "/contact" },
    { name: nav.help, href: "/help" },
    { name: nav.faq, href: "/faq" },
    { name: nav.privacy, href: "/privacy" },
    { name: nav.team, href: "/team" },
  ]

  return (
    <footer
      className="relative py-16 md:py-32 border-t  bg-[#fafafa] dark:bg-[#0f0f0f] text-black dark:text-white transition-colors duration-500 overflow-hidden"
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      {/* Gradient Background - Light Mode */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(34,197,94,0.08) 20px, rgba(34,197,94,0.08) 21px),
            repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(16,185,129,0.07) 30px, rgba(16,185,129,0.07) 31px),
            repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(59,130,246,0.06) 40px, rgba(59,130,246,0.06) 41px),
            repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(147,51,234,0.05) 35px, rgba(147,51,234,0.05) 36px)
          `,
        }}
      />

      {/* Gradient Background - Dark Mode */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(34,197,94,0.12) 20px, rgba(34,197,94,0.12) 21px),
            repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(16,185,129,0.10) 30px, rgba(16,185,129,0.10) 31px),
            repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(59,130,246,0.08) 40px, rgba(59,130,246,0.08) 41px),
            repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(147,51,234,0.06) 35px, rgba(147,51,234,0.06) 36px)
          `,
        }}
      />

      {/* Footer Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Logo */}
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Logo />
        </Link>

        {/* Navigation Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {menuItems.map((link, index) => (
            <Link
              key={index}
              href={`/${locale}/${link.href}`}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary block"
          >
            GitHub
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary block"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-primary block"
          >
            Twitter
          </Link>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-center gap-2 my-6">
          {/* <LanguageSwitcher /> */}
          <ModeToggle />
        </div>

        {/* Copyright */}
        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} FileChat AI.{" "}
          {locale === "ar" || locale === "ur"
            ? "تمام حقوق محفوظ ہیں۔"
            : "All rights reserved."}
        </span>
      </div>
    </footer>
  )
}
