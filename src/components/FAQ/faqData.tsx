export type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is AliasVault?",
    answer: "AliasVault is an open-source password and (email) alias manager that allows you to create unique identities, passwords, and email addresses for every website you use. It's designed to enhance your online privacy and security through end-to-end encryption.",
  },
  {
    id: 2,
    question: "Is AliasVault free?",
    answer: "Yes, the core version of AliasVault is free. In the near future, additional premium features will be available through optional paid subscriptions to cover the costs of running and further development of AliasVault. The core version of AliasVault and the self-hosted variant will however always remain free and open-source under the MIT license.",
  },
  {
    id: 3,
    question: "How secure is AliasVault?",
    answer: "AliasVault uses end-to-end encryption, meaning everything inside your vault, including usernames and passwords, is encrypted before it leaves your device. Even when stored on the server, your data remains encrypted using your master password as the key. The zero-knowledge architecture ensures that only you can access your information. For more technical information, take a look at our documentation.",
  },
  {
    id: 4,
    question: "Can I host AliasVault on my own server?",
    answer: "Yes! AliasVault is designed to be self-hosted. You can easily deploy it on your own server using Docker, giving you complete control over your data and infrastructure. Detailed installation instructions are available in our documentation.",
  },
  {
    id: 5,
    question: "How does the email alias feature work?",
    answer: "AliasVault includes a built-in email server that allows you to create unique email addresses (aliases) for different services. When someone sends an email to your alias, it's received directly in AliasVault and safely encrypted, helping you maintain privacy and reduce spam.",
  },
  {
    id: 6,
    question: "Are there restrictions when using AliasVault's email aliases?",
    answer: "Yes, there are two main restrictions: 1) Email aliases are receive-only, meaning you cannot send or reply to emails from your aliases. This measure prevents potential abuse of the system for spam. 2) There is a 10 megabyte size limit for incoming emails - any emails larger than this will be rejected. In the future, optional paid subscriptions will offer reply functionality and higher storage limits.",
  },
];

export default faqData;