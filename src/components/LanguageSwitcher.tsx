"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LANGUAGES, LANG_LABEL } from "@/lib/i18n/dictionaries";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`relative inline-flex items-center rounded-full border border-blue-100 bg-white/90 p-1 text-xs font-semibold shadow-sm backdrop-blur ${className}`}
      role="group"
      aria-label="Language"
    >
      {LANGUAGES.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className={`relative z-10 rounded-full px-3 py-1.5 transition-colors ${
              active ? "text-white" : "text-slate-600 hover:text-blue-700"
            }`}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 350, damping: 30 }
                }
              />
            )}
            {LANG_LABEL[code]}
          </button>
        );
      })}
    </div>
  );
}
