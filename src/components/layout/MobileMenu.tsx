"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/5"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="fixed inset-0 z-40 flex flex-col bg-background pt-28 md:hidden"
                >
                  <nav className="flex flex-1 flex-col items-start gap-1 px-8">
                    {primaryNav.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.05 * index,
                          duration: 0.45,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block py-3 text-4xl font-medium tracking-tight text-foreground"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                  <div
                    className="border-t border-foreground/10 px-8 py-8"
                    onClick={() => setOpen(false)}
                  >
                    <Button
                      href={siteConfig.communityUrl}
                      className="w-full justify-center"
                    >
                      Join the Community
                    </Button>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  );
}
