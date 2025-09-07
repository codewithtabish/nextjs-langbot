import { LocaleType } from "@/constants/languages"

type HowItWorksStep = {
  title: string
  subtitle: string
}

type HowItWorksContent = {
  sectionTitle: string
  sectionSubtitle: string
  steps: HowItWorksStep[]
}

export const howItWorksContent: Record<LocaleType, HowItWorksContent> = {
  en: {
    sectionTitle: "How It Works",
    sectionSubtitle:
      "A simple three-step process to transform any file into instant knowledge with AI.",
    steps: [
      {
        title: "Upload Your File",
        subtitle:
          "Drag and drop PDFs, spreadsheets, or documents into the platform and prepare them for AI-powered chat.",
      },
      {
        title: "AI Processes Instantly",
        subtitle:
          "Our pipeline indexes and understands your file instantly, ready to answer your questions with accuracy.",
      },
      {
        title: "Chat & Summarize",
        subtitle:
          "Ask questions in any of the supported languages, get precise answers, and generate clear summaries.",
      },
    ],
  },
  zh: {
    sectionTitle: "工作原理",
    sectionSubtitle: "通过简单的三步流程，将任何文件转化为即时知识。",
    steps: [
      { title: "上传文件", subtitle: "拖放 PDF、电子表格或文档，平台会准备好用于 AI 对话。" },
      { title: "AI 即时处理", subtitle: "我们的管道会即时索引并理解您的文件，随时为您提供精准答案。" },
      { title: "聊天与总结", subtitle: "用支持的语言提问，获取精准答案，并立即生成清晰的摘要。" },
    ],
  },
  hi: {
    sectionTitle: "यह कैसे काम करता है",
    sectionSubtitle: "एक सरल तीन-चरणीय प्रक्रिया जो किसी भी फ़ाइल को तुरंत ज्ञान में बदल देती है।",
    steps: [
      { title: "अपनी फ़ाइल अपलोड करें", subtitle: "PDF, स्प्रेडशीट या दस्तावेज़ खींचें और छोड़ें, और प्लेटफ़ॉर्म इसे AI चैट के लिए तैयार कर देगा।" },
      { title: "AI तुरंत प्रोसेस करता है", subtitle: "हमारा सिस्टम फ़ाइल को तुरंत इंडेक्स और समझ लेता है ताकि आपको सही उत्तर मिल सके।" },
      { title: "चैट करें और सारांश पाएं", subtitle: "समर्थित भाषाओं में प्रश्न पूछें, सही उत्तर पाएं और तुरंत सारांश बनाएं।" },
    ],
  },
  es: {
    sectionTitle: "Cómo funciona",
    sectionSubtitle: "Un proceso simple de tres pasos para transformar cualquier archivo en conocimiento instantáneo.",
    steps: [
      { title: "Sube tu archivo", subtitle: "Arrastra y suelta PDFs, hojas de cálculo o documentos en la plataforma para prepararlos para el chat con IA." },
      { title: "IA lo procesa al instante", subtitle: "Nuestro sistema indexa y entiende tu archivo al instante, listo para responder con precisión." },
      { title: "Chatea y resume", subtitle: "Haz preguntas en cualquiera de los idiomas admitidos, recibe respuestas claras y genera resúmenes en segundos." },
    ],
  },
  ar: {
    sectionTitle: "كيف يعمل",
    sectionSubtitle: "عملية بسيطة من ثلاث خطوات لتحويل أي ملف إلى معرفة فورية.",
    steps: [
      { title: "قم برفع ملفك", subtitle: "اسحب وأفلت ملفات PDF أو جداول البيانات أو المستندات في المنصة لتصبح جاهزة للدردشة المدعومة بالذكاء الاصطناعي." },
      { title: "المعالجة الفورية بالذكاء الاصطناعي", subtitle: "يُفهرس نظامنا ملفك ويفهمه فوراً ليقدم لك إجابات دقيقة." },
      { title: "الدردشة والتلخيص", subtitle: "اطرح الأسئلة بأي من اللغات المدعومة، واحصل على إجابات دقيقة، وملخصات واضحة فوراً." },
    ],
  },
  fr: {
    sectionTitle: "Comment ça marche",
    sectionSubtitle: "Un processus simple en trois étapes pour transformer n'importe quel fichier en connaissance instantanée.",
    steps: [
      { title: "Téléchargez votre fichier", subtitle: "Glissez-déposez des PDF, feuilles de calcul ou documents sur la plateforme pour les préparer au chat IA." },
      { title: "Traitement instantané par l'IA", subtitle: "Notre pipeline indexe et comprend immédiatement votre fichier pour répondre avec précision." },
      { title: "Discutez et résumez", subtitle: "Posez des questions dans n'importe quelle langue supportée, obtenez des réponses précises et générez des résumés clairs." },
    ],
  },
  de: {
    sectionTitle: "So funktioniert es",
    sectionSubtitle: "Ein einfacher Drei-Schritte-Prozess, um jede Datei in sofortiges Wissen zu verwandeln.",
    steps: [
      { title: "Laden Sie Ihre Datei hoch", subtitle: "Ziehen Sie PDFs, Tabellen oder Dokumente in die Plattform, um sie für AI-Chat vorzubereiten." },
      { title: "KI verarbeitet sofort", subtitle: "Unsere Pipeline indexiert und versteht Ihre Datei sofort, bereit für präzise Antworten." },
      { title: "Chat & Zusammenfassung", subtitle: "Stellen Sie Fragen in einer der unterstützten Sprachen, erhalten Sie präzise Antworten und generieren Sie sofort Zusammenfassungen." },
    ],
  },
  ja: {
    sectionTitle: "使い方",
    sectionSubtitle: "3つのシンプルなステップで、あらゆるファイルをすぐに知識に変換できます。",
    steps: [
      { title: "ファイルをアップロード", subtitle: "PDF、スプレッドシート、ドキュメントをドラッグ＆ドロップして、AIチャット用に準備します。" },
      { title: "AIが即座に処理", subtitle: "当社のシステムがファイルを即座にインデックス化し、正確な回答を提供します。" },
      { title: "チャットと要約", subtitle: "対応言語で質問し、正確な回答を得て、すぐに要約を生成します。" },
    ],
  },
  ur: {
    sectionTitle: "یہ کیسے کام کرتا ہے",
    sectionSubtitle: "ایک سادہ تین مرحلہ وار عمل جو کسی بھی فائل کو فوری علم میں بدل دیتا ہے۔",
    steps: [
      { title: "اپنی فائل اپلوڈ کریں", subtitle: "PDF، اسپریڈشیٹ یا دستاویزات کو پلیٹ فارم پر ڈریگ اور ڈراپ کریں تاکہ AI چیٹ کے لئے تیار ہو سکیں۔" },
      { title: "AI فوری پروسیسنگ کرتا ہے", subtitle: "ہمارا نظام فائل کو فوراً سمجھ کر درست جواب دینے کے لئے تیار ہو جاتا ہے۔" },
      { title: "چیٹ کریں اور خلاصہ حاصل کریں", subtitle: "کسی بھی معاون زبان میں سوال کریں، درست جواب پائیں اور فوری طور پر خلاصہ تیار کریں۔" },
    ],
  },
  pt: {
    sectionTitle: "Como funciona",
    sectionSubtitle: "Um processo simples de três etapas para transformar qualquer arquivo em conhecimento instantâneo.",
    steps: [
      { title: "Envie seu arquivo", subtitle: "Arraste e solte PDFs, planilhas ou documentos na plataforma e prepare-os para o chat de IA." },
      { title: "IA processa instantaneamente", subtitle: "Nosso sistema indexa e entende seu arquivo imediatamente, pronto para responder com precisão." },
      { title: "Converse e resuma", subtitle: "Faça perguntas em qualquer idioma suportado, receba respostas precisas e gere resumos claros." },
    ],
  },
  ru: {
    sectionTitle: "Как это работает",
    sectionSubtitle: "Простой трёхшаговый процесс, превращающий любой файл в мгновенные знания.",
    steps: [
      { title: "Загрузите файл", subtitle: "Перетащите PDF, таблицы или документы в платформу, чтобы подготовить их к AI-чатам." },
      { title: "ИИ обрабатывает мгновенно", subtitle: "Наша система индексирует и понимает ваш файл мгновенно, готова дать точные ответы." },
      { title: "Общайтесь и получайте резюме", subtitle: "Задавайте вопросы на любом поддерживаемом языке, получайте точные ответы и мгновенные резюме." },
    ],
  },
  ko: {
    sectionTitle: "작동 방식",
    sectionSubtitle: "간단한 3단계 프로세스로 어떤 파일이든 즉시 지식으로 변환합니다.",
    steps: [
      { title: "파일 업로드", subtitle: "PDF, 스프레드시트 또는 문서를 플랫폼에 드래그 앤 드롭하여 AI 채팅을 위한 준비를 합니다." },
      { title: "AI 즉시 처리", subtitle: "시스템이 파일을 즉시 인덱싱하고 이해하여 정확한 답변을 제공합니다." },
      { title: "대화 및 요약", subtitle: "지원되는 언어로 질문하고, 정확한 답변을 받으며 즉시 요약을 생성하세요." },
    ],
  },
}
