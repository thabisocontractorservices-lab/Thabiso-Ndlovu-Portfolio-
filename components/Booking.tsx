import { Clock, Check, MessageSquare } from "lucide-react";
import { Reveal } from "./Reveal";
import { site } from "@/lib/data";

export function Booking() {
  const base = site.bookingUrl;
  const sep = base.includes("?") ? "&" : "?";
  const src = `${base}${sep}theme=dark`;

  return (
    <section id="booking" className="pb-[100px] md:pb-[130px]">
      <div className="mx-auto max-w-site px-6 md:px-8">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,153,255,0.2)] bg-[rgba(0,153,255,0.1)] px-3.5 py-1.5 text-[12.5px] font-medium text-blue-bright">
              Book a consultation
            </span>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mx-auto mt-[22px] max-w-[640px] text-[clamp(30px,4.5vw,48px)] font-semibold leading-[1.05] tracking-tighter">
              Let&apos;s build systems that actually work
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-[18px] max-w-[560px] text-lg leading-[1.55] text-fg-muted">
              Book a consultation to discuss AI implementation, automation systems, workflows, or digital product strategy.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-14 overflow-hidden rounded-[24px] border border-border bg-bg-1 shadow-soft">
            <iframe
              src={src}
              title="Book a 30 minute consultation with Thabiso Gift Ndlovu"
              loading="lazy"
              className="block h-[640px] w-full border-0 bg-bg-1"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-[26px] flex flex-wrap justify-center gap-[22px]">
            <span className="inline-flex items-center gap-2 text-[13.5px] text-fg-muted">
              <Clock className="h-[15px] w-[15px] text-blue-bright" /> 30-minute call
            </span>
            <span className="inline-flex items-center gap-2 text-[13.5px] text-fg-muted">
              <Check className="h-[15px] w-[15px] text-blue-bright" /> No-obligation
            </span>
            <span className="inline-flex items-center gap-2 text-[13.5px] text-fg-muted">
              <MessageSquare className="h-[15px] w-[15px] text-blue-bright" /> Straight talk, no hype
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
