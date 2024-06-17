interface Props {
  bgColor?: string;
  children: React.ReactNode;
}

export default function RolPill({ bgColor, children }: Props) {
  return (
    <div
      className={`${
        !bgColor && "bg-primaryLight"
      } rounded-sm text-white flex items-center gap-2 px-4 py-2 font-semibold text-xs sm:text-base `}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
}
