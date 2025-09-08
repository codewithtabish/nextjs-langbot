"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import { cn } from "@/lib/utils"
import Logo from "./(hero)/logo"
import LanguageSwitcher from "./language-switcher"
import { ModeToggle } from "./mode-toggle"
import ThemeChanger from "./theme-changer"

import { headerContent } from "@/constants/translations/header-content"
import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"

export const HeroHeader = ({ locale = "en" }: HomeLogoCloudProps) => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nav =
    headerContent[locale as keyof typeof headerContent] ||
    headerContent["en"]
  const isRtl = isUrduTypedLanguage(locale)

  const menuItems = [
    { name: nav.blog, href: "/blog" },
    { name: nav.about, href: "/about" },
    { name: nav.contact, href: "/contact" },
    { name: nav.help, href: "/help" },
  ]

  return (
    <header
      className="fixed top-0 left-0 w-full z-30"
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      <nav
        data-state={menuState ? "active" : "inactive"}
        className="w-full"
      >
        <div
          className={cn(
            "mx-auto mt-2 px-4 sm:px-6 lg:px-12 flex items-center justify-between py-3 lg:py-4 transition-all duration-300",
            isScrolled
              ? "bg-background/80 backdrop-blur-lg max-w-6xl rounded-2xl border shadow-sm"
              : "max-w-7xl"
          )}
        >
          {/* Left: Logo + ThemeChanger (desktop) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href={`/${locale}`}
              aria-label="home"
              className="flex items-center space-x-2"
            >
              <Logo />
            </Link>
            {/* Show ThemeChanger alongside logo on desktop */}
            <div className="hidden sm:block">
              <ThemeChanger />
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <ul className="hidden lg:flex gap-8 text-sm">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${locale}/${item.href}`}
                  className="text-muted-foreground hover:text-accent-foreground block duration-150"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Controls + CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CTA only on desktop */}
            <div className="hidden lg:flex">
              <Button>
                {locale === "ur" || locale === "ar"
                  ? "شروع کریں"
                  : "Get Started"}
              </Button>
            </div>

            {/* Mode & Language toggles (always visible) */}
            <ModeToggle />
            {/* <LanguageSwitcher /> */}

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="relative z-20 block p-2.5 lg:hidden"
            >
              {menuState ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Full Width */}
        {menuState && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background rounded-2xl border p-6 shadow-2xl">
            <ul className="space-y-4 text-base mb-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${locale}/${item.href}`}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    onClick={() => setMenuState(false)} // close on click
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA + ThemeChanger */}
            <div className="flex flex-col gap-3">
              <Button size="sm" className="w-full">
                <Link href="#">
                  {locale === "ur" || locale === "ar"
                    ? "شروع کریں"
                    : "Get Started"}
                </Link>
              </Button>
              <ThemeChanger />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
