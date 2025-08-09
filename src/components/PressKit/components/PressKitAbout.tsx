"use client";
import { useTranslations } from "next-intl";

const PressKitAbout = () => {
  const t = useTranslations("pressKitAbout");

  return (
    <div className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <h2 className="mb-4 text-3xl text-center font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {t("title")}
        </h2>
        <p className="mb-8 text-base text-center leading-relaxed text-body-color dark:text-body-color-dark">
          {t("description")}
        </p>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Short Version */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                {t("shortVersion.title")}
              </h3>
              <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {t("shortVersion.content")}
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Perfect for:</strong> {t("shortVersion.perfectFor")}
              </div>
            </div>

            {/* Long Version */}
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                {t("longVersion.title")}
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {t("longVersion.content").split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <strong>Perfect for:</strong> {t("longVersion.perfectFor")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressKitAbout;