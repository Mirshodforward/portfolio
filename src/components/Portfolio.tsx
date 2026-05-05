"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[#f8fbff]"
        aria-hidden
      />
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f8fbff]"
      aria-hidden
    >
      <div className="hero-grid absolute inset-0 opacity-[0.55]" />
      <motion.div
        className="absolute -left-32 top-[8%] h-[min(38rem,90vw)] w-[min(38rem,90vw)] rounded-full bg-gradient-to-br from-blue-400/45 via-sky-300/35 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.06, 1],
          x: [0, 24, 0],
          y: [0, -16, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-[33%] h-[min(32rem,85vw)] w-[min(32rem,85vw)] rounded-full bg-gradient-to-bl from-indigo-400/35 via-blue-500/25 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[15%] h-72 w-96 rounded-full bg-sky-200/50 blur-3xl"
        animate={{ opacity: [0.35, 0.55, 0.35], y: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.6, delay, ease: easeSmooth }}
    >
      {children}
    </motion.div>
  );
}

function SiteHeader() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: easeSmooth }}
      className="sticky top-0 z-50 border-b border-blue-100/90 bg-white/80 shadow-[0_1px_0_rgba(37,99,235,0.06)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/72"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <Link
            href="#"
            className="group flex items-center gap-0.5 text-sm font-semibold tracking-tight text-slate-900 sm:text-base"
          >
            <span>MQ</span>
            <motion.span
              className="inline-block text-blue-600"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }}
            >
              .
            </motion.span>
          </Link>
          <nav
            className="hidden items-center gap-7 text-sm text-slate-600 md:flex"
            aria-label="Primary"
          >
            {nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="group relative transition-colors hover:text-blue-700"
                initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 * i + 0.15,
                  duration: 0.4,
                  ease: easeSmooth,
                }}
                whileHover={{ y: -1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
          <motion.a
            href="https://github.com/Mirshodforward"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-3 py-1.5 text-sm font-medium text-blue-800 shadow-sm shadow-blue-900/5 transition-colors hover:border-blue-300 hover:bg-blue-50"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
          >
            <GitHubIcon className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </motion.a>
        </div>
        <nav
          className="-mx-4 flex gap-1.5 overflow-x-auto border-t border-blue-100/80 px-4 py-2.5 md:hidden [-webkit-overflow-scrolling:touch]"
          aria-label="Sections"
        >
          {nav.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
              whileTap={{ scale: 0.97 }}
              whileHover={{
                backgroundColor: "rgb(239 246 255)",
                borderColor: "rgb(191 219 254)",
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

const heroStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeSmooth },
  },
};

function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative px-4 pb-20 pt-14 sm:px-6 sm:pt-20 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={reduceMotion ? undefined : heroStagger}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "show"}
          className="flex flex-col"
        >
          <motion.p
            variants={reduceMotion ? undefined : heroChild}
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 shadow-md shadow-blue-900/5"
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-blue-500"
              animate={
                reduceMotion
                  ? undefined
                  : { scale: [1, 1.25, 1], opacity: [1, 0.7, 1] }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            Open to opportunities
          </motion.p>
          <motion.h1
            variants={reduceMotion ? undefined : heroChild}
            className="max-w-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800 bg-clip-text text-4xl font-semibold leading-[1.08] tracking-tight text-transparent sm:text-5xl md:text-6xl"
          >
            Mirshodbek Qahramonov
          </motion.h1>
          <motion.div
            variants={reduceMotion ? undefined : heroChild}
            className="mt-5 max-w-xl"
          >
            <p className="text-xl font-medium text-blue-700 sm:text-2xl">
              Software Developer
            </p>
            <motion.div
              className="mt-3 h-1 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500"
              initial={reduceMotion ? false : { scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.45, duration: 0.65, ease: easeSmooth }}
            />
          </motion.div>
          <motion.p
            variants={reduceMotion ? undefined : heroChild}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Python backend and Telegram automation specialist focused on
            scalable bots, APIs, and payment flows—from TON and card
            integrations to production deployments.
          </motion.p>
          <motion.div
            variants={reduceMotion ? undefined : heroChild}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30"
              whileHover={{ y: -3, boxShadow: "0 20px 40px -12px rgba(37,99,235,0.45)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              View projects
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-800 shadow-sm"
              whileHover={{
                y: -2,
                backgroundColor: "rgb(239 246 255)",
                borderColor: "rgb(147 197 253)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              Get in touch
            </motion.a>
            <motion.a
              href="https://t.me/StarsPaymee_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-3 py-2.5 text-sm font-medium text-slate-600"
              whileHover={{ x: 2, color: "rgb(29 78 216)" }}
            >
              <TelegramIcon className="h-5 w-5 text-sky-600" />
              Live bot
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-blue-100/90 bg-white/50 px-4 py-16 backdrop-blur-sm sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Profile
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Building reliable backends, bots, and payment experiences.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Motivated and detail-oriented developer with experience delivering
            scalable Telegram bots, REST and async APIs, and payment systems.
            Comfortable with asynchronous Python, real-time integrations, and
            shipping production-ready services on cloud infrastructure.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="mt-8 flex flex-wrap gap-2">
          {[
            "English — Upper Intermediate",
            "Uzbek — Native",
            "Russian — Beginner",
          ].map((lang, i) => (
            <motion.span
              key={lang}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 + 0.2, duration: 0.45, ease: easeSmooth }}
              whileHover={{ y: -2, scale: 1.02 }}
              className="cursor-default rounded-xl border border-blue-100 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-blue-900/5"
            >
              {lang}
            </motion.span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const skillGroups = [
  {
    title: "Languages & frameworks",
    items: [
      "Python",
      "Django",
      "FastAPI",
      "Node.js / Express",
      "React",
      "REST APIs",
      "HTML / CSS / JavaScript",
    ],
  },
  {
    title: "Data & infra",
    items: ["MySQL", "PostgreSQL", "Redis", "Git", "GitHub"],
  },
  {
    title: "Telegram & payments",
    items: [
      "Aiogram 3.x",
      "asyncio",
      "Telegram Bot API (polling)",
      "Telegram Mini Apps",
      "TON payments (QR, comment verification)",
      "Humo & Click-style flows",
    ],
  },
];

const skillListParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045 },
  },
};

const skillListChild = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: easeSmooth },
  },
};

function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-blue-100/90 bg-gradient-to-b from-blue-50/80 via-white to-white px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Technical skills
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Stack I ship with
          </p>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <motion.div
                className="group h-full rounded-3xl border border-blue-100/90 bg-white p-6 shadow-[0_20px_50px_-24px_rgba(37,99,235,0.25)]"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -8, transition: { type: "spring", stiffness: 380, damping: 22 } }
                }
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-blue-600 to-sky-500" />
                <h3 className="text-sm font-bold text-slate-900">{group.title}</h3>
                <motion.ul
                  className="mt-4 flex flex-wrap gap-2"
                  variants={reduceMotion ? undefined : skillListParent}
                  initial={reduceMotion ? false : "hidden"}
                  whileInView={reduceMotion ? undefined : "show"}
                  viewport={{ once: true, margin: "-30px" }}
                >
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={reduceMotion ? undefined : skillListChild}
                      className="rounded-lg border border-blue-100 bg-blue-50/80 px-2.5 py-1 text-xs font-medium text-blue-950 sm:text-sm"
                      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-blue-100/90 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Education
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <motion.div
            className="relative mt-8 overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 pt-9 shadow-xl shadow-blue-900/10 sm:p-8 sm:pt-11"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500" />
            <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Tashkent University of Information Technologies
                </h3>
                <p className="mt-1 font-medium text-slate-600">
                  Computer Engineering
                </p>
              </div>
              <span className="w-fit shrink-0 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                2022 — 2026
              </span>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-blue-100/90 bg-gradient-to-b from-white via-blue-50/50 to-white px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Projects
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Selected work
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_24px_60px_-24px_rgba(30,64,175,0.35)]">
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 px-6 py-7 text-white sm:px-8 sm:py-8">
              <motion.div
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl"
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }
                }
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">Stars Bot</h3>
                  <p className="mt-2 max-w-xl text-sm text-blue-100 sm:text-base">
                    Telegram bot for purchasing Stars (Telegram currency).
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    {
                      href: "https://t.me/StarsPaymee_bot",
                      label: "@StarsPaymee_bot",
                      icon: TelegramIcon,
                    },
                    {
                      href: "https://starstg.uz",
                      label: "starstg.uz",
                      icon: ExternalIcon,
                    },
                  ].map(({ href, label, icon: Icon }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-3.5 py-2 text-sm font-semibold text-white backdrop-blur-sm"
                      whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.28)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-6 py-7 sm:px-8 sm:py-8">
              <ul className="space-y-4 text-slate-700">
                {[
                  "Payment integration with Humo cards and TON (QR-based flows and comment verification).",
                  "Admin tools for balances, user filtering, and analytics.",
                  "Referral system to grow and retain users.",
                  "Real-time Telegram Mini App integration (HTML / CSS / JavaScript frontend).",
                ].map((text, i) => (
                  <motion.li
                    key={text}
                    className="flex gap-3.5"
                    initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.08 + 0.15,
                      duration: 0.45,
                      ease: easeSmooth,
                    }}
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.2)]" />
                    <span className="leading-relaxed">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function ContactSection() {
  const reduceMotion = useReducedMotion();

  const cards = [
    {
      href: "mailto:forvardmf@gmail.com",
      icon: MailIcon,
      label: "Email",
      value: "forvardmf@gmail.com",
      breakAll: true,
    },
    {
      href: "tel:+998941339383",
      icon: PhoneIcon,
      label: "Phone",
      value: "+998 94 133 93 83",
    },
    {
      href: "https://github.com/Mirshodforward",
      icon: GitHubIcon,
      label: "GitHub",
      value: "Mirshodforward",
      external: true,
    },
  ] as const;

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-blue-100/90 bg-white px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Contact
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Let&apos;s build something solid.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {cards.map((card, i) => (
            <motion.a
              key={card.href}
              href={card.href}
              target={"external" in card && card.external ? "_blank" : undefined}
              rel={
                "external" in card && card.external
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group relative flex gap-4 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/60 p-5 shadow-md shadow-blue-900/5"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08 + 0.1,
                duration: 0.5,
                ease: easeSmooth,
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 24px 48px -20px rgba(37, 99, 235, 0.25)",
                borderColor: "rgb(147 197 253)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-sky-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]" />
              <card.icon className="relative h-7 w-7 shrink-0 text-blue-600" />
              <div className="relative min-w-0">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-blue-500">
                  {card.label}
                </p>
                <p
                  className={`mt-1 text-sm font-semibold text-slate-900 ${"breakAll" in card && card.breakAll ? "break-all" : ""}`}
                >
                  {card.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-blue-100 bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Mirshodbek Qahramonov</p>
        <p className="text-center sm:text-left">
          Software developer · Telegram · APIs · Payments
        </p>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return (
    <div className="relative min-h-full text-slate-800">
      <AmbientBackground />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
