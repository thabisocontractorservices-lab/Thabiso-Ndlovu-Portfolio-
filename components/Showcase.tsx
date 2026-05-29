import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Showcase() {
  return (
    <section id="approach" className="pb-[100px] md:pb-[130px]">
      <div className="mx-auto max-w-site px-6 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-border px-10 py-20 text-center">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(125deg, rgba(0,153,255,0.9), rgba(99,102,241,0.85) 45%, rgba(168,85,247,0.8))",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.25), transparent 50%), radial-gradient(ellipse at 80% 90%, rgba(0,0,0,0.3), transparent 60%)",
                }}
              />
            </div>
            <div className="noise absolute inset-0 opacity-[0.06]" />

            <div className="relative z-[2]">
              <div className="mb-[30px] inline-flex flex-wrap items-center justify-center gap-[18px]">
                <span className="rounded-DEFAULT border border-white/25 bg-white/[0.14] px-5 py-3.5 text-[15px] font-medium text-white opacity-[0.55] backdrop-blur-md">
                  Tools change
                </span>
                <span className="text-white/90">
                  <ArrowRight className="h-[30px] w-[30px]" strokeWidth={2} />
                </span>
                <span className="rounded-DEFAULT border border-white/25 bg-white/[0.14] px-5 py-3.5 text-[15px] font-medium text-white backdrop-blur-md">
                  Systems remain
                </span>
              </div>
              <h2 className="mx-auto max-w-[760px] text-[clamp(30px,4.5vw,52px)] font-semibold leading-[1.05] tracking-tighter text-white">
                When the hype fades, systems and fundamentals remain.
              </h2>
              <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.55] text-white/85">
                Workflow design, automation fundamentals, and process — the parts of your operation that keep delivering value once this week&apos;s tool is forgotten.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
