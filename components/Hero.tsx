"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { heroChecklist, heroHealth } from "@/lib/data";

const fade = {
  hidden: { opacity: 0, y: 22 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 text-center">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 75%)",
          }}
        />
        <div
          className="absolute left-1/2 top-[-180px] h-[600px] w-[900px] -translate-x-1/2 blur-[40px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,153,255,0.22) 0%, rgba(99,102,241,0.12) 35%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-site px-6 md:px-8">
        <motion.h1
          custom={0.06}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mx-auto mt-7 max-w-[880px] text-[clamp(42px,7vw,84px)] font-semibold leading-[0.98] tracking-tightest"
        >
          Build AI systems
          <br />
          on <span className="text-grad">fundamentals</span>, not hype.
        </motion.h1>

        <motion.p
          custom={0.13}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mx-auto mt-[26px] max-w-[600px] text-[clamp(17px,2vw,21px)] font-[450] leading-[1.5] text-fg-muted"
        >
          I help businesses implement practical AI and automation systems that remain valuable long after trends and tools change.
        </motion.p>

        <motion.p
          custom={0.18}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mx-auto mt-4 max-w-[520px] text-[14.5px] text-fg-subtle"
        >
          Thabiso Gift Ndlovu — startup builder &amp; AI systems strategist, building practical digital products for South Africa.
        </motion.p>

        <motion.div
          custom={0.24}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mt-[38px] flex flex-wrap justify-center gap-3"
        >
          <a
            href="#booking"
            className="group inline-flex h-[50px] items-center gap-2 rounded-DEFAULT bg-white px-[26px] text-[15.5px] font-medium text-[#0a0a0a] transition-all hover:-translate-y-px hover:shadow-[0_10px_30px_-8px_rgba(255,255,255,0.25)]"
          >
            Book a consultation
            <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-[3px]" />
          </a>
          <a
            href="#projects"
            className="inline-flex h-[50px] items-center rounded-DEFAULT border border-border-2 bg-white/5 px-[26px] text-[15.5px] font-medium text-fg transition-all hover:-translate-y-px hover:bg-white/10"
          >
            View projects
          </a>
        </motion.div>

        {/* stage mockup */}
        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fade}
          className="relative mx-auto mt-[72px] max-w-[960px]"
        >
          <div className="absolute -left-5 -top-6 z-10 hidden rounded-DEFAULT border border-border-2 p-[14px_16px] shadow-soft backdrop-blur-md min-[820px]:block" style={{ background: "rgba(22,22,25,0.85)" }}>
            <div className="mb-[3px] flex items-center gap-[7px] text-[13px] font-[550] text-fg">
              <span className="h-[7px] w-[7px] rounded-full bg-blue-bright shadow-[0_0_0_3px_rgba(0,153,255,0.2)]" />
              Workflow mapped
            </div>
            <div className="text-xs text-fg-subtle">12 steps · 4 automated</div>
          </div>
          <div className="absolute -bottom-6 -right-[18px] z-10 hidden rounded-DEFAULT border border-border-2 p-[14px_16px] shadow-soft backdrop-blur-md min-[820px]:block" style={{ background: "rgba(22,22,25,0.85)" }}>
            <div className="mb-[3px] flex items-center gap-[7px] text-[13px] font-[550] text-fg">
              <span className="h-[7px] w-[7px] rounded-full bg-blue-bright shadow-[0_0_0_3px_rgba(0,153,255,0.2)]" />
              System live
            </div>
            <div className="text-xs text-fg-subtle">Running since deploy</div>
          </div>

          <div
            className="overflow-hidden rounded-lg2 border border-border-2 text-left shadow-soft"
            style={{ background: "linear-gradient(180deg, #161619, #0f0f11)" }}
          >
            <div className="flex items-center gap-2 border-b border-border px-[18px] py-[14px]">
              <span className="h-[11px] w-[11px] rounded-full bg-bg-3" />
              <span className="h-[11px] w-[11px] rounded-full bg-bg-3" />
              <span className="h-[11px] w-[11px] rounded-full bg-bg-3" />
              <span className="ml-3.5 rounded-full border border-border bg-bg px-3.5 py-[5px] text-[12.5px] text-fg-subtle">
                thabisondlovu.co.za / systems
              </span>
            </div>
            <div className="grid grid-cols-1 gap-[18px] p-7 min-[721px]:grid-cols-[1.1fr_1fr]">
              <div className="rounded-DEFAULT border border-border bg-bg p-5">
                <div className="mb-3.5 text-[11.5px] uppercase tracking-[0.08em] text-fg-subtle">
                  Implementation checklist
                </div>
                {heroChecklist.map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center justify-between py-[11px] text-[13.5px] text-fg-muted ${i < heroChecklist.length - 1 ? "border-b border-border" : ""}`}
                  >
                    {item}
                    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-md bg-[rgba(0,153,255,0.16)] text-blue-bright">
                      <Check className="h-[11px] w-[11px]" strokeWidth={3} />
                    </span>
                  </div>
                ))}
              </div>
              <div className="rounded-DEFAULT border border-border bg-bg p-5">
                <div className="mb-3.5 text-[11.5px] uppercase tracking-[0.08em] text-fg-subtle">
                  System health
                </div>
                <div className="mt-1 flex flex-col gap-3.5">
                  {heroHealth.map((h) => (
                    <div key={h.label}>
                      <div className="mb-[7px] flex justify-between text-[12.5px] text-fg-subtle">
                        <span>{h.label}</span>
                        <span>{h.value}%</span>
                      </div>
                      <div className="h-[7px] overflow-hidden rounded-full bg-bg-3">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${h.value}%`,
                            background: "linear-gradient(90deg, #0099ff, #6366f1)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
