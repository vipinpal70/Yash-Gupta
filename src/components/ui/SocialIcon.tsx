import type { SocialKey } from "@/data/site";

type IconProps = { className?: string };

function DiscordIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M19.27 5.33A17.27 17.27 0 0 0 15 4.1l-.22.44a12.9 12.9 0 0 1 3.66 1.4 13.9 13.9 0 0 0-12.88 0 12.9 12.9 0 0 1 3.66-1.4L9 4.1a17.27 17.27 0 0 0-4.27 1.23C2.3 9.1 1.6 12.78 1.87 16.4a17.4 17.4 0 0 0 5.3 2.68l.66-1.1a11.2 11.2 0 0 1-1.68-.8c.14-.1.28-.22.41-.32a12.4 12.4 0 0 0 10.88 0c.14.1.27.22.41.32-.53.32-1.1.58-1.68.8l.66 1.1a17.4 17.4 0 0 0 5.3-2.68c.33-4.2-.7-7.85-2.96-11.07ZM8.68 14.2c-.98 0-1.78-.9-1.78-2s.79-2 1.78-2 1.8.91 1.78 2c0 1.1-.79 2-1.78 2Zm6.64 0c-.98 0-1.78-.9-1.78-2s.79-2 1.78-2 1.79.91 1.78 2c0 1.1-.79 2-1.78 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TelegramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M21.05 3.35 2.98 10.4c-1.24.5-1.23 1.18-.23 1.49l4.63 1.44 1.79 5.5c.22.6.38.84.78.84.34 0 .5-.15.7-.36l1.68-1.62 4.7 3.46c.86.48 1.48.23 1.7-.8L21.9 4.6c.3-1.26-.48-1.83-1.85-1.25ZM8.4 13.9l9.3-5.85c.44-.27.84-.12.51.18l-7.85 7.09-.31 3.34-1.65-4.76Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 4 20 20M20 4 4 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7.3" cy="8" r="1.15" fill="currentColor" />
      <path d="M7.3 10.7v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M11.2 16.7v-3.6c0-1.2.8-2.1 2-2.1s1.9.9 1.9 2.1v3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M11.2 16.7v-4.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const icons: Record<SocialKey, React.ComponentType<IconProps>> = {
  discord: DiscordIcon,
  telegram: TelegramIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  x: XIcon,
  linkedin: LinkedinIcon,
};

export function SocialIcon({
  network,
  className,
}: {
  network: SocialKey;
  className?: string;
}) {
  const Icon = icons[network];
  return <Icon className={className} />;
}
