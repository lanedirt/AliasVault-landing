import Documentation from "@/components/Docs/Documentation";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Alternative to Bitwarden | AliasVault",
  description: "AliasVault is an open-source end-to-end encrypted password and alias manager.",
   // other metadata
};

const BitwardenPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Alternative to Bitwarden"
      />
      <Documentation />
    </>
  );
};

export default BitwardenPage;
