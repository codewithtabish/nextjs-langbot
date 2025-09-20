import "../globals.css";
// import "@/styles/themes/twitter.css";
// import "@/styles/themes/midnight-bloom.css";
// import "@/styles/themes/nature.css";
// import "@/styles/themes/cosmic-night.css";
// import "@/styles/themes/caffeine.css";
// import "@/styles/themes/pastel.css";
// import "@/styles/themes/violet.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/generals/theme-provider";
import { getDirection } from "@/lib/localDirection";
import { allowedLocales } from "@/constants/languages";
import FooterSection from "@/components/generals/footer";
import { Toaster } from "@/components/ui/sonner";

type LocaleType = (typeof allowedLocales)[number];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = allowedLocales.includes(locale as LocaleType)
    ? locale
    : "en";
  const dir = getDirection(safeLocale);

  return (
    <html lang={safeLocale} dir={dir}>
      <head />
      <body className="antialiased min-h-screen overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="flex flex-col min-h-screen w-screen">
            <Toaster />
            <TooltipProvider delayDuration={0}>
              {children}
              <FooterSection locale={locale} />
            </TooltipProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
