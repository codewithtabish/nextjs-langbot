import "../globals.css";
// import Header from "@/components/generals/header";
// import Footer from "@/components/generals/footer";
// import FooterBG from "@/components/generals/footer-bg";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/generals/theme-provider";
import { getDirection } from "@/lib/localDirection";
import { allowedLocales } from "@/constants/languages";
import { HeroHeader } from "@/components/generals/header";
import FooterSection from "@/components/generals/footer";


type LocaleType = typeof allowedLocales[number];

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = allowedLocales.includes(locale as LocaleType) ? locale : "en";
  const dir = getDirection(safeLocale);

  return (
    <html lang={safeLocale} dir={dir} suppressHydrationWarning>
      
       <body className="antialiased  min-h-screen overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={0}>
            
            
            {/* <SocialBar /> */}
            <main
              className="
                flex flex-col
                min-h-screen
                w-full
                container
                mx-auto
                px-2
                sm:px-4
                md:px-6
                lg:px-8
                xl:px-10
                2xl:px-12
                py-4
                items-center
                justify-start
                transition-all
              "
            >
            {/* <Header locale={locale} /> */}
            <HeroHeader/>
              {children}
              {/* <Footer locale={locale} /> */}
              {/* <FooterBG/> */}
            </main>
            <FooterSection/>
            {/* <Footer locale={safeLocale} /> */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
