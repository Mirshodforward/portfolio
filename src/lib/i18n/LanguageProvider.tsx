"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DICT, LANGUAGES, LANG_HTML, type Lang } from "./dictionaries";

type LanguageContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: (typeof DICT)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "portfolio:lang";
const DEFAULT_LANG: Lang = "uz";

function isLang(value: unknown): value is Lang {
  return (
    typeof value === "string" && (LANGUAGES as readonly string[]).includes(value)
  );
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isLang(saved)) {
        setLangState(saved);
        document.documentElement.lang = LANG_HTML[saved];
        return;
      }
      const browser = window.navigator.language?.slice(0, 2).toLowerCase();
      if (isLang(browser)) {
        setLangState(browser);
        document.documentElement.lang = LANG_HTML[browser];
      }
    } catch {
      // localStorage may be blocked; ignore.
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = LANG_HTML[next];
    } catch {
      // ignore.
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: DICT[lang] }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
