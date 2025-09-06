import { LocaleType } from "../languages"

type HeroContent = {
  title: string
  subtitle: string
  inputPlaceholder: string
  buttonText: string
}

export const heroContent: Record<LocaleType, HeroContent> = {
  en: {
    title: "Chat with your files, in any language",
    subtitle:
      "Upload PDFs, spreadsheets, or documents and instantly turn them into knowledge. Ask questions, get clear answers, and generate summaries — now with support for multiple languages so you can work the way you think.",
    inputPlaceholder: "Enter your email address",
    buttonText: "Get Started",
  },
  zh: {
    title: "与您的文件对话，支持多语言",
    subtitle:
      "上传 PDF、表格或文档，立即将其转化为知识。提出问题，获得清晰答案，并生成总结 —— 支持多种语言，让您用熟悉的方式工作。",
    inputPlaceholder: "请输入您的邮箱地址",
    buttonText: "开始使用",
  },
  hi: {
    title: "अपनी फ़ाइलों से प्रश्न पूछें, किसी भी भाषा में",
    subtitle:
      "PDF, स्प्रेडशीट या दस्तावेज़ अपलोड करें और तुरंत ज्ञान में बदलें। प्रश्न पूछें, स्पष्ट उत्तर पाएं और सारांश तैयार करें — अब कई भाषाओं के समर्थन के साथ।",
    inputPlaceholder: "अपना ईमेल पता दर्ज करें",
    buttonText: "शुरू करें",
  },
  es: {
    title: "Chatea con tus archivos en cualquier idioma",
    subtitle:
      "Sube archivos PDF, hojas de cálculo o documentos y conviértelos al instante en conocimiento. Haz preguntas, recibe respuestas claras y genera resúmenes, con soporte para varios idiomas.",
    inputPlaceholder: "Introduce tu correo electrónico",
    buttonText: "Comenzar",
  },
  ar: {
    title: "تحدث مع ملفاتك بأي لغة",
    subtitle:
      "قم برفع ملفات PDF أو الجداول أو المستندات وحوّلها مباشرةً إلى معرفة. اطرح أسئلة، واحصل على إجابات واضحة، وولّد ملخصات — كل ذلك مع دعم للغات متعددة.",
    inputPlaceholder: "أدخل بريدك الإلكتروني",
    buttonText: "البدء",
  },
  fr: {
    title: "Discutez avec vos fichiers, dans n'importe quelle langue",
    subtitle:
      "Téléchargez des PDF, des tableurs ou des documents pour les transformer immédiatement en connaissance. Posez des questions, obtenez des réponses claires et générez des résumés — avec un support multilingue.",
    inputPlaceholder: "Entrez votre adresse e-mail",
    buttonText: "Commencer",
  },
  de: {
    title: "Chatten Sie mit Ihren Dateien in jeder Sprache",
    subtitle:
      "Laden Sie PDFs, Tabellen oder Dokumente hoch und verwandeln Sie sie sofort in Wissen. Stellen Sie Fragen, erhalten Sie klare Antworten und erstellen Sie Zusammenfassungen — jetzt mit Unterstützung mehrerer Sprachen.",
    inputPlaceholder: "E-Mail-Adresse eingeben",
    buttonText: "Loslegen",
  },
  ja: {
    title: "どの言語でもファイルと対話できます",
    subtitle:
      "PDF、スプレッドシート、ドキュメントをアップロードして瞬時に知識に変換。質問をして明確な答えを得たり、要約を生成したりできます。多言語サポートで、考える言葉で作業できます。",
    inputPlaceholder: "メールアドレスを入力",
    buttonText: "始める",
  },
  ur: {
    title: "اپنی فائلوں سے سوال کریں، کسی بھی زبان میں",
    subtitle:
      "پی ڈی ایف، اسپریڈشیٹ یا دستاویزات اپ لوڈ کریں اور فوراً ان کو علم میں بدلیں۔ سوالات پوچھیں، واضح جواب حاصل کریں اور خلاصے تیار کریں — اب متعدد زبانوں کی مدد کے ساتھ۔",
    inputPlaceholder: "اپنا ای میل پتہ درج کریں",
    buttonText: "شروع کریں",
  },
  pt: {
    title: "Converse com seus arquivos em qualquer idioma",
    subtitle:
      "Envie PDFs, planilhas ou documentos e transforme-os instantaneamente em conhecimento. Faça perguntas, receba respostas claras e gere resumos — agora com suporte multilíngue.",
    inputPlaceholder: "Digite seu endereço de e-mail",
    buttonText: "Começar",
  },
  ru: {
    title: "Общайтесь с вашими файлами на любом языке",
    subtitle:
      "Загружайте PDF, таблицы или документы и мгновенно превращайте их в знания. Задавайте вопросы, получайте понятные ответы и создавайте резюме — с поддержкой многих языков.",
    inputPlaceholder: "Введите ваш e-mail",
    buttonText: "Начать",
  },
  ko: {
    title: "모든 언어로 파일과 대화하세요",
    subtitle:
      "PDF, 스프레드시트 또는 문서를 업로드하여 즉시 지식으로 변환하세요. 질문을 하고 명확한 답변을 얻으며 요약본을 생성할 수 있습니다 — 여러 언어를 지원합니다.",
    inputPlaceholder: "이메일 주소를 입력하세요",
    buttonText: "시작하기",
  },
}
