import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-site px-6 pb-10 md:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] px-10 py-[72px] text-center">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(0,153,255,0.95), rgba(99,102,241,0.9) 50%, rgba(168,85,247,0.85))",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 70% 10%, rgba(255,255,255,0.3), transparent 55%)",
              }}
            />
          </div>
          <div className="noise absolute inset-0 opacity-[0.06]" />

          <div className="relative z-[2]">
            <h2 className="mx-auto max-w-[640px] text-[clamp(30px,4.5vw,50px)] font-semibold leading-[1.05] tracking-tighter text-white">
              Stop chasing tools. Start building systems.
            </h2>
            <p className="mx-auto mt-[18px] max-w-[480px] text-[17px] text-white/[0.88]">
              Book a 30-minute consultation and let&apos;s map what a durable AI system looks like for your business.
            </p>
            <a
              href="#booking"
              className="group mt-[34px] inline-flex h-[52px] items-center gap-2 rounded-DEFAULT bg-white px-[30px] text-base font-medium text-[#0a0a0a] transition-all hover:-translate-y-px"
            >
              Book a consultation
              <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-[3px]" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
