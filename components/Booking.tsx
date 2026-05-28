"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { Eyebrow } from "./About";
import { site } from "@/lib/data";

const days = [
  { day: "Monday", date: "02 Jun" },
  { day: "Tuesday", date: "03 Jun" },
  { day: "Wednesday", date: "04 Jun" },
  { day: "Thursday", date: "05 Jun" },
];

const slots = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

export function Booking() {
  const [selected, setSelected] = useState("10:30");

  return (
    <section id="booking" className="relative overflow-hidden bg-bg-subtle py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, var(--accent-ghost), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[880px] px-6 text-center md:px-10">
        <SectionReveal>
          <Eyebrow>Book a call</Eyebrow>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mt-4 text-[clamp(36px,5vw,56px)] font-medium leading-[1.05] tracking-tighter">
            Let&apos;s build something
            <br />
            <span className="font-serif-italic">powerful.</span>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mt-4 max-w-[540px] text-lg leading-snug text-fg-muted">
            Book a strategy session, collaboration call, or consulting meeting. 30 minutes is usually enough to know if we should work together.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.24}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-bg p-8 shadow-lg md:p-12">
            <div className="grid gap-6 text-left md:grid-cols-2 md:gap-8">
              <div>
                <div className="mb-4 font-mono text-[11px] uppercase tracking-wider text-accent-strong">
                  Pick a day
                </div>
                {days.map((d) => (
                  <div
                    key={d.day}
                    className="mb-2 flex items-center justify-between rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg"
                  >
                    <span>{d.day}</span>
                    <span className="text-fg-subtle">{d.date}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="mb-4 font-mono text-[11px] uppercase tracking-wider text-accent-strong">
                  Available slots · Tuesday
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {slots.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelected(s)}
                      className={`rounded-xl border px-3 py-2.5 text-center font-mono text-[13px] transition-all ${
                        selected === s
                          ? "border-accent bg-accent text-white"
                          : "border-border bg-bg text-fg hover:border-accent hover:bg-accent-ghost hover:text-accent-strong"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-accent bg-accent-ghost p-4 text-center font-mono text-xs leading-relaxed text-accent-strong">
              {site.calendlyUrl
                ? `Configured Calendly URL: ${site.calendlyUrl}`
                : `// paste your Calendly embed snippet or set NEXT_PUBLIC_CALENDLY_URL in .env`}
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href={site.calendlyUrl || "#"}
                target={site.calendlyUrl ? "_blank" : undefined}
                rel={site.calendlyUrl ? "noopener noreferrer" : undefined}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-px hover:shadow-glow"
              >
                Open scheduler <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
