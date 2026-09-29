import { Building2, Landmark } from "lucide-react";
import type { Partner } from "@/data/partners";
import { Button } from "@/components/ui/Button";

export function PartnerCard({ name, category, href }: Partner) {
  const Icon = category === "Prop Firm" ? Landmark : Building2;

  return (
    <div className="flex h-full flex-col justify-between gap-8 rounded-[28px] border border-white/10 bg-surface p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald/30 hover:bg-surface-strong hover:shadow-[0_24px_60px_-30px_rgba(34,197,94,0.3)]">
      <div className="flex flex-col gap-4">
        <Icon className="size-6 text-emerald" strokeWidth={1.6} />
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            {category}
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {name}
          </h3>
        </div>
      </div>
      <Button href={href} external variant="secondary" arrow="up-right" className="w-fit">
        Open Account
      </Button>
    </div>
  );
}
