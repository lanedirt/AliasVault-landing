import React from "react";
import { getTranslations } from "next-intl/server";

interface Milestone {
  month: string;
  label: string;
  text: string;
}

export default async function Roadmap() {
  const t = await getTranslations();
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  // Create timeline from translations
  const timeline = [
    {
      year: "2024",
      milestones: t.raw('mission.roadmap.years.2024.milestones'),
    },
    {
      year: "2025",
      milestones: t.raw('mission.roadmap.years.2025.milestones'),
    },
    {
      year: "2026",
      milestones: t.raw('mission.roadmap.years.2026.milestones'),
    },
    {
      year: "2027",
      milestones: t.raw('mission.roadmap.years.2027.milestones'),
    },
    {
      year: "2028",
      milestones: t.raw('mission.roadmap.years.2028.milestones'),
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        {t('mission.roadmap.title')}
      </h2>
      <p className="text-center text-base !leading-relaxed text-body-color md:text-lg">
        {t('mission.roadmap.description')} <a href="https://github.com/lanedirt/AliasVault/issues/731" className="text-primary">{t('mission.roadmap.githubLinkText')}</a>.
      </p>

      <div className="relative mt-12">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-primary/20" />

        <div className="space-y-24">
          {timeline.map((yearBlock, yearIdx) => {
            const isLeft = yearIdx % 2 === 0;
            const yearNumber = parseInt(yearBlock.year);

            return (
              <div
                key={yearBlock.year}
                className="relative grid grid-cols-2 items-start"
              >
                {/* Center dot per year */}
                <div className="absolute left-1/2 top-4 -translate-x-1/2 transform">
                  <div className="h-4 w-4 rounded-full bg-primary" />
                </div>

                {isLeft ? (
                  <>
                    {/* Content Left */}
                    <div className="col-span-1 pr-8 text-right">
                      <h3 className="text-2xl mt-2 font-bold text-black dark:text-white">
                        {yearBlock.year}
                      </h3>
                      <ul className="mt-8 space-y-6">
                        {yearBlock.milestones && yearBlock.milestones.map((m: Milestone, i: number) => {
                          const isNow =
                            yearNumber === currentYear &&
                            Math.floor((parseInt(m.month) - 1) / 3) === Math.floor((currentMonth - 1) / 3);

                          return (
                            <li key={i} className="relative text-base text-body-color">
                              {m.label && (
                                <span className="font-medium">{m.label}: </span>
                              )}
                              {m.text}
                              {/* Show "We're here" on right */}
                              {isNow && (
                                <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-white">
                                  {t('mission.roadmap.wereHere')}
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    {/* Content Right */}
                    <div className="col-span-1 pl-8 text-left">
                      <h3 className="text-2xl mt-2 font-bold text-black dark:text-white">
                        {yearBlock.year}
                      </h3>
                      <ul className="mt-8 space-y-6">
                        {yearBlock.milestones && yearBlock.milestones.map((m: Milestone, i: number) => {
                          const isNow =
                            yearNumber === currentYear &&
                            Math.floor((parseInt(m.month) - 1) / 3) === Math.floor((currentMonth - 1) / 3);

                          return (
                            <li key={i} className="relative text-base text-body-color">
                              {m.label && (
                                <span className="font-medium">{m.label}: </span>
                              )}
                              {m.text}
                              {/* Show "We're here" on left */}
                              {isNow && (
                                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-white">
                                  {t('mission.roadmap.wereHere')}
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
