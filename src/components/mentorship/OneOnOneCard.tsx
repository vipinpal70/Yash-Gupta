"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { mentorship } from "@/data/yash-gupta-landing";

export function OneOnOneCard() {
  const [mode, setMode] = useState<"online" | "offline">("online");
  const { oneOnOne } = mentorship;

  return (
    <article className="group flex min-h-[440px] flex-col justify-between gap-16 border border-emerald/20 bg-ink p-9 transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-2 hover:border-emerald/70 hover:shadow-[0_30px_80px_-30px_rgba(91,155,255,0.4)]">
      <div className="flex items-center justify-between gap-3">
        <span className="font-serif text-xl font-bold text-emerald">
          {oneOnOne.no}
        </span>
        <div className="flex border border-emerald/30">
          <button
            type="button"
            onClick={() => setMode("online")}
            className={cn(
              "px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] transition-colors",
              mode === "online"
                ? "bg-emerald text-background"
                : "text-muted hover:text-foreground",
            )}
          >
            Online
          </button>
          <button
            type="button"
            onClick={() => setMode("offline")}
            className={cn(
              "px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] transition-colors",
              mode === "offline"
                ? "bg-emerald text-background"
                : "text-muted hover:text-foreground",
            )}
          >
            Offline
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-serif text-4xl font-bold leading-none">
          {oneOnOne.title}
        </h3>
        <p className="text-pretty text-[15px] font-light leading-[1.7] text-muted">
          {mode === "online" ? oneOnOne.online : oneOnOne.offline}
        </p>
        <a
          href={oneOnOne.href}
          className="mt-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em]"
        >
          {oneOnOne.cta}
          <span className="h-px w-7 bg-current" />
        </a>
      </div>
    </article>
  );
}
