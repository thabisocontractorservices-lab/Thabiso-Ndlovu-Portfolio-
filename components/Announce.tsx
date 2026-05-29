export function Announce() {
  return (
    <div id="top" className="relative z-30 flex justify-center px-6 pt-[86px]">
      <a
        href="#projects"
        className="inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-2 py-1.5 pl-4 pr-2 text-[13.5px] font-[450] text-fg-muted transition-all hover:border-border-2 hover:bg-bg-3"
      >
        <span className="rounded-full bg-blue px-2.5 py-[3px] text-[11px] font-semibold tracking-normal text-white">
          New
        </span>
        <b className="font-medium text-fg">Smart83.co.za</b> — AI Z83 assistant in development
        <span className="text-fg-subtle">→</span>
      </a>
    </div>
  );
}
