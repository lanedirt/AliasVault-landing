import Link from "next/link";
import Image from "next/image";

interface BrowserBadgeProps {
  href?: string;
  icon: string;
  alt: string;
  className?: string;
  disabled?: boolean;
}

const BrowserBadge = ({ href, icon, alt, className = "", disabled = false }: BrowserBadgeProps) => {
  const commonClasses = `inline-flex items-center justify-center rounded-md bg-gray-100 p-2 transition-all duration-200
    ${disabled ? 'cursor-not-allowed' : 'hover:bg-gray-200'}
    dark:bg-slate-600 ${disabled ? '' : 'dark:hover:bg-slate-700'}
    ${className}`;

  return disabled ? (
    <div className={commonClasses} title={alt}>
      <Image
        src={icon}
        alt={alt}
        width={24}
        height={24}
        className="h-6 w-6 opacity-40"
      />
    </div>
  ) : (
    <Link
      href={href ?? "#"}
      target="_blank"
      title={alt}
      className={commonClasses}
    >
      <Image
        src={icon}
        alt={alt}
        width={24}
        height={24}
        className="h-6 w-6"
      />
    </Link>
  );
};

export default BrowserBadge;