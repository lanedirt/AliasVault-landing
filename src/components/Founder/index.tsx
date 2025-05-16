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
                As a software developer and architect, I’ve always been passionate about fighting spam and making privacy accessible. In 2013, I launched asdasd.nl, a Dutch temporary email service that grew into the multilingual SpamOK.com, helping thousands protect themselves from spam and data collection.
              </p>
              <p>
                In 2024, I began building AliasVault. A self-hostable, end-to-end encrypted password and alias manager that puts users in control of their digital identity. It lets you generate unique passwords and email aliases for every site you use, keeping your personal data secure.
              </p>
              <p>
                Since the beta release in December, I’ve continued to work on AliasVault with bi-weekly updates. New features like browser extensions, 2FA, and imports from other password managers make AliasVault more powerful and accessible with each release.
              </p>
              <p>
                AliasVault is open source and as of right now, entirely self-funded. It’s built to be transparent, community-driven, and privacy-first. Optional premium cloud features will support long-term development, but anyone can self-host it or inspect the code. Read more about <a href="/mission" className="text-primary">our mission</a> to learn what drives this project.              </p>
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
