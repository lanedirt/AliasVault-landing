export type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const getFAQData = (t: (key: string) => string): FAQItem[] => [
  {
    id: 1,
    question: t('faq.items.1.question'),
    answer: t('faq.items.1.answer'),
  },
  {
    id: 2,
    question: t('faq.items.2.question'),
    answer: t('faq.items.2.answer'),
  },
  {
    id: 3,
    question: t('faq.items.3.question'),
    answer: t('faq.items.3.answer'),
  },
  {
    id: 4,
    question: t('faq.items.4.question'),
    answer: t('faq.items.4.answer'),
  },
  {
    id: 5,
    question: t('faq.items.5.question'),
    answer: t('faq.items.5.answer'),
  },
  {
    id: 6,
    question: t('faq.items.6.question'),
    answer: t('faq.items.6.answer'),
  },
  {
    id: 7,
    question: t('faq.items.7.question'),
    answer: t('faq.items.7.answer'),
  },
  {
    id: 8,
    question: t('faq.items.8.question'),
    answer: t('faq.items.8.answer'),
  },
  {
    id: 9,
    question: t('faq.items.9.question'),
    answer: t('faq.items.9.answer'),
  },
];

export default getFAQData;