import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonTone = "light" | "dark";
type ArrowKind = "right" | "up-right" | "none";

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  tone?: ButtonTone;
  arrow?: ArrowKind;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: Route | string;
  external?: boolean;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-offset-4 whitespace-nowrap";

const variantStyles: Record<ButtonVariant, Record<ButtonTone, string>> = {
  primary: {
    light:
      "bg-emerald text-ink shadow-[0_0_0_1px_rgba(34,197,94,0.4),0_0_28px_-6px_rgba(34,197,94,0.65)] hover:bg-emerald-light hover:shadow-[0_0_0_1px_rgba(110,231,164,0.5),0_0_36px_-4px_rgba(34,197,94,0.85)]",
    dark: "bg-white text-ink hover:bg-white/90",
  },
  secondary: {
    light:
      "border border-foreground/15 text-foreground hover:border-emerald/40 hover:bg-foreground/[0.03]",
    dark: "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
  },
  ghost: {
    light: "text-foreground hover:text-emerald",
    dark: "text-white hover:text-white/70",
  },
};

function ArrowIcon({ arrow }: { arrow: ArrowKind }) {
  if (arrow === "none") return null;
  const Icon = arrow === "up-right" ? ArrowUpRight : ArrowRight;
  return (
    <Icon
      aria-hidden="true"
      className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
      strokeWidth={2.25}
    />
  );
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    tone = "light",
    arrow = "right",
    className,
  } = props;

  const classes = cn(base, variantStyles[variant][tone], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external || (typeof href === "string" && /^https?:\/\//.test(href))) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
          <ArrowIcon arrow={arrow} />
        </a>
      );
    }

    if (
      typeof href === "string" &&
      (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:"))
    ) {
      return (
        <a href={href} className={classes}>
          {children}
          <ArrowIcon arrow={arrow} />
        </a>
      );
    }

    return (
      <Link href={href as Route} className={classes}>
        {children}
        <ArrowIcon arrow={arrow} />
      </Link>
    );
  }

  const { onClick, type = "button" } = props as ButtonAsButton;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      <ArrowIcon arrow={arrow} />
    </button>
  );
}
