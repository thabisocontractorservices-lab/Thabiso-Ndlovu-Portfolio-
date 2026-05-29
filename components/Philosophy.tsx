import { Check, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { philosophyProblems, philosophyApproach } from "@/lib/data";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-[100px] md:py-[130px]">
      <div className="mx-auto max-w-site px-6 md:px-8">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,153,255,0.2)] bg-[rgba(0,153,255,0.1)] px-3.5 py-1.5 text-[12.5px] font-medium text-blue-bright">
              Philosophy
            </span>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mx-auto mt-[22px] max-w-[640px] text-[clamp(30px,4.5vw,48px)] font-semibold leading-[1.05] tracking-tighter">
              The problem with most AI advice
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-[18px] max-w-[560px] text-lg leading-[1.55] text-fg-muted">
              Every week there&apos;s a new platform, a new model, a new &quot;must-use&quot; tool. Most businesses chase the hype. The ones that win build the systems underneath it.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal delay={0.07}>
            <div className="relative h-full overflow-hidden rounded-lg2 border border-border bg-bg-1 p-7">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full opacity-[0.18] blur-[60px]"
                style={{ background: "#94a3b8" }}
              />
              <div className="mb-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-[11px] border border-border bg-white/5 text-fg-subtle">
                <X className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mb-2 text-lg font-[560] tracking-tighter">Chasing the hype</h3>
              <p className="text-sm leading-[1.55] text-fg-muted">Where most businesses get stuck:</p>
              <ul className="mt-3 flex flex-col gap-[11px]">
                {philosophyProblems.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[13.5px] leading-[1.45] text-fg-muted">
                    <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[5px] bg-white/[0.06] text-fg-subtle">
                      <X className="h-2.5 w-2.5" strokeWidth={2.5} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="relative h-full overflow-hidden rounded-lg2 border border-border bg-bg-1 p-7">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full opacity-25 blur-[60px]"
                style={{ background: "#0099ff" }}
              />
              <div className="mb-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-[11px] border border-[rgba(0,153,255,0.2)] bg-[rgba(0,153,255,0.12)] text-blue-bright">
                <Check className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mb-2 text-lg font-[560] tracking-tighter">Building the system</h3>
              <p className="text-sm leading-[1.55] text-fg-muted">How I approach the work instead:</p>
              <ul className="mt-3 flex flex-col gap-[11px]">
                {philosophyApproach.map((a) => (
                  <li key={a} className="flex gap-2.5 text-[13.5px] leading-[1.45] text-fg-muted">
                    <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[5px] bg-[rgba(0,153,255,0.16)] text-blue-bright">
                      <Check className="h-[11px] w-[11px]" strokeWidth={3} />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
