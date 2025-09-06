import { LocaleType } from "@/constants/languages"

type FeatureCardContent = {
  title: string
  description: string
}

type FeatureSectionContent = {
  title: string
  subtitle: string
  cards: FeatureCardContent[]
}

export const featuresContent: Record<LocaleType, FeatureSectionContent> = {
  en: {
    title: "Built to cover your needs",
    subtitle:
      "Everything you need to turn your files into conversations — ask questions, get summaries, and interact in the language that you feel most comfortable with.",
    cards: [
      { title: "Customizable", description: "Extensive customization options, allowing you to tailor every aspect to meet your specific needs." },
      { title: "You have full control", description: "From design elements to functionality, you have complete control to create a unique and personalized experience." },
      { title: "Powered by AI", description: "Intelligent AI assistance lets you query, summarize, and interact with documents in natural language." },
      { title: "Upload Any File", description: "Upload PDFs, spreadsheets, or text documents and quickly transform them into conversational knowledge bases." },
      { title: "Multilingual Support", description: "Ask and receive answers in multiple languages, making global collaboration and accessibility effortless." },
      { title: "Conversational Q&A", description: "Natural chat experience — continue the conversation with context‑aware memory and follow‑up questions." },
    ],
  },
  zh: {
    title: "满足您需求的功能",
    subtitle:
      "您所需的一切功能，用于将您的文件转化为对话——提出问题、获取摘要，并用您最熟悉的语言进行互动。",
    cards: [
      { title: "可自定义", description: "丰富的自定义选项，可以根据您的具体需求调整每一个方面。" },
      { title: "完全掌控", description: "从设计元素到功能，您都拥有完全的掌控权，打造独一无二的体验。" },
      { title: "AI 驱动", description: "智能 AI 助手让您可以用自然语言查询、总结和交互。" },
      { title: "上传任何文件", description: "上传 PDF、表格或文本文件，并迅速将其转化为对话知识库。" },
      { title: "多语言支持", description: "通过多语言支持，提出问题并获取答案，让全球协作更简单。" },
      { title: "对话式问答", description: "自然的聊天体验——保持上下文，轻松追问和对话。" },
    ],
  },
  hi: {
    title: "आपकी ज़रूरतों के लिए तैयार",
    subtitle:
      "फाइलों को संवाद में बदलने के लिए आपको जो भी चाहिए — सवाल पूछें, सारांश प्राप्त करें और अपनी पसंदीदा भाषा में बातचीत करें।",
    cards: [
      { title: "अनुकूलन योग्य", description: "व्यापक अनुकूलन विकल्प, जिन्हें आप अपनी विशेष ज़रूरतों के अनुसार ढाल सकते हैं।" },
      { title: "पूरा नियंत्रण", description: "डिज़ाइन से लेकर फ़ंक्शन तक, आपके पास पूरे अनुभव पर पूरा नियंत्रण है।" },
      { title: "AI द्वारा संचालित", description: "स्मार्ट AI आपकी फ़ाइलों को प्राकृतिक भाषा में समझने, सारांश बनाने और बातचीत करने योग्य बनाता है।" },
      { title: "कोई भी फ़ाइल अपलोड करें", description: "PDF, स्प्रेडशीट या दस्तावेज़ अपलोड करें और उन्हें बातचीत योग्य ज्ञान में बदलें।" },
      { title: "बहुभाषी समर्थन", description: "कई भाषाओं में सवाल पूछें और जवाब पाएं, जिससे सहयोग आसान हो जाता है।" },
      { title: "वार्तालाप आधारित Q&A", description: "प्राकृतिक चैट अनुभव — संदर्भ बनाए रखें और फ़ॉलो‑अप आसान बनाएँ।" },
    ],
  },
  es: {
    title: "Diseñado para cubrir tus necesidades",
    subtitle:
      "Todo lo que necesitas para convertir tus archivos en conversaciones: haz preguntas, obtén resúmenes e interactúa en el idioma que prefieras.",
    cards: [
      { title: "Personalizable", description: "Amplias opciones de personalización que te permiten adaptar cada aspecto a tus necesidades específicas." },
      { title: "Control total", description: "Desde los elementos de diseño hasta la funcionalidad, tienes control total para crear una experiencia única." },
      { title: "Impulsado por IA", description: "La asistencia inteligente de IA te permite consultar, resumir e interactuar con documentos en lenguaje natural." },
      { title: "Sube cualquier archivo", description: "Carga archivos PDF, hojas de cálculo o documentos de texto y conviértelos rápidamente en bases de conocimiento conversacionales." },
      { title: "Soporte multilingüe", description: "Haz preguntas y recibe respuestas en varios idiomas, facilitando la colaboración global." },
      { title: "Q&A conversacional", description: "Una experiencia de chat natural: continúa la conversación con memoria contextual y preguntas de seguimiento." },
    ],
  },
  ar: {
    title: "مصمم لتلبية احتياجاتك",
    subtitle:
      "كل ما تحتاجه لتحويل ملفاتك إلى محادثات — اطرح الأسئلة، واحصل على ملخصات، وتفاعل باللغة التي تناسبك أكثر.",
    cards: [
      { title: "قابل للتخصيص", description: "خيارات تخصيص واسعة، تسمح لك بتعديل كل جانب وفقًا لاحتياجاتك." },
      { title: "تحكم كامل", description: "من عناصر التصميم إلى الوظائف، لديك التحكم الكامل لإنشاء تجربة فريدة." },
      { title: "مدعوم بالذكاء الاصطناعي", description: "يسمح لك المساعد الذكي بالذكاء الاصطناعي بالاستعلام والتلخيص والتفاعل مع المستندات بلغة طبيعية." },
      { title: "رفع أي ملف", description: "قم برفع ملفات PDF أو جداول البيانات أو النصوص وتحويلها بسرعة إلى قاعدة معارف محادثة." },
      { title: "دعم متعدد اللغات", description: "اطرح أسئلة واحصل على إجابات بعدة لغات، مما يسهل التعاون العالمي." },
      { title: "أسئلة وأجوبة محادثية", description: "تجربة دردشة طبيعية — استمر في المحادثة مع ذاكرة سياقية وأسئلة متابعة." },
    ],
  },
  fr: {
    title: "Conçu pour répondre à vos besoins",
    subtitle:
      "Tout ce dont vous avez besoin pour transformer vos fichiers en conversations — posez des questions, obtenez des résumés et interagissez dans la langue qui vous convient.",
    cards: [
      { title: "Personnalisable", description: "De nombreuses options de personnalisation pour adapter chaque aspect à vos besoins spécifiques." },
      { title: "Contrôle total", description: "Des éléments de conception aux fonctionnalités, vous contrôlez tout pour créer une expérience unique." },
      { title: "Propulsé par l'IA", description: "L'assistance IA vous permet d'interroger, de résumer et d'interagir avec vos documents en langage naturel." },
      { title: "Téléchargez n'importe quel fichier", description: "Chargez des PDF, des feuilles de calcul ou des documents et transformez-les en bases de connaissances conversationnelles." },
      { title: "Support multilingue", description: "Posez vos questions et obtenez des réponses dans plusieurs langues pour une collaboration mondiale." },
      { title: "Q&R conversationnel", description: "Expérience de discussion naturelle — continuez la conversation avec une mémoire contextuelle et des suivis." },
    ],
  },
  de: {
    title: "Entwickelt, um Ihre Bedürfnisse zu erfüllen",
    subtitle:
      "Alles, was Sie brauchen, um Ihre Dateien in Gespräche zu verwandeln – stellen Sie Fragen, erhalten Sie Zusammenfassungen und interagieren Sie in Ihrer bevorzugten Sprache.",
    cards: [
      { title: "Anpassbar", description: "Umfangreiche Anpassungsoptionen, die es Ihnen ermöglichen, jeden Aspekt auf Ihre spezifischen Bedürfnisse zuzuschneiden." },
      { title: "Volle Kontrolle", description: "Von Designelementen bis zur Funktionalität haben Sie die volle Kontrolle für ein einzigartiges Erlebnis." },
      { title: "KI-gestützt", description: "Intelligente KI-Unterstützung ermöglicht es Ihnen, Dokumente in natürlicher Sprache abzufragen, zusammenzufassen und mit ihnen zu interagieren." },
      { title: "Beliebige Datei hochladen", description: "Laden Sie PDFs, Tabellenkalkulationen oder Textdokumente hoch und verwandeln Sie sie in konversationelle Wissensbasen." },
      { title: "Mehrsprachige Unterstützung", description: "Stellen Sie Fragen und erhalten Sie Antworten in mehreren Sprachen für eine mühelose globale Zusammenarbeit." },
      { title: "Konversationelles Q&A", description: "Natürliches Chat-Erlebnis – setzen Sie das Gespräch mit kontextbewusstem Gedächtnis und Nachfragen fort." },
    ],
  },
  ja: {
    title: "必要に応じて対応",
    subtitle:
      "ファイルを会話に変えるために必要なすべて — 質問し、要約を得て、自分に最も合った言語でやり取りできます。",
    cards: [
      { title: "カスタマイズ可能", description: "豊富なカスタマイズオプションにより、ニーズに合わせてあらゆる面を調整できます。" },
      { title: "完全なコントロール", description: "デザインから機能まで、独自の体験を作り上げる完全なコントロールがあります。" },
      { title: "AI 搭載", description: "賢い AI が自然言語でドキュメントを問い合わせ、要約し、対話できるようにします。" },
      { title: "あらゆるファイルをアップロード", description: "PDF、スプレッドシート、テキストをアップロードし、すぐに会話型ナレッジベースに変換します。" },
      { title: "多言語サポート", description: "複数の言語で質問し回答を得ることで、グローバルな協力が容易になります。" },
      { title: "会話型 Q&A", description: "自然なチャット体験 — 文脈を保持しながら会話を続け、フォローアップ質問も可能。" },
    ],
  },
  ur: {
    title: "آپ کی ضروریات کے لئے بنایا گیا",
    subtitle:
      "سب کچھ جو آپ کو اپنی فائلوں کو بات چیت میں بدلنے کے لئے چاہیے — سوال کریں، خلاصہ حاصل کریں اور اپنی پسندیدہ زبان میں انٹریکٹ کریں۔",
    cards: [
      { title: "قابل تخصیص", description: "وسیع تخصیص کے اختیارات، جو آپ کو ہر پہلو کو اپنی مخصوص ضرورت کے مطابق ڈھالنے دیتے ہیں۔" },
      { title: "مکمل کنٹرول", description: "ڈیزائن عناصر سے لے کر فعالیت تک، آپ کے پاس ایک منفرد اور ذاتی تجربہ بنانے کا مکمل کنٹرول ہے۔" },
      { title: "مصنوعی ذہانت سے چلنے والا", description: "اسمارٹ AI آپ کو فائلوں کو قدرتی زبان میں پوچھنے، خلاصہ کرنے اور بات چیت کرنے کی اجازت دیتا ہے۔" },
      { title: "کسی بھی فائل کو اپ لوڈ کریں", description: "PDF، اسپریڈشیٹ یا متن کی فائلیں اپ لوڈ کریں اور انہیں فوراً گفتگو نالج بیس میں بدل دیں۔" },
      { title: "کثیر لسانی معاونت", description: "کئی زبانوں میں سوال کریں اور جوابات حاصل کریں، تاکہ عالمی تعاون مزید آسان ہو جائے۔" },
      { title: "مکالماتی سوال جواب", description: "قدرتی چیٹ تجربہ — سیاق و سباق کے ساتھ گفتگو جاری رکھیں اور فالو اپ کریں۔" },
    ],
  },
  pt: {
    title: "Feito para cobrir suas necessidades",
    subtitle:
      "Tudo o que você precisa para transformar seus arquivos em conversas — faça perguntas, obtenha resumos e interaja no idioma com o qual se sente mais confortável.",
    cards: [
      { title: "Personalizável", description: "Extensas opções de personalização que permitem ajustar cada aspecto às suas necessidades específicas." },
      { title: "Controle total", description: "Dos elementos de design às funcionalidades, você tem controle total para criar uma experiência única." },
      { title: "Impulsionado por IA", description: "A assistência inteligente de IA permite consultar, resumir e interagir com documentos em linguagem natural." },
      { title: "Envie qualquer arquivo", description: "Faça upload de PDFs, planilhas ou documentos de texto e transforme-os rapidamente em bases de conhecimento conversacionais." },
      { title: "Suporte multilíngue", description: "Faça perguntas e receba respostas em vários idiomas, facilitando a colaboração global." },
      { title: "Q&A Conversacional", description: "Experiência de chat natural — continue a conversa com memória contextual e perguntas de acompanhamento." },
    ],
  },
  ru: {
    title: "Создано для ваших нужд",
    subtitle:
      "Всё, что вам нужно, чтобы превратить ваши файлы в диалог — задавайте вопросы, получайте резюме и общайтесь на удобном для вас языке.",
    cards: [
      { title: "Настраиваемый", description: "Широкие возможности настройки, позволяющие адаптировать каждый аспект под ваши потребности." },
      { title: "Полный контроль", description: "От элементов дизайна до функций — полный контроль для создания уникального опыта." },
      { title: "Работает на ИИ", description: "Умный ИИ помогает задавать вопросы, создавать резюме и взаимодействовать с документами на естественном языке." },
      { title: "Загрузка любого файла", description: "Загружайте PDF, таблицы или текстовые документы и быстро превращайте их в базы знаний для диалогов." },
      { title: "Многоязычная поддержка", description: "Задавайте вопросы и получайте ответы на разных языках для лёгкого глобального взаимодействия." },
      { title: "Диалоговый Q&A", description: "Естественный чат-опыт — продолжайте разговор с учётом контекста и дополнительными вопросами." },
    ],
  },
  ko: {
    title: "당신의 필요를 충족하도록 구축",
    subtitle:
      "파일을 대화로 전환하는 데 필요한 모든 것 — 질문을 하고 요약을 얻으며 가장 편안한 언어로 상호작용하세요.",
    cards: [
      { title: "사용자 정의 가능", description: "다양한 사용자 정의 옵션으로 모든 요소를 필요에 맞게 조정할 수 있습니다." },
      { title: "완전한 제어", description: "디자인 요소부터 기능까지, 고유한 경험을 만들기 위해 전체를 제어할 수 있습니다." },
      { title: "AI 기반", description: "똑똑한 AI가 문서를 자연어로 질의, 요약 및 상호작용할 수 있게 합니다." },
      { title: "어떤 파일이든 업로드", description: "PDF, 스프레드시트, 텍스트 문서를 업로드하고 빠르게 대화형 지식 베이스로 변환하세요." },
      { title: "다국어 지원", description: "여러 언어로 질문하고 답변을 받아 글로벌 협업을 쉽게 합니다." },
      { title: "대화형 Q&A", description: "자연스러운 채팅 경험 — 문맥을 유지하면서 대화를 이어가고 후속 질문도 가능합니다." },
    ],
  },
}
