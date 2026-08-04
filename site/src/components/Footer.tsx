import { siteConfig, socialLinks, navItems } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t hairline py-12">
      <div className="shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-ink">
            {siteConfig.shortName}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Java Full Stack Developer focused on scalable microservices,
            RESTful APIs, and high-impact production systems.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Navigation</p>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-muted hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Connect</p>
          <ul className="mt-3 space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-ink"
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell mt-10 flex flex-col gap-2 border-t hairline pt-6 text-xs text-faint sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
