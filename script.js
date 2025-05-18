const translations = {
  uz: {
    title: "Mening Portfoliom",
    greeting: "Salom, men dasturchiman",
    subtitle: "Men avtomatlashtirilgan Telegram botlar ishlab chiqaman.",
    see_projects: "Loyihalarni ko‘rish",
    about_title: "Men haqimda",
    about_text: "Telegram botlar, FastAPI, PostgreSQL va TON bilan ishlayman.",
    projects_title: "Loyihalar",
    project_desc: "TON orqali yulduz sotib olish, referal tizimi, admin panel va Mini App bilan bog‘liq Telegram boti.",
    contact_title: "Bog‘lanish",
    contact_text: "Menga Telegram orqali murojaat qilishingiz mumkin.",
    footer_rights: "© 2025. Barcha huquqlar himoyalangan."
  },
  en: {
    title: "My Portfolio",
    greeting: "Hi, I'm a developer",
    subtitle: "I build automated Telegram bots.",
    see_projects: "View Projects",
    about_title: "About Me",
    about_text: "I work with Telegram bots, FastAPI, PostgreSQL, and TON.",
    projects_title: "Projects",
    project_desc: "A Telegram bot for buying stars via TON, referral system, admin panel, and Mini App.",
    contact_title: "Contact",
    contact_text: "You can reach me via Telegram.",
    footer_rights: "© 2025. All rights reserved."
  },
  ru: {
    title: "Моё портфолио",
    greeting: "Здравствуйте, я разработчик",
    subtitle: "Я создаю автоматизированные Telegram-боты.",
    see_projects: "Посмотреть проекты",
    about_title: "Обо мне",
    about_text: "Я работаю с Telegram-ботами, FastAPI, PostgreSQL и TON.",
    projects_title: "Проекты",
    project_desc: "Telegram-бот для покупки звёзд через TON, с реферальной системой, админ-панелью и Mini App.",
    contact_title: "Контакты",
    contact_text: "Вы можете связаться со мной через Telegram.",
    footer_rights: "© 2025. Все права защищены."
  }
};

function setLang(lang) {
  const t = translations[lang];
  for (const key in t) {
    const el = document.getElementById(key);
    if (el) el.textContent = t[key];
  }
  document.title = t.title;
}