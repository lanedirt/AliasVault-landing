import { ReactNode } from 'react';

/**
 * Page component that provides consistent layout and spacing for page content.
 *
 * @param children - The content to render inside the page
 * @param className - Additional CSS classes to apply
 * @param bottomMargin - Whether to apply default bottom margins (default: true)
 *
 * @example
 * // Default usage with bottom margins
 * <Page>
 *   <Breadcrumb />
 *   <Content />
 * </Page>
 *
 * @example
 * // Without bottom margins
 * <Page bottomMargin={false}>
 *   <Content />
 * </Page>
 *
 * @example
 * // With additional classes
 * <Page className="bg-gray-50">
 *   <Content />
 * </Page>
 */
interface PageProps {
  children: ReactNode;
  className?: string;
  bottomMargin?: boolean;
}

const Page = ({ children, className = '', bottomMargin = true }: PageProps) => {
  const defaultMargins = bottomMargin ? 'mb-16 md:mb-20 lg:mb-28' : '';
  const combinedClassName = [defaultMargins, className].filter(Boolean).join(' ');

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export default Page;
