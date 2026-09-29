import { siteConfig } from "@/data/site";

export function CredibilityStrip() {
  const items = [
    `${siteConfig.experience.years} Years Experience`,
    ...siteConfig.focusAreas,
  ];

  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-muted sm:gap-x-5">
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-4 sm:gap-5">
          <span>{item}</span>
          {index < items.length - 1 ? (
            <span className="h-3 w-px bg-foreground/15" aria-hidden="true" />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
