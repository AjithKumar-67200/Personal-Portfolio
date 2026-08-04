"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/content";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-[9999] flex translate-y-0 justify-center pt-4 transition-all duration-500 sm:pt-6">
      <div className="glass-ios pointer-events-auto relative flex w-[95%] max-w-[1050px] flex-col items-center rounded-[3rem] px-6 py-4 transition-all duration-700 sm:px-10">
        <div className="relative z-[100] flex w-full items-center justify-between">
          <Link
            href="/"
            className="mr-4 shrink-0 text-sm font-bold uppercase tracking-tighter text-white"
            onClick={() => setOpen(false)}
          >
            {siteConfig.brandPrimary}
            <span className="text-white/70">{siteConfig.brandSecondary}</span>
          </Link>

          <div className="relative hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-6">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group py-2 text-[10px] font-bold uppercase tracking-[0.15em] transition-all xl:text-[11px] xl:tracking-widest ${
                    active ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10 transition-all group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
              className="hidden items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-bold text-white transition-all hover:scale-105 hover:bg-white/20 sm:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              className="shrink-0 p-2 text-white/70 transition-colors hover:text-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d={open ? "M6 6l12 12M18 6L6 18" : "M3 12h18M3 6h18M3 18h18"} />
              </svg>
            </button>
          </div>
        </div>

        {open ? (
          <div className="mt-4 flex w-full flex-col gap-1 border-t border-white/10 pt-4 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-sm font-bold uppercase tracking-[0.2em] text-zinc-300 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
