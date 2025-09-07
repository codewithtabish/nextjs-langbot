import { LocaleType } from "@/constants/languages"

type PrivacyPolicyContent = {
  title: string
  subtitle: string
  content: string // markdown with multiple sections
}

export const privacyPolicyContent: Record<LocaleType, PrivacyPolicyContent> = {
  en: {
    title: "Privacy Policy",
    subtitle:
      "Your privacy matters to us. This Privacy Policy explains in detail how we collect, use, store, and protect your information while you use Chat with Your Files.",
    content: `### 1. Introduction
We believe that protecting your privacy is essential to building trust. This Privacy Policy explains our practices regarding the files you upload, the data we collect, and the measures we take to secure it. By using Chat with Your Files, you are agreeing to these practices and acknowledging our commitment to transparency.  

### 2. Data We Collect
We only collect the minimum amount of data required to provide our service effectively. This includes uploaded documents, user account details for authentication, and anonymous usage information to improve our features. We do not track unnecessary personal data, and we do not sell or resell user information.  

### 3. File Processing
When you upload files, our AI temporarily analyzes their content to provide answers, summaries, and translations. Files are not indexed or shared beyond the session unless you explicitly save them. We prohibit using your data to train external AI models, and file confidentiality remains a top priority.  

### 4. Use of Information
Collected information is used solely to operate, maintain, and improve our services. We may use anonymous metrics to monitor performance, detect abuse, and enhance user experience. None of your documents or sensitive data are sold to advertisers, partners, or third parties.  

### 5. Data Security
We implement industry-standard encryption protocols to safeguard your data in transit and at rest. Regular audits, restricted access policies, and multi-layered defenses ensure files are safe from breaches. Our systems are continuously monitored to identify vulnerabilities quickly.  

### 6. Data Retention
Free-tier users’ files are deleted automatically after processing to protect privacy. Subscribers may have the option to retain files within their accounts using encrypted storage. We keep account-related information only as long as needed to provide services and comply with legal obligations.  

### 7. Third-Party Services
We rely on reputable hosting providers and technology partners to operate our system. All third parties are bound by strict agreements and cannot use your files except to support the required infrastructure. No third-party has permission to access or share your data without explicit consent.  

### 8. Your Rights
You have full control over your personal data. This includes requesting access to the data we hold, asking for corrections, or requesting deletion of files and account information. You may also withdraw consent or stop using our service at any time without penalty.  

### 9. Contact
If you have any concerns about this Privacy Policy or our practices, please reach out to our support team. We believe in open communication and will do our best to address privacy questions promptly and transparently.`
  },

  zh: {
    title: "隐私政策",
    subtitle:
      "我们非常重视您的隐私。本隐私政策详细说明了您在使用“文件聊天”时，我们如何收集、使用、存储和保护您的数据。",
    content: `### 1. 简介
我们相信保护您的隐私是建立信任的基础。本隐私政策解释了关于您上传的文件、我们收集的数据以及我们为确保安全所采取的措施。使用我们的服务意味着您认可这些做法以及我们对透明度的承诺。  

### 2. 收集的数据
我们仅收集提供服务所需的最少信息，包括上传的文件、用户账号信息（如电子邮件）以及匿名的使用统计数据。我们不会收集不必要的信息，也不会出售您的数据。  

### 3. 文件处理
当您上传文件时，我们的 AI 会临时分析其内容，以生成问答、摘要和翻译。除非您明确选择保存，否则文件不会长期存储。我们不会使用您的数据去训练外部 AI 模型，并始终确保文件的机密性。  

### 4. 信息使用
收集到的数据仅用于运行和改进服务。匿名数据可能用于检测滥用行为、优化性能和改善体验。我们不会将您的文件或敏感数据出售给广告商或第三方。  

### 5. 数据安全
我们采用行业标准的加密协议来保护您的数据在传输和存储中的安全。通过严格的访问控制、多层保护机制以及定期审核确保文件安全。系统会持续监控，及时发现并修复漏洞。  

### 6. 数据保留
免费用户的文件在处理完成后会被自动删除。订阅用户可以选择使用加密存储保存文件。我们只会在必要时保留账户信息，以便提供服务或符合法律要求。  

### 7. 第三方服务
我们依赖可信赖的云服务商和技术合作伙伴运营系统。这些第三方受严格约束，未经许可不得访问或使用您的数据。  

### 8. 用户权利
您有权访问、修改或删除我们持有的您的个人数据。您可以随时关闭账户或撤回授权，不会受到任何处罚。  

### 9. 联系我们
如您对隐私政策或我们的做法有任何疑问，请与我们的支持团队联系。我们承诺及时、透明地处理您的问题。`
  },

  hi: {
    title: "गोपनीयता नीति",
    subtitle:
      "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। यह नीति बताती है कि हम आपके डेटा को कैसे एकत्र, उपयोग और सुरक्षित रखते हैं।",
    content: `### 1. परिचय
हम मानते हैं कि आपकी गोपनीयता की रक्षा करना विश्वास बनाने की कुंजी है। यह नीति हमारे डेटा संग्रह और सुरक्षा उपायों की व्याख्या करती है।  

### 2. हम कौन सा डेटा एकत्र करते हैं
हम केवल उतना ही डेटा एकत्र करते हैं जितना सेवा के लिए आवश्यक है — जैसे फ़ाइलें, खाता जानकारी और उपयोग आँकड़े।  

### 3. फ़ाइल प्रसंस्करण
फ़ाइलें अस्थायी रूप से AI द्वारा विश्लेषित की जाती हैं। जब तक आप उन्हें सहेजते नहीं हैं, वे स्थायी रूप से संग्रहीत नहीं होतीं।  

### 4. जानकारी का उपयोग
सभी डेटा केवल सेवा सुधार और सुरक्षा के लिए उपयोग किया जाता है। इसे कभी बेचा या साझा नहीं किया जाता।  

### 5. सुरक्षा
हम आपके डेटा की रक्षा के लिए एन्क्रिप्शन और सख्त सुरक्षा नीतियाँ अपनाते हैं।  

### 6. डेटा प्रतिधारण
मुफ्त उपयोगकर्ताओं की फ़ाइलें स्वचालित रूप से हटा दी जाती हैं। सब्सक्राइबर उन्हें सुरक्षित रूप से सहेज सकते हैं।  

### 7. तृतीय-पक्ष सेवाएँ
हम केवल विश्वसनीय प्रदाताओं का उपयोग करते हैं।  

### 8. आपके अधिकार
आप अपना डेटा देख, संशोधित या हटाने का अनुरोध कर सकते हैं।  

### 9. संपर्क
यदि कोई प्रश्न है, तो कृपया हमारी सपोर्ट टीम से संपर्क करें।`
  },

  es: {
    title: "Política de Privacidad",
    subtitle:
      "Tu privacidad es importante para nosotros. Esta política explica cómo recopilamos, usamos y protegemos tu información.",
    content: `### 1. Introducción
Proteger tu privacidad es fundamental para generar confianza.  

### 2. Datos que recopilamos
Solo recopilamos los datos mínimos necesarios: archivos cargados, datos de cuenta y estadísticas anónimas.  

### 3. Procesamiento de archivos
Los archivos son analizados temporalmente por IA. No se almacenan permanentemente salvo que lo indiques.  

### 4. Uso de la información
La información se usa únicamente para mejorar el servicio. Nunca se vende ni comparte con terceros.  

### 5. Seguridad
Empleamos cifrado estándar y auditorías para proteger los datos.  

### 6. Retención de datos
Los archivos gratuitos se eliminan tras su uso. Los suscriptores pueden guardarlos de forma segura.  

### 7. Servicios de terceros
Trabajamos solo con proveedores confiables.  

### 8. Tus derechos
Puedes solicitar acceso, corrección o eliminación de tus datos.  

### 9. Contacto
Ante dudas, contacta con nuestro equipo de soporte.`
  },

  ar: {
    title: "سياسة الخصوصية",
    subtitle:
      "خصوصيتك مهمة بالنسبة لنا. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لبياناتك.",
    content: `### 1. المقدمة
نؤمن أن حماية الخصوصية أساس الثقة.  

### 2. البيانات التي نجمعها
نقوم بجمع الحد الأدنى من البيانات فقط: الملفات المحملة، بيانات الحساب، واستخدام مجهول.  

### 3. معالجة الملفات
تحلل ملفاتك مؤقتًا عبر الذكاء الاصطناعي ولا يتم تخزينها إلا إذا اخترت ذلك.  

### 4. استخدام المعلومات
نستخدم المعلومات فقط لتشغيل وتحسين الخدمة.  

### 5. الأمان
نطبق تشفيرًا وإجراءات صارمة لحماية البيانات.  

### 6. الاحتفاظ بالبيانات
يتم حذف الملفات للمستخدمين المجانيين بعد الاستخدام.  

### 7. خدمات الجهات الخارجية
نستخدم مزودين موثوقين فقط.  

### 8. حقوقك
يمكنك الوصول إلى بياناتك أو تعديلها أو حذفها.  

### 9. الاتصال
للاستفسارات، يرجى التواصل مع فريق الدعم لدينا.`
  },

  fr: {
    title: "Politique de Confidentialité",
    subtitle:
      "Votre vie privée est importante. Cette politique explique comment nous collectons et protégeons vos données.",
    content: `### 1. Introduction
La protection de la vie privée est essentielle pour instaurer la confiance.  

### 2. Données collectées
Nous recueillons uniquement les données nécessaires : fichiers, comptes et statistiques anonymes.  

### 3. Traitement des fichiers
Les fichiers sont temporairement analysés et non stockés sauf choix contraire.  

### 4. Utilisation des informations
Les données sont utilisées uniquement pour améliorer le service.  

### 5. Sécurité
Chiffrement et audits réguliers pour protéger vos données.  

### 6. Conservation
Les fichiers gratuits sont supprimés automatiquement.  

### 7. Tiers
Nous utilisons uniquement des prestataires fiables.  

### 8. Vos droits
Vous pouvez accéder, corriger ou supprimer vos données.  

### 9. Contact
En cas de question, contactez notre support.`
  },

  de: {
    title: "Datenschutzerklärung",
    subtitle:
      "Ihre Privatsphäre ist uns wichtig. Diese Erklärung beschreibt, wie wir Ihre Daten erfassen, verwenden und schützen.",
    content: `### 1. Einführung
Der Schutz Ihrer Privatsphäre ist für uns wesentlich.  

### 2. Welche Daten wir sammeln
Nur notwendige Daten: hochgeladene Dateien, Kontodaten, anonyme Nutzung.  

### 3. Dateiverarbeitung
Dateien werden temporär analysiert, nicht dauerhaft gespeichert.  

### 4. Nutzung
Alle Daten dienen ausschließlich der Verbesserung des Dienstes.  

### 5. Sicherheit
Wir nutzen Verschlüsselung und strenge Kontrollen.  

### 6. Aufbewahrung
Kostenlose Dateien werden automatisch gelöscht.  

### 7. Drittanbieter
Nur vertrauenswürdige Anbieter werden genutzt.  

### 8. Ihre Rechte
Sie können auf Ihre Daten zugreifen oder sie löschen.  

### 9. Kontakt
Bei Fragen wenden Sie sich an unseren Support.`
  },

  ja: {
    title: "プライバシーポリシー",
    subtitle:
      "あなたのプライバシーは大切です。このポリシーはデータの収集と利用方法を説明します。",
    content: `### 1. はじめに
プライバシー保護は信頼構築の基本です。  

### 2. 収集するデータ
必要最小限のデータのみ収集します。  

### 3. ファイル処理
AIが一時的に分析し、保存はしません。  

### 4. 情報の利用
改善と安全性のためのみ使用します。  

### 5. セキュリティ
暗号化でデータを保護します。  

### 6. 保管期間
無料ユーザーのファイルは自動削除されます。  

### 7. サードパーティ
信頼できる業者のみ使用します。  

### 8. 権利
アクセス・修正・削除を要求できます。  

### 9. 連絡先
ご不明点はサポートまで。`
  },

  ur: {
    title: "پرائیویسی پالیسی",
    subtitle:
      "آپ کی پرائیویسی ہمارے لیے اہم ہے۔ یہ پالیسی وضاحت کرتی ہے کہ ہم آپ کا ڈیٹا کیسے جمع اور محفوظ کرتے ہیں۔",
    content: `### 1. تعارف
پرائیویسی کا تحفظ اعتماد کی بنیاد ہے۔  

### 2. ہم کیا ڈیٹا جمع کرتے ہیں
ہم صرف ضروری ڈیٹا جمع کرتے ہیں: فائلز، اکاؤنٹ کی معلومات، اور استعمال کے اعدادوشمار۔  

### 3. فائل پروسیسنگ
فائلز عارضی طور پر تجزیہ کی جاتی ہیں، جب تک آپ انہیں محفوظ نہ کریں۔  

### 4. معلومات کا استعمال
ڈیٹا صرف سروس بہتر بنانے کے لیے استعمال ہوتا ہے۔  

### 5. سیکیورٹی
ہم انکرپشن اور سخت حفاظتی اقدامات اپناتے ہیں۔  

### 6. ڈیٹا برقرار رکھنا
مفت صارفین کی فائلز خودکار طور پر حذف ہو جاتی ہیں۔  

### 7. تھرڈ پارٹی
ہم صرف معتبر فراہم کنندگان استعمال کرتے ہیں۔  

### 8. آپ کے حقوق
آپ اپنا ڈیٹا دیکھ، درست یا حذف کر سکتے ہیں۔  

### 9. رابطہ
کسی سوال کے لیے سپورٹ ٹیم سے رابطہ کریں۔`
  },

  pt: {
    title: "Política de Privacidade",
    subtitle:
      "Sua privacidade é importante. Esta política explica como coletamos e usamos seus dados.",
    content: `### 1. Introdução
Proteger a privacidade é essencial.  

### 2. Dados coletados
Coletamos apenas dados necessários: arquivos, conta e estatísticas anônimas.  

### 3. Processamento
Arquivos analisados temporariamente, não armazenados.  

### 4. Uso
Usados somente para melhorias.  

### 5. Segurança
Criptografia e controles rígidos.  

### 6. Retenção
Arquivos gratuitos apagados automaticamente.  

### 7. Terceiros
Usamos apenas provedores confiáveis.  

### 8. Direitos
Você pode acessar ou excluir seus dados.  

### 9. Contato
Em caso de dúvida, fale com o suporte.`
  },

  ru: {
    title: "Политика конфиденциальности",
    subtitle:
      "Ваша конфиденциальность важна для нас. Эта политика объясняет, как мы собираем и используем данные.",
    content: `### 1. Введение
Защита конфиденциальности — основа доверия.  

### 2. Какие данные мы собираем
Только необходимые: файлы, учетные данные, анонимная статистика.  

### 3. Обработка файлов
Файлы анализируются временно, не сохраняются.  

### 4. Использование
Используются лишь для улучшения сервиса.  

### 5. Безопасность
Шифрование и строгие меры защиты.  

### 6. Хранение
Файлы бесплатных пользователей удаляются автоматически.  

### 7. Сторонние сервисы
Только проверенные провайдеры.  

### 8. Ваши права
Вы можете запросить доступ или удаление.  

### 9. Контакты
Вопросы направляйте в поддержку.`
  },

  ko: {
    title: "개인정보 처리방침",
    subtitle:
      "당신의 개인정보는 중요합니다. 이 방침은 데이터 수집 및 이용 방법을 설명합니다.",
    content: `### 1. 소개
개인정보 보호는 신뢰의 핵심입니다.  

### 2. 수집 데이터
필수 데이터만 수집합니다.  

### 3. 파일 처리
AI가 일시적으로 분석하며 저장하지 않습니다.  

### 4. 이용
서비스 개선에만 사용합니다.  

### 5. 보안
암호화로 데이터 보호.  

### 6. 보관
무료 사용자의 파일은 자동 삭제됩니다.  

### 7. 제3자
신뢰할 수 있는 업체만 사용합니다.  

### 8. 권리
데이터 열람, 수정, 삭제 가능.  

### 9. 문의
질문은 지원팀으로 연락주세요.`
  }
}
