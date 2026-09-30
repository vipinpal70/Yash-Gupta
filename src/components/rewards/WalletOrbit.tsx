import {
  Bitcoin,
  Coins,
  DollarSign,
  Euro,
  IndianRupee,
  PoundSterling,
  Wallet,
  type LucideIcon,
} from "lucide-react";

type Orbit = {
  radius: number;
  duration: number;
  icons: LucideIcon[];
  reverse?: boolean;
};

const orbits: Orbit[] = [
  { radius: 98, duration: 18, icons: [DollarSign, IndianRupee, Euro] },
  { radius: 160, duration: 28, icons: [Bitcoin, PoundSterling, Coins], reverse: true },
];

const SIZE = 380;
const ICON_BOX = 49;

export function WalletOrbit() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto shrink-0 origin-center scale-[0.72] sm:scale-100"
      style={{ width: SIZE, height: SIZE, }}
    >
      {orbits.map((orbit) => (
        <div
          key={orbit.radius}
          className="absolute left-1/2 top-1/2 rounded-full border border-emerald/25"
          style={{
            width: orbit.radius * 2,
            height: orbit.radius * 2,
            marginLeft: -orbit.radius,
            marginTop: -orbit.radius,
            animation: `yg-spin ${orbit.duration}s linear infinite ${orbit.reverse ? "reverse" : ""}`,
          }}
        >
          {orbit.icons.map((Icon, i) => {
            const angle = (360 / orbit.icons.length) * i;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-${orbit.radius}px)`,
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full border border-emerald/40 bg-background text-emerald-light"
                  style={{
                    width: ICON_BOX,
                    height: ICON_BOX,
                    marginLeft: -ICON_BOX / 2,
                    marginTop: -ICON_BOX / 2,
                    transform: `rotate(${-angle}deg)`,
                  }}
                >
                  <span
                    className="flex"
                    style={{
                      animation: `yg-spin ${orbit.duration}s linear infinite ${orbit.reverse ? "" : "reverse"}`,
                    }}
                  >
                    <Icon size={24} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ))}
      <div className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-emerald/50 bg-emerald/15 text-emerald shadow-[0_0_40px_rgba(91,155,255,0.35)]">
        <Wallet size={44} />
      </div>
    </div>
  );
}
