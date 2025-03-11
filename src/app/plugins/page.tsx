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
      />
      <Plugins />
    </>
  );
};

export default PluginsPage;