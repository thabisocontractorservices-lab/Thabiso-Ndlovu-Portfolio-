import { Reveal } from "./Reveal";
import { Icon, type IconName } from "./Icon";
import { trustChips } from "@/lib/data";

export function Trust() {
  return (
    <section className="pb-5 pt-[60px] text-center">
      <div className="mx-auto max-w-site px-6 md:px-8">
        <Reveal>
          <div className="text-[12.5px] uppercase tracking-[0.1em] text-fg-subtle">
            Built on principles that don&apos;t expire
          </div>
        </Reveal>
        <Reveal delay={0.07}>
          <div className="mt-[26px] flex flex-wrap justify-center gap-3.5">
            {trustChips.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-1 px-[18px] py-2.5 text-sm text-fg-muted"
              >
                <Icon name={c.iconName as IconName} className="h-4 w-4 text-blue-bright" strokeWidth={2} />
                {c.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
