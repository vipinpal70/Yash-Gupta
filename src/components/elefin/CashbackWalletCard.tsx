"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Plus, Wallet } from "lucide-react";

type Props = {
  base: number;
  anchorDate: string;
  endDate: string;
  seed: number;
  label: string;
  caption: string;
  addedLabel: string;
};

const DAY_MS = 24 * 60 * 60 * 1000;
// The 1,30,000 daily cap is spread evenly across the whole day so the counter
// keeps climbing day to day. A new slot lands every 1.5 min (960 slots/day →
// avg ~₹135/slot), and the display re-reads on the same cadence so the
// on-screen number steps up once every 1.5 minutes.
const SLOT_MS = 90_000; // 1.5 min per deterministic increment
const DISPLAY_MS = 90_000; // display re-reads every 1.5 min
const SLOTS_PER_DAY = DAY_MS / SLOT_MS; // 960
const DAILY_CAP = 1_30_000; // exact amount added per full day

// The "cashback added" badge shows a fresh random amount that refreshes on a
// fixed cadence, so the social proof feels live without touching the running
// wallet total above (which is deterministic).
const ADDED_MIN = 200;
const ADDED_MAX = 900;
const ADDED_REFRESH_MS = 60_000; // new random amount every 1 min

// Random whole rupee amount in the inclusive [ADDED_MIN, ADDED_MAX] range.
function randomAddedAmount() {
  return Math.floor(ADDED_MIN + Math.random() * (ADDED_MAX - ADDED_MIN + 1));
}

// The "users earning their fees back" count starts at USERS_BASE and grows by
// USERS_PER_DAY for every full 24h elapsed since the campaign anchor date, so
// the social-proof number climbs by 500 a day without any manual edits.
const USERS_BASE = 3500;
const USERS_PER_DAY = 500; // +500 users every 24 hours

function getUserCount(anchorDate: string) {
  const anchor = new Date(anchorDate).getTime();
  const daysElapsed = Math.max(0, Math.floor((Date.now() - anchor) / DAY_MS));
  return USERS_BASE + daysElapsed * USERS_PER_DAY;
}

// Small deterministic PRNG (mulberry32). Given the same seed it always yields
// the same sequence, so the per-slot increments are fixed forever.
function mulberry32(seed: number) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// How much a single day has accrued after `slots` slots have elapsed.
//
// Each day gets its own deterministic weight sequence (seed + day). The day's
// increments are those weights normalised to sum to exactly DAILY_CAP, so the
// total grows smoothly all day and lands precisely on 1,30,000 at midnight —
// no jump when the day rolls over. Weights sit in [0.5, 1.5) so per-slot
// increments vary (~₹68–203) and the counter never stalls or goes backwards.
function dayAccrual(seed: number, day: number, slots: number) {
  if (slots <= 0) return 0;
  if (slots >= SLOTS_PER_DAY) return DAILY_CAP;

  const rng = mulberry32(seed + day);
  let partial = 0;
  let total = 0;
  for (let i = 0; i < SLOTS_PER_DAY; i++) {
    const w = 0.5 + rng();
    if (i < slots) partial += w;
    total += w;
  }
  return (DAILY_CAP * partial) / total;
}

// Returns the running cashback total at the current moment.
//
// Completed days each contribute exactly DAILY_CAP (the wallet carries over and
// keeps growing day to day); the current day contributes its partial accrual.
// Growth stops once the offer window (endDate, inclusive) has passed, freezing
// the value at its final amount. Deterministic → identical on every device and
// refresh for a given clock time.
function getRunningTotal(
  base: number,
  anchorDate: string,
  endDate: string,
  seed: number,
) {
  const anchor = new Date(anchorDate).getTime();
  const end = new Date(endDate).getTime() + DAY_MS; // include all of endDate
  const now = Math.min(Date.now(), end);
  if (now <= anchor) return base;

  const dayIndex = Math.floor((now - anchor) / DAY_MS);
  const dayStart = anchor + dayIndex * DAY_MS;
  const slotsIntoDay = Math.floor((now - dayStart) / SLOT_MS);

  return base + dayIndex * DAILY_CAP + dayAccrual(seed, dayIndex, slotsIntoDay);
}

