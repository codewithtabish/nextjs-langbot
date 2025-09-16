"use client";

import Link from "next/link";
import { Grid, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import Logo from "./(hero)/logo";
import LanguageSwitcher from "./language-switcher";
import { ModeToggle } from "./mode-toggle";
import ThemeChanger from "./theme-changer";
import { headerContent } from "@/constants/translations/header-content";
import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  ClerkLoading,
  ClerkLoaded,
  useUser,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "../ui/badge";
import { BookOpen } from "lucide-react"; // any Lucide icon


export const HeroHeader = ({ locale = "en" }: HomeLogoCloudProps) => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { theme } = useTheme();
  const { user } = useUser(); // ✅ Current logged in user

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav =
    headerContent[locale as keyof typeof headerContent] || headerContent["en"];
  const isRtl = isUrduTypedLanguage(locale);

  const menuItems = [
    { name: nav.blog, href: "/blogs" },
    { name: nav.about, href: "/about" },
    { name: nav.contact, href: "/contact" },
    { name: nav.help, href: "/help" },
  ];

  // ✅ Check admin email
  const isAdmin = user?.primaryEmailAddress?.emailAddress === "kashisultan099@gmail.com";

  return (
    <header
      className="fixed top-0 left-0 w-full z-30"
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      {/* {user?.primaryEmailAddress?.emailAddress} */}
      <nav data-state={menuState ? "active" : "inactive"} className="w-full">
        <div
          className={cn(
            "mx-auto mt-2 px-4 sm:px-6 lg:px-12 flex items-center justify-between py-3 lg:py-4 transition-all duration-300",
            isScrolled
              ? "bg-background/80 backdrop-blur-lg max-w-6xl rounded-2xl border shadow-sm"
              : "max-w-7xl"
          )}
        >
          {/* Left: Logo + ThemeChanger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href={`/${locale}`} aria-label="home" className="flex items-center space-x-2">
              <Logo />
            </Link>
            <div className="hidden sm:block">
              <ThemeChanger />
            </div>
          </div>

          {/* Center Navigation (Desktop) */}
          <ul className="hidden lg:flex gap-8 text-sm">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${locale}${item.href}`}
                  className="text-muted-foreground hover:text-accent-foreground block duration-150"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ClerkLoading>
              <Skeleton className="h-10 w-24 rounded-lg" />
            </ClerkLoading>

            <ClerkLoaded>
              <SignedOut>
                <SignInButton
                  mode="modal"
                  appearance={{
                    baseTheme: theme === "dark" ? dark : undefined,
                    variables: {
                      borderRadius: "0.75rem",
                      colorPrimary: theme === "dark" ? "#22d3ee" : "#6366f1",
                    },
                  }}
                >
                  <Button>
                    {locale === "ur" || locale === "ar" ? "شروع کریں" : "Get Started"}
                  </Button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <Link href={`/${locale}/dashboard`} className="py-3 mr-3">
                  <Badge variant="outline">Upload File</Badge>
                </Link>
                <UserButton
                afterSignOutUrl={`/${locale}`}
  // afterSignOutUrl={process.env.NEXT_PUBLIC_BASE_URL}
  appearance={{
    baseTheme: theme === "dark" ? dark : undefined,
    variables: {
      borderRadius: "0.75rem",
      colorPrimary: theme === "dark" ? "#22d3ee" : "#6366f1",
    },
  }}
>
  <UserButton.MenuItems>
    {/* {isAdmin && (
      <UserButton.Link
        label="Blogs"
        href="/blogs"
        labelIcon={<BookOpen className="w-4 h-4" />} // ✅ icon added


        // optionally icon: labelIcon={<SomeIcon />}
      />
    )} */}
    {isAdmin && (
      <UserButton.Link
        label="Dashboard"
        href={`/${locale}/dashboard`}
        labelIcon={<Grid className="w-4 h-4" />} // ✅ icon added


        // optionally icon: labelIcon={<SomeIcon />}
      />
    )}
  </UserButton.MenuItems>
</UserButton>


              </SignedIn>
            </ClerkLoaded>

            <ModeToggle />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="relative z-20 block p-2.5 lg:hidden"
            >
              {menuState ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuState && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background rounded-2xl border p-6 shadow-2xl">
            <ul className="space-y-4 text-base mb-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    onClick={() => setMenuState(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <Button size="sm" className="w-full">
                <Link href="#">
                  {locale === "ur" || locale === "ar" ? "شروع کریں" : "Get Started"}
                </Link>
              </Button>
              <ThemeChanger />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
