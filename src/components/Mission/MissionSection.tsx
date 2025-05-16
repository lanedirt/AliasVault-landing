const MissionSection = () => {
  return (
    <section id="mission">
      <div className="container space-y-16">
        {/* Section 1 */}
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-3/4 space-y-16">
            <div className="w-full" style={{ maxWidth: "700px" }}>
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Why AliasVault
              </h2>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                The mission of AliasVault is simple: to make the internet a safer and more private place — where you decide what to share, and with whom.
              </p>
              <p className="mt-4 text-base !leading-relaxed text-body-color md:text-lg">
                We believe privacy is a right, not a luxury — and our mission is to put control back into the hands of users, helping them stay secure and anonymous online.
              </p>
              <p className="mt-4 text-base !leading-relaxed text-body-color md:text-lg">
                AliasVault is the response to a web that tracks everything: a way to take back control of your digital privacy and help you stay secure online.
              </p>
            </div>

            <div className="w-full" style={{ maxWidth: "700px" }}>
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                The Internet & Privacy
              </h2>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                Not too long ago, you could live your life without really thinking about privacy. You could buy things, talk to people, and share your thoughts without worrying about who was watching.
              </p>
              <p className="mt-4 text-base !leading-relaxed text-body-color md:text-lg">
                When the internet started, it was a place where you could be whoever you wanted to be. A place to connect with people all over the world in an anonymous way. Today however, the internet has become a place where companies track your every move and sell your data to the highest bidder.
              </p>
              <p className="mt-4 text-base !leading-relaxed text-body-color md:text-lg">
                Take advertising, for example. It used to be shown to millions of people at the same time. It was annoying, but at least it didn’t know who you were.
                Now due to the internet, companies developed ways to know exactly who you are, what you like, and what you’re looking for, sometimes even before you do. And this doesn’t just affect adults. Even children watching innocent cartoons online are being tracked. Their clicks, their habits, even their preferences are collected and used to build up a profile on them.
              </p>
              <p className="mt-4 text-base !leading-relaxed text-body-color md:text-lg">
                To put it in perspective: imagine you’re walking through a shopping mall and someone follows you around, writes down everything you do, how long you stay in each store, what you look at (maybe even a specific medicine) — and then shares that with all the other stores, or sells it to the highest bidder. That would be called stalking, harassment, or worse.
                But on the internet, this has become the norm.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-3/4 space-y-11">
            <div className="w-full" style={{ maxWidth: "700px" }}>
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Taking Back Control
              </h2>
              <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                Privacy on the internet starts with your email address. It&apos;s the first thing a site asks for, sometimes in exchange for a discount, and the first thing marketers use to track you.
              </p>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                Using the same address everywhere lets strangers piece together a profile of which sites you visit, which services you use, and which products you like. And it&apos;s not just companies that are interested in this data, it&apos;s also governments. The political arena is constantly changing, and what you did that was acceptable today can be reason for prosecution tomorrow.
              </p>
              <p className="mt-4 text-base !leading-relaxed text-body-color md:text-lg">
                AliasVault lets you decide what information you share. Generate unique aliases and passwords so you never give away more than necessary. One click, one alias, and the data trail ends.
              </p>
            </div>

            <div className="w-full" style={{ maxWidth: "700px" }}>
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Our Vision
              </h2>
              <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                We envision a future where people are fully in control of their own privacy.
              </p>
              <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                Recent laws like GDPR are a step in the right direction, but regulation alone isn&apos;t enough. Real change happens when people understand how their data is being used, and have simple, powerful tools to do something about it. That&apos;s where AliasVault comes in.
              </p>
              <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                Right now, AliasVault helps you generate unique aliases and passwords, so you never have to give away more than necessary. But this is just the beginning. We’re building a privacy platform designed to protect you and your family, with features that make it easy to stay private by default.
              </p>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                Everything we do at AliasVault supports one mission: to make the internet a safer and more private place — where you decide what to share, and with whom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
