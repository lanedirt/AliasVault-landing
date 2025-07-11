import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Founder from "@/components/Founder";
import { useTranslations } from "next-intl";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "AliasVault is an open-source end-to-end encrypted password and alias manager.",
   // other metadata
};

const AboutPage = () => {
  const t = useTranslations();
  
  return (
    <>
      <Breadcrumb
        pageName={t('about.title')}
        description={t('about.pageDescription')}
      />
      <AboutSectionOne />
      <Founder />
    </>
  );
};

export default AboutPage;
