import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactContent from "@/components/Contact/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the AliasVault team for support and inquiries.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description=""
      />
      <ContactContent />
    </>
  );
};

export default ContactPage;
