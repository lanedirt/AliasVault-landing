import DocsComingSoon from "@/components/Docs/ComingSoon";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | AliasVault",
  description: "AliasVault is a free and open-source end-to-end encrypted password and alias manager.",
   // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Documentation"
        description="We're working hard to bring you our documentation. Check back soon for updates!"
      />
      <DocsComingSoon />
    </>
  );
};

export default AboutPage;
