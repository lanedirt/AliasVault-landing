import BrowserBadge from "../Common/BrowserBadge";

const Plugins = () => {
  return (
    <section className="pt-9 pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="space-y-8">
          <div className="text-start mb-8">
            <p className="mt-4 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark mx-auto">
              AliasVault not only offers the main web application, but also various plugins and extensions that allow you to integrate AliasVault into your daily workflow across different platforms and devices.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Browser Extensions
            </h3>
            <p className="mb-6 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
              AliasVault offers browser extensions that integrate seamlessly with your browsing experience, making it easy to manage your passwords and aliases directly from your browser.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <BrowserBadge
                  href="https://chromewebstore.google.com/detail/aliasvault/bmoggiinmnodjphdjnmpcnlleamkfedj"
                  icon="/images/browser-icons/chrome.svg"
                  alt="Chrome Web Store"
                  className="mb-2"
                />
                <span className="text-sm font-medium text-black dark:text-white">Chrome</span>
                <span className="text-xs text-green-600 dark:text-green-400">Available</span>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <BrowserBadge
                  href="https://addons.mozilla.org/en-US/firefox/addon/aliasvault/"
                  icon="/images/browser-icons/firefox.svg"
                  alt="Firefox extension"
                  className="mb-2"
                />
                <span className="text-sm font-medium text-black dark:text-white">Firefox</span>
                <span className="text-xs text-green-600 dark:text-green-400">Available</span>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <BrowserBadge
                  href="https://microsoftedge.microsoft.com/addons/detail/aliasvault/kabaanafahnjkfkplbnllebdmppdemfo"
                  icon="/images/browser-icons/edge.svg"
                  alt="Microsoft Edge extension"
                  className="mb-2"
                />
                <span className="text-sm font-medium text-black dark:text-white">Microsoft Edge</span>
                <span className="text-xs text-green-600 dark:text-green-400">Available</span>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <BrowserBadge
                  href="https://apps.apple.com/app/id6743163173"
                  icon="/images/browser-icons/safari.svg"
                  alt="Safari extension"
                  className="mb-2"
                />
                <span className="text-sm font-medium text-black dark:text-white">Safari</span>
                <span className="text-xs text-green-600 dark:text-green-400">Available</span>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <BrowserBadge
                  icon="/images/browser-icons/brave.svg"
                  href="https://chromewebstore.google.com/detail/aliasvault/bmoggiinmnodjphdjnmpcnlleamkfedj"
                  alt="Brave extension"
                  className="mb-2"
                />
                <span className="text-sm font-medium text-black dark:text-white">Brave</span>
                <span className="text-xs text-green-600 dark:text-green-400">Available</span>
              </div>
            </div>

            <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
              Our browser extensions allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2 text-base font-medium text-body-color dark:text-body-color-dark">
              <li>Auto-fill passwords and login information</li>
              <li>Generate new email aliases on the fly</li>
              <li>Access your vault directly from your browser</li>
              <li>Securely save new credentials as you browse</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Mobile Apps
            </h3>
            <p className="mb-4 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
              Native mobile applications for iOS and Android are currently not available, but are included in our roadmap and will be available in one of our next releases.
            </p>
            <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
              The AliasVault mobile apps will feature:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2 text-base font-medium text-body-color dark:text-body-color-dark">
              <li>Biometric authentication (Face ID/Touch ID/Fingerprint)</li>
              <li>Offline access to your passwords</li>
              <li>Integration with mobile browsers</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Development Roadmap
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
              We&apos;re constantly working to improve AliasVault and expand our ecosystem of plugins and integrations. To track our progress and see what&apos;s coming next, check out our{" "}
              <a
                href="https://github.com/lanedirt/AliasVault?tab=readme-ov-file#roadmap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                full roadmap on GitHub
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plugins;