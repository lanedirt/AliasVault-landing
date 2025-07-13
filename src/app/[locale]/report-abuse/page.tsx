import { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
    title: "Report Abuse",
    description: "Report abuse of AliasVault email aliases.",
  };

const ReportAbusePage = async () => {
  const t = await getTranslations();
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 lg:w-8/12">
              <div className="text-center mb-12">
                <h1 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
                  {t('reportAbuse.title')}
                </h1>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p>
                  {t('reportAbuse.description')}
                </p>

                <p className="my-6">
                  {t('reportAbuse.contactText')}{" "}
                  <Link href="mailto:contact@support.aliasvault.net" className="text-primary">
                    {t('reportAbuse.emailAddress')}
                  </Link>{" "}
                  {t('reportAbuse.responseTime')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportAbusePage;