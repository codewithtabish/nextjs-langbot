import { LocaleType } from "@/constants/languages"

type HelpSection = {
  heading: string
  content: string
}

type HelpLocale = {
  title: string
  intro: string
  sections: HelpSection[]
  chatPrompt: string
  errorNetwork: string
}

export const helpContent: Record<LocaleType, HelpLocale> = {
  en: {
    title: "Help & Support",
    intro: `Welcome to the Help Center for Chat with Your Files!  
Our mission is to make your experience with AI‑powered file chat smooth, multilingual, and productive. Whether you're uploading PDFs, spreadsheets, or documents, this page helps you get started, troubleshoot issues, and connect with support.`,
    sections: [
      {
        heading: "Getting Started",
        content: `If you're new, begin with the quick start guides. You'll learn how to upload your first file, ask questions in multiple languages, and generate summaries instantly.`,
      },
      {
        heading: "Exploring Features",
        content: `Discover how to chat with files, summarize lengthy reports, translate between languages, and collaborate with team members. Our platform is designed to handle PDFs, Word, Excel, and more.`,
      },
      {
        heading: "Troubleshooting",
        content: `Common issues include login errors, file upload limits, or language rendering. If summaries look incomplete, try re‑uploading or splitting a larger file.`,
      },
      {
        heading: "How to Get Support",
        content: `Use the AI assistant for instant guidance, email us at support@yourapp.com for account issues, or join the community forum for tips and collaboration.`,
      },
      {
        heading: "Best Practices",
        content: `Keep files under the recommended size, use clear formatting, and take advantage of our multilingual input to ask questions the way you naturally think.`,
      },
      {
        heading: "Security & Privacy",
        content: `Your trust matters. All files are processed securely with encryption, and we automatically delete temporary data for free users. Subscribers may opt for secure encrypted storage.`,
      },
      {
        heading: "Feedback & Roadmap",
        content: `We’re growing fast — share feedback, request new features, or suggest improvements. The roadmap is public and shaped by our users.`,
      },
    ],
    chatPrompt: "Need instant help? Click the chat icon below to talk to the AI assistant!",
    errorNetwork: "Network or server error. Please try again.",
  },

  ar: {
    title: "المساعدة والدعم",
    intro: `مرحبًا بك في مركز المساعدة الخاص بـ "الدردشة مع ملفاتك"!  
مهمتنا هي جعل تجربتك مع الدردشة بالملفات بالذكاء الاصطناعي سلسة ومتعددة اللغات ومنتجة.`,
    sections: [
      { heading: "البدء", content: "تعلم كيفية رفع ملفك الأول وطرح الأسئلة والحصول على الملخصات فورًا." },
      { heading: "استكشاف الميزات", content: "اكتشف كيفية تلخيص التقارير الطويلة، الترجمة بين اللغات، والتعاون مع الآخرين." },
      { heading: "استكشاف الأخطاء", content: "تشمل المشكلات الشائعة أخطاء تسجيل الدخول أو حدود تحميل الملفات." },
      { heading: "كيفية الحصول على الدعم", content: "استخدم مساعد الذكاء الاصطناعي، أو راسلنا عبر support@yourapp.com، أو انضم إلى منتدى المجتمع." },
      { heading: "أفضل الممارسات", content: "حافظ على الملفات ضمن الحجم الموصى به واستخدم تنسيقات واضحة." },
      { heading: "الأمان والخصوصية", content: "جميع الملفات تتم معالجتها بأمان عبر التشفير ويتم حذفها للمستخدمين المجانيين." },
      { heading: "الملاحظات وخارطة الطريق", content: "شارك ملاحظاتك واقتراحاتك وشاهد خارطة الطريق العامة." },
    ],
    chatPrompt: "تحتاج إلى مساعدة فورية؟ انقر على أيقونة الدردشة للتحدث مع المساعد!",
    errorNetwork: "خطأ في الشبكة أو الخادم. حاول مرة أخرى.",
  },

  zh: {
    title: "帮助与支持",
    intro: `欢迎来到“文件聊天”帮助中心！  
我们的使命是让您的 AI 文件体验更加顺畅、高效并支持多语言。`,
    sections: [
      { heading: "入门指南", content: "上传第一个文件，开始用母语提问并立即生成摘要。" },
      { heading: "功能探索", content: "了解如何聊天、总结、翻译并与团队成员协作。" },
      { heading: "故障排除", content: "常见问题包括登录错误、上传限制或摘要不完整。" },
      { heading: "获取支持", content: "使用 AI 助手或通过 support@yourapp.com 联系我们。" },
      { heading: "最佳实践", content: "保持文件清晰格式并在推荐大小范围内。" },
      { heading: "安全与隐私", content: "所有文件经过加密处理，临时存储会自动删除。" },
      { heading: "反馈与路线图", content: "提交反馈并查看公开路线图。" },
    ],
    chatPrompt: "需要帮助？点击下方聊天图标与 AI 助手交流！",
    errorNetwork: "网络或服务器错误，请重试。",
  },

  fr: {
    title: "Aide et Support",
    intro: `Bienvenue dans le centre d’aide de “Chat avec vos fichiers” !  
Notre mission est de rendre votre expérience fluide, multilingue et productive.`,
    sections: [
      { heading: "Bien démarrer", content: "Apprenez à télécharger votre premier fichier et poser des questions immédiatement." },
      { heading: "Découvrir les fonctionnalités", content: "Discutez avec des fichiers, résumez, traduisez et collaborez." },
      { heading: "Dépannage", content: "Problèmes courants : erreurs de connexion, limites de taille, résultats incomplets." },
      { heading: "Obtenir du support", content: "Utilisez l’assistant IA ou contactez-nous à support@yourapp.com." },
      { heading: "Bonnes pratiques", content: "Gardez vos fichiers propres et conformes aux tailles conseillées." },
      { heading: "Sécurité et confidentialité", content: "Tous les fichiers sont cryptés et supprimés automatiquement si nécessaire." },
      { heading: "Feedback et feuille de route", content: "Donnez votre avis et suivez notre feuille de route publique." },
    ],
    chatPrompt: "Besoin d’aide immédiate ? Cliquez sur l’icône de chat !",
    errorNetwork: "Erreur réseau ou serveur. Réessayez.",
  },

  de: {
    title: "Hilfe & Support",
    intro: `Willkommen im Hilfezentrum von “Chat mit Ihren Dateien”!  
Unsere Mission: Dateien per KI einfach, mehrsprachig und produktiv nutzbar machen.`,
    sections: [
      { heading: "Erste Schritte", content: "Laden Sie Ihre erste Datei hoch und stellen Sie Fragen in Ihrer Sprache." },
      { heading: "Funktionen entdecken", content: "Zusammenfassen, übersetzen und im Team arbeiten." },
      { heading: "Fehlerbehebung", content: "Typische Fehler: Login, Dateigröße, unvollständige Ergebnisse." },
      { heading: "Support erhalten", content: "Nutzen Sie den KI‑Assistenten oder schreiben Sie an support@yourapp.com." },
      { heading: "Best Practices", content: "Achten Sie auf saubere Dateien und Größenlimits." },
      { heading: "Datensicherheit", content: "Alle Dateien verschlüsselt; temporäre Daten werden gelöscht." },
      { heading: "Feedback & Roadmap", content: "Teilen Sie Ideen und sehen Sie unsere öffentliche Roadmap." },
    ],
    chatPrompt: "Brauchen Sie sofort Hilfe? Klicken Sie unten auf den Chat!",
    errorNetwork: "Netzwerk- oder Serverfehler. Bitte erneut versuchen.",
  },

  es: {
    title: "Ayuda y Soporte",
    intro: `Bienvenido al Centro de Ayuda de “Chat con tus Archivos”!  
Nuestra misión es que tu experiencia sea productiva y multilingüe.`,
    sections: [
      { heading: "Primeros pasos", content: "Sube un archivo, haz preguntas en tu idioma y recibe resúmenes instantáneos." },
      { heading: "Explora funciones", content: "Chatea con PDFs, traduce y colabora en equipo." },
      { heading: "Resolución de problemas", content: "Errores comunes incluyen inicio de sesión, límites de tamaño y resúmenes incompletos." },
      { heading: "Cómo obtener soporte", content: "Usa el asistente IA o escríbenos a support@yourapp.com." },
      { heading: "Buenas prácticas", content: "Mantén archivos limpios y dentro de los límites recomendados." },
      { heading: "Seguridad", content: "Todos los archivos son cifrados y eliminados temporalmente si corresponde." },
      { heading: "Comentarios", content: "Envía sugerencias y revisa la hoja de ruta pública." },
    ],
    chatPrompt: "¿Necesitas ayuda inmediata? Haz clic en el icono de chat.",
    errorNetwork: "Error de red o servidor. Intenta otra vez.",
  },

  hi: {
    title: "सहायता और समर्थन",
    intro: `“Chat with Your Files” हेल्प सेंटर में आपका स्वागत है!  
हमारा लक्ष्य है कि आप फाइल‑AI सुविधा को सहज और उपयोगी अनुभव करें।`,
    sections: [
      { heading: "शुरुआत", content: "अपनी पहली फ़ाइल अपलोड करें और तुरंत उत्तर व सारांश पाएं।" },
      { heading: "फ़ीचर खोजें", content: "फ़ाइलों से बात करें, अनुवाद करें और टीमवर्क करें।" },
      { heading: "समस्या निवारण", content: "सामान्य समस्याएँ: लॉगिन, अपलोड सीमा, अधूरा सारांश।" },
      { heading: "सहायता प्राप्त करें", content: "एआई असिस्टेंट का उपयोग करें या support@yourapp.com पर संपर्क करें।" },
      { heading: "सर्वोत्तम अभ्यास", content: "साफ़-सुथरी फ़ाइलें रखें और अनुशंसित आकार सीमा में रहें।" },
      { heading: "सुरक्षा और गोपनीयता", content: "सभी फ़ाइलें एन्क्रिप्ट की जाती हैं और अस्थायी डेटा हटा दिया जाता है।" },
      { heading: "फ़ीडबैक व रोडमैप", content: "नई सुविधाओं के लिए अपनी राय साझा करें।" },
    ],
    chatPrompt: "तुरंत मदद चाहिए? चैट आइकन पर क्लिक करें।",
    errorNetwork: "नेटवर्क या सर्वर त्रुटि। बाद में पुनः प्रयास करें।",
  },

  pt: {
    title: "Ajuda & Suporte",
    intro: `Bem-vindo ao centro de ajuda de “Chat with Your Files”!  
Nosso objetivo é tornar sua experiência com IA de arquivos simples e produtiva.`,
    sections: [
      { heading: "Primeiros passos", content: "Envie seu primeiro arquivo e faça perguntas em vários idiomas." },
      { heading: "Explorando recursos", content: "Converse com arquivos, faça resumos e traduções." },
      { heading: "Solução de problemas", content: "Questões comuns: login, limite de tamanho e resumos incompletos." },
      { heading: "Como obter suporte", content: "Use o assistente IA ou envie email para support@yourapp.com." },
      { heading: "Boas práticas", content: "Mantenha arquivos organizados e dentro do limite de tamanho." },
      { heading: "Segurança", content: "Arquivos são criptografados e temporários são excluídos." },
      { heading: "Feedback", content: "Compartilhe ideias e veja nosso roadmap público." },
    ],
    chatPrompt: "Precisa de ajuda? Clique no ícone de chat abaixo.",
    errorNetwork: "Erro de rede ou servidor. Tente novamente.",
  },

  ru: {
    title: "Помощь и поддержка",
    intro: `Добро пожаловать в центр поддержки “Чат с файлами”!  
Мы стремимся сделать ваш опыт удобным, многоязычным и безопасным.`,
    sections: [
      { heading: "Начало работы", content: "Загрузите файл, задайте вопросы и получите быстрые ответы." },
      { heading: "Функции", content: "Общение с файлами, резюме, переводы и совместная работа." },
      { heading: "Решение проблем", content: "Типичные ошибки: вход, лимиты загрузки, неполные ответы." },
      { heading: "Поддержка", content: "Используйте AI‑ассистента или напишите на support@yourapp.com." },
      { heading: "Практика", content: "Следите за чистотой файлов и ограничениями размера." },
      { heading: "Безопасность", content: "Все файлы зашифрованы, временные версии удаляются." },
      { heading: "Отзывы", content: "Оставьте отзыв или посмотрите дорожную карту." },
    ],
    chatPrompt: "Нужна мгновенная помощь? Нажмите на чат.",
    errorNetwork: "Ошибка сети или сервера. Попробуйте позже.",
  },

  ko: {
    title: "도움말 및 지원",
    intro: `“파일과 대화하기” 도움말 센터에 오신 것을 환영합니다!  
여러분의 경험을 쉽고 다국어로 지원받을 수 있도록 돕습니다.`,
    sections: [
      { heading: "시작하기", content: "첫 파일을 업로드하고 원하는 언어로 질문하세요." },
      { heading: "기능 살펴보기", content: "파일 요약, 번역, 팀 협업을 경험하세요." },
      { heading: "문제 해결", content: "자주 발생하는 문제: 로그인 오류, 업로드 제한." },
      { heading: "지원 받기", content: "AI 어시스턴트 사용 또는 support@yourapp.com 문의." },
      { heading: "모범 사례", content: "명확한 형식을 유지하고 권장 크기 내에서 파일 사용." },
      { heading: "보안과 개인정보", content: "모든 파일은 암호화되어 처리되고 자동 삭제됩니다." },
      { heading: "피드백과 로드맵", content: "피드백과 요청을 보내주시고 로드맵을 확인하세요." },
    ],
    chatPrompt: "즉시 도움이 필요하세요? 채팅 아이콘을 클릭!",
    errorNetwork: "네트워크/서버 오류. 다시 시도하세요.",
  },
  ur: {
  title: "مدد اور معاونت",
  intro: `“Chat with Your Files” کے مدد مرکز میں خوش آمدید!  
ہمارا مقصد یہ ہے کہ آپ کا فائلوں کے ساتھ AI کے ذریعے تجربہ آسان، کثیر لسانی اور مؤثر ہو۔`,
  sections: [
    { heading: "ابتدائی رہنمائی", content: "پہلی فائل اپلوڈ کریں، اپنی زبان میں سوال پوچھیں اور فوری خلاصہ حاصل کریں۔" },
    { heading: "خصوصیات کی کھوج", content: "جانیے کہ فائلوں کے ساتھ چیٹ کیسے کریں، رپورٹس کا خلاصہ بنائیں، ترجمہ کریں اور ٹیم کے ساتھ تعاون کریں۔" },
    { heading: "مسائل کا حل", content: "عام مسائل میں لاگ اِن کی غلطیاں، اپلوڈ کی حد اور نامکمل خلاصے شامل ہیں۔" },
    { heading: "مدد کیسے حاصل کریں", content: "فوری رہنمائی کے لیے AI اسسٹنٹ استعمال کریں، support@yourapp.com پر ای میل کریں یا کمیونٹی فورم جوائن کریں۔" },
    { heading: "بہترین طریقے", content: "فائلوں کو تجویز کردہ سائز کے اندر رکھیں اور واضح فارمیٹنگ استعمال کریں۔" },
    { heading: "سیکیورٹی اور پرائیویسی", content: "تمام فائلیں انکرپشن کے ساتھ محفوظ کی جاتی ہیں اور عارضی ڈیٹا خودکار طریقے سے حذف کر دیا جاتا ہے۔" },
    { heading: "فیڈبیک اور روڈمیپ", content: "اپنی رائے دیں، نئی خصوصیات کی درخواست کریں اور عوامی روڈمیپ دیکھیں۔" },
  ],
  chatPrompt: "فوری مدد چاہیے؟ نیچے چیٹ آئیکون پر کلک کریں اور AI اسسٹنٹ سے بات کریں!",
  errorNetwork: "نیٹ ورک یا سرور کی خرابی۔ دوبارہ کوشش کریں۔",
},

}
