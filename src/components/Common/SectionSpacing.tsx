const SectionSpacing = ({
  className = '',
  withBorder = false
}: {
  className?: string;
  withBorder?: boolean;
}) => {
  return (
    <div className={`container ${className}`}>
      {withBorder && (
        <div className="border-t border-body-color/[.15] dark:border-white/[.15]" />
      )}
    </div>
  );
};

export default SectionSpacing;