export const LANGUAGES = ["uz", "ru", "en"] as const;
export type Lang = (typeof LANGUAGES)[number];

export const LANG_LABEL: Record<Lang, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

export const LANG_HTML: Record<Lang, string> = {
  uz: "uz",
  ru: "ru",
  en: "en",
};

type Dict = {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    badge: string;
    role: string;
    intro: string;
    cta: { projects: string; contact: string };
    scroll: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    stats: { label: string; value: string }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: { title: string; items: string[] }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    period: string;
    current: string;
    role: string;
    company: string;
    body: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    visit: string;
    bot: string;
  };
  education: {
    eyebrow: string;
    title: string;
    school: string;
    program: string;
    period: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailLabel: string;
    phoneLabel: string;
    githubLabel: string;
  };
  footer: {
    role: string;
    rights: string;
  };
};

export const DICT: Record<Lang, Dict> = {
  uz: {
    nav: {
      about: "Haqimda",
      skills: "Ko'nikmalar",
      experience: "Tajriba",
      projects: "Loyihalar",
      education: "Ta'lim",
      contact: "Aloqa",
    },
    hero: {
      badge: "Yangi loyihalarni qabul qilaman",
      role: "Software Developer",
      intro:
        "Python backend, Telegram avtomatlashtirish va to'lov tizimlari ustida ishlayman. Telegram botlar, Mini App, API va to'lov integratsiyalarini ishlab chiqishga ixtisoslashganman.",
      cta: { projects: "Loyihalarni ko'rish", contact: "Aloqa" },
      scroll: "Pastga",
    },
    about: {
      eyebrow: "Profil",
      title: "Ishonchli backend, bot va to'lov tajribalarini quraman.",
      body: "Asinxron Python, real vaqtli integratsiyalar va bulut platformalarida ishlab chiqarishga tayyor xizmatlar bo'yicha tajribali. To'lov, foydalanuvchi hayot tsikli va mahsulot konversiyasi nuqtai nazaridan o'ylaydigan dasturchi.",
      stats: [
        { label: "Mahsulotlar", value: "6+" },
        { label: "Til", value: "3" },
        { label: "Pythonda kod yozaman", value: "3+ yil" },
      ],
    },
    skills: {
      eyebrow: "Texnik ko'nikmalar",
      title: "Foydalanadigan stek",
      groups: [
        {
          title: "Tillar va freymverklar",
          items: [
            "Python",
            "Django",
            "FastAPI",
            "Node.js / Express",
            "React",
            "REST API",
            "HTML / CSS / JS",
          ],
        },
        {
          title: "Ma'lumot va infrastruktura",
          items: ["PostgreSQL", "MySQL", "Redis", "Git", "GitHub"],
        },
        {
          title: "Telegram va to'lovlar",
          items: [
            "Aiogram 3.x",
            "asyncio",
            "Telegram Bot API",
            "Telegram Mini Apps",
            "TON (QR, izoh tekshiruvi)",
            "Humo / Click / Payme",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Tajriba",
      title: "Hozir qayerda ishlayman",
      period: "15 dek 2025 — Hozirgacha",
      current: "Joriy ish",
      role: "Software Developer",
      company: "Weblinker",
      body: "Weblinker mahsulotlari va kampaniya yo'nalishidagi texnik vazifalar bo'yicha jamoada ishlayman: yangi funksiyalar, integratsiyalar va saytni rivojlantirish.",
    },
    projects: {
      eyebrow: "Loyihalar",
      title: "Tanlangan ishlar",
      visit: "Saytga o'tish",
      bot: "Telegram bot",
    },
    education: {
      eyebrow: "Ta'lim",
      title: "Akademik fon",
      school: "Toshkent Axborot Texnologiyalari Universiteti",
      program: "Kompyuter injineriyasi",
      period: "2022 — 2026",
    },
    contact: {
      eyebrow: "Aloqa",
      title: "Birgalikda solid mahsulot quraylik.",
      body: "Yangi loyihalar, hamkorlik yoki shunchaki suhbat — yozing.",
      emailLabel: "Elektron pochta",
      phoneLabel: "Telefon",
      githubLabel: "GitHub",
    },
    footer: {
      role: "Software developer · Telegram · API · To'lovlar",
      rights: "Barcha huquqlar himoyalangan",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      experience: "Опыт",
      projects: "Проекты",
      education: "Образование",
      contact: "Контакты",
    },
    hero: {
      badge: "Открыт к новым проектам",
      role: "Software Developer",
      intro:
        "Работаю с Python-бэкендом, Telegram-автоматизацией и платёжными системами. Специализируюсь на ботах, Mini Apps, API и интеграциях платежей.",
      cta: { projects: "Смотреть проекты", contact: "Связаться" },
      scroll: "Прокрутить",
    },
    about: {
      eyebrow: "Профиль",
      title:
        "Создаю надёжные бэкенды, ботов и платёжные сценарии.",
      body: "Опытен в асинхронном Python, real-time интеграциях и продакшен-сервисах в облаке. Думаю в категориях оплат, жизненного цикла пользователя и продуктовой конверсии.",
      stats: [
        { label: "Продукты", value: "6+" },
        { label: "Языки", value: "3" },
        { label: "Опыт на Python", value: "3+ года" },
      ],
    },
    skills: {
      eyebrow: "Технические навыки",
      title: "Мой стек",
      groups: [
        {
          title: "Языки и фреймворки",
          items: [
            "Python",
            "Django",
            "FastAPI",
            "Node.js / Express",
            "React",
            "REST API",
            "HTML / CSS / JS",
          ],
        },
        {
          title: "Данные и инфраструктура",
          items: ["PostgreSQL", "MySQL", "Redis", "Git", "GitHub"],
        },
        {
          title: "Telegram и платежи",
          items: [
            "Aiogram 3.x",
            "asyncio",
            "Telegram Bot API",
            "Telegram Mini Apps",
            "TON (QR, проверка комментария)",
            "Humo / Click / Payme",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Опыт",
      title: "Где я работаю сейчас",
      period: "15 дек 2025 — Настоящее время",
      current: "Текущая роль",
      role: "Software Developer",
      company: "Weblinker",
      body: "Работаю в команде Weblinker над продуктами и кампанийными задачами: новые функции, интеграции и развитие сайта.",
    },
    projects: {
      eyebrow: "Проекты",
      title: "Избранные работы",
      visit: "Перейти на сайт",
      bot: "Telegram-бот",
    },
    education: {
      eyebrow: "Образование",
      title: "Академический бэкграунд",
      school: "Ташкентский университет информационных технологий",
      program: "Компьютерная инженерия",
      period: "2022 — 2026",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Давайте сделаем что-то стоящее.",
      body: "Новый проект, сотрудничество или просто разговор — напишите.",
      emailLabel: "Email",
      phoneLabel: "Телефон",
      githubLabel: "GitHub",
    },
    footer: {
      role: "Software developer · Telegram · API · Платежи",
      rights: "Все права защищены",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      badge: "Open to new projects",
      role: "Software Developer",
      intro:
        "I work on Python backends, Telegram automation, and payment systems — specialising in bots, Mini Apps, APIs, and payment integrations.",
      cta: { projects: "View projects", contact: "Get in touch" },
      scroll: "Scroll",
    },
    about: {
      eyebrow: "Profile",
      title: "Building reliable backends, bots, and payment experiences.",
      body: "Comfortable with async Python, real-time integrations, and production-ready services on the cloud. I think in terms of payments, user lifecycle, and product conversion.",
      stats: [
        { label: "Shipped products", value: "6+" },
        { label: "Languages", value: "3" },
        { label: "Python experience", value: "3+ yrs" },
      ],
    },
    skills: {
      eyebrow: "Technical skills",
      title: "Stack I ship with",
      groups: [
        {
          title: "Languages & frameworks",
          items: [
            "Python",
            "Django",
            "FastAPI",
            "Node.js / Express",
            "React",
            "REST APIs",
            "HTML / CSS / JS",
          ],
        },
        {
          title: "Data & infra",
          items: ["PostgreSQL", "MySQL", "Redis", "Git", "GitHub"],
        },
        {
          title: "Telegram & payments",
          items: [
            "Aiogram 3.x",
            "asyncio",
            "Telegram Bot API",
            "Telegram Mini Apps",
            "TON (QR, comment verification)",
            "Humo / Click / Payme",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Where I build",
      period: "Dec 15, 2025 — Present",
      current: "Current role",
      role: "Software Developer",
      company: "Weblinker",
      body: "Working with the Weblinker team on product and campaign-related delivery: features, integrations, and ongoing web work.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected work",
      visit: "Visit site",
      bot: "Telegram bot",
    },
    education: {
      eyebrow: "Education",
      title: "Academic background",
      school: "Tashkent University of Information Technologies",
      program: "Computer Engineering",
      period: "2022 — 2026",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something solid.",
      body: "New project, collaboration, or just a chat — drop a line.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      githubLabel: "GitHub",
    },
    footer: {
      role: "Software developer · Telegram · APIs · Payments",
      rights: "All rights reserved",
    },
  },
};
