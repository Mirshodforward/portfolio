"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "../ui/Reveal";
import { ArrowUpRight, GitHubIcon, MailIcon, PhoneIcon } from "../ui/Icons";
import { Magnetic } from "../ui/Magnetic";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-blue-600">
      <span className="h-px w-6 bg-blue-600" />
      {children}
    </span>
  );
}

const EMAIL = "forvardmf@gmail.com";
const PHONE = "+998 94 133 93 83";
const PHONE_HREF = "tel:+998941339383";
const GITHUB = "github.com/Mirshodforward";
const GITHUB_HREF = "https://github.com/Mirshodforward";

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const cards = [
    {
      href: `mailto:${EMAIL}`,
      label: t.contact.emailLabel,
      value: EMAIL,
      Icon: MailIcon,
      breakAll: true,
    },
    {
      href: PHONE_HREF,
      label: t.contact.phoneLabel,
      value: PHONE,
      Icon: PhoneIcon,
      breakAll: false,
    },
    {
      href: GITHUB_HREF,
      label: t.contact.githubLabel,
      value: GITHUB,
      Icon: GitHubIcon,
      breakAll: false,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-blue-100/70 bg-gradient-to-b from-white via-blue-50/60 to-white px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>{t.contact.eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05} className="mt-4 max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {t.contact.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-5 max-w-2xl">
          <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            {t.contact.body}
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <Magnetic className="rounded-2xl">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-blue-700 hover:shadow-blue-700/30"
            >
              {EMAIL}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {cards.map((card, i) => (
            <motion.a
              key={card.href}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + i * 0.07,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
                      boxShadow: "0 26px 50px -22px rgba(37,99,235,0.28)",
                    }
              }
              className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-blue-100 bg-white p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20">
                <card.Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-500">
                  {card.label}
                </p>
                <p
                  className={`mt-1 text-sm font-semibold text-slate-900 ${card.breakAll ? "break-all" : ""}`}
                >
                  {card.value}
                </p>
              </div>
              <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-700" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
