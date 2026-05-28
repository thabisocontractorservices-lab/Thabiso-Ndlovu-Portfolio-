import { SectionReveal } from "./SectionReveal";
import { Eyebrow } from "./About";
import { insights } from "@/lib/data";

export function Insights() {
  return (
    <section id="insights" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionReveal>
          <Eyebrow>Insights</Eyebrow>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mt-4 max-w-[720px] text-[clamp(32px,5vw,48px)] font-medium leading-tight tracking-tighter">
            Field notes from <span className="font-serif-italic">the build.</span>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mt-4 max-w-[640px] text-lg leading-snug text-fg-muted">
            Long-form thinking on AI, marketing systems, SaaS, and what it actually takes to operate in African markets.
          </p>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((post, i) => (
            <SectionReveal key={post.title} delay={((i % 3) + 1) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-border bg-bg transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md">
                <div
                  className="relative aspect-[16/9] overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-soft) 0%, var(--bg-sunken) 100%)",
                  }}
                >
                  <div className="grid-bg-soft absolute inset-0 opacity-60" />
                  <span
                    className="absolute left-4 top-4 inline-flex items-center rounded-full border border-border bg-bg-elevated px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent-strong"
                    style={{ backdropFilter: "blur(8px)" }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex gap-3 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                    <span>{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-[18px] font-medium leading-tight tracking-tight text-fg">
                    {post.title}
                  </h3>
                  <p className="flex-1 text-sm leading-snug text-fg-muted">{post.excerpt}</p>
                  <a
                    href={post.href}
                    className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent-strong"
                  >
                    Read essay
                    <span className="font-mono transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
