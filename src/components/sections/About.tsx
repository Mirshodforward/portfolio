"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "../ui/Reveal";
import { Counter } from "../ui/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-blue-600">
      <span className="h-px w-6 bg-blue-600" />
      {children}
    </span>
  );
}

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-blue-100/70 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>{t.about.eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05} className="mt-4 max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {t.about.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 max-w-2xl">
          <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            {t.about.body}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {t.about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.08,
                ease: EASE,
              }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/60 p-6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
              <p className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                <Counter value={stat.value} />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
