import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionSpacing from "@/components/Common/SectionSpacing";
import MissionSection from "@/components/Mission/MissionSection";
import Roadmap from "@/components/Mission/Roadmap";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission",
  description: "Read more about our mission and vision.",
   // other metadata
};

const MissionPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Mission"
        description="Read more about the mission and vision for AliasVault."
      />
      <MissionSection />
      <SectionSpacing withBorder className="pt-16 md:pt-20" />
      <Roadmap />
    </>
  );
};

export default MissionPage;
