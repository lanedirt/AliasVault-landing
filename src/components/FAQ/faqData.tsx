export type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is AliasVault?",
    answer: "AliasVault is an open-source password and alias manager that allows you to create unique identities, passwords, and email addresses for every website you use. It's designed to enhance your online privacy and security through end-to-end encryption.",
  },
  {
    id: 2,
    question: "Is AliasVault free?",
    answer: "Yes, the core version of AliasVault is free and always will be. The self-hosted variant will remain free and open-source under the MIT license. Premium features will be available through optional paid subscriptions in the future to cover the costs of running and further development of the service.",
  },
  {
    id: 3,
    question: "How secure is AliasVault?",
    answer: "AliasVault uses end-to-end encryption, meaning your data is encrypted before it leaves your device. Even when stored on the server, your data remains encrypted. The zero-knowledge architecture ensures that only you can access your information.",
  },
  {
    id: 4,
    question: "Can I host AliasVault on my own server?",
    answer: "Yes! AliasVault is designed to be self-hosted. You can easily deploy it on your own server using Docker, giving you complete control over your data and infrastructure. Detailed installation instructions are available in our GitHub repository.",
  },
  {
    id: 5,
    question: "How does the email alias feature work?",
    answer: "AliasVault includes a built-in email server that allows you to create unique email addresses (aliases) for different services. When someone sends an email to your alias, it's received directly in AliasVault, helping you maintain privacy and reduce spam.",
  },
  {
    id: 6,
    question: "Are there any restrictions when using AliasVault's email aliases?",
    answer: "Yes, there are two main restrictions: 1) Email aliases are receive-only, meaning you cannot send or reply to emails from your aliases. This measure prevents potential abuse of the system for spam. 2) There is a 10 megabyte size limit for incoming emails - any emails larger than this will be rejected.",
  },
];

export default faqData;