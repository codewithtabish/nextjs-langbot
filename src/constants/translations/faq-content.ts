import { LocaleType } from "@/constants/languages"

type FAQItem = {
  question: string
  answer: string
}

type FAQContent = {
  title: string
  subtitle: string
  faqs: FAQItem[]
}

export const faqContent: Record<LocaleType, FAQContent> = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about Chat with Files.",
    faqs: [
      {
        question: "What types of files can I upload?",
        answer:
          "You can upload PDFs, Word documents, Excel spreadsheets, and many other formats. Our system extracts text from most major file types so you can chat and summarize with ease.",
      },
      {
        question: "Does it support multiple languages?",
        answer:
          "Yes! You can chat with your files in over a dozen languages including English, Spanish, French, Arabic, Hindi, and more. Ask questions in your own language and get answers instantly.",
      },
      {
        question: "How does summarization work?",
        answer:
          "Our AI reads your files, understands the content, and generates clear summaries. This helps you save time by quickly grasping the most important points without reading the entire document.",
      },
      {
        question: "Do I need a subscription?",
        answer:
          "You can start for free with limited usage. To unlock larger uploads, advanced features, and unlimited queries, you can subscribe to our paid plan.",
      },
      {
        question: "How secure is my data?",
        answer:
          "Your files are processed securely and never shared with third parties. Our goal is to ensure your privacy while giving you powerful AI-driven insights.",
      },
    ],
  },

  zh: {
    title: "常见问题",
    subtitle: "关于智能文件聊天的常见问题。",
    faqs: [
      { question: "我可以上传哪些文件类型？", answer: "您可以上传 PDF、Word 文档、Excel 表格和许多其他格式。系统会从主流文件中提取文本，让您轻松进行对话和摘要。" },
      { question: "是否支持多种语言？", answer: "是的！您可以用英语、西班牙语、法语、阿拉伯语、印地语等十多种语言与文件交流，用自己的语言提问并立即获得答案。" },
      { question: "总结功能如何工作？", answer: "我们的 AI 会阅读文件，理解内容，并生成简洁摘要，让您快速掌握重点而无需通读全文。" },
      { question: "我需要订阅吗？", answer: "您可以免费开始，享有限使用。若要解锁更大的上传、更强功能和无限查询，您可以订阅付费方案。" },
      { question: "我的数据安全吗？", answer: "您的文件会被安全处理，绝不会共享给第三方。我们致力于在保护隐私的同时为您提供强大的 AI 洞见。" },
    ],
  },

  hi: {
    title: "अक्सर पूछे जाने वाले प्रश्न",
    subtitle: "फाइल चैट प्लेटफ़ॉर्म से जुड़े सामान्य प्रश्न।",
    faqs: [
      { question: "मैं कौन से फ़ाइल प्रकार अपलोड कर सकता हूँ?", answer: "आप PDF, Word, Excel और अन्य प्रमुख प्रारूप अपलोड कर सकते हैं। हमारा सिस्टम उनसे टेक्स्ट निकालकर आपको चैट करने और सारांश बनाने देता है।" },
      { question: "क्या यह कई भाषाओं में काम करता है?", answer: "हाँ! आप अंग्रेज़ी, स्पैनिश, फ़्रेंच, अरबी, हिंदी और कई भाषाओं में फ़ाइल से चैट कर सकते हैं। अपनी भाषा में सवाल पूछें और तुरंत जवाब प्राप्त करें।" },
      { question: "सारांश कैसे तैयार होता है?", answer: "AI आपकी फ़ाइल पढ़कर समझता है और मुख्य बिंदुओं का संक्षिप्त सारांश देता है जिससे समय बचता है।" },
      { question: "क्या मुझे सदस्यता लेनी होगी?", answer: "शुरुआत मुफ्त में करें, लेकिन अधिक अपलोड और असीमित सवाल-जवाब के लिए पेड प्लान लें।" },
      { question: "क्या मेरा डेटा सुरक्षित है?", answer: "हाँ, आपकी फ़ाइलें सुरक्षित रूप से संसाधित होती हैं और कभी भी साझा नहीं की जातीं।" },
    ],
  },

  es: {
    title: "Preguntas frecuentes",
    subtitle: "Todo lo que necesitas saber sobre Chat con tus archivos.",
    faqs: [
      { question: "¿Qué tipos de archivos puedo subir?", answer: "Puedes subir PDF, documentos de Word, hojas de Excel y más. El sistema extrae texto de la mayoría de los formatos principales." },
      { question: "¿Admite varios idiomas?", answer: "Sí, puedes chatear en más de 10 idiomas como inglés, español, francés, árabe o hindi. Pregunta en tu idioma y recibe respuestas al instante." },
      { question: "¿Cómo funciona el resumen?", answer: "Nuestra IA lee tus archivos, comprende el contenido y crea resúmenes claros para ahorrar tiempo." },
      { question: "¿Necesito suscripción?", answer: "Puedes empezar gratis, pero para subir más archivos y funciones avanzadas deberás suscribirte." },
      { question: "¿Es seguro mi archivo?", answer: "Tus documentos se procesan de forma segura y nunca se comparten con terceros." },
    ],
  },

  ar: {
    title: "الأسئلة الشائعة",
    subtitle: "كل ما تحتاج معرفته عن الدردشة مع ملفاتك.",
    faqs: [
      { question: "ما أنواع الملفات التي يمكنني رفعها؟", answer: "يمكنك رفع PDF وWord وExcel والعديد من الصيغ الأخرى. النظام يستخرج النصوص ليمكنك من المحادثة والتلخيص بسهولة." },
      { question: "هل يدعم لغات متعددة؟", answer: "نعم! يمكنك الدردشة بلغات كثيرة مثل الإنجليزية والإسبانية والعربية والهندية وغيرها." },
      { question: "كيف يعمل التلخيص؟", answer: "يقوم الذكاء الاصطناعي بقراءة وفهم محتوى الملف ويولد ملخصاً واضحاً لتوفير وقتك." },
      { question: "هل أحتاج اشتراكاً؟", answer: "يمكنك البدء مجاناً، وللمزيد من المزايا ورفع الملفات الكبيرة تحتاج لاشتراك مدفوع." },
      { question: "هل بياناتي آمنة؟", answer: "يتم معالجة ملفاتك بأمان تام ولن تتم مشاركتها مع أي جهة أخرى." },
    ],
  },

  fr: {
    title: "Questions fréquentes",
    subtitle: "Tout ce qu’il faut savoir sur le chat avec vos fichiers.",
    faqs: [
      { question: "Quels fichiers puis-je importer ?", answer: "Vous pouvez importer des PDF, Word, Excel et plus. Le système extrait le texte et permet de discuter avec le contenu." },
      { question: "Prend-il en charge plusieurs langues ?", answer: "Oui ! Plus de 10 langues sont disponibles comme l’anglais, l’espagnol, le français ou l’arabe." },
      { question: "Comment fonctionne le résumé ?", answer: "L’IA lit vos documents et génère un résumé clair des points essentiels." },
      { question: "Dois-je m’abonner ?", answer: "Commencez gratuitement, puis abonnez-vous pour plus de fonctionnalités." },
      { question: "Mes données sont-elles en sécurité ?", answer: "Oui, vos fichiers sont traités en toute sécurité et jamais partagés." },
    ],
  },

  de: {
    title: "Häufige Fragen",
    subtitle: "Alles über Chat mit Dateien.",
    faqs: [
      { question: "Welche Dateitypen kann ich hochladen?", answer: "Sie können PDF, Word, Excel und andere Formate hochladen. Unser System extrahiert den Text automatisch." },
      { question: "Werden mehrere Sprachen unterstützt?", answer: "Ja, über zehn Sprachen wie Englisch, Spanisch, Arabisch, Hindi und mehr." },
      { question: "Wie funktioniert die Zusammenfassung?", answer: "Die KI liest Ihre Datei, versteht sie und erstellt eine kurze Zusammenfassung." },
      { question: "Brauche ich ein Abo?", answer: "Sie können kostenlos starten, aber für unbegrenzte Nutzung ist ein Abo erforderlich." },
      { question: "Sind meine Daten sicher?", answer: "Ihre Dateien werden sicher verarbeitet, niemals an Dritte weitergegeben." },
    ],
  },

  ja: {
    title: "よくある質問",
    subtitle: "ファイルのチャットについて知っておくべきこと。",
    faqs: [
      { question: "どの種類のファイルをアップロードできますか？", answer: "PDF、Word、Excel などほとんどの形式に対応しています。" },
      { question: "多言語に対応していますか？", answer: "はい！英語、日本語、スペイン語、アラビア語など十数言語に対応しています。" },
      { question: "要約はどう機能しますか？", answer: "AI がファイルを読み取り、重要なポイントをまとめて表示します。" },
      { question: "サブスクリプションは必要ですか？", answer: "無料プランから始められます。高度な機能には有料プランが必要です。" },
      { question: "データは安全ですか？", answer: "はい、データは安全に処理され、第三者と共有されることはありません。" },
    ],
  },

  ur: {
    title: "اکثر پوچھے گئے سوالات",
    subtitle: "اپنی فائلز کے ساتھ چیٹ کے بارے میں سب کچھ۔",
    faqs: [
      { question: "میں کون سی فائلیں اپلوڈ کرسکتا ہوں؟", answer: "آپ PDF، Word، Excel اور دیگر بڑی اقسام کی فائلیں اپلوڈ کرسکتے ہیں۔" },
      { question: "کیا یہ کئی زبانوں کی حمایت کرتا ہے؟", answer: "جی ہاں! آپ انگریزی، عربی، اردو، ہندی اور کئی زبانوں میں چیٹ کر سکتے ہیں۔" },
      { question: "خلاصہ کیسے تیار ہوتا ہے؟", answer: "ہمارا AI فائل کو پڑھتا ہے اور اہم نکات کا واضح خلاصہ بناتا ہے۔" },
      { question: "کیا مجھے سبسکرپشن لینا ضروری ہے؟", answer: "آپ مفت میں شروع کر سکتے ہیں لیکن لامحدود فیچرز کیلئے سبسکرپشن لازمی ہے۔" },
      { question: "میرا ڈیٹا کس حد تک محفوظ ہے؟", answer: "آپ کی فائلز محفوظ طور پر پروسیس ہوتی ہیں اور کسی تیسرے فریق کے ساتھ شیئر نہیں ہوتیں۔" },
    ],
  },

  pt: {
    title: "Perguntas frequentes",
    subtitle: "Tudo sobre chat com arquivos.",
    faqs: [
      { question: "Que tipos de arquivos posso enviar?", answer: "Você pode enviar PDF, Word, Excel e outros. O sistema lê e extrai o conteúdo automaticamente." },
      { question: "Funciona em vários idiomas?", answer: "Sim! São suportados mais de dez idiomas como inglês, espanhol, francês e árabe." },
      { question: "Como funciona o resumo?", answer: "Nossa IA lê os documentos e gera resumos claros dos pontos principais." },
      { question: "Preciso de uma assinatura?", answer: "Comece gratuitamente, depois assine para recursos avançados." },
      { question: "Meus dados estão seguros?", answer: "Sim, são processados de forma segura e nunca compartilhados." },
    ],
  },

  ru: {
    title: "Часто задаваемые вопросы",
    subtitle: "Все о чате с файлами.",
    faqs: [
      { question: "Какие файлы можно загружать?", answer: "PDF, Word, Excel и другие популярные форматы поддерживаются." },
      { question: "Есть ли поддержка разных языков?", answer: "Да! Более десяти языков, включая английский, испанский, арабский и хинди." },
      { question: "Как работает функция резюме?", answer: "ИИ читает файл, понимает его и создает краткое резюме." },
      { question: "Нужна ли подписка?", answer: "Можно начать бесплатно, платная подписка открывает расширенные возможности." },
      { question: "Мои данные защищены?", answer: "Файлы обрабатываются безопасно и не передаются третьим лицам." },
    ],
  },

  ko: {
    title: "자주 묻는 질문",
    subtitle: "파일 대화 서비스 관련 안내.",
    faqs: [
      { question: "어떤 파일을 업로드할 수 있나요?", answer: "PDF, Word, Excel 등 대부분의 주요 형식을 지원합니다." },
      { question: "다국어를 지원하나요?", answer: "네! 영어, 한국어, 스페인어, 아랍어 등 10개 이상의 언어를 지원합니다." },
      { question: "요약은 어떻게 작동하나요?", answer: "AI가 파일을 읽고 핵심 내용을 요약해 줍니다." },
      { question: "구독이 필요한가요?", answer: "무료로 시작할 수 있으며, 고급 기능은 유료 플랜에서 제공됩니다." },
      { question: "내 데이터는 안전한가요?", answer: "네, 데이터는 안전하게 처리되며 외부에 공유되지 않습니다." },
    ],
  },
}
