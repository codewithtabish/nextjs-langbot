'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import Logo from './(hero)/logo'
import LanguageSwitcher from './language-switcher'
import { ModeToggle } from './mode-toggle'

const menuItems = [
  { name: 'Features', href: '#link' },
  { name: 'Solution', href: '#link' },
  { name: 'Pricing', href: '#link' },
  { name: 'About', href: '#link' },
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-30">
      <nav
        data-state={menuState ? 'active' : 'inactive'}
        className="w-full px-2"
      >
        <div
          className={cn(
            'mx-auto mt-2 px-6 transition-all duration-300 lg:px-12 flex flex-wrap items-center justify-between py-3 lg:py-4',
            isScrolled
              ? 'bg-background/80 backdrop-blur-lg max-w-4xl rounded-2xl border shadow-sm'
              : 'max-w-6xl'
          )}
        >
          {/* Logo + Menu Button */}
          <div className="flex w-full justify-between lg:w-auto items-center">
            <Link href="/" aria-label="home" className="flex items-center space-x-2">
              <Logo/>
            </Link>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="relative z-20 block p-2.5 lg:hidden"
            >
              {menuState ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex w-fit">
            <ul className="flex gap-8 text-sm">
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
          </div>

          <div className='flex gap-3 items-center'>
            <ModeToggle/>

            <LanguageSwitcher/>
            <Button>
                GET STARTED
            </Button>
          </div>


          {/* Mobile Menu */}
          {menuState && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-background rounded-2xl border p-6 shadow-2xl">
              <ul className="space-y-6 text-base">
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

              <div className="mt-6 flex flex-col gap-3">
                <Button variant="outline" size="sm">
                  <Link href="#">Login</Link>
                </Button>
                <Button size="sm">
                  <Link href="#">Sign Up</Link>
                </Button>
                <Button size="sm">
                  <Link href="#">Get Started</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
