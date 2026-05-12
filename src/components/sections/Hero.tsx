"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Magnetic } from "../ui/Magnetic";
import { WordsReveal } from "../ui/Reveal";
import { ArrowDown, ArrowUpRight } from "../ui/Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section className="relative px-4 pb-24 pt-14 sm:px-6 sm:pt-20 md:pb-32 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 shadow-sm shadow-blue-900/5 backdrop-blur"
        >
          <span className="relative grid h-2 w-2 place-items-center">
            <motion.span
              className="absolute inset-0 rounded-full bg-emerald-400/70"
              animate={
                reduceMotion
                  ? undefined
                  : { scale: [1, 1.9, 1], opacity: [0.65, 0, 0.65] }
              }
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {t.hero.badge}
        </motion.div>

        <h1 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-slate-900">
          <WordsReveal text="Mirshodbek" />
          <br />
          <WordsReveal
            text="Qahramonov."
            className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
            delay={0.1}
          />
        </h1>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="mt-6 flex max-w-md items-center gap-3"
        >
          <span className="h-px w-10 bg-blue-600" />
          <span className="text-base font-medium uppercase tracking-[0.25em] text-blue-700">
            {t.hero.role}
          </span>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          {t.hero.intro}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Magnetic className="rounded-2xl">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-blue-700 hover:shadow-blue-700/30"
            >
              {t.hero.cta.projects}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
          <Magnetic className="rounded-2xl">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-800 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
            >
              {t.hero.cta.contact}
            </a>
          </Magnetic>
        </motion.div>

        <motion.a
          href="#about"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="group mt-20 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 hover:text-blue-700"
        >
          {t.hero.scroll}
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="grid h-7 w-7 place-items-center rounded-full border border-blue-200 bg-white"
          >
            <ArrowDown className="h-3.5 w-3.5 text-blue-700" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
