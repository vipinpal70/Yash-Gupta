import { cn } from "@/lib/utils";

export function ExperienceStat({
  value,
  label,
  tone = "light",
  className,
}: {
  value: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-[28px] border p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] sm:p-10",
        tone === "light"
          ? "border-white/10 bg-surface"
          : "border-white/12 bg-white/[0.03]",
        className,
      )}
    >
      <span
        className={cn(
          "font-serif text-6xl leading-none sm:text-7xl",
          tone === "light" ? "text-emerald" : "text-gold",
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.18em]",
          tone === "light" ? "text-muted" : "text-white/60",
        )}
      >
        {label}
      </span>
    </div>
  );
}
