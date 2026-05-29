import { Linkedin, Github } from "lucide-react";
import { Brand } from "./Navbar";
import { site, social, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border pb-10 pt-[72px]">
      <div className="mx-auto max-w-site px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 min-[720px]:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-[320px]">
            <div className="mb-4 flex items-center gap-2.5 text-[15px] font-[560]">
              <Brand />
              {site.name}
            </div>
            <p className="text-sm leading-[1.6] text-fg-muted">{site.mission}</p>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.08em] text-fg-subtle">Explore</h4>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="block py-1.5 text-sm text-fg-muted transition-colors hover:text-fg">
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.08em] text-fg-subtle">Connect</h4>
            <a href="#booking" className="block py-1.5 text-sm text-fg-muted transition-colors hover:text-fg">
              Book a consultation
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="block py-1.5 text-sm text-fg-muted transition-colors hover:text-fg">
              LinkedIn
            </a>
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="block py-1.5 text-sm text-fg-muted transition-colors hover:text-fg">
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-[26px] text-[13px] text-fg-subtle min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-between">
          <div>© {year} {site.name} · clarity &gt; hype · systems &gt; tools</div>
          <div className="flex gap-2.5">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-sm2 border border-border bg-bg-1 text-fg-muted transition-all hover:-translate-y-0.5 hover:border-border-2 hover:bg-bg-2 hover:text-white"
            >
              <Linkedin className="h-[17px] w-[17px]" />
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-sm2 border border-border bg-bg-1 text-fg-muted transition-all hover:-translate-y-0.5 hover:border-border-2 hover:bg-bg-2 hover:text-white"
            >
              <Github className="h-[17px] w-[17px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
