import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ContactContent = () => {
  const t = useTranslations();

  return (
    <section className="pb-16 pt-8">
      <div className="container">
        <div className="mx-auto">
          <div className="mb-12">
            <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
              {t('contact.content.intro')}{" "}
              <a
                href="https://github.com/lanedirt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {t('contact.content.founder')}
              </a>{" "}
              {t('contact.content.location')}
            </p>
            <p className="mb-12 text-base text-body-color dark:text-body-color-dark">
              {t('contact.content.inquiries')}{" "}
              <a
                href="mailto:contact@support.aliasvault.net"
                className="text-primary hover:underline"
              >
                contact@support.aliasvault.net
              </a>
            </p>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {t('contact.content.support.title')}
            </h3>
            <p className="text-base text-body-color dark:text-body-color-dark">
              {t('contact.content.support.description')}
            </p>
            <ul className="mt-4 list-disc pl-6 text-body-color dark:text-body-color-dark">
              <li className="mb-2">
                <a
                    href="https://github.com/aliasvault/aliasvault/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                  {t('contact.content.support.links.github')}
                </a>
              </li>
              <li className="mb-2">
                <a
                    href="https://discord.gg/DsaXMTEtpF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                  {t('contact.content.support.links.discord')}
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {t('contact.content.faq.title')}
            </h3>
            <p className="text-base text-body-color dark:text-body-color-dark">
              {t('contact.content.faq.description')}
            </p>
            <div className="mt-4">
            <Link
                  href="/#faq"
                  className="text-primary hover:underline"
              >
                {t('contact.content.faq.links.faq')}
              </Link>
              {" • "}
              <Link
                  href="/docs"
                  className="text-primary hover:underline"
              >
                {t('contact.content.faq.links.docs')}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {t('contact.content.features.title')}
            </h3>
            <p className="text-base text-body-color dark:text-body-color-dark">
              {t('contact.content.features.description')}
            </p>
            <div className="mt-4">
              <a
                  href="https://github.com/aliasvault/aliasvault/discussions/categories/ideas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
              >
                {t('contact.content.features.links.submit')}
              </a>
              {" • "}
              <a
                  href="https://discord.gg/DsaXMTEtpF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
              >
               {t('contact.content.features.links.discuss')}
              </a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {t('contact.content.donations.title')}
            </h3>
            <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
              {t('contact.content.donations.description')}
            </p>
            <a
              href="https://www.buymeacoffee.com/lanedirt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/contact/buymeacoffee.png"
                alt={t('contact.content.donations.imageAlt')}
                width={217}
                height={60}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;