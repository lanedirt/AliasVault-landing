import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Platforms from "@/components/Platforms/Platforms";

export const metadata: Metadata = {
  title: "Platforms",
  description: "AliasVault browser extensions and mobile apps for password and alias management.",
};

const PluginsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Platforms"
        description="AliasVault is available on all major platforms, including web, desktop, and mobile."
      />
      <Platforms />
    </>
  );
};

export default PluginsPage;