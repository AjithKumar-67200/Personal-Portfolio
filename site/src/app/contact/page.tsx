"use client";

import { useState, type FormEvent } from "react";
import { contactContent, siteConfig, socialLinks } from "@/data/content";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setStatus("Email is required.");
      return;
    }
    const subject = encodeURIComponent(
      `Portfolio Inquiry - ${name.trim() || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Hi Ajith,\n\nI visited your portfolio and would like to connect.\n\nName: ${name.trim() || "—"}\nEmail: ${email.trim()}\n`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client...");
  };

  return (
    <main className="min-h-screen bg-black pt-16 md:pt-24">
      <section
        id="contacto"
        className="relative w-full overflow-hidden bg-black py-24 antialiased"
        aria-labelledby="contact-title"
      >
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 select-none rounded-full bg-white/[0.02] blur-[200px]"
          aria-hidden="true"
        />
        <div className="container relative z-10 mx-auto px-6 md:pl-32 md:pr-16 lg:pl-44">
          <header className="relative mb-20 md:mb-28">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-zinc-800" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                {contactContent.eyebrow}
              </span>
            </div>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <h2
                  id="contact-title"
                  className="flex flex-col gap-x-6 tracking-tighter leading-[0.7] md:flex-row md:items-baseline"
                  style={{ fontSize: "clamp(1.75rem, 5.5vw, 7.5rem)" }}
                >
                  <span className="relative inline-block font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    {contactContent.title}
                    <span
                      className="pointer-events-none absolute inset-0 select-none text-white/20 blur-md animate-pulse"
                      aria-hidden="true"
                    >
                      {contactContent.title}
                    </span>
                  </span>
                  <span className="font-extralight text-zinc-300">
                    {contactContent.ghost}
                  </span>
                </h2>
                <p className="mt-4 text-lg font-medium tracking-tight text-zinc-300 md:text-xl">
                  {contactContent.supporting}
                </p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-3">
              <form
                className="relative rounded-[2rem] border border-white/[0.08] bg-[#050505] p-8 shadow-2xl md:p-10"
                noValidate
                onSubmit={onSubmit}
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-zinc-400"
                    >
                      Name{" "}
                      <span className="font-normal normal-case tracking-normal text-zinc-500">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-2xl border border-white/[0.08] bg-transparent px-5 py-4 text-base text-white placeholder:text-zinc-400 transition-all duration-300 hover:border-white/20 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/10"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-zinc-400"
                    >
                      Email <span className="text-red-400/60">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@email.com"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-2xl border border-white/[0.08] bg-transparent px-5 py-4 text-base text-white placeholder:text-zinc-400 transition-all duration-300 hover:border-white/20 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/10"
                    />
                  </div>
                  <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                    <button
                      type="submit"
                      className="relative inline-flex flex-1 transform-gpu items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 will-change-transform hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
                    >
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-[11px] leading-relaxed text-zinc-500">
                    This opens your email client with a message to{" "}
                    {siteConfig.email}. You can cancel anytime.
                  </p>
                  {status ? (
                    <p className="text-sm text-zinc-300" role="status">
                      {status}
                    </p>
                  ) : null}
                </div>
              </form>
            </div>

            <div className="order-1 flex flex-col gap-8 lg:order-2 lg:col-span-2">
              <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#050505] p-8">
                <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">
                  Information
                </h3>
                <div className="space-y-5">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center gap-4 text-zinc-400 transition-colors hover:text-white"
                  >
                    <div
                      className="rounded-xl border border-white/10 bg-white/5 p-2.5 transition-all group-hover:border-white/20"
                      aria-hidden="true"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="truncate text-sm font-medium">
                      {siteConfig.email}
                    </span>
                  </a>
                  <a
                    href={siteConfig.phoneHref}
                    className="group flex items-center gap-4 text-zinc-400 transition-colors hover:text-white"
                  >
                    <div
                      className="rounded-xl border border-white/10 bg-white/5 p-2.5 transition-all group-hover:border-white/20"
                      aria-hidden="true"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.2.34 2 .57 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{siteConfig.phone}</span>
                  </a>
                  {socialLinks
                    .filter((l) => l.label !== "Email")
                    .map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="group flex items-center gap-4 text-zinc-400 transition-colors hover:text-white"
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        <div
                          className="rounded-xl border border-white/10 bg-white/5 p-2.5 transition-all group-hover:border-white/20"
                          aria-hidden="true"
                        >
                          <span className="block h-4 w-4 text-[10px] font-bold leading-4">
                            {link.label.slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <span className="text-sm font-medium">{link.label}</span>
                      </a>
                    ))}
                </div>
              </div>

              <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#050505] p-8">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
                  {contactContent.whyTitle}
                </h3>
                <ul className="space-y-3">
                  {contactContent.whyItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-zinc-400"
                    >
                      <span
                        className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
