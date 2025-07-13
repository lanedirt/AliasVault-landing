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
    answer: t('faq.items.2.answer')
      .replace(/\[contactLink\]/g, "<a href='/contact' rel='noopener noreferrer'>")
      .replace(/\[\/contactLink\]/g, "</a>"),
  },
  {
    id: 3,
    question: t('faq.items.3.question'),
    answer: t('faq.items.3.answer'),
  },
  {
    id: 4,
    question: t('faq.items.4.question'),
    answer: t('faq.items.4.answer')
      .replace(/\[docsLink\]/g, "<a href='https://docs.aliasvault.net/architecture' target='_blank' rel='noopener noreferrer'>")
      .replace(/\[\/docsLink\]/g, "</a>"),
  },
  {
    id: 5,
    question: t('faq.items.5.question'),
    answer: t('faq.items.5.answer'),
  },
  {
    id: 6,
    question: t('faq.items.6.question'),
    answer: t('faq.items.6.answer')
      .replace(/\[docsLink\]/g, "<a href='https://docs.aliasvault.net' target='_blank' rel='noopener noreferrer'>")
      .replace(/\[\/docsLink\]/g, "</a>"),
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
    answer: t('faq.items.9.answer')
      .replace(/\[missionLink\]/g, "<a href='/mission' rel='noopener noreferrer'>")
      .replace(/\[\/missionLink\]/g, "</a>"),
  },
];

export default getFAQData;