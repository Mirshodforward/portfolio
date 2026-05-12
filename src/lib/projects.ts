import type { Lang } from "./i18n/dictionaries";

export type ProjectLink = {
  href: string;
  label: string;
  kind: "site" | "bot";
};

export type ProjectAccent = "blue" | "indigo" | "teal" | "violet" | "amber" | "slate" | "cyan";

export type Project = {
  id: string;
  index: string;
  title: string;
  year: string;
  tags: string[];
  accent: ProjectAccent;
  links: ProjectLink[];
  subtitle: Record<Lang, string>;
  bullets: Record<Lang, string[]>;
};

export const PROJECTS: Project[] = [
  {
    id: "starspaymee",
    index: "01",
    title: "StarsPaymee",
    year: "2025",
    tags: ["Mini App", "React", "Express", "Postgres"],
    accent: "indigo",
    links: [
      { href: "https://www.starstg.uz/en", label: "starstg.uz", kind: "site" },
      {
        href: "https://t.me/StarsPaymee_bot",
        label: "@StarsPaymee_bot",
        kind: "bot",
      },
    ],
    subtitle: {
      uz: "Telegram Mini App va sayt: Stars, Premium va Gifts uchun yagona kokpit.",
      ru: "Telegram Mini App и сайт: единый кокпит для Stars, Premium и Gifts.",
      en: "Telegram Mini App and site — a single cockpit for Stars, Premium, and Gifts.",
    },
    bullets: {
      uz: [
        "UZ / RU / EN saytda Stars, Premium (3/6/12 oy), Gifts va eski sovg'a oqimlari uchun aniq hikoya.",
        "UZS-da to'lov UX'i: UzCard / HUMO, qabul qiluvchi tekshiruvi, buyurtmalar tarixi, referal va promokodlar.",
        "Ishonch va xavfsizlik: initData HMAC tekshiruvi, rate limit, headerlar va order tracking.",
        "Express / Postgres / React stek bilan moslashgan komponentli arxitektura.",
      ],
      ru: [
        "Сайт на UZ / RU / EN с понятной структурой для Stars, Premium (3/6/12 мес), Gifts и сценариев старых подарков.",
        "Оплаты в UZS: UzCard / HUMO, проверка получателя, история заказов, рефералы и промокоды.",
        "Доверие и безопасность: проверка initData HMAC, rate limit, заголовки и трекинг заказов.",
        "Модульная архитектура под стек Express / Postgres / React.",
      ],
      en: [
        "Trilingual site (UZ/RU/EN) explaining Stars, Premium (3/6/12 mo), Gifts, and legacy gift flows.",
        "Payment UX in UZS: UzCard/HUMO, recipient checks, order history, referrals and promo codes.",
        "Trust and security: initData HMAC verification, rate limiting, hardened headers, and order tracking.",
        "Modular architecture mapped to an Express / Postgres / React stack.",
      ],
    },
  },
  {
    id: "starsbot",
    index: "02",
    title: "Stars Bot",
    year: "2025",
    tags: ["Aiogram", "Python", "TON", "Humo"],
    accent: "blue",
    links: [
      {
        href: "https://t.me/StarsPaymee_bot",
        label: "@StarsPaymee_bot",
        kind: "bot",
      },
    ],
    subtitle: {
      uz: "StarsPaymee uchun Telegram bot va backend: Stars, to'lovlar, admin va Mini App bilan integratsiya.",
      ru: "Бот и бэкенд для StarsPaymee: Stars, платежи, админка и связка с Mini App.",
      en: "Telegram bot and backend for StarsPaymee — Stars, payments, admin tools, and Mini App pairing.",
    },
    bullets: {
      uz: [
        "Humo karta va TON to'lovlari (QR va izohga asoslangan tekshirish).",
        "Balans boshqaruvi, foydalanuvchi filtrlari va statistika uchun admin panel.",
        "Referal tizimi orqali foydalanuvchilarni jalb qilish va saqlash.",
        "HTML / CSS / JS Mini App bilan real vaqtli integratsiya.",
      ],
      ru: [
        "Платежи Humo и TON (QR-сценарии и проверка по комментарию).",
        "Админ-инструменты: баланс, фильтры пользователей и статистика.",
        "Реферальная система для привлечения и удержания.",
        "Связка с Mini App (HTML / CSS / JS) в реальном времени.",
      ],
      en: [
        "Payments with Humo cards and TON (QR flows and comment verification).",
        "Admin tools for balances, user filtering, and analytics.",
        "Referral system to grow and retain users.",
        "Real-time integration with a Telegram Mini App (HTML / CSS / JS).",
      ],
    },
  },
  {
    id: "weblinker",
    index: "03",
    title: "Weblinker",
    year: "2025",
    tags: ["SaaS", "Landing", "Astro"],
    accent: "cyan",
    links: [
      { href: "https://weblinker.uz/", label: "weblinker.uz", kind: "site" },
    ],
    subtitle: {
      uz: "Tadbirkorlar uchun no-code biznes-sayt yaratuvchi: shablon tanlang va 15 daqiqada chiqing.",
      ru: "No-code конструктор бизнес-сайта для предпринимателей: выберите шаблон и запустите за 15 минут.",
      en: "No-code business site builder — pick a template, fill copy, and launch in 15 minutes.",
    },
    bullets: {
      uz: [
        "Vizitka va Landing tariflari, oylik / 3 / 6 / 12 oylik paketlar va so'mdagi narxlar.",
        "Kartasiz boshlash, 10 kun bepul davr va istalgan vaqtda bekor qilish — ishonch nuqtalari.",
        "Bir ekranli karta'dan ko'p bo'limli landing'gacha aniq farqlangan funksiya hikoyalari.",
        "Mobilga moslashgan dizayn — yakka tadbirkorga tez veb-mavjudlik beradi.",
      ],
      ru: [
        "Тарифы Vizitka и Landing с месячными / 3 / 6 / 12-месячными пакетами и ценами в сумах.",
        "Старт без карты, 10-дневный бесплатный период и отмена в любое время.",
        "Чёткое различие функций — от одностраничной визитки до многосекционного лендинга.",
        "Mobile-first дизайн для быстрого выхода в онлайн соло-предпринимателей.",
      ],
      en: [
        "Vizitka and Landing plans with monthly / 3 / 6 / 12-month bundles and soum pricing.",
        "Card-free start, 10-day free window and cancel anytime — trust cues throughout.",
        "Clearly differentiated feature stories — single-screen card vs multi-section landing.",
        "Mobile-first design for solo founders who need a credible presence fast.",
      ],
    },
  },
  {
    id: "getolog",
    index: "04",
    title: "Getolog",
    year: "2025",
    tags: ["Telegram", "SaaS", "Subscriptions"],
    accent: "violet",
    links: [
      { href: "https://www.getolog.uz/", label: "getolog.uz", kind: "site" },
    ],
    subtitle: {
      uz: "Yopiq Telegram kanallarini avtomatlashtirish uchun SaaS: to'lov, taklif havolasi va a'zolik.",
      ru: "SaaS для автоматизации закрытых Telegram-каналов: оплата, инвайт-ссылки и членство.",
      en: "SaaS for paid Telegram channels — payments, one-time invite links, and membership automation.",
    },
    bullets: {
      uz: [
        "Yopiq kanal va guruhlarni monetizatsiya qilish bo'yicha sayt va mahsulot hikoyasi.",
        "Bot tokenini ulash, kanalni biriktirish va narxni belgilash — no-code oqim; bepul va pulli tariflar.",
        "Bir martalik havolalar, muddati tugashidan oldin eslatmalar, avtomatik chiqarish.",
        "Imkoniyatlar, qanday ishlaydi, tariflar va FAQ — registratsiya uchun aniq voronka.",
      ],
      ru: [
        "Сайт и продуктовая история монетизации закрытых каналов и групп.",
        "No-code сценарий: подключить токен бота, привязать канал, задать цены; бесплатные и платные тарифы.",
        "Одноразовые инвайт-ссылки, напоминания до окончания и автоудаление по истечении.",
        "Возможности, «как это работает», тарифы и FAQ — чёткая воронка регистрации.",
      ],
      en: [
        "Public site and product story for monetizing private Telegram channels and groups.",
        "No-code flow: connect bot token, bind channel, set pricing — with free and paid tiers.",
        "Single-use invite links, renewal reminders, and automatic removal on expiry.",
        "Capabilities, how-it-works, pricing, and FAQ — a clean funnel into sign-up.",
      ],
    },
  },
  {
    id: "starsjoy",
    index: "05",
    title: "StarsJoy",
    year: "2025",
    tags: ["Landing", "Telegram", "Marketing"],
    accent: "amber",
    links: [
      { href: "https://www.starsjoy.uz/", label: "starsjoy.uz", kind: "site" },
      {
        href: "https://t.me/starsjoybot",
        label: "@starsjoybot",
        kind: "bot",
      },
    ],
    subtitle: {
      uz: "Telegram Stars, Premium va Gifts uchun marketing sayti — botga konversion oqim.",
      ru: "Маркетинговый сайт для Telegram Stars, Premium и Gifts — конверсия в бот.",
      en: "Marketing site for Telegram Stars, Premium, and Gifts — bot-first conversion flow.",
    },
    bullets: {
      uz: [
        "Hero va xizmat bloklari Stars, Premium va Gifts uchun; asosiy CTA — botga o'tish.",
        "Aniq qadamlar: bot, tanlov, to'lov, 5 daqiqada yetkazib berish kafolati.",
        "Sharhlar, kafolatlar va referal dasturi orqali ishonch hosil qilish.",
        "FAQ va biznes uchun integratsiya yo'llari — to'lov va muddatlarni aniqlashtirish.",
      ],
      ru: [
        "Hero и блоки услуг под Stars, Premium и Gifts; основной CTA — переход в бот.",
        "Чёткие шаги: бот, выбор, оплата, гарантия доставки за 5 минут.",
        "Отзывы, гарантии и реферальная программа — формирование доверия.",
        "FAQ и сценарии для бизнеса — оплата и сроки.",
      ],
      en: [
        "Hero and service blocks for Stars, Premium, and Gifts with bot as the primary CTA.",
        "Clear steps: bot, choose service, pay, and a 5-minute delivery guarantee.",
        "Testimonials, guarantees, and a referral programme to build trust.",
        "FAQ and B2B cues — payments and delivery expectations made concrete.",
      ],
    },
  },
  {
    id: "premiumsend",
    index: "06",
    title: "Premium Send",
    year: "2025",
    tags: ["Storefront", "Telegram Premium", "SEO"],
    accent: "slate",
    links: [
      {
        href: "https://www.premiumsend.uz/",
        label: "premiumsend.uz",
        kind: "site",
      },
      {
        href: "https://t.me/premiumsendbot",
        label: "@premiumsendbot",
        kind: "bot",
      },
    ],
    subtitle: {
      uz: "O'zbekistonda Telegram Premium sotib olish: so'mda to'lov, mahalliy kartalar.",
      ru: "Покупка Telegram Premium в Узбекистане: оплата в сумах, локальные карты.",
      en: "Buy Telegram Premium in Uzbekistan — pay in soum with local cards.",
    },
    bullets: {
      uz: [
        "Konversiyaga yo'naltirilgan landing: hero, qiymat takliflari va aniq narxlar (1/3/6/12 oy).",
        "Premium imkoniyatlari grid, sotib olish qadamlari va batafsil FAQ.",
        "To'lov hikoyasi: UzCard / Humo, Click / Payme, rasmiy Premium gift orqali aktivatsiya.",
        "SEO uchun uzun matn va aniq URL strukturasi.",
      ],
      ru: [
        "Конверсионный лендинг: hero, ценности и понятные цены (1/3/6/12 мес).",
        "Сетка возможностей Premium, шаги покупки и развёрнутый FAQ.",
        "Платежи: UzCard / Humo, Click / Payme; активация официальным Premium gift.",
        "Длинные SEO-секции и аккуратная структура URL.",
      ],
      en: [
        "Conversion-focused landing: hero, value props, and transparent pricing (1/3/6/12 mo).",
        "Premium feature grid, purchase steps, and a thorough FAQ.",
        "Payment story: UzCard / Humo, Click / Payme; activation via official Premium gift.",
        "Long-form SEO sections and a clean URL structure.",
      ],
    },
  },
  {
    id: "nuvita",
    index: "07",
    title: "Nuvita.uz",
    year: "2025",
    tags: ["E-commerce", "Storefront", "i18n"],
    accent: "teal",
    links: [
      { href: "https://nuvita.uz/", label: "nuvita.uz", kind: "site" },
      {
        href: "https://t.me/nuvitauzbot",
        label: "@nuvitauzbot",
        kind: "bot",
      },
    ],
    subtitle: {
      uz: "Tabiiy va sifatli mahsulotlar uchun onlayn dorixona: katalog, blog va aloqa.",
      ru: "Онлайн-аптека натуральных и качественных продуктов: каталог, блог и контакты.",
      en: "Online pharmacy for natural, quality products — catalog, blog, and contact.",
    },
    bullets: {
      uz: [
        "To'liq do'kon: bosh sahifa, katalog, blog, aloqa va akkaunt oqimi.",
        "UZ / RU / EN tilida moslashtirilgan, yetkazib berish va to'lov xabarlari aniq.",
        "Click / Payme / naqd to'lovlar; tezkor Telegram aloqa kanali.",
        "Tizimga kirgan foydalanuvchilar uchun Nuvita AI yordamchisi.",
      ],
      ru: [
        "Полный сторфронт: главная, каталог, блог, контакты и аккаунт.",
        "UZ / RU / EN адаптация с ясными сообщениями о доставке и оплате.",
        "Click / Payme / наличные; быстрый канал поддержки через Telegram.",
        "Помощник Nuvita AI для авторизованных пользователей.",
      ],
      en: [
        "Full storefront: home, catalog, blog, contact, and account flows.",
        "UZ / RU / EN localisation with clear delivery and payment messaging.",
        "Click / Payme / cash payments and a fast Telegram support channel.",
        "Nuvita AI helper for signed-in users.",
      ],
    },
  },
];
