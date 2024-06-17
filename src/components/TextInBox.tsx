export default function TextInBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={` bg-customGray-100 whitespace-nowrap px-3 py-1 rounded-sm text-xs ${className}`}
    >
      {children}
    </div>
  );
}
