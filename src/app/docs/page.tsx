import Documentation from "@/components/Docs/Documentation";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Documentation | AliasVault",
  description: "AliasVault is an open-source end-to-end encrypted password and alias manager.",
   // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Documentation"
      />
      <Documentation />
    </>
  );
};

export default AboutPage;
