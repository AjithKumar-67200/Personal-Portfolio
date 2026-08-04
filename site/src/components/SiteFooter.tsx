import Link from "next/link";
import { footerNavItems, siteConfig, socialLinks } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="relative pb-24 md:pb-12">
      <footer
        className="w-full border-t border-white/5 bg-black py-12"
        aria-labelledby="footer-branding"
      >
        <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3 md:pl-28">
          <div className="flex flex-col gap-4">
            <span
              id="footer-branding"
              className="text-xl font-bold tracking-tighter text-white"
            >
              {siteConfig.brandPrimary}
              <span className="text-white/40">{siteConfig.brandSecondary}</span>
            </span>
            <p className="max-w-[280px] text-sm leading-relaxed text-zinc-500">
              {siteConfig.footerBlurb}
            </p>
          </div>

          <nav className="flex flex-col gap-4" aria-label="Navigation">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {footerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-zinc-500 transition-colors hover:text-white focus:outline-none focus:ring-1 focus:ring-white/20"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Connect
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Connect">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-3 text-zinc-500 transition-colors hover:text-white"
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <div
                    className="rounded-lg border border-white/10 bg-white/5 p-2 group-hover:border-white/20"
                    aria-hidden="true"
                  >
                    <span className="block h-4 w-4 text-[10px] font-bold leading-4">
                      {link.label.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 px-6 pt-8 md:flex-row md:pl-28">
          <p className="text-[12px] text-zinc-600">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-[12px] text-zinc-600">
            Built with <span className="text-white/40">Next.js & Tailwind</span>
          </p>
        </section>
      </footer>
    </footer>
  );
}
