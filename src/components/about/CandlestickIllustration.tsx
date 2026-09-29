"use client";

import { motion } from "motion/react";

const candles = [
  { x: 20, bodyY: 210, bodyH: 40, wickY: 190, wickH: 80, up: true },
  { x: 60, bodyY: 190, bodyH: 46, wickY: 170, wickH: 84, up: false },
  { x: 100, bodyY: 160, bodyH: 50, wickY: 138, wickH: 92, up: true },
  { x: 140, bodyY: 120, bodyH: 42, wickY: 100, wickH: 82, up: true },
  { x: 180, bodyY: 90, bodyH: 48, wickY: 68, wickH: 90, up: false },
  { x: 220, bodyY: 50, bodyH: 44, wickY: 30, wickH: 82, up: true },
];

const linePath = "M20,230 L60,205 L100,175 L140,132 L180,105 L220,60 L260,40";

function Coin({
  cx,
  cy,
  r,
  fill,
  symbol,
  delay,
}: {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  symbol: string;
  delay: number;
}) {
  return (
    <motion.g
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <circle cx={cx} cy={cy} r={r} fill={fill} fillOpacity={0.15} stroke={fill} strokeWidth={1.5} />
      <text
        x={cx}
        y={cy + 5}
        textAnchor="middle"
        fontSize={r}
        fontWeight={700}
        fill={fill}
        fontFamily="var(--font-sans)"
      >
        {symbol}
      </text>
    </motion.g>
  );
}

export function CandlestickIllustration() {
  return (
    <div className="relative flex aspect-square w-full max-w-sm items-center justify-center sm:max-w-md">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-emerald/10 blur-[100px]"
      />
      <svg
        viewBox="0 0 320 320"
        className="relative h-full w-full"
        role="img"
        aria-label="Illustration of an ascending candlestick chart with currency coins"
      >
        <g transform="translate(10,10)">
          {candles.map((c, i) => (
            <motion.g
              key={c.x}
              initial={{ opacity: 0, scaleY: 0.4 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              style={{ transformOrigin: `${c.x + 12}px ${c.bodyY + c.bodyH / 2}px` }}
            >
              <line
                x1={c.x + 12}
                x2={c.x + 12}
                y1={c.wickY}
                y2={c.wickY + c.wickH}
                stroke={c.up ? "#22c55e" : "#4b5f52"}
                strokeWidth={1.5}
              />
              <rect
                x={c.x}
                y={c.bodyY}
                width={24}
                height={c.bodyH}
                rx={3}
                fill={c.up ? "rgba(34,197,94,0.18)" : "rgba(148,163,131,0.12)"}
                stroke={c.up ? "#22c55e" : "#6b7a6f"}
                strokeWidth={1.5}
              />
            </motion.g>
          ))}

          <motion.path
            d={linePath}
            fill="none"
            stroke="#6ee7a4"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />

          <Coin cx={270} cy={60} r={20} fill="#c9a45c" symbol="₿" delay={0} />
          <Coin cx={30} cy={270} r={16} fill="#22c55e" symbol="₹" delay={0.6} />
          <Coin cx={250} cy={220} r={14} fill="#6ee7a4" symbol="$" delay={1.2} />
        </g>
      </svg>
    </div>
  );
}
