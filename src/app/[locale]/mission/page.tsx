import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionSpacing from "@/components/Common/SectionSpacing";
import MissionSection from "@/components/Mission/MissionSection";
import Roadmap from "@/components/Mission/Roadmap";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t('mission.metadata.title'),
    description: t('mission.metadata.description'),
  };
}

export default async function MissionPage() {
  const t = await getTranslations();

  return (
    <>
      <Breadcrumb
        pageName={t('mission.breadcrumb.title')}
        description={t('mission.breadcrumb.description')}
      />
      <MissionSection />
      <SectionSpacing withBorder className="pt-16 md:pt-20" />
      <Roadmap />
    </>
  );
}
