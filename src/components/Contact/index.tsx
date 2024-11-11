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
              For bug reports and technical discussions about the open-source project, please use our GitHub repository:
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
                    href="https://github.com/lanedirt/aliasvault/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                  Join GitHub Discussions
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Documentation & FAQ
            </h3>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Our FAQ and documentation is a great place to start. While we&apos;re working on our standalone documentation
              website, you can find comprehensive information in our GitHub repository.
            </p>
            <div className="mt-4">
              <Link
                  href="/docs"
                  className="text-primary hover:underline"
              >
                View Documentation
              </Link>
              {" • "}
              <Link
                  href="/#faq"
                  className="text-primary hover:underline"
              >
                Read FAQ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Ideas & Feature Requests
            </h3>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Have an idea for improving AliasVault? Submit feature requests through our GitHub Discussions. Please
              check if your suggestion has already been made and feel free to upvote existing requests you support.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
