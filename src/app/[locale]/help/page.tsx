// 'use client';

import HelpChatComp from "@/components/(help)/help-chat-comp";
import HelpContentSection from "@/components/(help)/help-section";
import BackButton from "@/components/generals/back-button";
import { allowedLocales, LocaleType } from "@/constants/languages";

// Dynamic SEO metadata for Help page (Next.js 15: params is a Promise)
// export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
//   const { locale } = await params;
//   const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
//   return getHelpMetadata(safeLocale);
// }

export default async function HelpPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: LocaleType = allowedLocales.includes(locale as LocaleType)
    ? (locale as LocaleType)
    : "en";

  return (
    <main className="
      w-full min-h-screen
      max-w-[100vw]
      sm:max-w-screen-sm
      md:max-w-screen-md
      lg:max-w-screen-lg
      xl:max-w-screen-xl
      2xl:max-w-screen-2xl
      mx-auto
      px-2
      sm:px-4
      md:px-8
      lg:px-10
      xl:px-12
      2xl:px-16
      py-6
      flex flex-col gap-10
      bg-background
      overflow-x-hidden
    ">
      <BackButton />
      <HelpContentSection locale={safeLocale} />
      <HelpChatComp locale={locale} />
    </main>
  );
}
