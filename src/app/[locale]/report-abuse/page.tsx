import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Report Abuse",
    description: "Report abuse of AliasVault email aliases.",
  };

const ReportAbusePage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 lg:w-8/12">
              <div className="text-center mb-12">
                <h1 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
                  Report Abuse
                </h1>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p>
                  If you or your service (website, app, etc.) is negatively affected by an email alias from AliasVault,
                  please contact us. We take abuse reports seriously and will investigate
                  all legitimate claims.
                </p>

                <p className="my-6">
                  To report abuse, please contact us directly at{" "}
                  <Link href="mailto:contact@support.aliasvault.net" className="text-primary">
                    contact@support.aliasvault.net
                  </Link>{" "}
                  and include the email addresses that are part of the abuse. We will respond within 48 hours.
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