import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

interface RssIconProps {
  className?: string;
}

const RssIcon = ({ className = '' }: RssIconProps) => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <Link
      href={`${locale === 'en' ? '' : '/' + locale}/rss.xml`}
      className={`inline-flex items-center justify-center rounded-full bg-primary p-2 text-white hover:bg-opacity-90 ${className}`}
      title={t('common.rssFeed')}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" />
      </svg>
    </Link>
  );
};

export default RssIcon;