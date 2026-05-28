"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { Eyebrow } from "./About";
import { Newsletter } from "./Newsletter";
import { site } from "@/lib/data";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionReveal>
          <Eyebrow>Contact</Eyebrow>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mt-4 max-w-[720px] text-[clamp(32px,5vw,48px)] font-medium leading-tight tracking-tighter">
            Send a message. <span className="font-serif-italic">I read every one.</span>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mt-4 max-w-[640px] text-lg leading-snug text-fg-muted">
            Project inquiries, collaborations, partnerships, speaking — all welcome. Replies usually within 48 hours.
          </p>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          <SectionReveal delay={0.08}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                // TODO: wire to your backend / form provider (e.g. Resend, Formspree, Plunk)
              }}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-bg p-8 shadow-md"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Your name">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    className="w-full rounded-xl border border-border bg-bg-subtle px-3.5 py-3 text-sm text-fg transition-all focus:border-accent focus:bg-bg focus:shadow-[0_0_0_4px_var(--accent-ghost)] focus:outline-none"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="w-full rounded-xl border border-border bg-bg-subtle px-3.5 py-3 text-sm text-fg transition-all focus:border-accent focus:bg-bg focus:shadow-[0_0_0_4px_var(--accent-ghost)] focus:outline-none"
                  />
                </Field>
              </div>
              <Field label="Topic">
                <input
                  type="text"
                  placeholder="Project · partnership · consulting · other"
                  className="w-full rounded-xl border border-border bg-bg-subtle px-3.5 py-3 text-sm text-fg transition-all focus:border-accent focus:bg-bg focus:shadow-[0_0_0_4px_var(--accent-ghost)] focus:outline-none"
                />
              </Field>
              <Field label="Message">
                <textarea
                  placeholder="Tell me a little about what you're building or what you need built."
                  className="min-h-[120px] w-full resize-y rounded-xl border border-border bg-bg-subtle px-3.5 py-3 text-sm text-fg transition-all focus:border-accent focus:bg-bg focus:shadow-[0_0_0_4px_var(--accent-ghost)] focus:outline-none"
                />
              </Field>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                  No tracking · No spam
                </span>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-px hover:shadow-glow"
                >
                  {sent ? "Sent — placeholder" : "Send message"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </SectionReveal>

          <div className="flex flex-col gap-6">
            <SectionReveal delay={0.16}>
              <InfoRow icon={<Mail className="h-[18px] w-[18px]" strokeWidth={2} />} label="Email" value={site.email} />
            </SectionReveal>
            <SectionReveal delay={0.24}>
              <InfoRow
                icon={<MapPin className="h-[18px] w-[18px]" strokeWidth={2} />}
                label="Based"
                value={site.location}
              />
            </SectionReveal>
            <SectionReveal delay={0.32}>
              <InfoRow
                icon={<Clock className="h-[18px] w-[18px]" strokeWidth={2} />}
                label="Hours"
                value="Mon–Fri · 09:00 → 18:00 SAST"
              />
            </SectionReveal>
            <SectionReveal delay={0.24}>
              <Newsletter />
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-bg p-[18px] transition-all hover:-translate-y-px hover:border-border-strong">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-accent-soft bg-accent-ghost text-accent-strong">
        {icon}
      </div>
      <div>
        <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
          {label}
        </div>
        <div className="text-sm text-fg">{value}</div>
      </div>
    </div>
  );
}
