import { LocaleType } from "@/constants/languages"

type HeaderNav = {
  blog: string
  about: string
  contact: string
  help: string
}

export const headerContent: Record<LocaleType, HeaderNav> = {
  en: {
    blog: "Blog",
    about: "About",
    contact: "Contact",
    help: "Help",
  },
  zh: {
    blog: "博客",
    about: "关于我们",
    contact: "联系",
    help: "帮助",
  },
  hi: {
    blog: "ब्लॉग",
    about: "हमारे बारे में",
    contact: "संपर्क",
    help: "सहायता",
  },
  es: {
    blog: "Blog",
    about: "Acerca de",
    contact: "Contacto",
    help: "Ayuda",
  },
  ar: {
    blog: "مدونة",
    about: "معلومات عنا",
    contact: "اتصل بنا",
    help: "مساعدة",
  },
  fr: {
    blog: "Blog",
    about: "À propos",
    contact: "Contact",
    help: "Aide",
  },
  de: {
    blog: "Blog",
    about: "Über uns",
    contact: "Kontakt",
    help: "Hilfe",
  },
  ja: {
    blog: "ブログ",
    about: "会社概要",
    contact: "お問い合わせ",
    help: "ヘルプ",
  },
  ur: {
    blog: "بلاگ",
    about: "ہمارے بارے میں",
    contact: "رابطہ",
    help: "مدد",
  },
  pt: {
    blog: "Blog",
    about: "Sobre",
    contact: "Contato",
    help: "Ajuda",
  },
  ru: {
    blog: "Блог",
    about: "О нас",
    contact: "Контакты",
    help: "Помощь",
  },
  ko: {
    blog: "블로그",
    about: "소개",
    contact: "문의하기",
    help: "도움말",
  },
}
