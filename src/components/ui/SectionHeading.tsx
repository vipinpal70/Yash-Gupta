import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Badge tone={tone}>{eyebrow}</Badge> : null}
      <h2
        className={cn(
          "max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl",
          tone === "light" ? "text-foreground" : "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-xl text-lg leading-relaxed",
            tone === "light" ? "text-muted" : "text-white/65",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
