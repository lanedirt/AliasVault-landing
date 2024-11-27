import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aliasvault.net'),
  title: {
    default: 'AliasVault',
    template: '%s | AliasVault'
  },
  description: 'AliasVault is an open-source end-to-end encrypted password and alias manager.',
  openGraph: {
    type: 'website',
    url: 'https://aliasvault.net',
    siteName: 'AliasVault',
    title: 'AliasVault',
    description: 'AliasVault is an open-source end-to-end encrypted password and alias manager.',
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
    title: 'AliasVault',
    description: 'AliasVault is an open-source end-to-end encrypted password and alias manager.',
    site: 'aliasvault.net',
    creator: '@AliasVault',
    images: ['images/og/og-header.jpg']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />

      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
