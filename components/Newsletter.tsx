"use client";

import { useState } from "react";

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-border p-7"
      style={{
        background: "linear-gradient(135deg, var(--accent-soft) 0%, var(--bg-subtle) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at top right, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top right, black, transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-accent-strong">
          Field Notes — monthly
        </div>
        <div className="mb-1.5 text-[22px] font-medium tracking-tighter text-fg">
          Get the build log.
        </div>
        <div className="mb-5 text-sm leading-snug text-fg-muted">
          One thoughtful email a month on AI, SaaS, and building digital businesses in South Africa. No spam, no fluff.
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubscribed(true);
            // TODO: wire to your newsletter provider (Buttondown, ConvertKit, Beehiiv, Resend)
          }}
          className="flex flex-wrap gap-2"
        >
          <input
            type="email"
            placeholder="you@company.com"
            required
            className="flex-1 rounded-xl border border-border bg-bg px-3.5 py-3 text-sm text-fg transition-all focus:border-accent focus:shadow-[0_0_0_4px_var(--accent-ghost)] focus:outline-none"
            style={{ minWidth: 200 }}
          />
          <button
            type="submit"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg shadow-sm transition-all hover:-translate-y-px"
          >
            {subscribed ? "Subscribed — placeholder" : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
}
