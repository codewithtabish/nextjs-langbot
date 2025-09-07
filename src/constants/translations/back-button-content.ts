import { LocaleType } from "@/constants/languages"

type BackButtonText = {
  label: string
}

export const backButtonContent: Record<LocaleType, BackButtonText> = {
  en: { label: "Back" },
  zh: { label: "返回" },
  hi: { label: "वापस" },
  es: { label: "Atrás" },
  ar: { label: "رجوع" },
  fr: { label: "Retour" },
  de: { label: "Zurück" },
  ja: { label: "戻る" },
  ur: { label: "واپس" },
  pt: { label: "Voltar" },
  ru: { label: "Назад" },
  ko: { label: "뒤로" },
}
