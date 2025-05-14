import BrowserBadge from "../Common/Badge";
import Image from "next/image";

const Platforms = () => {
  return (
    <section className="pt-9 pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Mobile Apps
            </h3>
            <p className="mb-4 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
              AliasVault is available as a native iOS app allowing you to manage and use your credentials and aliases on the go. Android users, stay tuned - we&apos;re putting the finishing touches on the Native Android app, and it will be available in the Play Store within the next few weeks!
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <a
                href="https://apps.apple.com/app/id6745490915"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/images/app-store/download-app-store.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="w-[120px] h-[40px]"
                />
              </a>
            </div>
            <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
              The AliasVault mobile apps feature:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2 text-base font-medium text-body-color dark:text-body-color-dark">
              <li>Biometric authentication (Face ID / Touch ID)</li>
              <li>Offline access to your passwords</li>
              <li>Integration with mobile browsers</li>
              <li>Seamless sync across all your devices</li>
            </ul>
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
                  iconLight="/images/browser-icons/chrome.svg"
                  iconDark="/images/browser-icons/chrome.svg"
                  alt="Chrome Web Store"
                  className="mb-2"
                />
                <span className="text-sm font-medium text-black dark:text-white">Chrome</span>
                <span className="text-xs text-green-600 dark:text-green-400">Available</span>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <BrowserBadge
                  href="https://addons.mozilla.org/en-US/firefox/addon/aliasvault/"
                  iconLight="/images/browser-icons/firefox.svg"
                  iconDark="/images/browser-icons/firefox.svg"
                  alt="Firefox extension"
                  className="mb-2"
                />
                <span className="text-sm font-medium text-black dark:text-white">Firefox</span>
                <span className="text-xs text-green-600 dark:text-green-400">Available</span>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <BrowserBadge
                  href="https://microsoftedge.microsoft.com/addons/detail/aliasvault/kabaanafahnjkfkplbnllebdmppdemfo"
                  iconLight="/images/browser-icons/edge.svg"
                  iconDark="/images/browser-icons/edge.svg"
                  alt="Microsoft Edge extension"
                  className="mb-2"
                />
                <span className="text-sm font-medium text-black dark:text-white">Microsoft Edge</span>
                <span className="text-xs text-green-600 dark:text-green-400">Available</span>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <BrowserBadge
                  href="https://apps.apple.com/app/id6743163173"
                  iconLight="/images/browser-icons/safari.svg"
                  iconDark="/images/browser-icons/safari.svg"
                  alt="Safari extension"
                  className="mb-2"
                />
                <span className="text-sm font-medium text-black dark:text-white">Safari</span>
                <span className="text-xs text-green-600 dark:text-green-400">Available</span>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <BrowserBadge
                  iconLight="/images/browser-icons/brave.svg"
                  iconDark="/images/browser-icons/brave.svg"
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
              Development Roadmap
            </h3>
            <div className="space-y-4">
              <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                AliasVault is under active development, with a strong focus on usability, security, and cross-platform support.
                The main focus is on ensuring robust usability for everyday tasks, including comprehensive autofill capabilities across all platforms.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
                  Current Development Status
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-base font-medium text-body-color dark:text-body-color-dark">
                  <li>🚀 Incremental releases every 2-3 weeks</li>
                  <li>✅ Production-ready with data integrity guarantees</li>
                  <li>🔄 Automatic migration support</li>
                  <li>👥 Strong emphasis on user feedback and testing</li>
                </ul>
              </div>

              <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
               To track our progress and see what&apos;s coming next, check out our{" "}
                <a
                  href="https://github.com/lanedirt/AliasVault/issues/731"
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
      </div>
    </section>
  );
};

export default Platforms;