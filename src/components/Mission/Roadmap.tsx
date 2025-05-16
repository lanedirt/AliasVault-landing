import React from "react";

const timeline = [
  {
    year: 2024,
    milestones: [
      { month: 5, label: "May", text: "Start of AliasVault Development" },
      { month: 12, label: "December", text: "Beta Release of AliasVault" },
    ],
  },
  {
    year: 2025,
    milestones: [
      { month: 3, label: "Q1", text: "Release of Browser Extensions" },
      { month: 6, label: "Q2", text: "Release of Mobile Apps" },
      { month: 9, label: "Q3", text: "Platform Stability & Maturity" },
      { month: 12, label: "Q4", text: "v1.0 Stable Release + Security Audit" },
    ],
  },
  {
    year: 2026,
    milestones: [
      { month: 3, label: "Q1", text: "Premium Hosted Features " },
      { month: 6, label: "Q2", text: "Family Features" },
      { month: 9, label: "Q3/Q4", text: "Disposable Phone Numbers" },
    ],
  },
  {
    year: 2027,
    milestones: [
      { month: 6, label: "Mid-Year", text: "More Integrations" },
    ],
  },
  {
    year: 2028,
    milestones: [
    ],
  },
];

export default function Roadmap() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  return (
    <section className="mt-20">
      <h2 className="mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        Our Roadmap
      </h2>
      <p className="text-center text-base !leading-relaxed text-body-color md:text-lg">
        Below shows a timeline of our planned roadmap. For more details regarding our roadmap, take a look at our <a href="https://github.com/lanedirt/AliasVault/issues/731" className="text-primary">GitHub page</a>.
      </p>

      <div className="relative mt-12">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-primary/20" />

        <div className="space-y-24">
          {timeline.map((yearBlock, yearIdx) => {
            const isLeft = yearIdx % 2 === 0;

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
                        {yearBlock.milestones.map((m, i) => {
                          const isNow =
                            yearBlock.year === currentYear &&
                            Math.floor((m.month - 1) / 3) === Math.floor((currentMonth - 1) / 3);

                          return (
                            <li key={i} className="relative text-base text-body-color">
                              {m.label && (
                                <span className="font-medium">{m.label}: </span>
                              )}
                              {m.text}
                              {/* Show "We're here" on right */}
                              {isNow && (
                                <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-white">
                                  We’re here
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
                        {yearBlock.milestones.map((m, i) => {
                          const isNow =
                            yearBlock.year === currentYear &&
                            Math.floor((m.month - 1) / 3) === Math.floor((currentMonth - 1) / 3);

                          return (
                            <li key={i} className="relative text-base text-body-color">
                              {m.label && (
                                <span className="font-medium">{m.label}: </span>
                              )}
                              {m.text}
                              {/* Show "We're here" on left */}
                              {isNow && (
                                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-white">
                                  We’re here
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
