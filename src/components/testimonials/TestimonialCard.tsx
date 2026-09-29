import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <div className="flex h-full flex-col justify-between gap-8 rounded-[28px] border border-white/10 bg-surface p-8 sm:p-10">
      <Quote className="size-6 text-gold" strokeWidth={1.5} />
      <p className="font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex flex-col gap-0.5 border-t border-foreground/10 pt-5">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <span className="text-xs uppercase tracking-[0.14em] text-muted">
          {role}
        </span>
      </div>
    </div>
  );
}
