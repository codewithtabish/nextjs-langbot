export const avalible_languages = [
  { name: "English", nativeName: "English", code: "en" },
  { name: "Mandarin Chinese", nativeName: "中文", code: "zh" },
  { name: "Hindi", nativeName: "हिन्दी", code: "hi" },
  { name: "Spanish", nativeName: "Español", code: "es" },
  { name: "Arabic", nativeName: "العربية", code: "ar" },
  { name: "French", nativeName: "Français", code: "fr" },
  { name: "German", nativeName: "Deutsch", code: "de" },
  { name: "Japanese", nativeName: "日本語", code: "ja" },
  { name: "Urdu", nativeName: "اردو", code: "ur" },
  { name: "Portuguese", nativeName: "Português", code: "pt" },
  { name: "Russian", nativeName: "Русский", code: "ru" },
  { name: "Korean", nativeName: "한국어", code: "ko" },
]

export type LocaleType = typeof avalible_languages[number]["code"]

export const allowedLocales: LocaleType[] = avalible_languages.map(
  (lang) => lang.code
)

export const urduTypedLanguages: LocaleType[] = ["ur", "ar", "fa", "ps"]

export const isUrduTypedLanguage = (code: LocaleType): boolean => {
  return urduTypedLanguages.includes(code)
}

export interface HomeLogoCloudProps {
  locale?: LocaleType
}
