import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Platforms from "@/components/Platforms/Platforms";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Platforms",
  description: "AliasVault browser extensions and mobile apps for password and alias management.",
};

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