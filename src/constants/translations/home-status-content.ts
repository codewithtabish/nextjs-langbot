import { LocaleType } from "@/constants/languages"

type StatItem = {
  value: string
  label: string
}

type StatusSectionContent = {
  title: string
  subtitle: string
  stats: StatItem[]
  testimonial: {
    quote: string
    author: string
    role: string
  }
}

export const statusContent: Record<LocaleType, StatusSectionContent> = {
  en: {
    title: "Our platform in numbers",
    subtitle:
      "Discover how users are transforming their work with AI-powered file chat. Thousands of files processed, high response accuracy, and multilingual support — helping teams worldwide unlock knowledge instantly.",
    stats: [
      { value: "+10k", label: "Files processed" },
      { value: "95%", label: "Response accuracy" },
      { value: "12", label: "Languages supported" },
    ],
    testimonial: {
      quote:
        "Using this platform has been like unlocking a secret productivity superpower. It's the perfect fusion of simplicity and versatility, enabling us to create AI apps that are powerful and user‑friendly.",
      author: "John Doe",
      role: "CEO",
    },
  },
  zh: {
    title: "平台数据",
    subtitle:
      "了解用户如何通过 AI 文件对话改变工作方式。数以千计的文件被处理，高响应准确率，多语言支持——帮助全球团队即时解锁知识。",
    stats: [
      { value: "+10k", label: "已处理文件" },
      { value: "95%", label: "回答准确率" },
      { value: "12", label: "支持的语言" },
    ],
    testimonial: {
      quote:
        "使用这个平台就像解锁了生产力的超级力量。它完美结合了简洁和灵活，让我们能够创建既强大又易用的 AI 应用。",
      author: "约翰·杜",
      role: "首席执行官",
    },
  },
  hi: {
    title: "हमारा प्लेटफ़ॉर्म आँकड़ों में",
    subtitle:
      "जानें कि उपयोगकर्ता कैसे AI-संचालित फ़ाइल चैट के साथ अपना काम बदल रहे हैं। हज़ारों फाइलें प्रोसेस हुईं, उच्च उत्तर सटीकता, और बहुभाषी समर्थन — विश्वभर की टीमों को तुरंत ज्ञान उपलब्ध करा रहा है।",
    stats: [
      { value: "+10k", label: "प्रोसेस्ड फाइलें" },
      { value: "95%", label: "उत्तर की सटीकता" },
      { value: "12", label: "समर्थित भाषाएँ" },
    ],
    testimonial: {
      quote:
        "इस प्लेटफ़ॉर्म का उपयोग करना ऐसा है मानो उत्पादकता की गुप्त शक्ति को खोल दिया हो। यह सरलता और बहुमुखी प्रतिभा का आदर्श संयोजन है।",
      author: "जॉन डो",
      role: "सीईओ",
    },
  },
  es: {
    title: "Nuestra plataforma en cifras",
    subtitle:
      "Descubre cómo los usuarios están transformando su trabajo con el chat de archivos impulsado por IA. Miles de archivos procesados, alta precisión en las respuestas y soporte multilingüe — ayudando a equipos en todo el mundo a desbloquear conocimiento al instante.",
    stats: [
      { value: "+10k", label: "Archivos procesados" },
      { value: "95%", label: "Precisión de respuestas" },
      { value: "12", label: "Idiomas soportados" },
    ],
    testimonial: {
      quote:
        "Usar esta plataforma ha sido como desbloquear un superpoder de productividad. Es la combinación perfecta de simplicidad y versatilidad.",
      author: "Juan Pérez",
      role: "Director Ejecutivo",
    },
  },
  ar: {
    title: "منصتنا بالأرقام",
    subtitle:
      "اكتشف كيف يغير المستخدمون عملهم من خلال محادثة الملفات بالذكاء الاصطناعي. آلاف الملفات تمت معالجتها، بدقة عالية في الإجابات، ودعم متعدد اللغات — مما يساعد الفرق في جميع أنحاء العالم على فتح المعرفة على الفور.",
    stats: [
      { value: "+10k", label: "الملفات المعالجة" },
      { value: "95%", label: "دقة الإجابات" },
      { value: "12", label: "اللغات المدعومة" },
    ],
    testimonial: {
      quote:
        "استخدام هذا النظام كان وكأنك تفتح قوة إنتاجية سرية. إنه مزيج مثالي من البساطة والمرونة.",
      author: "جون دو",
      role: "المدير التنفيذي",
    },
  },
  fr: {
    title: "Notre plateforme en chiffres",
    subtitle:
      "Découvrez comment les utilisateurs transforment leur travail grâce au chat de fichiers alimenté par IA. Des milliers de fichiers traités, une grande précision des réponses et un support multilingue — aidant les équipes du monde entier à libérer instantanément la connaissance.",
    stats: [
      { value: "+10k", label: "Fichiers traités" },
      { value: "95%", label: "Précision des réponses" },
      { value: "12", label: "Langues prises en charge" },
    ],
    testimonial: {
      quote:
        "Utiliser cette plateforme, c'est comme débloquer un super‑pouvoir de productivité. La parfaite combinaison de simplicité et de polyvalence.",
      author: "Jean Dupont",
      role: "PDG",
    },
  },
  de: {
    title: "Unsere Plattform in Zahlen",
    subtitle:
      "Erfahren Sie, wie Nutzer ihre Arbeit mit KI-gestütztem Datei-Chat transformieren. Tausende Dateien verarbeitet, hohe Antwortgenauigkeit und Mehrsprachenunterstützung — hilft Teams weltweit, Wissen sofort freizuschalten.",
    stats: [
      { value: "+10k", label: "Verarbeitete Dateien" },
      { value: "95%", label: "Antwortgenauigkeit" },
      { value: "12", label: "Unterstützte Sprachen" },
    ],
    testimonial: {
      quote:
        "Die Nutzung dieser Plattform ist wie das Freischalten einer geheimen Produktivitäts‑Superkraft. Einfachheit und Vielseitigkeit perfekt kombiniert.",
      author: "Hans Müller",
      role: "Geschäftsführer",
    },
  },
  ja: {
    title: "数字で見る私たちのプラットフォーム",
    subtitle:
      "利用者がAI搭載のファイルチャットでどのように仕事を変えているかをご覧ください。数千のファイルが処理され、高精度の応答、多言語対応 — 世界中のチームが瞬時に知識を活用できます。",
    stats: [
      { value: "+10k", label: "処理済みファイル" },
      { value: "95%", label: "応答精度" },
      { value: "12", label: "対応言語" },
    ],
    testimonial: {
      quote:
        "このプラットフォームを使うことは、生産性の秘密の力を解放するようなものです。シンプルさと多様性の完璧な融合です。",
      author: "山田太郎",
      role: "CEO",
    },
  },
  ur: {
    title: "ہمارا پلیٹ فارم اعداد میں",
    subtitle:
      "دریافت کریں کہ صارفین کس طرح AI فائل چیٹ کے ذریعے اپنے کام کو تبدیل کر رہے ہیں۔ ہزاروں فائلیں پروسیس ہوئیں، درست جوابات، اور کثیر لسانی سپورٹ — ٹیموں کو دنیا بھر میں فوراً علم فراہم کرتا ہے۔",
    stats: [
      { value: "+10k", label: "پروسیس شدہ فائلیں" },
      { value: "95%", label: "جواب کی درستگی" },
      { value: "12", label: "مدد یافتہ زبانیں" },
    ],
    testimonial: {
      quote:
        "اس پلیٹ فارم کا استعمال ایسا ہے جیسے آپ نے پیداواریت کی ایک خفیہ طاقت کو کھول لیا ہو۔ یہ سادگی اور لچک کا بہترین امتزاج ہے۔",
      author: "جان ڈو",
      role: "سی ای او",
    },
  },
  pt: {
    title: "Nossa plataforma em números",
    subtitle:
      "Descubra como os usuários estão transformando seu trabalho com o chat de arquivos com IA. Milhares de arquivos processados, alta precisão de resposta e suporte multilíngue — ajudando equipes em todo o mundo a desbloquear conhecimento instantaneamente.",
    stats: [
      { value: "+10k", label: "Arquivos processados" },
      { value: "95%", label: "Precisão das respostas" },
      { value: "12", label: "Idiomas suportados" },
    ],
    testimonial: {
      quote:
        "Usar esta plataforma tem sido como desbloquear um superpoder secreto de produtividade. Combinação perfeita de simplicidade e versatilidade.",
      author: "João Silva",
      role: "CEO",
    },
  },
  ru: {
    title: "Наша платформа в цифрах",
    subtitle:
      "Узнайте, как пользователи меняют свою работу с помощью чата с файлами на базе ИИ. Тысячи обработанных файлов, высокая точность ответов и поддержка множества языков — помогают командам по всему миру мгновенно получать знания.",
    stats: [
      { value: "+10k", label: "Обработанные файлы" },
      { value: "95%", label: "Точность ответов" },
      { value: "12", label: "Поддерживаемые языки" },
    ],
    testimonial: {
      quote:
        "Использование этой платформы похоже на открытие секретной суперсилы продуктивности. Идеальное сочетание простоты и универсальности.",
      author: "Иван Иванов",
      role: "Генеральный директор",
    },
  },
  ko: {
    title: "숫자로 보는 플랫폼",
    subtitle:
      "사용자들이 AI 기반 파일 채팅으로 업무를 어떻게 혁신하고 있는지 확인하세요. 수천 개의 파일 처리, 높은 응답 정확도, 다국어 지원 — 전 세계 팀이 즉시 지식을 활용할 수 있습니다.",
    stats: [
      { value: "+10k", label: "처리된 파일" },
      { value: "95%", label: "응답 정확도" },
      { value: "12", label: "지원 언어" },
    ],
    testimonial: {
      quote:
        "이 플랫폼을 사용하는 것은 숨겨진 생산성 초능력을 여는 것과 같습니다. 단순함과 다양성의 완벽한 결합입니다.",
      author: "김철수",
      role: "CEO",
    },
  },
}
