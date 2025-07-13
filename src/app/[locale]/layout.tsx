import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "../providers";
import "../../styles/index.css";
import { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/i18n/config';
import { generateAlternateLanguageUrls } from '@/lib/i18n-utils';
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: locale } = await params;
  const messages = await getMessages();
  const title = (messages as Record<string, Record<string, string>>).metadata?.title || 'AliasVault';
  const description = (messages as Record<string, Record<string, string>>).metadata?.description || 'AliasVault is an open-source end-to-end encrypted password and alias manager.';

  const alternateUrls = generateAlternateLanguageUrls('/');

  // Use locale in the metadata
  const siteUrl = locale === defaultLocale ? 'https://aliasvault.net' : `https://aliasvault.net/${locale}`;

  return {
    metadataBase: new URL('https://aliasvault.net'),
    title: {
      default: title,
      template: `%s | ${title}`
    },
    description,
    openGraph: {
      type: 'website',
      url: siteUrl,
      siteName: 'AliasVault',
      title,
      description,
      images: [
        {
          url: 'images/og/og-header.jpg',
          width: 1200,
          height: 630,
          alt: 'AliasVault'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: 'aliasvault.net',
      creator: '@AliasVault',
      images: ['images/og/og-header.jpg']
    },
    alternates: {
      languages: alternateUrls
    }
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` parameter is valid
  if (!hasLocale(routing.locales, locale)) {
    console.log('Locale not found', locale);
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Providers>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </Providers>
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}