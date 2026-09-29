import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]",
        tone === "light" ? "text-muted" : "text-white/60",
        className,
      )}
    >
      {children}
    </span>
  );
}
