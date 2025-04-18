import Image from "next/image";

const Founder = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        {/* Added header section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[45px] mb-4">
            Story behind AliasVault
          </h2>
          <p className="text-base text-body-color md:text-lg">
            Meet the founder behind AliasVault and discover what drives our mission
          </p>
        </div>

        <div className="mx-auto">
          {/* Quote content wrapper */}
          <div className="wow fadeInUp relative bg-white dark:bg-gray-800/50 rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Large quote mark */}
            <span className="absolute -left-4 -top-4 text-7xl text-primary/30 select-none">&quot;</span>

            {/* Quote text */}
            <div className="space-y-6 text-base leading-relaxed text-body-color sm:text-lg sm:leading-relaxed pl-6">
              <p>
                As a software developer and architect, I&apos;ve always believed in fighting against spam and making privacy accessible to everyone. This belief led me to create asdasd.nl in 2013, a Dutch temporary email service that later evolved into the multilingual SpamOK.com – helping thousands of people every day protect themselves from unwanted spam and data collection through free temporary email addresses.
              </p>
              <p>
                Building on that foundation, I started to begin work on AliasVault in the beginning of 2024: a self-hostable, end-to-end encrypted password and alias manager designed to give users full control over their digital identity. AliasVault enables you to easily generate unique passwords, aliases, and email addresses for every website you use – keeping your personal information private and secure.
              </p>
              <p>
                Since releasing the first beta in December, I’ve dedicated myself to continuous improvement with regular updates every two weeks. New features like browser extensions, 2FA support, and seamless import from other password managers make AliasVault more powerful and accessible with each release.
              </p>
              <p>
                AliasVault is a passion project, entirely self-funded and community-driven. My goal is to make AliasVault a meaningful contribution to online privacy and a product that can stand on its own. AliasVault is open-source and self-hostable, so anyone can inspect the code or run it on their own infrastructure. In the future, optional premium features will be introduced to the cloud version to help support development and ensure sustainability.
              </p>
            </div>

            {/* Author info */}
            <div className="mt-10 flex items-center border-t pt-6 dark:border-gray-700">
              <div className="mr-4 h-16 w-16 overflow-hidden rounded-full ring-2 ring-primary/20">
                <Image
                  src="/images/founder/founder.jpg"
                  alt="founder"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h5 className="text-xl font-semibold text-dark dark:text-white">
                  Leendert de Borst
                </h5>
                <p className="text-sm text-body-color">Founder & Creator of AliasVault</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
