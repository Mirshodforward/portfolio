"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-100 bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p className="flex items-center gap-2 font-medium text-slate-600">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-[10px] font-bold text-white">
            MQ
          </span>
          © {year} Mirshodbek Qahramonov · {t.footer.rights}
        </p>
        <p className="text-center sm:text-right">{t.footer.role}</p>
      </div>
    </footer>
  );
}
