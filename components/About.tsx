import { SectionReveal } from "./SectionReveal";
import { AnimatedCounter } from "./AnimatedCounter";
import { aboutStats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionReveal>
          <Eyebrow>About</Eyebrow>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <h2 className="mt-4 max-w-[720px] text-[clamp(32px,5vw,48px)] font-medium leading-tight tracking-tighter">
            A marketer and AI builder
            <br />
            <span className="font-serif-italic">solving African problems</span> with technology.
          </h2>
        </SectionReveal>

        <div className="mt-16 grid items-start gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <SectionReveal delay={0.16}>
              <div className="my-6 flex flex-wrap gap-2">
                {[
                  "Marketing graduate",
                  "AI & data analytics",
                  "SaaS founder",
                  "Johannesburg, ZA",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent-soft bg-accent-ghost px-3 py-1.5 font-mono text-xs font-medium tracking-tight text-accent-strong"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.24}>
              <div className="space-y-4 text-[17px] leading-relaxed text-fg-muted">
                <p>
                  I&apos;m a marketing graduate currently studying AI and data analytics. I build SaaS products, automation systems, and AI-assisted tools designed for the realities of operating in South Africa — and the rest of the continent.
                </p>
                <p>
                  My interests sit at the intersection of marketing, AI, marketplaces, and digital systems. The work is always the same shape: identify a friction point in an African market, design a clean digital system around it, and ship.
                </p>
                <p>
                  I&apos;m visionary about what technology can unlock here — and grounded about the practical execution that gets it there.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.32}>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {aboutStats.map((s) => (
                  <div
                    key={s.label}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-bg-subtle p-6 transition-all"
                  >
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(ellipse at top right, var(--accent-ghost), transparent 60%)",
                      }}
                    />
                    <div className="relative text-[40px] font-medium leading-none tracking-tighter text-fg">
                      <AnimatedCounter value={s.value} />
                      {s.suffix && (
                        <span className="align-super font-mono text-[0.7em] text-accent">
                          {s.suffix}
                        </span>
                      )}
                    </div>
                    <div className="relative mt-2 font-mono text-[13px] tracking-tight text-fg-muted">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.16}>
            <AboutVisual />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function AboutVisual() {
  return (
    <div
      className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl border border-border p-8 shadow-lg"
      style={{
        background: "linear-gradient(140deg, var(--accent-soft) 0%, var(--bg-subtle) 60%)",
      }}
    >
      <div className="grid-bg-soft pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative z-10 font-mono text-[11px] uppercase tracking-wider text-accent-strong">
        /portfolio.status
      </div>
      <div className="glass-soft relative z-10 rounded-2xl border border-border p-[18px] shadow-md">
        <StatusRow name="Smart Z83" tag="Live" tone="live" />
        <StatusRow name="Plumbers.co.za" tag="Beta" tone="beta" />
        <StatusRow name="GKZ" tag="Building" tone="progress" />
        <StatusRow name="AI Lab" tag="R&D" tone="progress" last />
      </div>
    </div>
  );
}

function StatusRow({
  name,
  tag,
  tone,
  last,
}: {
  name: string;
  tag: string;
  tone: "live" | "beta" | "progress";
  last?: boolean;
}) {
  const toneClass = {
    live: "bg-status-live/10 text-status-live",
    beta: "bg-status-beta/10 text-status-beta",
    progress: "bg-status-progress/10 text-status-progress",
  }[tone];
  return (
    <div
      className={`flex items-center justify-between py-2 text-[13px] text-fg-muted ${last ? "" : "border-b border-border"}`}
    >
      <span className="font-medium text-fg">{name}</span>
      <span
        className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${toneClass}`}
      >
        {tag}
      </span>
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-accent-strong">
      <span className="h-px w-4 bg-accent" />
      {children}
    </span>
  );
}
