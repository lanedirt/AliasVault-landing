import AboutSectionOne from "@/components/About/AboutSectionOne";
import CallToAction from "@/components/CallToAction/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import SectionSpacing from "@/components/Common/SectionSpacing";
import ScrollHandler from '@/components/ScrollHandler'
import { Suspense } from 'react';
import Video from "@/components/Video";
import RecentBlogAndNews from "@/components/Blog/RecentBlogs";


export const metadata: Metadata = {
  title: "AliasVault",
  description: "AliasVault is an open-source end-to-end encrypted password and alias manager.",
  // other metadata
};

export default function Home() {

  return (
    <>
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <ScrollUp />
      <Hero />
      <Video />
      <Features />
      <SectionSpacing withBorder />
      <AboutSectionOne />
      <SectionSpacing className="pt-16" />
      <CallToAction />
      <SectionSpacing withBorder className="pt-16 md:pt-20" />
      <FAQ />
      <SectionSpacing className="pt-16" />
      <RecentBlogAndNews />
    </>
  );
}
