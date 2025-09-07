import { LocaleType } from "@/constants/languages"

type TeamContent = {
  title: string
  subtitle: string
  dream: string
  aboutText: string
}

export const teamContent: Record<LocaleType, TeamContent> = {
  en: {
    title: "Our Dream Team",
    subtitle: "About the Team",
    dream: "We are a group of passionate builders dedicated to making file AI accessible for everyone.",
    aboutText: `We believe innovation comes from collaboration, creativity, and diverse skills. 
Our global team combines expertise in full‑stack development, AI research, mobile engineering, and product design. 
We dream big, move fast, and stay grounded in our mission: making knowledge accessible from every file in every language.`,
  },

  zh: {
    title: "我们的梦想团队",
    subtitle: "关于团队",
    dream: "我们是一群充满热情的建设者，致力于让文件 AI 为每个人所用。",
    aboutText: `我们相信创新源于合作、创造力和多元化技能。 
我们的全球团队结合了全栈开发、人工智能研究、移动工程和产品设计的专业知识。 
我们怀揣远大梦想、快速行动，并始终坚持我们的使命：让每个文件、每种语言中的知识都可获得。`,
  },

  hi: {
    title: "हमारी ड्रीम टीम",
    subtitle: "टीम के बारे में",
    dream: "हम उत्साही लोगों की टीम हैं जो हर किसी के लिए AI‑फ़ाइल सुविधा उपलब्ध कराने के लिए समर्पित हैं।",
    aboutText: `हम मानते हैं कि नवाचार सहयोग, रचनात्मकता और विविध कौशल से आता है। 
हमारी वैश्विक टीम में फुल‑स्टैक डेवलपमेंट, AI रिसर्च, मोबाइल इंजीनियरिंग और डिज़ाइन के विशेषज्ञ शामिल हैं। 
हम बड़े सपने देखते हैं, तेज़ी से बढ़ते हैं और अपने मिशन पर केंद्रित रहते हैं: हर भाषा में हर फ़ाइल से ज्ञान सुलभ बनाना।`,
  },

  es: {
    title: "Nuestro equipo de ensueño",
    subtitle: "Sobre el equipo",
    dream: "Somos un grupo de apasionados dedicados a hacer que la IA para archivos sea accesible para todos.",
    aboutText: `Creemos que la innovación surge de la colaboración, la creatividad y la diversidad. 
Nuestro equipo global reúne experiencia en desarrollo full‑stack, investigación en IA, ingeniería móvil y diseño de productos. 
Soñamos en grande y trabajamos rápido, con la misión clara de hacer que el conocimiento esté disponible desde cada archivo en cualquier idioma.`,
  },

  ar: {
    title: "فريقنا الحالم",
    subtitle: "عن الفريق",
    dream: "نحن مجموعة من المبدعين المتحمسين لجعل الذكاء الاصطناعي للملفات متاحًا للجميع.",
    aboutText: `نؤمن أن الابتكار يأتي من التعاون، والإبداع، وتنوع المهارات. 
يجمع فريقنا العالمي خبرات في تطوير الواجهة الكاملة، وأبحاث الذكاء الاصطناعي، والهندسة المحمولة، وتصميم المنتجات. 
نحلم بشكل كبير ونتحرك بسرعة، مع التركيز على مهمتنا: جعل المعرفة متاحة من كل ملف وبكل لغة.`,
  },

  fr: {
    title: "Notre équipe de rêve",
    subtitle: "À propos de l’équipe",
    dream: "Nous sommes une équipe passionnée qui rend l’IA pour les fichiers accessible à tous.",
    aboutText: `Nous croyons que l’innovation naît de la collaboration, de la créativité et de la diversité des compétences. 
Notre équipe mondiale regroupe des experts en développement full‑stack, recherche en IA, ingénierie mobile et design produit. 
Nous rêvons grand, avançons vite et restons attachés à notre mission : rendre le savoir accessible à partir de chaque fichier dans toutes les langues.`,
  },

  de: {
    title: "Unser Dream‑Team",
    subtitle: "Über das Team",
    dream: "Wir sind ein Team von leidenschaftlichen Entwicklern, die KI für Dateien für alle zugänglich machen wollen.",
    aboutText: `Wir glauben, dass Innovation aus Zusammenarbeit, Kreativität und Vielfalt entsteht. 
Unser globales Team vereint Expertise in Full‑Stack‑Entwicklung, KI‑Forschung, mobiler Entwicklung und Produktdesign. 
Wir träumen groß, handeln schnell und bleiben bei unserer Mission: Wissen aus jeder Datei und in jeder Sprache zugänglich zu machen.`,
  },

  ja: {
    title: "私たちのドリームチーム",
    subtitle: "チームについて",
    dream: "私たちは、すべての人がファイルAIを利用できるよう尽力する情熱的な開発者の集まりです。",
    aboutText: `私たちは、革新は協力、創造性、多様なスキルによって生まれると信じています。 
フルスタック開発、AI研究、モバイルエンジニアリング、製品デザインなど多様な専門知識を持つメンバーが世界中から集まっています。 
大きな夢を描き、迅速に行動し、あらゆるファイルとあらゆる言語から知識を引き出すという使命に忠実です。`,
  },

  ur: {
    title: "ہماری خوابوں کی ٹیم",
    subtitle: "ٹیم کے بارے میں",
    dream: "ہم پرجوش تخلیق کاروں کی ٹیم ہیں جو ہر ایک کے لیے فائل AI کو قابل رسائی بنا رہے ہیں۔",
    aboutText: `ہم مانتے ہیں کہ جدت تعاون، تخلیقی صلاحیت اور متنوع ہنر سے جنم لیتی ہے۔ 
ہمارا عالمی ٹیم فل‑اسٹیک ڈویلپمنٹ، AI تحقیق، موبائل انجینئرنگ اور پروڈکٹ ڈیزائن کے ماہرین پر مشتمل ہے۔ 
ہم بڑے خواب دیکھتے ہیں، تیزی سے کام کرتے ہیں اور ایک ہی مقصد پر قائم ہیں: ہر زبان کی ہر فائل سے علم کو قابل حصول بنانا۔`,
  },

  pt: {
    title: "Nosso time dos sonhos",
    subtitle: "Sobre o time",
    dream: "Somos um grupo apaixonado em tornar a IA para arquivos acessível a todos.",
    aboutText: `Acreditamos que a inovação vem da colaboração, criatividade e diversidade. 
Nossa equipe global reúne especialistas em full‑stack, pesquisa em IA, engenharia mobile e design de produto. 
Sonhamos grande, nos movemos rápido e permanecemos focados em nossa missão: tornar o conhecimento acessível de qualquer arquivo em qualquer idioma.`,
  },

  ru: {
    title: "Наша команда мечты",
    subtitle: "О команде",
    dream: "Мы команда энтузиастов, стремящихся сделать файловый ИИ доступным каждому.",
    aboutText: `Мы убеждены, что инновации рождаются из сотрудничества, креативности и разнообразия навыков. 
Наша глобальная команда объединяет опыт в full‑stack разработке, исследованиях ИИ, мобильной инженерии и дизайне продуктов. 
Мы мечтаем масштабно, действуем быстро и остаёмся верны нашей миссии: сделать знания доступными из любого файла на любом языке.`,
  },

  ko: {
    title: "우리의 드림팀",
    subtitle: "팀 소개",
    dream: "우리는 누구나 파일 AI를 쉽게 사용할 수 있도록 하는 열정적인 팀입니다.",
    aboutText: `혁신은 협업, 창의성, 다양한 기술에서 온다고 믿습니다. 
우리 글로벌 팀은 풀스택 개발, AI 연구, 모바일 엔지니어링, 제품 디자인의 전문 지식을 결합합니다. 
우리는 큰 꿈을 꾸고 빠르게 움직이며 모든 파일과 모든 언어에서 지식을 얻을 수 있도록 하는 사명에 집중합니다.`,
  },
}