export function CashbackWalletCard({
  base,
  anchorDate,
  endDate,
  seed,
  label,
  caption,
  addedLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const targetRef = useRef<number | null>(null);
  const [value, setValue] = useState(0);
  const [addedAmount, setAddedAmount] = useState(randomAddedAmount);
  const [userCount, setUserCount] = useState(() => getUserCount(anchorDate));

  // The user count only changes on 24h boundaries, but recompute every minute
  // so a long-open tab rolls over to the next +500 without a refresh.
  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(getUserCount(anchorDate));
    }, 60_000);
    return () => clearInterval(interval);
  }, [anchorDate]);

  // Refresh the "cashback added" badge with a new random amount between
  // ₹200–₹300 every 10 seconds while the card is visible.
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setAddedAmount(randomAddedAmount());
    }, ADDED_REFRESH_MS);
    return () => clearInterval(interval);
  }, [inView]);

  // Count up from 0 to the current deterministic total once the card enters view,
  // then re-read the deterministic total every 5 seconds so the display stays
  // in sync with the slot clock — no random free-running counter.
  useEffect(() => {
    if (!inView) return;

    // Compute the target once (first mount) and start the count-up animation.
    if (targetRef.current === null)
      targetRef.current = getRunningTotal(base, anchorDate, endDate, seed);
    const target = targetRef.current;
    const start = performance.now();
    const duration = 2200;
    let frame: number;

    function step(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(target * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    }

    frame = requestAnimationFrame(step);

    // Check every 5 seconds whether a new slot boundary has been crossed.
    // When it has, animate from the previous slot total to the new one.
    const interval = setInterval(() => {
      const next = getRunningTotal(base, anchorDate, endDate, seed);
      const prev = targetRef.current ?? next;
      if (next === prev) return; // still in same slot, nothing to do
      targetRef.current = next;

      // Smooth count-up animation from previous slot value to new slot value
      const animStart = performance.now();
      const animDuration = 800;

      function animStep(t: number) {
        const p = Math.min(1, (t - animStart) / animDuration);
        const e = 1 - Math.pow(1 - p, 3);
        setValue(prev + (next - prev) * e);
        if (p < 1) frame = requestAnimationFrame(animStep);
        else setValue(next);
      }
      frame = requestAnimationFrame(animStep);
    }, DISPLAY_MS);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
    };
  }, [inView, base, anchorDate, endDate, seed]);

  const formatted = value.toLocaleString("en-IN", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  });

  return (
    <div
      ref={ref}
      className="relative h-full overflow-hidden rounded-2xl border border-emerald/30 bg-[linear-gradient(160deg,rgba(91,155,255,0.16),rgba(91,155,255,0.02)_62%)] p-8 sm:p-10"
    >
      {/* soft glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-emerald/20 blur-3xl"
      />

      <div className="relative flex h-full flex-col gap-10">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-emerald/40 bg-emerald/15 text-emerald">
            <Wallet className="size-6" />
          </span>
          <div className="flex flex-col">
            <span className="font-sans text-lg font-bold leading-snug text-foreground">
              {label}
            </span>
            <span className="text-[13px] font-light text-muted">
              <span className="font-semibold text-emerald-light tabular-nums">
                {userCount.toLocaleString("en-IN")}+
              </span>{" "}
              users are earning their fees back with us!
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-serif text-[clamp(34px,6vw,52px)] font-bold leading-none tracking-tight text-foreground tabular-nums">
            ₹ {formatted}
          </span>
          <span className="text-[13px] uppercase tracking-[0.2em] text-muted">
            {caption}
          </span>
        </div>

        <div className="mt-auto flex items-center gap-3 self-start rounded-full border border-emerald/25 bg-background/40 py-2.5 pl-2.5 pr-5">
          <span className="flex size-9 items-center justify-center rounded-full border border-emerald/50 bg-emerald/15 text-emerald">
            <Plus className="size-4" />
          </span>
          <span className="text-[15px] font-light text-muted">
            <span className="font-semibold text-emerald-light tabular-nums">
              +₹{addedAmount}
            </span>{" "}
            {addedLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
