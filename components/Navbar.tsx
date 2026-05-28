"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { site, navLinks, mobileNavLinks } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = () => setOpen(false);
    if (open) {
      window.addEventListener("click", onClickOutside);
      return () => window.removeEventListener("click", onClickOutside);
    }
  }, [open]);

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 right-0 top-0 z-50 py-4 transition-all duration-300",
          scrolled && "glass border-b border-border",
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 md:px-10">
          <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
            <BrandMark />
            <span className="hidden sm:inline">{site.name}</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm text-fg-muted transition-all hover:bg-accent-ghost hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#booking"
              className="hidden h-9 items-center gap-2 rounded-full bg-fg px-4 text-[13px] font-medium text-bg shadow-sm transition-all hover:-translate-y-px sm:inline-flex"
            >
              Book a call
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              aria-label="Open menu"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className="glass fixed left-4 right-4 top-[70px] z-40 flex flex-col gap-0.5 rounded-2xl border border-border p-3 shadow-lg lg:hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {mobileNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3.5 py-3 text-sm text-fg-muted transition-all hover:bg-bg-subtle hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export function BrandMark() {
  return (
    <span
      className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-lg font-mono text-sm font-semibold text-white"
      style={{
        background: "linear-gradient(135deg, var(--accent), var(--accent-strong))",
        boxShadow:
          "0 4px 12px -2px var(--accent-glow), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
      }}
    >
      {site.initial}
    </span>
  );
}
