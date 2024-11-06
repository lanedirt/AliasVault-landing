import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import CallToAction from "@/components/CallToAction/CallToAction";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | AliasVault",
  description: "AliasVault is an open-source end-to-end encrypted password and alias manager.",
   // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About AliasVault"
        description="AliasVault is an open-source end-to-end encrypted password and alias manager. With AliasVault you can create unique identities, passwords and email addresses for every website you use. Keeping you safe online."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <CallToAction />
    </>
  );
};

export default AboutPage;
