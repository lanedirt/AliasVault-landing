import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Platforms from "@/components/Platforms/Platforms";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { generatePageSEOMetadata } from "@/lib/seo-utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return generatePageSEOMetadata({
    title: t('platforms.title'),
    description: t('platforms.pageDescription'),
    path: '/platforms',
    locale,
  });
}

const PluginsPage = () => {
  const t = useTranslations();
  
  return (
    <>
      <Breadcrumb
        pageName={t('platforms.title')}
        description={t('platforms.pageDescription')}
      />
      <Platforms />
    </>
  );
};

export default PluginsPage;