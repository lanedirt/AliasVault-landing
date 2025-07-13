import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Founder from "@/components/Founder";
import { getTranslations } from "next-intl/server";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "AliasVault is an open-source end-to-end encrypted password and alias manager.",
   // other metadata
};

const AboutPage = async () => {
  const t = await getTranslations();
  
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
