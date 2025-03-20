export interface FeatureItem {
  name: string;
  description: string;
  status: 'available' | 'upcoming' | 'unavailable';
}

export interface FeatureCategory {
  title: string;
  description: string;
  features: FeatureItem[];
  imageSrc: string;
  imageAlt: string;
}

// Password Management Features
export const passwordManagementFeatures: FeatureCategory = {
  title: "Password Management",
  description: "Securely store, generate, and manage all your passwords in one place with AliasVault's powerful password management features.",
  imageSrc: "/images/features/password-management.png",
  imageAlt: "AliasVault Password Management",
  features: [
    {
      name: "Password Manager",
      description: "Store all your passwords securely in one place, accessible from any device with industry leading end-to-end encryption.",
      status: "available"
    },
    {
      name: "Adjustable Generator",
      description: "Create custom patterns, length, and character sets for your passwords to make them more secure. Customizable per credential.",
      status: "available"
    },
    {
      name: "Built-in 2FA Authenticator",
      description: "Store and generate 2FA secrets for all your accounts directly in AliasVault.",
      status: "available"
    },
    {
      name: "Password Sharing",
      description: "Securely share access to stored passwords with family members or team members.",
      status: "upcoming"
    }
  ]
};

// Email Alias Features
export const emailAliasFeatures: FeatureCategory = {
  title: "Email Aliases",
  description: "Create unique email addresses for different services to protect your primary email and reduce spam with AliasVault's built-in email server. No external dependencies.",
  imageSrc: "/images/features/email-aliases.png",
  imageAlt: "AliasVault Email Aliases",
  features: [
    {
      name: "Built-in Email Server",
      description: "Create unique email addresses and receive emails directly in AliasVault without needing a third-party email service.",
      status: "available"
    },
    {
      name: "Alias Generator",
      description: "Generate unique email addresses with full alias support including first name, last name, birth date and more.",
      status: "available"
    },
    {
      name: "Custom Domains (self-hosted)",
      description: "Use your own domain for your email aliases in self-hosted setups.",
      status: "available"
    },
    {
      name: "Custom Domains (cloud-hosted)",
      description: "Use email aliases with your own domain on the official cloud-hosted AliasVault server.",
      status: "upcoming"
    }
  ]
};

// Security Features
export const securityFeatures: FeatureCategory = {
  title: "Security Features",
  description: "AliasVault uses industry-standard encryption and security measures to protect your data.",
  imageSrc: "/images/features/security.png",
  imageAlt: "AliasVault Security Features",
  features: [
    {
      name: "End-to-End Encryption",
      description: "All data is encrypted on your device before being backed up online. Your master password is never transmitted to the server.",
      status: "available"
    },
    {
      name: "Two-Factor Authentication",
      description: "Add an extra layer of security to your vault with TOTP-based two-factor authentication.",
      status: "available"
    },
    {
      name: "Biometric Authentication",
      description: "Unlock your vault using fingerprint or face recognition on supported devices via WebAuthn.",
      status: "available"
    },
    {
      name: "Secure Notes & Attachments",
      description: "Store sensitive information like credit card details, secure notes, and other confidential data inside your vault.",
      status: "available"
    }
  ]
};

// Platform Support Features
export const platformSupportFeatures: FeatureCategory = {
  title: "Browser Plugins & Native Apps",
  description: "Access your vault from anywhere with AliasVault's browser extensions and native mobile applications.",
  imageSrc: "/images/features/plugins.png",
  imageAlt: "AliasVault Plugins",
  features: [
    {
      name: "Browser Extensions",
      description: "Seamlessly autofill passwords and generate aliases directly from your browser with our extensions for Chrome, Firefox, Edge, and Safari.",
      status: "available"
    },
    {
      name: "Mobile Apps",
      description: "Access your vault on the go with native mobile applications for iOS and Android.",
      status: "upcoming"
    },
  ]
};

// Self-hosting Features
export const selfHostingFeatures: FeatureCategory = {
  title: "Self-hosting Support",
  description: "Take full control of your data by self-hosting AliasVault on your own server or a cloud provider of your choice.",
  imageSrc: "/images/features/selfhost.png",
  imageAlt: "AliasVault Self-hosting",
  features: [
    {
      name: "Cloud or Self-hosted",
      description: "Use the official AliasVault cloud service for convenience or self-host on your own server for complete control of your data.",
      status: "available"
    },
    {
      name: "Free and Open-Source",
      description: "Completely free and open-source software released under the MIT license, with source code available on GitHub.",
      status: "available"
    },
    {
      name: "Admin Panel & Logs",
      description: "Track all activities on your server with the built-in admin panel and audit logs.",
      status: "available"
    },
    {
      name: "Family & Team Management",
      description: "Share vaults with family members and team members via organizational features.",
      status: "upcoming"
    },
  ]
};

// Export all categories in an array for easy iteration
export const allFeatureCategories: FeatureCategory[] = [
  passwordManagementFeatures,
  emailAliasFeatures,
  securityFeatures,
  platformSupportFeatures,
  selfHostingFeatures
];