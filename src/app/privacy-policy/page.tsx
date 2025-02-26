import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AliasVault is an open-source end-to-end encrypted password and alias manager.",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
      />
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
