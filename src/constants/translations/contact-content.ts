import { LocaleType } from "@/constants/languages"

type ContactContent = {
  title: string
  intro: string
  subtitle: string
  description: string
  placeholders: {
    name: string
    email: string
    country: string
    message: string
  }
  button: string
}

export const contactContent: Record<LocaleType, ContactContent> = {
  en: {
    title: "Contact Us",
    intro:
      "Have feedback, feature requests, or questions about Chat with Your Files? Send us a message and we’ll get back to you.",
    subtitle: "We’d love to hear from you",
    description:
      "Whether it’s a question, a suggestion, or feedback about your experience, drop it below.",
    placeholders: {
      name: "Full Name",
      email: "Email Address",
      country: "Select Country",
      message: "Write your feedback, feature request, or question...",
    },
    button: "Send Message",
  },

  ur: {
    title: "ہم سے رابطہ کریں",
    intro:
      "Chat with Your Files کے بارے میں آپ کے سوالات، رائے یا فیچر کی درخواست ہے؟ ہمیں پیغام بھیجیں۔",
    subtitle: "ہم آپ سے سننے کے خواہشمند ہیں",
    description:
      "چاہے سوال ہو، تجویز یا آپ کا فیڈبیک، نیچے درج کریں۔",
    placeholders: {
      name: "پورا نام",
      email: "ای میل ایڈریس",
      country: "ملک منتخب کریں",
      message: "اپنا فیڈبیک، فیچر کی درخواست یا سوال درج کریں...",
    },
    button: "پیغام بھیجیں",
  },

  ar: {
    title: "اتصل بنا",
    intro:
      "هل لديك ملاحظات أو طلبات ميزات أو أسئلة حول Chat with Your Files؟ أرسل لنا رسالة وسنرد عليك.",
    subtitle: "يسعدنا أن نسمع منك",
    description:
      "سواء كان سؤالًا أو اقتراحًا أو ملاحظات على تجربتك، اكتبه أدناه.",
    placeholders: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      country: "اختر الدولة",
      message: "اكتب ملاحظاتك أو طلب الميزة أو سؤالك...",
    },
    button: "إرسال الرسالة",
  },

  hi: {
    title: "संपर्क करें",
    intro:
      "Chat with Your Files के बारे में आपके पास प्रश्न, फ़ीडबैक या फीचर अनुरोध हैं? हमें संदेश भेजें।",
    subtitle: "हमें आपसे सुनकर खुशी होगी",
    description:
      "चाहे यह प्रश्न हो, सुझाव हो या आपका फीडबैक, नीचे लिखें।",
    placeholders: {
      name: "पूरा नाम",
      email: "ईमेल पता",
      country: "देश चुनें",
      message: "अपना फीडबैक, फीचर अनुरोध या प्रश्न लिखें...",
    },
    button: "संदेश भेजें",
  },

  es: {
    title: "Contáctanos",
    intro:
      "¿Tienes comentarios, solicitudes de funciones o preguntas sobre Chat with Your Files? Envíanos un mensaje.",
    subtitle: "Nos encantaría saber de ti",
    description:
      "Ya sea una pregunta, una sugerencia o tu opinión, escríbelo abajo.",
    placeholders: {
      name: "Nombre completo",
      email: "Correo electrónico",
      country: "Selecciona un país",
      message: "Escribe tus comentarios, solicitud de función o pregunta...",
    },
    button: "Enviar mensaje",
  },

  fr: {
    title: "Contactez-nous",
    intro:
      "Vous avez des questions, des retours ou des demandes de fonctionnalités sur Chat with Your Files ? Envoyez-nous un message.",
    subtitle: "Nous serions ravis d’avoir de vos nouvelles",
    description:
      "Qu’il s’agisse d’une question, d’une suggestion ou d’un retour, écrivez-le ci-dessous.",
    placeholders: {
      name: "Nom complet",
      email: "Adresse e-mail",
      country: "Sélectionnez un pays",
      message: "Écrivez vos retours, demandes ou questions...",
    },
    button: "Envoyer le message",
  },

  de: {
    title: "Kontaktieren Sie uns",
    intro:
      "Haben Sie Feedback, Funktionswünsche oder Fragen zu Chat with Your Files? Senden Sie uns eine Nachricht.",
    subtitle: "Wir freuen uns auf Ihre Nachricht",
    description:
      "Ob es eine Frage, ein Vorschlag oder Feedback ist, schreiben Sie es unten.",
    placeholders: {
      name: "Vollständiger Name",
      email: "E-Mail-Adresse",
      country: "Land auswählen",
      message: "Schreiben Sie Ihr Feedback, Ihre Anfrage oder Frage...",
    },
    button: "Nachricht senden",
  },

  zh: {
    title: "联系我们",
    intro:
      "您对 Chat with Your Files 有反馈、功能请求或问题吗？给我们留言。",
    subtitle: "我们期待您的来信",
    description:
      "无论是问题、建议还是反馈，请在下方填写。",
    placeholders: {
      name: "全名",
      email: "电子邮箱",
      country: "选择国家",
      message: "写下您的反馈、功能请求或问题...",
    },
    button: "发送消息",
  },

  ja: {
    title: "お問い合わせ",
    intro:
      "Chat with Your Files について質問、フィードバックや機能リクエストがありますか？ メッセージをお送りください。",
    subtitle: "皆さまの声をお聞かせください",
    description:
      "ご質問、ご提案、または経験に関するフィードバックを下にご記入ください。",
    placeholders: {
      name: "氏名",
      email: "メールアドレス",
      country: "国を選択",
      message: "フィードバックやご要望、ご質問をお書きください...",
    },
    button: "送信",
  },

  pt: {
    title: "Contate-Nos",
    intro:
      "Tem feedback, pedidos de funcionalidades ou dúvidas sobre o Chat with Your Files? Envie-nos uma mensagem.",
    subtitle: "Adoraríamos ouvir você",
    description:
      "Seja uma pergunta, sugestão ou feedback, escreva abaixo.",
    placeholders: {
      name: "Nome completo",
      email: "Endereço de e-mail",
      country: "Selecionar país",
      message: "Escreva seu feedback, pedido de recurso ou dúvida...",
    },
    button: "Enviar mensagem",
  },

  ru: {
    title: "Свяжитесь с нами",
    intro:
      "Есть вопросы, отзывы или запросы функций о Chat with Your Files? Отправьте нам сообщение.",
    subtitle: "Мы будем рады вам помочь",
    description:
      "Будь то вопрос, предложение или отзыв о вашем опыте, оставьте его ниже.",
    placeholders: {
      name: "Полное имя",
      email: "Электронная почта",
      country: "Выберите страну",
      message: "Напишите отзыв, запрос или вопрос...",
    },
    button: "Отправить сообщение",
  },

  ko: {
    title: "문의하기",
    intro:
      "Chat with Your Files에 대한 피드백, 기능 요청 또는 질문이 있으신가요? 메시지를 보내주세요.",
    subtitle: "여러분의 의견을 기다립니다",
    description:
      "질문, 제안 또는 경험에 대한 피드백을 아래에 작성해 주세요.",
    placeholders: {
      name: "이름",
      email: "이메일 주소",
      country: "국가 선택",
      message: "피드백이나 요청, 질문을 작성하세요...",
    },
    button: "메시지 보내기",
  },
}
