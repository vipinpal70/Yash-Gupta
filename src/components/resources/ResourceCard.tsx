import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import type { Route } from "next";
import type { Resource } from "@/data/resources";

export function ResourceCard({
  title,
  description,
  cta,
  href,
  icon: Icon = FileText,
}: Resource) {
  return (
    <div className="group flex h-full flex-col justify-between gap-10 rounded-[28px] border border-white/10 bg-surface p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald/30 hover:bg-surface-strong hover:shadow-[0_24px_60px_-30px_rgba(34,197,94,0.3)]">
      <div className="flex flex-col gap-4">
        <Icon className="size-6 text-emerald" strokeWidth={1.6} />
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
      <Link
        href={href as Route}
        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-emerald"
      >
        {cta}
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  );
}
