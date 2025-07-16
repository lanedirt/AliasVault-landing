import { Metadata } from 'next';
import { locales, defaultLocale } from '@/i18n/config';

interface SEOMetadataProps {
  title: string;
  description: string;
  path: string;
  locale: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  contentLanguage?: string;
}

export function generateSEOMetadata({
  title,
  description,
  path,
  locale,
  image = '/images/og/og-header.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  tags,
  contentLanguage
}: SEOMetadataProps): Metadata {
  // Use content language if provided, otherwise use locale
  const actualContentLanguage = contentLanguage || locale;
  
  // For content that's in English but might be on different locale routes,
  // we need to set the canonical URL to the English version
  const canonicalUrl = actualContentLanguage === 'en' 
    ? `https://aliasvault.net${path}`
    : locale === defaultLocale 
      ? `https://aliasvault.net${path}`
      : `https://aliasvault.net/${locale}${path}`;

  // Generate alternate language URLs
  const alternateUrls: Record<string, string> = {};
  
  // For content that's actually in English (like blog posts), both URLs point to the same content
  if (actualContentLanguage === 'en') {
    alternateUrls['en'] = `https://aliasvault.net${path}`;
    alternateUrls['nl'] = `https://aliasvault.net/nl${path}`;
  } else {
    // For regular pages, generate URLs based on locale
    locales.forEach((loc) => {
      if (loc === defaultLocale) {
        alternateUrls[loc] = `https://aliasvault.net${path}`;
      } else {
        alternateUrls[loc] = `https://aliasvault.net/${loc}${path}`;
      }
    });
  }

  // Generate OpenGraph locale alternatives based on content language
  const currentOgLocale = actualContentLanguage === 'en' ? 'en_US' : actualContentLanguage === 'nl' ? 'nl_NL' : actualContentLanguage;
  const ogLocales = actualContentLanguage === 'en' ? ['nl_NL'] : ['en_US'];

  const metadata: Metadata = {
    metadataBase: new URL('https://aliasvault.net'),
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: alternateUrls
    },
    openGraph: {
      type,
      url: canonicalUrl,
      siteName: 'AliasVault',
      title,
      description,
      locale: currentOgLocale,
      alternateLocale: ogLocales,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
      ...(tags && { tags })
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@AliasVault',
      creator: '@AliasVault',
      images: [image]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };

  return metadata;
}