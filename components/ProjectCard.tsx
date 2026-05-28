"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import type { ProjectStatus } from "@/lib/data";

const statusTone: Record<ProjectStatus, string> = {
  live: "bg-status-live/10 text-status-live",
  progress: "bg-status-progress/10 text-status-progress",
  beta: "bg-status-beta/10 text-status-beta",
  rd: "bg-status-rd/10 text-status-rd",
};

const dotTone: Record<ProjectStatus, string> = {
  live: "bg-status-live shadow-[0_0_0_3px_rgba(16,185,129,0.2)] animate-pulse",
  progress: "bg-status-progress",
  beta: "bg-status-beta",
  rd: "bg-status-rd",
};

export function ProjectCard({
  icon,
  status,
  statusLabel,
  category,
  title,
  description,
  progress,
  progressLabel,
  progressValue,
  cta,
  ctaHref,
}: {
  icon: string;
  status: ProjectStatus;
  statusLabel: string;
  category: string;
  title: string;
  description: string;
  progress: number;
  progressLabel: string;
  progressValue: string;
  cta: string;
  ctaHref: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <article
      ref={ref}
      className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-[20px] border border-border bg-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-lg"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top right, var(--accent-ghost), transparent 60%)",
        }}
      />

      <div className="relative mb-6 flex items-center justify-between">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border font-mono text-base font-semibold text-accent-strong"
          style={{
            background: "linear-gradient(135deg, var(--accent-soft), var(--bg-subtle))",
            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.4)",
          }}
        >
          {icon}
        </div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 pl-2 font-mono text-[11px] font-medium uppercase tracking-wider ${statusTone[status]}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${dotTone[status]}`} />
          {statusLabel}
        </span>
      </div>

      <div className="relative mb-2.5 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
        {category}
      </div>
      <h3 className="relative mb-2.5 text-2xl font-medium tracking-tighter text-fg">{title}</h3>
      <p className="relative mb-6 flex-1 text-sm leading-snug text-fg-muted">{description}</p>

      <div className="relative mb-5">
        <div className="mb-2 flex justify-between font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
          <span>{progressLabel}</span>
          <span>{progressValue}</span>
        </div>
        <div className="h-1 overflow-hidden rounded-full bg-bg-sunken">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${progress}%` } : { width: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--accent), var(--accent-strong))",
            }}
          />
        </div>
      </div>

      <a
        href={ctaHref}
        className="relative inline-flex items-center gap-1.5 self-start rounded-full border border-border bg-bg-subtle px-3.5 py-2 text-sm font-medium text-fg transition-all hover:border-fg hover:bg-fg hover:text-bg"
      >
        {cta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </a>
    </article>
  );
}
