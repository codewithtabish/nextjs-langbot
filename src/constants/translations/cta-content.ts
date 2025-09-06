import { LocaleType } from "../languages"

export type CallToActionContent = {
  language: string
  code: LocaleType
  title: string
  subtitle: string
}

export const callToActionContentArray: CallToActionContent[] = [
  {
    language: "English",
    code: "en",
    title: "Start Building",
    subtitle:
      "Empower your ideas with AI-driven solutions built for speed, scale, and innovation.",
  },
  {
    language: "Mandarin Chinese",
    code: "zh",
    title: "开始构建",
    subtitle: "用人工智能驱动的解决方案加速您的创意，实现创新与规模化。",
  },
  {
    language: "Hindi",
    code: "hi",
    title: "निर्माण शुरू करें",
    subtitle:
      "एआई-संचालित समाधानों के साथ अपने विचारों को तेज़, नवाचारपूर्ण और स्केलेबल बनाएं।",
  },
  {
    language: "Spanish",
    code: "es",
    title: "Empieza a construir",
    subtitle:
      "Impulsa tus ideas con soluciones de IA diseñadas para la velocidad, la escala y la innovación.",
  },
  {
    language: "Arabic",
    code: "ar",
    title: "ابدأ البناء",
    subtitle:
      "عزّز أفكارك بحلول مدعومة بالذكاء الاصطناعي مصممة للسرعة والتوسع والابتكار.",
  },
  {
    language: "French",
    code: "fr",
    title: "Commencez à construire",
    subtitle:
      "Donnez vie à vos idées grâce à des solutions basées sur l’IA, conçues pour la rapidité, l’évolutivité et l’innovation.",
  },
  {
    language: "German",
    code: "de",
    title: "Jetzt durchstarten",
    subtitle:
      "Verwirklichen Sie Ihre Ideen mit KI‑gestützten Lösungen für Geschwindigkeit, Skalierbarkeit und Innovation.",
  },
  {
    language: "Japanese",
    code: "ja",
    title: "開発を始めよう",
    subtitle:
      "AI駆動のソリューションで、スピード・スケール・革新を実現し、アイデアを形にしましょう。",
  },
  {
    language: "Urdu",
    code: "ur",
    title: "تخلیق شروع کریں",
    subtitle:
      "اپنے خیالات کو ای آئی سے چلنے والے حلوں کے ساتھ تیز، قابلِ توسیع اور جدید بنائیں۔",
  },
  {
    language: "Portuguese",
    code: "pt",
    title: "Comece a construir",
    subtitle:
      "Dê vida às suas ideias com soluções de IA criadas para velocidade, escalabilidade e inovação.",
  },
  {
    language: "Russian",
    code: "ru",
    title: "Начните создавать",
    subtitle:
      "Оживите свои идеи с помощью решений на базе ИИ, созданных для скорости, масштабируемости и инноваций.",
  },
  {
    language: "Korean",
    code: "ko",
    title: "시작하세요",
    subtitle:
      "AI 기반 솔루션으로 아이디어를 더 빠르고 확장 가능하며 혁신적으로 실현하세요.",
  },
]
