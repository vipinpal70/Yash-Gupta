import { Check } from "lucide-react";
import type { Program } from "@/data/programs";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ProgramCard({
  category,
  title,
  description,
  features,
  cta,
  href,
  featured,
}: Program) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col justify-between gap-10 rounded-[28px] border p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 sm:p-10",
        featured
          ? "border-emerald/40 bg-emerald-dark text-white shadow-[0_30px_80px_-30px_rgba(34,197,94,0.55)] hover:shadow-[0_36px_90px_-30px_rgba(34,197,94,0.7)] lg:-translate-y-3"
          : "border-white/10 bg-surface hover:border-emerald/30 hover:bg-surface-strong hover:shadow-[0_24px_60px_-30px_rgba(34,197,94,0.3)]",
      )}
    >
      {featured ? (
        <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
          Most Personalized
        </span>
      ) : null}

      <div className="flex flex-col gap-6">
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.16em]",
            featured ? "text-white/65" : "text-muted",
          )}
        >
          {category}
        </span>
        <h3
          className={cn(
            "text-3xl font-medium tracking-tight",
            featured ? "text-white" : "text-foreground",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-base leading-relaxed",
            featured ? "text-white/80" : "text-muted",
          )}
        >
          {description}
        </p>

        <ul className="flex flex-col gap-3">
          {features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "flex items-center gap-3 text-sm",
                featured ? "text-white/85" : "text-foreground/80",
              )}
            >
              <Check
                className={cn(
                  "size-4 shrink-0",
                  featured ? "text-gold" : "text-emerald",
                )}
                strokeWidth={2.5}
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button
        href={href}
        variant={featured ? "secondary" : "primary"}
        tone={featured ? "dark" : "light"}
        className="w-full justify-center sm:w-fit"
      >
        {cta}
      </Button>
    </div>
  );
}
