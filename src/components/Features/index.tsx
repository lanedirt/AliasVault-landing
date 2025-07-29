import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import getFeaturesData from "./featuresData";
import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations();
  const featuresData = getFeaturesData(t);
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <SectionTitle
            title={t('features.title')}
            paragraph={t('features.description')}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
