import { Reveal } from "./Reveal";
import { Icon, type IconName } from "./Icon";
import { projects, type ProjectStatus } from "@/lib/data";

const dot: Record<ProjectStatus, string> = {
  p: "#38b6ff",
  dev: "#a855f7",
  rd: "#94a3b8",
};

export function Projects() {
  return (
    <section id="projects" className="pb-[100px] md:pb-[130px]">
      <div className="mx-auto max-w-site px-6 md:px-8">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,153,255,0.2)] bg-[rgba(0,153,255,0.1)] px-3.5 py-1.5 text-[12.5px] font-medium text-blue-bright">
              Selected work
            </span>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mx-auto mt-[22px] max-w-[640px] text-[clamp(30px,4.5vw,48px)] font-semibold leading-[1.05] tracking-tighter">
              Real systems, in real operation
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-[18px] max-w-[560px] text-lg leading-[1.55] text-fg-muted">
              A small, honest set of projects — built around workflows and fundamentals, not features.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-[18px] min-[760px]:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={0.07 * (i + 1)}>
              <article className="flex h-full min-h-[270px] flex-col rounded-lg2 border border-border bg-bg-1 p-[26px] transition-all duration-300 hover:-translate-y-[3px] hover:border-border-2 hover:shadow-soft">
                <div className="mb-[22px] flex items-center justify-between">
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[11px] border border-border bg-bg-3 text-blue-bright">
                    <Icon name={p.iconName as IconName} className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-3 px-2.5 py-[5px] pl-[9px] text-[11px] font-medium uppercase tracking-[0.04em] text-fg-muted">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: dot[p.status] }} />
                    {p.statusLabel}
                  </span>
                </div>
                <h3 className="mb-2.5 text-[19px] font-[560] tracking-tighter">{p.name}</h3>
                <p className="flex-1 text-sm leading-[1.55] text-fg-muted">{p.description}</p>
                <div className="mt-5 border-t border-border pt-4 text-[11.5px] uppercase tracking-[0.05em] text-fg-subtle">
                  {p.tag}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
