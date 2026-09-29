"use client";

import { useSyncExternalStore } from "react";

// getSnapshot must return a stable value between calls unless the store
// actually changed, or React's tearing check sees a "new" value on every
// call (Date.now() never repeats) and re-renders forever. So the timestamp
// only advances here, from subscribe — never inside getSnapshot itself.
let cachedNow = Date.now();

function subscribe(callback: () => void) {
  // Refresh immediately on mount (corrects the server/build-time snapshot),
  // then periodically so a long-lived tab crosses status boundaries (e.g.
  // midnight on an offer's end date) without needing a refresh.
  cachedNow = Date.now();
  const id = setInterval(() => {
    cachedNow = Date.now();
    callback();
  }, 60_000);
  return () => clearInterval(id);
}

function getSnapshot() {
  return cachedNow;
}

function getServerSnapshot() {
  // Unknown until the client hydrates — callers should treat `null` as
  // "not yet determined" rather than guessing a status from build time.
  return null;
}

export function useNow() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
