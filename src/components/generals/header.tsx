'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import Logo from './(hero)/logo'
import LanguageSwitcher from './language-switcher'
import { ModeToggle } from './mode-toggle'

import { headerContent } from '@/constants/translations/header-content'
import { HomeLogoCloudProps, isUrduTypedLanguage } from '@/constants/languages'

export const HeroHeader = ({ locale = "en" }: HomeLogoCloudProps) => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ load translations by locale
  const nav =
    headerContent[locale as keyof typeof headerContent] || headerContent["en"]

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
      <nav data-state={menuState ? 'active' : 'inactive'} className="w-full px-2">
        <div
          className={cn(
            'mx-auto mt-2 px-6 transition-all duration-300 lg:px-12 flex flex-wrap items-center justify-between py-3 lg:py-4',
            isScrolled
              ? 'bg-background/80 backdrop-blur-lg max-w-4xl rounded-2xl border shadow-sm'
              : 'max-w-6xl'
          )}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="home" className="flex items-center space-x-2">
              <Logo />
            </Link>
          </div>

          {/* Navigation / Right Controls */}
          <div className="flex items-center gap-3">
            {/* Desktop Menu */}
            <div className="hidden lg:flex w-fit">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`${locale}/${item.href}`}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Controls shared across desktop + mobile */}
            <ModeToggle />
            <LanguageSwitcher />

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Button>
                {locale === "ur" || locale === "ar" ? "شروع کریں" : "Get Started"}
              </Button>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="relative z-20 block p-2.5 lg:hidden"
            >
              {menuState ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Sheet */}
        {menuState && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background rounded-2xl border p-6 shadow-2xl">
            <ul className="space-y-6 text-base mb-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="flex flex-col">
              <Button size="sm">
                <Link href="#">
                  {locale === "ur" || locale === "ar" ? "شروع کریں" : "Get Started"}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
