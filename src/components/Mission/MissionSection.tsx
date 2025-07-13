import { getTranslations } from "next-intl/server";

const MissionSection = async () => {
  const t = await getTranslations();
  return (
    <section id="mission">
      <div className="container space-y-16">
        {/* Section 1 */}
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-3/4 space-y-16">
            <div className="w-full" style={{ maxWidth: "700px" }}>
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                {t('mission.sections.whyAliasVault.title')}
              </h2>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.whyAliasVault.paragraph1')}
              </p>
              <p className="mt-4 text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.whyAliasVault.paragraph2')}
              </p>
              <p className="mt-4 text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.whyAliasVault.paragraph3')}
              </p>
            </div>

            <div className="w-full" style={{ maxWidth: "700px" }}>
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                {t('mission.sections.internetPrivacy.title')}
              </h2>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.internetPrivacy.paragraph1')}
              </p>
              <p className="mt-4 text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.internetPrivacy.paragraph2')}
              </p>
              <p className="mt-4 text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.internetPrivacy.paragraph3')}
              </p>
              <p className="mt-4 text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.internetPrivacy.paragraph4')}
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-3/4 space-y-11">
            <div className="w-full" style={{ maxWidth: "700px" }}>
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                {t('mission.sections.takingBackControl.title')}
              </h2>
              <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.takingBackControl.paragraph1')}
              </p>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.takingBackControl.paragraph2')}
              </p>
              <p className="mt-4 text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.takingBackControl.paragraph3')}
              </p>
            </div>

            <div className="w-full" style={{ maxWidth: "700px" }}>
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                {t('mission.sections.ourVision.title')}
              </h2>
              <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.ourVision.paragraph1')}
              </p>
              <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.ourVision.paragraph2')}
              </p>
              <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.ourVision.paragraph3')}
              </p>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                {t('mission.sections.ourVision.paragraph4')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
