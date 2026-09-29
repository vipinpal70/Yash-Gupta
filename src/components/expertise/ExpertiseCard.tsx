import type { ExpertiseItem } from "@/data/expertise";

export function ExpertiseCard({ number, title, description }: ExpertiseItem) {
  return (
    <div className="group flex h-full flex-col gap-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald/30 hover:bg-white/5 hover:shadow-[0_24px_60px_-24px_rgba(34,197,94,0.4)]">
      <span className="font-serif text-3xl text-gold/80">{number}</span>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-white/60">{description}</p>
      </div>
    </div>
  );
}
