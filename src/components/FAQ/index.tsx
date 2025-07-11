"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import getFAQData from "./faqData";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations();
  const faqData = getFAQData(t);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <SectionTitle
          title={t('faq.title')}
          paragraph={t('faq.description')}
          center
          width="640px"
        />

        <div className="mx-auto max-w-[800px]">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="mb-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <button
                className={`flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 bg-gray-100/50 hover:bg-gray-200/80 dark:bg-gray-800/50 dark:hover:bg-gray-700/80 ${
                  openIndex === index
                    ? "bg-gray-200/80 dark:bg-gray-700/80"
                    : ""
                }`}
                onClick={() => handleToggle(index)}
              >
                <span className="text-lg font-semibold text-black dark:text-white">
                  {faq.question}
                </span>
                <svg
                  className={`h-4 w-4 transform text-black transition-transform duration-200 ease-in-out dark:text-white ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transform transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "visible opacity-100 max-h-128"
                    : "invisible opacity-0 max-h-0"
                }`}
              >
                <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
                  <div
                    className="text-base text-body-color dark:text-body-color-dark whitespace-pre-line [&_a]:text-primary [&_a]:underline [&_a]:decoration-primary/30 [&_a]:underline-offset-2 [&_a]:transition-all [&_a]:duration-200 hover:[&_a]:decoration-primary"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;