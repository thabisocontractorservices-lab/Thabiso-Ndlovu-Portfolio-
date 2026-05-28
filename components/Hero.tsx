"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site, heroMockups } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-40 md:pb-30 md:pt-44">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="grid-bg absolute inset-0" />
        <div
          className="absolute -right-24 -top-24 h-[480px] w-[480px] rounded-full opacity-25 blur-[80px]"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 h-[360px] w-[360px] rounded-full opacity-15 blur-[80px]"
          style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1200px] px-6 text-center md:px-10">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-elevated px-3.5 py-1.5 pl-2.5 text-[13px] font-medium text-fg-muted shadow-sm"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-status-live shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
          {site.availability}
        </motion.div>

        <motion.h1
          custom={0.08}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-8 max-w-[920px] text-[clamp(40px,7vw,80px)] font-medium leading-[1] tracking-tightest"
        >
          Building <span className="font-serif-italic">digital products</span>
          <br />& AI systems for South Africa
        </motion.h1>

        <motion.p
          custom={0.16}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-6 max-w-[640px] text-[clamp(16px,1.6vw,19px)] leading-snug text-fg-muted"
        >
          I&apos;m Thabiso Gift Ndlovu — a marketer, AI builder, and startup founder creating SaaS products, automation systems, and digital platforms for the next generation of African businesses.
        </motion.p>

        <motion.div
          custom={0.24}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition-all hover:-translate-y-px hover:shadow-lg"
          >
            View projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#booking"
            className="glass-soft inline-flex h-11 items-center gap-2 rounded-full border border-border-strong px-5 text-sm font-medium text-fg transition-all hover:-translate-y-px hover:shadow-md"
          >
            Book a call
          </a>
        </motion.div>

        <motion.div
          custom={0.32}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative mx-auto mt-20 flex max-w-[360px] flex-col gap-4 px-2 md:h-[220px] md:max-w-[960px] md:flex-row md:gap-0 md:px-0"
        >
          {heroMockups.map((m, i) => (
            <MockupCard key={i} {...m} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MockupCard({
  label,
  title,
  meta,
  index,
}: {
  label: string;
  title: string;
  meta: string;
  index: number;
}) {
  const positions = [
    { top: "20px", left: "4%", width: "240px", delay: "0s" },
    { top: "90px", left: "38%", width: "280px", delay: "-2s" },
    { top: "30px", right: "4%", width: "240px", delay: "-4s" },
  ];
  const pos = positions[index];

  return (
    <div
      className="glass rounded-2xl border border-border p-4 text-left shadow-lg md:absolute md:animate-float"
      style={{
        ...pos,
        animationDelay: pos.delay,
        animationPlayState: "running",
      }}
    >
      <div className="mb-2.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
        <span className="h-1.5 w-1.5 rounded-full bg-status-live" />
        {label}
      </div>
      <div className="mb-1.5 text-sm font-medium text-fg">{title}</div>
      <div className="text-xs text-fg-muted">{meta}</div>
      <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-bg-sunken">
        <div
          className="h-full animate-bar-fill rounded-full"
          style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-strong))" }}
        />
      </div>
    </div>
  );
}
