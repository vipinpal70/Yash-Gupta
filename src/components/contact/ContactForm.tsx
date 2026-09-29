"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full border border-foreground/24 bg-transparent px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus-visible:border-emerald";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
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
      className="flex w-full max-w-[480px] flex-col gap-4"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          aria-label="Your name"
          className={inputClasses}
        />
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          aria-label="Email address"
          className={inputClasses}
        />
      </div>
      <input
        type="tel"
        autoComplete="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="Phone (optional)"
        aria-label="Phone number"
        className={inputClasses}
      />
      <textarea
        rows={3}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="What would you like to ask about?"
        aria-label="Message"
        className={cn(inputClasses, "resize-none")}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-emerald px-8 py-[18px] text-[12px] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send enquiry"}
      </button>

      {status === "success" ? (
        <p className="text-sm text-emerald">
          Thanks — your message is in. We&rsquo;ll get back to you shortly.
        </p>
      ) : null}
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
    </form>
  );
}
