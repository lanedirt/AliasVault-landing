import Plugins from "@/components/Plugins/Plugins";
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Plugins",
  description: "AliasVault browser extensions and mobile apps for password and alias management.",
};

const PluginsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Plugins"
        description="AliasVault offers various plugins and extensions that allow you to integrate AliasVault into your daily workflow across different platforms and devices."
      />
      <Plugins />
    </>
  );
};

export default PluginsPage;