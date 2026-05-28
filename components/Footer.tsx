import { Linkedin, Github, Instagram, Mail } from "lucide-react";
import { BrandMark } from "./Navbar";
import { site, social } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg pb-8 pt-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-14">
          <div className="flex max-w-[380px] flex-col gap-5">
            <div className="flex items-center gap-2.5 text-base font-semibold">
              <BrandMark />
              <span>{site.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-fg-muted">{site.mission}</p>
            <div className="flex gap-2">
              <SocialLink href={social.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={social.x} label="X">
                <XIcon />
              </SocialLink>
              <SocialLink href={social.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={social.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={`mailto:${site.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <FooterCol
            title="Sitemap"
            links={[
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Services", href: "#services" },
              { label: "Booking", href: "#booking" },
              { label: "Now", href: "#now" },
              { label: "Insights", href: "#insights" },
              { label: "Contact", href: "#contact" },
            ]}
          />
          <FooterCol
            title="Studio"
            links={[
              { label: "GKZ", href: "#" },
              { label: "Plumbers.co.za", href: "#" },
              { label: "Smart Z83", href: "#" },
              { label: "AI Lab", href: "#" },
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              { label: site.email, href: `mailto:${site.email}` },
              { label: site.location, href: "#" },
              { label: "Book a call", href: "#booking" },
            ]}
          />
        </div>
        <div className="flex flex-col gap-3 border-t border-border pt-6 text-[13px] text-fg-subtle md:flex-row md:items-center md:justify-between">
          <div>
            © <span>{year}</span> {site.name} · All rights reserved
          </div>
          <div className="inline-flex items-center gap-1.5 font-mono text-xs">
            Built with <span className="text-accent-strong">intent</span> in South Africa
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg-subtle text-fg-muted transition-all hover:-translate-y-0.5 hover:border-accent-soft hover:bg-accent-ghost hover:text-accent-strong"
    >
      {children}
    </a>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="mb-4 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
        {title}
      </div>
      <div className="flex flex-col gap-2.5">
        {links.map((l) => (
          <a key={l.label + l.href} href={l.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
