import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function daysUntil(dateString: string) {
  const target = new Date(dateString).getTime();
  const now = Date.now();
  return Math.max(0, Math.ceil((target - now) / (1000 * 60 * 60 * 24)));
}

export type OfferStatus = "upcoming" | "live" | "ended";

// Dates are compared as UTC day boundaries — a reasonable simplification for
// a multi-day campaign window (visitors in far timezones may see the switch
// a few hours early/late around the boundary, which is an acceptable trade-off).
export function getOfferStatus(
  startDate: string,
  endDate: string,
  now: number,
): OfferStatus {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime() + 24 * 60 * 60 * 1000 - 1;
  if (now < start) return "upcoming";
  if (now > end) return "ended";
  return "live";
}
