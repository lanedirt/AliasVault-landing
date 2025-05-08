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
    answer: "Yes, the core version of AliasVault is free. In the near future, additional premium features will be available through optional paid subscriptions to cover the costs of running and further development of AliasVault. The core version of AliasVault and the self-hosted variant will however always remain free and open-source.",
  },
  {
    id: 3,
    question: "What devices can I use AliasVault on?",
    answer: "AliasVault works across all major platforms — web, desktop, and mobile. You can access your vault through the AliasVault web app, browser extensions, or by downloading the mobile apps, ensuring you always have access to your vault no matter the device.",
  },
  {
    id: 4,
    question: "How secure is AliasVault?",
    answer: "Security is the foundation of AliasVault. We use end-to-end encryption, so your data — including usernames and passwords — is encrypted on your device before it ever leaves it. Even on our servers, your information stays encrypted, protected by your master password, which only you know. Our strict zero-knowledge architecture guarantees that no one — not even us — can access your vault. For in-depth technical details, visit our documentation.",
  },
  {
    id: 5,
    question: "Can I host AliasVault on my own server?",
    answer: "Yes! AliasVault is designed to be self-hosted. You can easily deploy it on your own server using Docker, giving you complete control over your data and infrastructure. Detailed installation instructions are available in our documentation.",
  },
  {
    id: 6,
    question: "How does the email alias feature work?",
    answer: "AliasVault includes a built-in email server that allows you to create unique email addresses (aliases) for different services. When someone sends an email to your alias, it's received directly in AliasVault and immediately encrypted, helping you maintain privacy and reduce spam.",
  },
  {
    id: 7,
    question: "Are there restrictions when using AliasVault's email aliases?",
    answer: "Currently there are two main restrictions: 1) Email aliases are receive-only, meaning you cannot send or reply to emails from your aliases. This measure prevents potential abuse of the system for spam. 2) There is a 10 megabyte size limit for incoming emails - any emails larger than this will be rejected. In the future, optional paid subscriptions will lift these restrictions.",
  },
];

export default faqData;