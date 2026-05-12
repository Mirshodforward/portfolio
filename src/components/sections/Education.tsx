"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "../ui/Reveal";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-blue-600">
      <span className="h-px w-6 bg-blue-600" />
      {children}
    </span>
  );
}

export function EducationSection() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-blue-100/70 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>{t.education.eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05} className="mt-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t.education.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="relative mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 pt-9 shadow-xl shadow-blue-900/10 sm:p-8 sm:pt-11"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500" />
            <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {t.education.school}
                </h3>
                <p className="mt-1 font-medium text-slate-600">
                  {t.education.program}
                </p>
              </div>
              <span className="w-fit rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                {t.education.period}
              </span>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
