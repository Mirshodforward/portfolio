"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal, StaggerGroup, StaggerItem } from "../ui/Reveal";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-blue-600">
      <span className="h-px w-6 bg-blue-600" />
      {children}
    </span>
  );
}

export function SkillsSection() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-blue-100/70 bg-gradient-to-b from-blue-50/50 via-white to-white px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>{t.skills.eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05} className="mt-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t.skills.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.skills.groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_44px_-28px_rgba(37,99,235,0.45)]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/60 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-md shadow-blue-600/20">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      {group.title}
                    </h3>
                  </div>
                  <StaggerGroup className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <StaggerItem key={item}>
                        <motion.span
                          whileHover={
                            reduceMotion ? undefined : { y: -2, scale: 1.03 }
                          }
                          className="inline-flex rounded-lg border border-blue-100 bg-blue-50/80 px-2.5 py-1 text-xs font-medium text-blue-900"
                        >
                          {item}
                        </motion.span>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
