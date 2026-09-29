import type { LeaderboardEntry } from "@/data/rewards";

export function LeaderboardTable({
  entries,
}: {
  entries: LeaderboardEntry[];
}) {
  return (
    <div className="overflow-hidden border border-emerald/25 bg-ink">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald/20 px-6 py-4">
        <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-emerald">
          <span className="size-1.5 rounded-full bg-emerald" />
          Live Leaderboard
        </span>
        <span className="text-[11px] uppercase tracking-[0.24em] text-muted">
          Ranked by verified ROI
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-emerald/20 text-[10px] uppercase tracking-[0.24em] text-muted">
              <th className="px-6 py-3 font-semibold">Rank</th>
              <th className="px-6 py-3 font-semibold">Trader</th>
              <th className="px-6 py-3 font-semibold">Account</th>
              <th className="px-6 py-3 font-semibold">Current Capital</th>
              <th className="px-6 py-3 text-right font-semibold">ROI</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr
                key={entry.rank}
                className="border-b border-emerald/10 last:border-0"
              >
                <td className="px-6 py-3.5 font-semibold text-foreground">
                  {entry.rank}
                </td>
                <td className="px-6 py-3.5 text-foreground">
                  {entry.displayName}
                </td>
                <td className="px-6 py-3.5 text-muted">
                  {entry.maskedAccount}
                </td>
                <td className="px-6 py-3.5 text-foreground">
                  {entry.currentCapital}
                </td>
                <td className="px-6 py-3.5 text-right font-semibold text-emerald">
                  {entry.roi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
