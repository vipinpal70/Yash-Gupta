import { footer } from "@/data/yash-gupta-landing";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-6 border-t border-emerald/15 px-5 py-9 text-xs text-[#6E7A8F] sm:px-10">
      <span className="font-serif text-xl font-bold text-foreground">
        {footer.name}
      </span>
      <span className="max-w-xl leading-relaxed">
        {footer.disclaimer} © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
