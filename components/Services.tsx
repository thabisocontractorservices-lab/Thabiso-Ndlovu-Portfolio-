import {
  Sparkles,
  TrendingUp,
  Zap,
  Boxes,
  Target,
  PenSquare,
} from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { Eyebrow } from "./About";
import { services } from "@/lib/data";

const iconMap = {
  ai: Sparkles,
  chart: TrendingUp,
  zap: Zap,
  box: Boxes,
  target: Target,
  pen: PenSquare,
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionReveal>
          <Eyebrow>Services</Eyebrow>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mt-4 max-w-[720px] text-[clamp(32px,5vw,48px)] font-medium leading-tight tracking-tighter">
            Six lanes I work in — <span className="font-serif-italic">deeply.</span>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mt-4 max-w-[640px] text-lg leading-snug text-fg-muted">
            A focused set of services that compounds when you stack them. Engage one or build a system across all six.
          </p>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.iconName as keyof typeof iconMap];
            const delay = ((i % 3) + 1) * 0.08;
            return (
              <SectionReveal key={s.title} delay={delay}>
                <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[18px] border border-border bg-bg p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md">
                  <div
                    className="absolute left-0 right-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, var(--accent), transparent)",
                    }}
                  />
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-soft bg-accent-ghost text-accent-strong">
                    <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[18px] font-medium tracking-tight text-fg">{s.title}</h3>
                  <p className="text-sm leading-snug text-fg-muted">{s.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 font-mono text-[13px] text-fg-subtle transition-all group-hover:translate-x-0.5 group-hover:text-accent-strong">
                    Explore <span>→</span>
                  </span>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
