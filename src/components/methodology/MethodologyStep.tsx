import type { MethodologyStepData } from "@/data/methodology";
import { RevealItem } from "@/components/ui/Reveal";

export function MethodologyStep({
  number,
  title,
  description,
}: MethodologyStepData) {
  return (
    <RevealItem className="relative flex gap-6 py-8 first:pt-0 last:pb-0 sm:gap-10">
      <div className="relative z-10 flex w-8 shrink-0 justify-center sm:w-10">
        <span className="mt-2 size-2.5 rounded-full bg-emerald ring-4 ring-background" />
      </div>
      <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-10">
        <span className="font-serif text-2xl text-muted sm:w-16 sm:shrink-0">
          {number}
        </span>
        <div className="flex max-w-xl flex-col gap-2">
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-foreground">
            {title}
          </h3>
          <p className="text-lg leading-relaxed text-muted">{description}</p>
        </div>
      </div>
    </RevealItem>
  );
}
