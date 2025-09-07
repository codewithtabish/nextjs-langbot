import { LocaleType } from "@/constants/languages"

type FooterNav = {
  blog: string
  about: string
  contact: string
  help: string
  faq: string
  privacy: string
  team: string
}

export const footerContent: Record<LocaleType, FooterNav> = {
  en: {
    blog: "Blog",
    about: "About",
    contact: "Contact",
    help: "Help",
    faq: "FAQ",
    privacy: "Privacy Policy",
    team: "Team",
  },
  zh: {
    blog: "博客",
    about: "关于我们",
    contact: "联系",
    help: "帮助",
    faq: "常见问题",
    privacy: "隐私政策",
    team: "团队",
  },
  hi: {
    blog: "ब्लॉग",
    about: "हमारे बारे में",
    contact: "संपर्क",
    help: "सहायता",
    faq: "अक्सर पूछे जाने वाले प्रश्न",
    privacy: "गोपनीयता नीति",
    team: "टीम",
  },
  es: {
    blog: "Blog",
    about: "Acerca de",
    contact: "Contacto",
    help: "Ayuda",
    faq: "Preguntas frecuentes",
    privacy: "Política de privacidad",
    team: "Equipo",
  },
  ar: {
    blog: "مدونة",
    about: "معلومات عنا",
    contact: "اتصل بنا",
    help: "مساعدة",
    faq: "الأسئلة الشائعة",
    privacy: "سياسة الخصوصية",
    team: "الفريق",
  },
  fr: {
    blog: "Blog",
    about: "À propos",
    contact: "Contact",
    help: "Aide",
    faq: "FAQ",
    privacy: "Politique de confidentialité",
    team: "Équipe",
  },
  de: {
    blog: "Blog",
    about: "Über uns",
    contact: "Kontakt",
    help: "Hilfe",
    faq: "FAQ",
    privacy: "Datenschutz-Bestimmungen",
    team: "Team",
  },
  ja: {
    blog: "ブログ",
    about: "会社概要",
    contact: "お問い合わせ",
    help: "ヘルプ",
    faq: "よくある質問",
    privacy: "プライバシーポリシー",
    team: "チーム",
  },
  ur: {
    blog: "بلاگ",
    about: "ہمارے بارے میں",
    contact: "رابطہ",
    help: "مدد",
    faq: "عمومی سوالات",
    privacy: "پرائیویسی پالیسی",
    team: "ٹیم",
  },
  pt: {
    blog: "Blog",
    about: "Sobre",
    contact: "Contato",
    help: "Ajuda",
    faq: "Perguntas frequentes",
    privacy: "Política de Privacidade",
    team: "Equipe",
  },
  ru: {
    blog: "Блог",
    about: "О нас",
    contact: "Контакты",
    help: "Помощь",
    faq: "Часто задаваемые вопросы",
    privacy: "Политика конфиденциальности",
    team: "Команда",
  },
  ko: {
    blog: "블로그",
    about: "소개",
    contact: "문의하기",
    help: "도움말",
    faq: "자주 묻는 질문",
    privacy: "개인정보 보호정책",
    team: "팀",
  },
}
