"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "../ui/Reveal";
import { ArrowUpRight } from "../ui/Icons";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-blue-600">
      <span className="h-px w-6 bg-blue-600" />
      {children}
    </span>
  );
}

export function ExperienceSection() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-blue-100/70 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>{t.experience.eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05} className="mt-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t.experience.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <div className="relative">
            <div className="absolute left-3 top-3 bottom-3 hidden w-px bg-gradient-to-b from-blue-300 via-blue-200 to-transparent sm:block" />
            <motion.article
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/10 sm:ml-12 sm:p-8"
            >
              <span className="absolute -left-[3.25rem] top-7 hidden h-3 w-3 rounded-full border-2 border-white bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.18)] sm:block" />
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <a
                    href="https://weblinker.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xl font-bold text-slate-900 transition-colors hover:text-blue-700"
                  >
                    {t.experience.company}
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-blue-600" />
                  </a>
                  <p className="mt-2 font-medium text-slate-600">
                    {t.experience.role}
                  </p>
                  <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
                    {t.experience.body}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {t.experience.current}
                  </span>
                  <span className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                    {t.experience.period}
                  </span>
                </div>
              </div>
            </motion.article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
