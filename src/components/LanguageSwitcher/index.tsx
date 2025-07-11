'use client';

import { locales, localeLabels, localeFlags } from '@/i18n/config';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  const handleLanguageChange = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${currentPath}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        aria-label={t('common.languageSelector')}
      >
        <span className="text-lg">{localeFlags[locale as keyof typeof localeFlags]}</span>
        <span className="hidden sm:inline text-sm font-medium">
          {localeLabels[locale as keyof typeof localeLabels]}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-full mb-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50">
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                locale === lang
                  ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              <span className="text-lg">{localeFlags[lang]}</span>
              <span className="text-sm font-medium">{localeLabels[lang]}</span>
              {locale === lang && (
                <svg
                  className="w-4 h-4 ml-auto text-primary-600 dark:text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}