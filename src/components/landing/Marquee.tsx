import { tickerItems } from "@/data/yash-gupta-landing";

export function Marquee() {
  const row = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-y border-emerald/15 py-6">
      <div
        className="flex w-max flex-nowrap whitespace-nowrap font-serif text-2xl font-bold uppercase tracking-wide text-[#CCD6E6] [animation:yg-marquee_70s_linear_infinite]"
      >
        {row.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-12 pr-12">
            <span>{item}</span>
            <span className="inline-block size-[5px] rotate-45 bg-emerald" />
          </span>
        ))}
      </div>
    </div>
  );
}
