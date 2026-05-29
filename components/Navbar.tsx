"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Brand() {
  return (
    <span
      className="flex h-[30px] w-[30px] items-center justify-center rounded-lg text-[15px] font-bold text-white"
      style={{
        background: "linear-gradient(135deg, #0099ff, #6366f1)",
        boxShadow: "0 4px 14px -2px rgba(0,153,255,0.5)",
      }}
    >
      {site.initial}
    </span>
  );
}

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
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [open]);

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-border py-[11px] backdrop-blur-xl"
            : "py-4",
        )}
        style={scrolled ? { background: "rgba(10,10,10,0.72)" } : undefined}
      >
        <div className="mx-auto flex max-w-site items-center justify-between gap-5 px-6 md:px-8">
          <a href="#top" className="flex items-center gap-2.5 text-[15px] font-[560]">
            <Brand />
            <span className="hidden min-[480px]:inline">{site.shortName}</span>
          </a>

          <div className="hidden items-center gap-0.5 min-[880px]:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-sm2 px-3.5 py-2 text-sm text-fg-muted transition-all hover:bg-white/5 hover:text-fg"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="#booking"
              className="inline-flex h-[38px] items-center rounded-DEFAULT bg-white px-4 text-sm font-medium text-[#0a0a0a] transition-all hover:-translate-y-px"
            >
              Book a consultation
            </a>
            <button
              aria-label="Menu"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-sm2 border border-border-2 min-[880px]:hidden"
            >
              {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-x-4 top-16 z-[39] flex flex-col gap-0.5 rounded-[18px] border border-border p-2.5 shadow-soft backdrop-blur-xl min-[880px]:hidden"
          style={{ background: "rgba(16,16,18,0.9)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3.5 py-3 text-[15px] text-fg-muted transition-all hover:bg-white/5 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3.5 py-3 text-[15px] text-fg-muted transition-all hover:bg-white/5 hover:text-fg"
          >
            Book a consultation
          </a>
        </div>
      )}
    </>
  );
}
