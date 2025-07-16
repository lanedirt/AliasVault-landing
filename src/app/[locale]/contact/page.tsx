import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactContent from "@/components/Contact/index";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { generatePageSEOMetadata } from "@/lib/seo-utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return generatePageSEOMetadata({
    title: t('contact.title'),
    description: t('contact.description'),
    path: '/contact',
    locale,
  });
}

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
