import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="pb-[100px] md:pb-[130px]">
      <div className="mx-auto max-w-site px-6 md:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,153,255,0.2)] bg-[rgba(0,153,255,0.1)] px-3.5 py-1.5 text-[12.5px] font-medium text-blue-bright">
            About
          </span>
        </Reveal>
        <Reveal delay={0.07}>
          <h2 className="mt-[22px] max-w-[640px] text-[clamp(30px,4.5vw,48px)] font-semibold leading-[1.05] tracking-tighter">
            A builder focused on what lasts
          </h2>
        </Reveal>
        <Reveal delay={0.07}>
          <p className="mt-9 max-w-[760px] text-[17px] leading-[1.7] text-fg-muted">
            I come from a <strong className="font-[550] text-fg">marketing background</strong> and I&apos;m currently{" "}
            <strong className="font-[550] text-fg">studying AI and data analytics</strong> — but my real work is building. I design and ship practical digital products, with a focus on{" "}
            <strong className="font-[550] text-fg">automation systems</strong> and the workflows underneath them. What drives me is solving real{" "}
            <strong className="font-[550] text-fg">African business problems</strong> through technology — not the latest tool, but the durable system that keeps delivering value once the novelty wears off.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
