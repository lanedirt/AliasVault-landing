import { useTranslations } from "next-intl";

const ResponsibleDisclosureContent = () => {
  const t = useTranslations();

  return (
    <section className="pb-16 pt-8">
      <div className="container">
        <div className="mx-auto">
          <div className="mb-12">
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
              {t('responsibleDisclosure.content.intro')}
            </p>

            <div className="rounded-lg bg-primary/5 p-6 mb-8">
              <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                {t('responsibleDisclosure.content.email')}
              </p>
              <a
                href="mailto:security@support.aliasvault.net"
                className="text-xl font-semibold text-primary hover:underline"
              >
                {t('responsibleDisclosure.content.emailAddress')}
              </a>
            </div>

            <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {t('responsibleDisclosure.content.commitment.title')}
            </h3>
            <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
              {t('responsibleDisclosure.content.commitment.description')}
            </p>
            <ul className="mb-8 list-disc pl-6 text-body-color dark:text-body-color-dark">
              <li className="mb-2">{t('responsibleDisclosure.content.commitmentList.acknowledge')}</li>
              <li className="mb-2">{t('responsibleDisclosure.content.commitmentList.investigate')}</li>
              <li className="mb-2">{t('responsibleDisclosure.content.commitmentList.timeline')}</li>
              <li className="mb-2">{t('responsibleDisclosure.content.commitmentList.credit')}</li>
              <li className="mb-2">{t('responsibleDisclosure.content.commitmentList.cve')}</li>
              <li className="mb-2">{t('responsibleDisclosure.content.commitmentList.coordinate')}</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {t('responsibleDisclosure.content.guidelines.title')}
            </h3>
            <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
              {t('responsibleDisclosure.content.guidelines.description')}
            </p>
            <ul className="mb-8 list-disc pl-6 text-body-color dark:text-body-color-dark">
              <li className="mb-2">{t('responsibleDisclosure.content.guidelines.items.noHarm')}</li>
              <li className="mb-2">{t('responsibleDisclosure.content.guidelines.items.minimal')}</li>
              <li className="mb-2">{t('responsibleDisclosure.content.guidelines.items.confidential')}</li>
              <li className="mb-2">{t('responsibleDisclosure.content.guidelines.items.legal')}</li>
              <li className="mb-2">{t('responsibleDisclosure.content.guidelines.items.scope')}</li>
            </ul>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                {t('responsibleDisclosure.content.scope.title')}
              </h3>
              <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                {t('responsibleDisclosure.content.scope.description')}
              </p>
              <ul className="list-disc pl-6 text-body-color dark:text-body-color-dark">
                <li className="mb-2">{t('responsibleDisclosure.content.scope.items.main')}</li>
                <li className="mb-2">{t('responsibleDisclosure.content.scope.items.api')}</li>
                <li className="mb-2">{t('responsibleDisclosure.content.scope.items.website')}</li>
                <li className="mb-2">{t('responsibleDisclosure.content.scope.items.mobile')}</li>
                <li className="mb-2">{t('responsibleDisclosure.content.scope.items.extensions')}</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                {t('responsibleDisclosure.content.outOfScope.title')}
              </h3>
              <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                {t('responsibleDisclosure.content.outOfScope.description')}
              </p>
              <ul className="list-disc pl-6 text-body-color dark:text-body-color-dark">
                <li className="mb-2">{t('responsibleDisclosure.content.outOfScope.items.social')}</li>
                <li className="mb-2">{t('responsibleDisclosure.content.outOfScope.items.physical')}</li>
                <li className="mb-2">{t('responsibleDisclosure.content.outOfScope.items.dos')}</li>
                <li className="mb-2">{t('responsibleDisclosure.content.outOfScope.items.spam')}</li>
                <li className="mb-2">{t('responsibleDisclosure.content.outOfScope.items.automated')}</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-base text-body-color dark:text-body-color-dark">
              {t('responsibleDisclosure.content.thanks')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleDisclosureContent;