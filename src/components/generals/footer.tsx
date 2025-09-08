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
      className="py-16 md:py-32 border-t bg-background"
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="go home"
          className="mx-auto block size-fit"
        >
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
          {/* Example: Add your socials here */}
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
        <div className="flex flex-2 gap-2 items-center-center">
        {/* <LanguageSwitcher/> */}
        <ModeToggle/>

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
