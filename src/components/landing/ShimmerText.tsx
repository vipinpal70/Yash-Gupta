export function ShimmerText({
  children,
  className = "",
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "div";
}) {
  return (
    <Tag
      className={`bg-[linear-gradient(100deg,#1E4FD8_0%,#9CC4FF_25%,#5B9BFF_45%,#DCEAFF_60%,#3A6FF0_80%,#1E4FD8_100%)] bg-[length:200%_auto] bg-clip-text text-transparent [animation:yg-shimmer_6s_linear_infinite] ${className}`}
    >
      {children}
    </Tag>
  );
}
