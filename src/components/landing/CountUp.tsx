"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

export function CountUp({ end, suffix = "+" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 2000;
    let frame: number;

    function step(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(end * eased).toLocaleString("en-US"));
      if (progress < 1) frame = requestAnimationFrame(step);
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
