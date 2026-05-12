"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "../ui/Reveal";
import {
  ArrowUpRight,
  GlobeIcon,
  TelegramIcon,
} from "../ui/Icons";
import { PROJECTS, type Project, type ProjectAccent } from "@/lib/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-blue-600">
      <span className="h-px w-6 bg-blue-600" />
      {children}
    </span>
  );
}

const ACCENT_GRADIENT: Record<ProjectAccent, string> = {
  blue: "from-blue-600 via-blue-500 to-indigo-500",
  indigo: "from-indigo-600 via-blue-600 to-cyan-500",
  teal: "from-emerald-500 via-teal-500 to-cyan-500",
  violet: "from-violet-600 via-purple-500 to-fuchsia-500",
  amber: "from-amber-500 via-orange-500 to-rose-500",
  slate: "from-slate-700 via-slate-600 to-blue-700",
  cyan: "from-cyan-600 via-sky-500 to-blue-600",
};

const ACCENT_GLOW: Record<ProjectAccent, string> = {
  blue: "bg-blue-200/60",
  indigo: "bg-indigo-200/60",
  teal: "bg-teal-200/60",
  violet: "bg-violet-200/60",
  amber: "bg-amber-200/60",
  slate: "bg-slate-200/60",
  cyan: "bg-cyan-200/60",
};

function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-wrap gap-2">
      {project.links.map((link) => {
        const Icon = link.kind === "bot" ? TelegramIcon : GlobeIcon;
        const label = link.kind === "bot" ? t.projects.bot : t.projects.visit;
        return (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50"
          >
            <Icon className="h-4 w-4 text-blue-600" />
            <span className="hidden sm:inline text-xs uppercase tracking-wider text-slate-500">
              {label}
            </span>
            <span>{link.label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-700" />
          </motion.a>
        );
      })}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();
  const { lang } = useLanguage();
  const gradient = ACCENT_GRADIENT[project.accent];
  const glow = ACCENT_GLOW[project.accent];

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.04, ease: EASE }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_18px_50px_-26px_rgba(15,23,42,0.18)] transition-shadow hover:shadow-[0_26px_60px_-22px_rgba(37,99,235,0.28)]"
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500 ${glow} opacity-0 group-hover:opacity-100`}
        aria-hidden
      />
      <div className="relative p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-slate-500">
          <span className="rounded-md bg-slate-900/95 px-2 py-1 font-semibold text-white">
            {project.index}
          </span>
          <span>{project.year}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-blue-100 bg-blue-50/70 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 text-pretty text-base leading-relaxed text-slate-600">
              {project.subtitle[lang]}
            </p>
          </div>
          <ProjectLinks project={project} />
        </div>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {project.bullets[lang].map((text, bi) => (
            <motion.li
              key={text}
              initial={reduceMotion ? false : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.12 + bi * 0.05,
                ease: EASE,
              }}
              className="flex gap-3 rounded-2xl border border-blue-100/70 bg-blue-50/30 p-4 text-sm leading-relaxed text-slate-700"
            >
              <span
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${gradient}`}
              />
              <span>{text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-blue-100/70 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>{t.projects.eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05} className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t.projects.title}
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
            {String(PROJECTS.length).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
          </span>
        </Reveal>
        <div className="mt-10 grid gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
