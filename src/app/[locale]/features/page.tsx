import ScrollUp from "@/components/Common/ScrollUp";
import SectionSpacing from "@/components/Common/SectionSpacing";
import { Metadata } from "next";
import { Suspense } from 'react';
import ScrollHandler from '@/components/ScrollHandler';
import Breadcrumb from "@/components/Common/Breadcrumb";
import FeatureSection from "@/components/FeatureSection";
import { allFeatureCategories } from "@/components/FeatureSection/featuresData";
import CallToAction from "@/components/CallToAction/CallToAction";

export const metadata: Metadata = {
  title: "Features | AliasVault",
  description: "Explore all the powerful features of AliasVault, the open-source end-to-end encrypted password and alias manager.",
};

export default function Features() {
  return (
    <>
      <Breadcrumb
        pageName="Features"
        description="Discover the powerful features that make AliasVault the ultimate solution for password and identity management."
      />
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <ScrollUp />

      {/* Feature Sections */}
      <div className="bg-gray-50 dark:bg-black">
        {allFeatureCategories.map((category, index) => (
          <FeatureSection
            key={index}
            title={category.title}
            description={category.description}
            features={category.features}
            imageSrc={category.imageSrc}
            imageAlt={category.imageAlt}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>

      {/* Legend Section */}
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <div className="mr-3 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-green-500 bg-opacity-10 text-green-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-base text-gray-700 dark:text-gray-300">Available</span>
            </div>
            <div className="flex items-center">
              <div className="mr-3 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary-500 bg-opacity-10 text-primary-500">
                <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-base text-gray-700 dark:text-gray-300">Coming Soon</span>
            </div>
            <div className="flex items-center">
              <div className="mr-3 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-red-500 bg-opacity-10 text-red-500">
                <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-base text-gray-700 dark:text-gray-300">Not Available</span>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-base text-gray-700 dark:text-gray-300">
              Track our progress and see what&apos;s coming next on our{" "}
              <a
                href="https://github.com/lanedirt/AliasVault/issues/731"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                roadmap on GitHub
              </a>
            </p>
          </div>
        </div>
      </section>

      <SectionSpacing withBorder />

      <CallToAction />

    </>
  );
}