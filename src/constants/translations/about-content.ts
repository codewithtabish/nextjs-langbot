import { LocaleType } from "@/constants/languages"

type AboutValue = {
  title: string
  description: string
}

type AboutContent = {
  title: string
  subtitle: string // Markdown: 2 paragraphs separated by \n\n
  missionTitle: string
  mission: string
  visionTitle: string
  vision: string
  valuesTitle: string
  values: AboutValue[]
}

export const aboutContent: Record<LocaleType, AboutContent> = {
  en: {
    title: "About Us",
    subtitle: `We believe documents should empower you instead of slowing you down. Too much valuable knowledge sits locked away in static files that are hard to search and understand. Our platform transforms long reports, PDFs, spreadsheets, and documents into interactive conversations. This makes it easy to ask questions, explore information, and receive instant responses. With this approach, individuals, students, and teams save hours and gain clarity when they need it most.  

By combining advanced AI with multilingual support, our platform makes insights accessible to anyone. You can summarize a long paper, explore data in natural language, or collaborate seamlessly across borders. No matter the file type or language, knowledge becomes clear, usable, and interactive. We aim to remove technical barriers and let people focus on decisions, creativity, and impact.`,

    missionTitle: "Our Mission",
    mission: "To make understanding any file effortless by combining advanced AI with multilingual chat, enabling anyone to access insights instantly.",
    visionTitle: "Our Vision",
    vision: "A world where every file can be searched, summarized, translated, and discussed — helping people learn, collaborate, and innovate faster.",
    valuesTitle: "Our Core Values",
    values: [
      { title: "Innovation", description: "We shape new ways for people to engage with knowledge using AI." },
      { title: "Integrity", description: "We put honesty, transparency, and security at the core of everything we do." },
      { title: "Collaboration", description: "We create tools that let people and teams work together across languages and borders." },
      { title: "Excellence", description: "We deliver quality and reliability so every answer makes a difference." },
    ],
  },

  zh: {
    title: "关于我们",
    subtitle: `我们相信文件应该帮助您，而不是成为负担。太多有价值的知识被困在静态文件中，难以搜索和理解。我们的平台将冗长的报告、PDF、电子表格和文档转化为互动对话。这样，用户可以即时提问、探索信息并获得清晰回答。无论是个人、学生还是团队，都能节省时间，更快获得有价值的洞察。  

通过结合先进的人工智能与多语言支持，我们的平台让任何人都能获取信息。您可以快速总结论文、用自然语言分析数据，或在跨越国界的合作中轻松沟通。无论文件类型或语言如何，知识都变得清晰、可用且可交互。我们的目标是消除技术障碍，让人们把重点放在决策、创造力与价值上。`,
    missionTitle: "我们的使命",
    mission: "将先进的 AI 与多语言聊天结合，使理解任何文件变得轻松，让每个人都能即时获取洞察。",
    visionTitle: "我们的愿景",
    vision: "一个可以搜索、总结、翻译和讨论任何文件的世界——帮助人们更快地学习、协作和创新。",
    valuesTitle: "我们的核心价值观",
    values: [
      { title: "创新", description: "我们通过 AI 打造全新的人机交互方式。" },
      { title: "诚信", description: "诚实、透明和安全是我们工作的核心。" },
      { title: "协作", description: "我们开发的工具帮助人们跨语言、跨地域轻松合作。" },
      { title: "卓越", description: "追求高品质和可靠性，让每个答案都意义非凡。" },
    ],
  },

  hi: {
    title: "हमारे बारे में",
    subtitle: `हम मानते हैं कि दस्तावेज़ों को आपकी मदद करनी चाहिए, न कि बोझ बनना चाहिए। अक्सर मूल्यवान जानकारी लंबे पीडीएफ़, रिपोर्ट और स्प्रेडशीट में फँसी रह जाती है जिन्हें पढ़ना और समझना मुश्किल होता है। हमारा प्लेटफ़ॉर्म उन जटिल फ़ाइलों को संवादों में बदल देता है जिन्हें आप सीधे पूछ सकते हैं और तुरंत जवाब पा सकते हैं। इससे समय की बचत होती है और लोग तेजी से सही निर्णय ले पाते हैं।  

उन्नत AI और बहुभाषी समर्थन के साथ, हम सुनिश्चित करते हैं कि कोई भी व्यक्ति किसी भी फ़ाइल को आसानी से समझ सके। आप लंबी रिपोर्ट का सारांश निकाल सकते हैं, प्राकृतिक भाषा में डेटा पूछ सकते हैं, या सीमाओं और भाषाओं से परे सहयोग कर सकते हैं। किसी भी फ़ाइल के प्रारूप या भाषा की परवाह किए बिना, ज्ञान स्पष्ट और उपलब्ध हो जाता है। हमारा उद्देश्य बाधाओं को हटाना और लोगों को निर्णय, रचनात्मकता और सहयोग पर ध्यान केंद्रित करने देना है।`,
    missionTitle: "हमारा मिशन",
    mission: "उन्नत AI और बहुभाषी चैट के ज़रिए किसी भी फ़ाइल को समझना आसान बनाना और तुरंत जानकारी उपलब्ध कराना।",
    visionTitle: "हमारा विज़न",
    vision: "एक ऐसी दुनिया जहाँ हर फ़ाइल को खोजा, सारांशित, अनुवादित और चर्चा किया जा सके।",
    valuesTitle: "हमारे मूल्य",
    values: [
      { title: "नवाचार", description: "हम AI के माध्यम से जानकारी को नया रूप देते हैं।" },
      { title: "ईमानदारी", description: "हम ईमानदारी, पारदर्शिता और सुरक्षा पर आधारित कार्य करते हैं।" },
      { title: "सहयोग", description: "हम ऐसे टूल बनाते हैं जो भाषाओं और सीमाओं से परे लोगों को जोड़ते हैं।" },
      { title: "उत्कृष्टता", description: "हम गुणवत्ता और विश्वसनीयता पर ध्यान केंद्रित करते हैं।" },
    ],
  },

  es: {
    title: "Sobre nosotros",
    subtitle: `Creemos que los documentos deben ayudarte en lugar de ralentizarte. Demasiada información valiosa queda atrapada en archivos estáticos como PDF y hojas de cálculo que son difíciles de leer o analizar. Nuestra plataforma convierte esos archivos en conversaciones interactivas que responden preguntas al instante. Así, las personas pueden ahorrar tiempo y enfocarse en lo que realmente importa.  

Combinando IA avanzada con soporte multilingüe, ofrecemos accesibilidad global. Puedes obtener resúmenes de informes largos, análisis de datos en lenguaje natural o colaborar fácilmente sin importar las barreras lingüísticas. El conocimiento se convierte en claro, útil e interactivo. Nuestro propósito es eliminar obstáculos y permitir que las personas tomen mejores decisiones más rápido.`,
    missionTitle: "Nuestra misión",
    mission: "Hacer que comprender y trabajar con archivos sea fácil mediante IA avanzada y chat multilingüe.",
    visionTitle: "Nuestra visión",
    vision: "Un mundo donde cualquier archivo pueda buscarse, resumirse, traducirse y discutirse en cualquier idioma.",
    valuesTitle: "Nuestros valores",
    values: [
      { title: "Innovación", description: "Creamos experiencias de IA que cambian cómo usamos la información." },
      { title: "Integridad", description: "Basamos todo en confianza y transparencia." },
      { title: "Colaboración", description: "Facilitamos el trabajo en equipo sin importar idioma o frontera." },
      { title: "Excelencia", description: "Perseguimos calidad y fiabilidad en cada detalle." },
    ],
  },

  ar: {
    title: "من نحن",
    subtitle: `نؤمن أن المستندات يجب أن تخدمك بدلاً من أن تعيقك. كثيراً ما تُحبس المعلومات القيّمة في ملفات PDF أو جداول بيانات يصعب قراءتها. منصتنا تحول هذه الملفات إلى محادثات تفاعلية يمكنك الاستفسار منها والحصول على إجابات فورية. بذلك نوفر الوقت ونمكن الأفراد والفرق من التركيز على ما هو أهم.  

من خلال دمج الذكاء الاصطناعي المتقدم مع دعم متعدد اللغات، نتيح لجميع الناس فهم الملفات. يمكنك تلخيص التقارير الطويلة، الحصول على رؤى من البيانات، والتعاون بسهولة عبر الحدود. يصبح الوصول إلى المعرفة سريعاً ومباشراً. هدفنا إزالة العوائق وجعل التعاون والفهم سهلاً للجميع.`,
    missionTitle: "مهمتنا",
    mission: "تبسيط العمل مع أي ملف عبر الذكاء الاصطناعي والدردشة متعددة اللغات.",
    visionTitle: "رؤيتنا",
    vision: "عالم يمكن فيه البحث في أي ملف وتلخيصه وترجمته ومناقشته بأي لغة.",
    valuesTitle: "قيمنا",
    values: [
      { title: "الابتكار", description: "نصنع تجارب ذكاء اصطناعي تغير طريقة التعامل مع المعرفة." },
      { title: "النزاهة", description: "الثقة والشفافية أساس كل ما نقدمه." },
      { title: "التعاون", description: "أدواتنا تربط الفرق بغض النظر عن اللغة أو الحدود." },
      { title: "التميز", description: "نسعى للجودة والموثوقية باستمرار." },
    ],
  },

  fr: {
    title: "À propos",
    subtitle: `Nous croyons que les documents doivent vous aider plutôt que de vous freiner. Trop souvent, des informations précieuses restent enfermées dans des PDF et des tableurs difficiles à exploiter. Notre plateforme transforme ces fichiers complexes en conversations interactives, où obtenir une réponse est instantané. Ainsi, étudiants, professionnels et équipes gagnent en efficacité.  

En associant une IA avancée et le support multilingue, nous garantissons un accès universel aux connaissances. Vous pouvez résumer un long rapport, explorer des données en langage naturel ou collaborer sans contrainte de langue. La connaissance devient claire, disponible et interactive. Nous éliminons les barrières pour un avenir plus productif.`,
    missionTitle: "Notre mission",
    mission: "Simplifier la compréhension des fichiers grâce à l'IA et au chat multilingue.",
    visionTitle: "Notre vision",
    vision: "Un monde où chaque fichier est consultable, résumé, traduit et discuté dans toutes les langues.",
    valuesTitle: "Nos valeurs",
    values: [
      { title: "Innovation", description: "Nous changeons la manière d’accéder à l’information." },
      { title: "Intégrité", description: "Transparence et fiabilité guident chacune de nos actions." },
      { title: "Collaboration", description: "Nous développons des outils qui rapprochent les équipes." },
      { title: "Excellence", description: "Nous visons une qualité irréprochable." },
    ],
  },

  de: {
    title: "Über uns",
    subtitle: `Wir glauben, dass Dokumente helfen sollten, statt zu belasten. Allzu oft sind wertvolle Informationen in langen PDFs oder Tabellen vergraben. Unsere Plattform macht daraus interaktive Gespräche mit sofortigen Antworten. So sparen alle Zeit und können sich auf das Wesentliche konzentrieren.  

Durch moderne KI und Mehrsprachigkeit wird jedes Dokument verständlich. Sie können Berichte zusammenfassen, Daten im Klartext abfragen oder ohne Sprachbarrieren zusammenarbeiten. Wissen wird schnell verfügbar und nutzbar. Unser Ziel: Hürden abbauen und Effizienz steigern.`,
    missionTitle: "Unsere Mission",
    mission: "Dateien mit KI und Mehrsprachigkeit sofort verständlich machen.",
    visionTitle: "Unsere Vision",
    vision: "Eine Welt, in der jede Datei in allen Sprachen durchsuchbar, zusammenfassbar und diskutierbar ist.",
    valuesTitle: "Unsere Werte",
    values: [
      { title: "Innovation", description: "Wir schaffen neue KI-Erlebnisse für Wissenstransfer." },
      { title: "Integrität", description: "Ehrlichkeit und Zuverlässigkeit stehen im Zentrum." },
      { title: "Zusammenarbeit", description: "Wir verbinden Menschen über Sprachen hinweg." },
      { title: "Exzellenz", description: "Wir liefern Qualität, die überzeugt." },
    ],
  },

  ja: {
    title: "私たちについて",
    subtitle: `私たちは、ドキュメントはあなたを助けるべきであり、邪魔すべきではないと信じています。価値ある知識が長いPDFや表計算、レポートに閉じ込められ、理解が難しいことが多いのです。私たちのプラットフォームは、それらを会話形式に変換し、質問や要約をすぐに得られるようにします。これにより、ユーザーは効率的に必要な情報を手に入れられます。  

高度なAIと多言語サポートを組み合わせることで、どんなファイルでも理解可能になります。レポート要約からデータの自然言語分析、国境を超えた協業まで、知識へのアクセスは自由です。当社の目標は、障壁を取り除き、誰もがドキュメントから価値を引き出せることです。`,
    missionTitle: "私たちの使命",
    mission: "AIと多言語チャットであらゆるファイルを簡単に理解できるようにすること。",
    visionTitle: "私たちのビジョン",
    vision: "どんな言語でもファイルを検索・要約・翻訳・議論できる未来を実現する。",
    valuesTitle: "私たちの価値観",
    values: [
      { title: "イノベーション", description: "知識の扱い方を変えるAIを提供します。" },
      { title: "誠実さ", description: "信頼と透明性を大切にしています。" },
      { title: "協力", description: "言語や国境を越えて人々をつなぎます。" },
      { title: "卓越性", description: "高い品質で信頼できる答えを届けます。" },
    ],
  },

  ur: {
    title: "ہمارے بارے میں",
    subtitle: `ہم سمجھتے ہیں کہ فائلوں کو سہولت دینی چاہیے نہ کہ رکاوٹ ڈالنی چاہیے۔ اکثر قیمتی معلومات طویل پی ڈی ایف یا اسپریڈشیٹ میں قید رہتی ہیں جنہیں پڑھنا مشکل ہوتا ہے۔ ہمارا پلیٹ فارم ان سب کو مکالمے میں بدل دیتا ہے جہاں آپ سوالات پوچھ سکتے ہیں اور فوری جوابات حاصل کرسکتے ہیں۔ اس طرح وقت کی بچت اور درست فیصلہ سازی میں آسانی ہوتی ہے۔  

جدید AI اور کثیر لسانی مدد کے ذریعے ہم ہر قسم کے فائل کو آسانی سے قابل فہم بناتے ہیں۔ لمبی رپورٹ کو خلاصہ کریں، ڈیٹا کو سادہ زبان میں دریافت کریں، یا سرحدوں کے پار تعاون کریں۔ علم تیز، واضح اور قابل استعمال ہو جاتا ہے۔ ہمارا مقصد رکاوٹوں کو ختم کرنا اور لوگوں کو بہتر فیصلے کرنے دینا ہے۔`,
    missionTitle: "ہمارا مشن",
    mission: "کسی بھی فائل کو AI اور کثیر لسانی چیٹ کے ذریعے آسانی سے سمجھنے کے قابل بنانا۔",
    visionTitle: "ہمارا وژن",
    vision: "ایسی دنیا جہاں کسی بھی زبان میں فائل کو تلاش، خلاصہ، ترجمہ اور تبادلہ خیال کیا جا سکے۔",
    valuesTitle: "ہمارے اقدار",
    values: [
      { title: "تخلیق", description: "ہم علم تک رسائی کے نئے انداز تخلیق کرتے ہیں۔" },
      { title: "ایمانداری", description: "شفافیت اور اعتماد ہماری بنیاد ہیں۔" },
      { title: "تعاون", description: "ہم زبان اور سرحد سے بالاتر اوزار فراہم کرتے ہیں۔" },
      { title: "اعتماد", description: "ہم ہر فیچر میں معیار اور بھروسہ فراہم کرتے ہیں۔" },
    ],
  },

  pt: {
    title: "Sobre nós",
    subtitle: `Acreditamos que os documentos devem facilitar sua vida. Muitas vezes, informações essenciais ficam presas em relatórios e PDFs difíceis de analisar. Nossa plataforma transforma esses arquivos em conversas interativas, permitindo perguntas e respostas em segundos. O resultado é economia de tempo e clareza para decisões melhores.  

Com IA avançada e suporte multilíngue, democratizamos o conhecimento. Você pode resumir documentos, interagir em linguagem natural e colaborar além das fronteiras. Assim, qualquer arquivo se torna claro, acessível e interativo. Removemos barreiras para que pessoas foquem em criar, aprender e decidir.`,
    missionTitle: "Nossa missão",
    mission: "Simplificar o uso de arquivos unindo IA avançada e suporte multilíngue.",
    visionTitle: "Nossa visão",
    vision: "Um mundo onde qualquer arquivo é pesquisável, resumível e discutível em qualquer idioma.",
    valuesTitle: "Nossos valores",
    values: [
      { title: "Inovação", description: "Redefinimos como interagir com informações." },
      { title: "Integridade", description: "Confiança e segurança são nossa prioridade." },
      { title: "Colaboração", description: "Nossas ferramentas unem pessoas de diferentes culturas." },
      { title: "Excelência", description: "Entregamos qualidade em cada detalhe." },
    ],
  },

  ru: {
    title: "О нас",
    subtitle: `Мы уверены, что документы должны помогать, а не мешать. Слишком часто важная информация спрятана в длинных PDF и таблицах. Наша платформа превращает такие файлы в интерактивные диалоги с мгновенными ответами. Это экономит время и помогает людям фокусироваться на сути.  

Благодаря ИИ и многоязычной поддержке понимание файлов становится простым. Вы можете получить краткий обзор отчета, задать вопросы к данным или работать без барьеров языка. Знания становятся ясными и доступными. Наша цель — убрать сложности и помочь быстрее принимать решения.`,
    missionTitle: "Наша миссия",
    mission: "Сделать работу с файлами простой с помощью ИИ и многоязычного чата.",
    visionTitle: "Наше видение",
    vision: "Мир, где любой файл можно искать, резюмировать, переводить и обсуждать на любом языке.",
    valuesTitle: "Наши ценности",
    values: [
      { title: "Инновации", description: "Мы меняем подход к знанию через ИИ." },
      { title: "Честность", description: "Открытость и доверие на первом месте." },
      { title: "Сотрудничество", description: "Мы объединяем людей вне языковых и культурных границ." },
      { title: "Превосходство", description: "Мы гарантируем высокое качество ответов." },
    ],
  },

  ko: {
    title: "회사 소개",
    subtitle: `우리는 문서가 방해가 아니라 도움이 되어야 한다고 믿습니다. 많은 유용한 정보가 PDF와 스프레드시트 속에 묻혀 있습니다. 우리의 플랫폼은 이를 대화형 경험으로 바꾸어 질문과 답변이 즉각 가능하게 합니다. 이를 통해 시간은 절약되고 결정은 빨라집니다.  

첨단 AI와 다국어 지원을 결합하여 모든 파일은 장애물 없이 이해됩니다. 보고서를 요약하거나 데이터를 자연어로 탐색하고 국경을 넘어 협업할 수 있습니다. 지식은 명확하고 활용 가능하며 상호작용적이 됩니다. 우리의 목표는 장벽을 없애고 더 나은 결정을 돕는 것입니다.`,
    missionTitle: "우리의 사명",
    mission: "AI와 다국어 지원을 통해 어떤 파일도 쉽게 이해하도록 만드는 것.",
    visionTitle: "우리의 비전",
    vision: "모든 파일을 모든 언어로 검색, 요약, 번역 그리고 논의할 수 있는 세상.",
    valuesTitle: "핵심 가치",
    values: [
      { title: "혁신", description: "AI로 새로운 지식 활용 방식을 만듭니다." },
      { title: "정직", description: "우리는 투명성과 신뢰를 최우선으로 둡니다." },
      { title: "협력", description: "언어와 경계를 넘어 함께 일할 수 있게 합니다." },
      { title: "탁월함", description: "모든 기능에서 최고 품질을 지향합니다." },
    ],
  },
}
