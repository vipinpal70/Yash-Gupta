"use client";

import { useState } from "react";
import { elefinBirthdayOffer } from "@/data/elefin-birthday-offer";

type Status = "idle" | "loading" | "success" | "error";

export function ElefinBirthdayForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus("loading");

    try {
      const response = await fetch("/api/elefin-registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, offer: "elefin-birthday-cashback" }),
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex h-full flex-col justify-between gap-8 border border-emerald/35 bg-[linear-gradient(160deg,rgba(91,155,255,0.14),rgba(91,155,255,0.02)_60%)] p-8 sm:p-10"
    >
      <div className="flex flex-col gap-4">
        <span className="text-[11px] uppercase tracking-[0.28em] text-emerald">
          {elefinBirthdayOffer.eyebrow} · {elefinBirthdayOffer.window.display}
        </span>
        <label htmlFor="elefin-birthday-email" className="sr-only">
          New Elefin account email
        </label>
        <input
          id="elefin-birthday-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="w-full border border-foreground/24 bg-transparent px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus-visible:border-emerald"
        />
        <p className="text-xs leading-relaxed text-[#5A6476]">
          Only submit this after you&rsquo;ve created your account, deposited{" "}
          {elefinBirthdayOffer.minDeposit} and placed a trade — our team
          matches it against your new account before paying out.
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-block w-fit bg-emerald px-8 py-[18px] text-[12px] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : `Claim ${elefinBirthdayOffer.amount}`}
      </button>

      {status === "success" ? (
        <p className="text-sm text-emerald">
          You&rsquo;re in — we&rsquo;ll match this against your new account
          and pay out once your deposit and trade are confirmed.
        </p>
      ) : null}
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
    </form>
  );
}
