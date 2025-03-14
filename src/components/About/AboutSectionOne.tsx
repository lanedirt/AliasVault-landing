import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] min-w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="Your privacy. Protected."
              paragraph="In an ideal world you don't need AliasVault, in reality you do. Many companies track your online activity without your permission or knowledge, creating <a href='https://en.wikipedia.org/wiki/Shadow_profile' target='_blank'>shadow profiles</a> of you. Even the most reputable companies can fall victim to <a href='https://en.wikipedia.org/wiki/Data_breach' target='_blank'>data breaches</a>, causing your personal information to fall into the wrong hands. AliasVault helps keep you safe online by letting you control how websites see and track you."
              mb="44px"
            />

            <div
              className="mb-12 lg:mb-0"
              data-wow-delay=".15s"
            >
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3">
                  <List text="Every website, a new alias, email address and password" />
                  <List text="When your data is shared, you know which service caused it" />
                  <List text="Only use your real identity and email address when it's absolutely necessary, keeping your private information private" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
              <Image
                src="/images/about/privacy-right.png"
                alt="about-image"
                width={1000}
                height={1000}
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
              />
              <Image
                src="/images/about/privacy-right.png"
                alt="about-image"
                width={1000}
                height={1000}
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
