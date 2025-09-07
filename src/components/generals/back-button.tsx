"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { backButtonContent } from "@/constants/translations/back-button-content"
import { HomeLogoCloudProps, isUrduTypedLanguage } from "@/constants/languages"

export default function BackButton({ locale = "en" }: HomeLogoCloudProps) {
  const router = useRouter()
  const content =
    backButtonContent[locale as keyof typeof backButtonContent] ||
    backButtonContent["en"]

  const isRtl = isUrduTypedLanguage(locale)

  return (
    <div className="fixed top-4 left-4 z-50">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        onClick={() => router.back()}
      >
        {/* Icon flips only, button always top-left */}
        {!isRtl && <ArrowLeft className="h-4 w-4" />}
        <span>{content.label}</span>
        {isRtl && <ArrowLeft className="h-4 w-4 rotate-180" />}
      </Button>
    </div>
  )
}
