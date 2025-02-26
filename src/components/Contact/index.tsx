import Link from "next/link";

const ContactContent = () => {
  return (
    <section className="pb-16 pt-8">
      <div className="container">
        <div className="mx-auto">
          <div className="mb-12">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Support & Bug Reports
            </h3>
            <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
              For cloud-hosted AliasVault support inquiries, contact us directly at:{" "}
              <a
                  href="mailto:contact@support.aliasvault.net"
                  className="text-primary hover:underline"
              >
                contact@support.aliasvault.net
              </a>.
            </p>
            <p className="text-base text-body-color dark:text-body-color-dark">
              For bug reports please use our GitHub repository. For technical discussions about the open-source project, join our Discord community:
            </p>
            <ul className="mt-4 list-disc pl-6 text-body-color dark:text-body-color-dark">
              <li className="mb-2">
                <a
                    href="https://github.com/lanedirt/aliasvault/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                  Report issues on GitHub
                </a>
              </li>
              <li className="mb-2">
                <a
                    href="https://discord.gg/DsaXMTEtpF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                  Ask your questions on our Discord Community
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              FAQ & Documentation
            </h3>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Find answers to common questions in our FAQ, or find more information on our separate documentation website.
            </p>
            <div className="mt-4">
            <Link
                  href="/#faq"
                  className="text-primary hover:underline"
              >
                Read FAQ
              </Link>
              {" • "}
              <Link
                  href="/docs"
                  className="text-primary hover:underline"
              >
                View Documentation
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Feature Requests & Ideas
            </h3>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Have an idea for improving AliasVault? Submit feature requests through our GitHub Discussions. Please
              check if your suggestion has already been made and feel free to upvote existing requests you support.
              If you wish to get in contact with the author and maintainers instead, feel free to join our Discord community.
            </p>
            <div className="mt-4">
              <a
                  href="https://github.com/lanedirt/aliasvault/discussions/categories/ideas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
              >
                Submit Feature Request
              </a>
              {" • "}
              <a
                  href="https://discord.gg/DsaXMTEtpF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
              >
               Discuss ideas on our Discord Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
