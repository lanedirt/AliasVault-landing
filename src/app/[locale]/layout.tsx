import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import AOSInit from "@/components/AOS/AOSInit";
import { Providers } from "../providers";
import "../../styles/index.css";
import { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from "@/i18n/routing";
import { generateSEOMetadata } from '@/components/SEO/SEOMetadata';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations();
  
  const title = t('metadata.title');
  const description = t('metadata.description');
  const seoSuffix = t('metadata.seoSuffix');

  const metadata = generateSEOMetadata({
    title,
    description,
    path: '/',
    locale,
    type: 'website'
  });

  return {
    ...metadata,
    title: {
      default: title,
      template: `%s | ${seoSuffix}`
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
        <AOSInit />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </Providers>
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}