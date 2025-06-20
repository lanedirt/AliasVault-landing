export type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is AliasVault and who is it for?",
    answer: "AliasVault is a password manager built with a strong focus on privacy, making it the ideal choice for privacy-conscious individuals.\n\nAliasVault features a built-in email server that allows you to create unique email addresses (aliases) for different services. If you care about controlling your digital identity, preventing spam, and reducing your exposure in data breaches, AliasVault helps you manage credentials and aliases securely.\n\nFully open-source and transparent. No third-party dependencies.",
  },
  {
    id: 2,
    question: "How much does AliasVault cost?",
    answer: "The current core version of AliasVault, with all of its features, is completely free to use and will always remain that way. Both for the official cloud-hosted and self-hosted options. \n\nIn the near future, we do plan to introduce optional premium features such as additional storage space, automatic back-ups, and more. These paid options will help support the continued development and costs of the project.\n\nThat said, we are currently focused on developing and refining the basic features of AliasVault to ensure a stable and reliable foundation for all users. Premium features are part of our longer-term roadmap, but our current priority is to deliver a solid core experience.\n\nIf you'd like to support the project in the meantime, we welcome donations — please visit our <a href=\"/contact\" rel=\"noopener noreferrer\">contact page</a> for more information.",
  },
  {
    id: 3,
    question: "Which devices are supported by AliasVault?",
    answer: "AliasVault works on all major platforms: web, desktop, and mobile.\n\nYou can access your vault through the AliasVault web app, browser extensions, or by downloading the mobile apps, ensuring you always have access to your vault no matter the device.",
  },
  {
    id: 4,
    question: "How does AliasVault protect my data?",
    answer: "Security is the foundation of AliasVault. End-to-end encryption (AES-256-GCM) is used to encrypt all your data. Everything, including usernames, passwords and even email contents, is encrypted on your device. Even on our servers, your information stays encrypted, protected by your master password, which only you know. Our strict zero-knowledge architecture guarantees that no one — not even us — can access your vault.\n\nFor in-depth technical details, visit our <a href=\"https://docs.aliasvault.net/architecture\" target=\"_blank\" rel=\"noopener noreferrer\">architecture documentation</a>.",
  },
  {
    id: 5,
    question: "Can I import my passwords from other password managers?",
    answer: "Yes! AliasVault makes it easy to migrate your credentials from other password managers. We support importing from popular services including 1Password, Bitwarden, Chrome, Dashlane, Firefox, KeePass, KeePassXC, Proton Pass, and Strongbox.\n\nSimply export your data from your current password manager and use AliasVault's import function in the web app to seamlessly transfer all your credentials, notes, 2FA codes and other data.\n\nPlus, AliasVault also includes export functionality, so if you ever decide to switch to another service in the future, you can easily take your data with you. You have full control over your data.",
  },
  {
    id: 6,
    question: "Can I self-host AliasVault on my own server?",
    answer: "Yes, AliasVault is designed from the ground up to be fully self-hosted. You can easily deploy it on your own server using Docker, giving you complete control over your data and infrastructure. AliasVault comes with an automatic install script which makes installation a breeze.\n\nDetailed installation instructions are available in our <a href=\"https://docs.aliasvault.net\" target=\"_blank\" rel=\"noopener noreferrer\">documentation</a>.",
  },
  {
    id: 7,
    question: "How does the email alias feature work?",
    answer: "AliasVault includes a built-in email server that allows you to create unique email addresses (aliases) for different services.\n\nWhen someone sends an email to your alias, it's received directly in AliasVault and immediately encrypted, helping you maintain privacy and reduce spam.",
  },
  {
    id: 8,
    question: "Are there limitations to using email aliases?",
    answer: "Currently there are two main restrictions:\n\n1) Email aliases are receive-only, meaning you cannot send or reply to emails from your aliases. This measure prevents potential abuse of the system for spam.\n\n2) There is a 10 megabyte size limit for incoming emails - any emails larger than this will be rejected.\n\nIn the future, optional paid subscriptions will lift these restrictions. Also, currently email storage has no limit but is based on fair-use. In the future specific limits may be introduced for the free tier, but will be announced in advance.",
  },
  {
    id: 9,
    question: "What's the story behind AliasVault?",
    answer: "AliasVault started as a side project in early 2024, driven by the belief that privacy is a right, not a luxury. It was created to make the internet a safer, more private place — where users are in control of their digital identity.\n\nThe creator of AliasVault, Leendert de Borst, has long been passionate about fighting spam and making privacy accessible. Back in 2013, he launched asdasd.nl, a Dutch temporary email service that over the years grew into the multilingual SpamOK.com, helping thousands of users shield themselves from spam and data collection.\n\nAliasVault is the next step in that journey: a self-hostable, end-to-end encrypted password and alias manager that helps you generate unique email aliases and strong passwords for every service you use. By minimizing the personal information you share online, AliasVault helps you stay secure and anonymous.\n\nSince the beta release in December 2024, AliasVault has seen steady bi-weekly updates, introducing new features like browser extensions, two-factor authentication, mobile apps and import support from other password managers — all designed to make privacy more powerful and accessible.\n\nAliasVault is fully open-source and entirely self-funded. It’s built to be transparent, community-driven, and privacy-first.\n\nLearn more about <a href=\"/mission\" rel=\"noopener noreferrer\">our mission</a> and what drives this project.",
  }
];

export default faqData;