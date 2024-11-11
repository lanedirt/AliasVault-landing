"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import faqData from "./faqData";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          paragraph="Find answers to common questions about AliasVault's features, security, and deployment options."
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
                    ? "visible opacity-100 max-h-96"
                    : "invisible opacity-0 max-h-0"
                }`}
              >
                <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    {faq.answer}
                  </p>
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