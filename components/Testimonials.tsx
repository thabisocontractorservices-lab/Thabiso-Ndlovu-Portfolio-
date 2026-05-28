import { SectionReveal } from "./SectionReveal";
import { Eyebrow } from "./About";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-bg-subtle py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionReveal>
          <Eyebrow>Selected words</Eyebrow>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mt-4 max-w-[720px] text-[clamp(32px,5vw,48px)] font-medium leading-tight tracking-tighter">
            What collaborators <span className="font-serif-italic">say.</span>
          </h2>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <SectionReveal key={i} delay={((i % 3) + 1) * 0.08}>
              <div className="flex h-full flex-col gap-5 rounded-[18px] border border-border bg-bg p-7 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md">
                <p className="font-serif-italic text-[22px] leading-snug tracking-tight text-fg">
                  &quot;{t.quote}&quot;
                </p>
                <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border font-mono text-[13px] font-medium text-accent-strong"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent-soft), var(--accent-ghost))",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-fg">{t.name}</div>
                    <div className="font-mono text-xs text-fg-subtle">{t.role}</div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
