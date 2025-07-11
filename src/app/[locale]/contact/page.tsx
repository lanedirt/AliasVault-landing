import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactContent from "@/components/Contact/index";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the AliasVault team for support and inquiries.",
};

const ContactPage = () => {
  const t = useTranslations();
  
  return (
    <>
      <Breadcrumb
        pageName={t('contact.title')}
        description={t('contact.description')}
      />
      <ContactContent />
    </>
  );
};

export default ContactPage;
