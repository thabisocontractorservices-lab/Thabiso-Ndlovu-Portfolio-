"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { ProjectCard } from "./ProjectCard";
import { Eyebrow } from "./About";
import { projects, projectFilters, type ProjectStatus } from "@/lib/data";

export function Projects() {
  const [filter, setFilter] = useState<ProjectStatus | "all">("all");

  const visible = projects.filter((p) => filter === "all" || p.status === filter);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionReveal>
              <Eyebrow>Projects · The Studio</Eyebrow>
            </SectionReveal>
            <SectionReveal delay={0.08}>
              <h2 className="mt-4 max-w-[720px] text-[clamp(32px,5vw,48px)] font-medium leading-tight tracking-tighter">
                A studio of products
                <br />
                <span className="font-serif-italic">in motion.</span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.16}>
              <p className="mt-4 max-w-[640px] text-lg leading-snug text-fg-muted">
                Shipped, in beta, building, and researching — a transparent look at what&apos;s currently on the bench.
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.24}>
            <div className="flex w-fit flex-wrap gap-1.5 rounded-full border border-border bg-bg-subtle p-1.5">
              {projectFilters.map((f) => (
                <button
                  key={f.filter}
                  onClick={() => setFilter(f.filter)}
                  className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all ${
                    filter === f.filter
                      ? "bg-bg text-fg shadow-sm"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
