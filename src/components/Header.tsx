"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

const SECTIONS = [
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "education", key: "education" },
  { id: "contact", key: "contact" },
] as const;

export function Header() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const [active, setActive] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const headerBlurValue = useTransform(scrollY, [0, 60], [6, 16]);
  const headerFilter = useTransform(
    headerBlurValue,
    (v) => `blur(${v}px) saturate(140%)`,
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 60],
    ["rgba(219, 234, 254, 0.0)", "rgba(191, 219, 254, 0.9)"],
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 60],
    ["0 0 0 rgba(0,0,0,0)", "0 8px 24px -16px rgba(15, 23, 42, 0.18)"],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -45% 0px", threshold: 0 },
    );
    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        backdropFilter: reduceMotion ? undefined : headerFilter,
        WebkitBackdropFilter: reduceMotion ? undefined : headerFilter,
        borderBottomColor: headerBorder,
        boxShadow: headerShadow,
      }}
      className="sticky top-0 z-50 border-b bg-white/70"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="#"
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-[11px] font-bold text-white shadow-md shadow-blue-600/20 transition-transform group-hover:rotate-3 group-hover:scale-105">
              MQ
            </span>
            <span className="hidden text-base sm:inline">Mirshodbek</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {SECTIONS.map((section) => {
              const isActive = active === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-blue-50 ring-1 ring-blue-100"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                  {t.nav[section.key]}
                </a>
              );
            })}
          </nav>
          <LanguageSwitcher />
        </div>
        <nav
          className="-mx-4 flex gap-1.5 overflow-x-auto border-t border-blue-100/80 px-4 py-2 md:hidden [-webkit-overflow-scrolling:touch]"
          aria-label="Sections"
        >
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                active === section.id
                  ? "border-blue-200 bg-blue-50 text-blue-700"
                  : "border-blue-100 bg-white text-slate-600"
              }`}
            >
              {t.nav[section.key]}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

