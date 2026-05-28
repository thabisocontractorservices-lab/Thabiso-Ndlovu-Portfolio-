import { SectionReveal } from "./SectionReveal";
import { Eyebrow } from "./About";
import { nowTimeline, nowWeekly } from "@/lib/data";

export function Now() {
  return (
    <section id="now" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionReveal>
          <Eyebrow>/now</Eyebrow>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mt-4 max-w-[720px] text-[clamp(32px,5vw,48px)] font-medium leading-tight tracking-tighter">
            What I&apos;m working on <span className="font-serif-italic">right now.</span>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mt-4 max-w-[640px] text-lg leading-snug text-fg-muted">
            A live status board, updated as the work moves. Inspired by Derek Sivers&apos; /now page convention.
          </p>
        </SectionReveal>

        <div className="mt-14 grid items-start gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <SectionReveal delay={0.08}>
            <div className="relative pl-7">
              <div
                className="absolute bottom-1.5 left-1.5 top-1.5 w-px"
                style={{
                  background:
                    "linear-gradient(180deg, var(--accent), var(--border) 80%)",
                }}
              />
              {nowTimeline.map((item) => (
                <div key={item.title} className="relative pb-8 last:pb-0">
                  <div className="absolute -left-7 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg shadow-[0_0_0_4px_var(--accent-ghost)]" />
                  <div className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                    {item.date}
                  </div>
                  <h4 className="mb-1.5 text-[17px] font-medium tracking-tight text-fg">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-snug text-fg-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.16}>
            <div className="overflow-hidden rounded-3xl border border-border bg-bg p-6 shadow-md">
              <div className="mb-5 flex items-center justify-between border-b border-dashed border-border pb-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                  /this.week
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-status-live/10 px-2.5 py-1 font-mono text-[11px] font-medium tracking-tight text-status-live">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
                  Active
                </span>
              </div>
              {nowWeekly.map((row, i, arr) => (
                <div
                  key={row.task}
                  className={`flex items-center gap-3 py-2.5 text-sm ${i < arr.length - 1 ? "border-b border-border" : ""} ${
                    row.done
                      ? "text-fg-muted line-through decoration-border-strong"
                      : "text-fg"
                  }`}
                >
                  <span
                    className={`flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-md border-[1.5px] transition-all ${
                      row.done ? "border-accent bg-accent" : "border-border-strong"
                    }`}
                  >
                    {row.done && (
                      <span
                        className="block h-2.5 w-1.5 -translate-y-px rotate-[-45deg] border-b-[1.5px] border-l-[1.5px] border-white"
                        aria-hidden
                      />
                    )}
                  </span>
                  <span>{row.task}</span>
                  <span className="ml-auto rounded-full bg-bg-subtle px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
                    {row.tag}
                  </span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
