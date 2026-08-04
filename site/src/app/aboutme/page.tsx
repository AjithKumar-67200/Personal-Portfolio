import Image from "next/image";
import type { Metadata } from "next";
import { aboutContent, educationItems, siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-16 md:pt-24">
      <section className="relative w-full overflow-hidden bg-black py-24 antialiased">
        <div
          className="pointer-events-none absolute left-[20%] top-[10%] h-[400px] w-[400px] select-none rounded-full bg-white/[0.04] blur-[120px]"
          aria-hidden="true"
        />
        <div className="container relative z-10 mx-auto px-6 md:pl-32 md:pr-16 lg:pl-44">
          <div className="flex flex-col items-start justify-between gap-16 lg:flex-row">
            <div className="w-full space-y-10 lg:w-[60%]">
              <header className="mb-24">
                <div className="mb-8 flex items-center gap-3">
                  <div className="h-px w-10 bg-zinc-800" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                    {aboutContent.eyebrow}
                  </span>
                </div>
                <h1
                  className="flex flex-col gap-x-6 tracking-tighter leading-[0.7] md:flex-row md:items-baseline"
                  style={{ fontSize: "clamp(1.75rem, 5.5vw, 7.5rem)" }}
                >
                  <span className="relative inline-block font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    {aboutContent.title}
                    <span
                      className="pointer-events-none absolute inset-0 select-none text-white/20 blur-md animate-pulse"
                      aria-hidden="true"
                    >
                      {aboutContent.title}
                    </span>
                  </span>
                  <span className="font-extralight text-zinc-800">
                    {" "}
                    {aboutContent.ghost}{" "}
                  </span>
                </h1>
                <p className="mt-4 text-lg font-medium tracking-tight text-zinc-500 md:text-xl">
                  {aboutContent.subtitle}
                </p>
              </header>

              <div className="max-w-2xl space-y-8 text-base font-medium leading-relaxed text-zinc-400 antialiased md:text-lg">
                {aboutContent.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-12 lg:w-[35%] lg:items-end">
              <div className="group relative">
                <div
                  className="absolute inset-0 scale-75 rounded-full bg-white/20 opacity-50 blur-[100px] transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative h-64 w-64 transform-gpu overflow-hidden rounded-full bg-white/10 p-[3px] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:border-white/40 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] md:h-80 md:w-80">
                  <Image
                    src={siteConfig.profileImage}
                    alt={`${siteConfig.name} — ${siteConfig.title}`}
                    width={320}
                    height={320}
                    priority
                    className="h-full w-full rounded-full object-cover object-top grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-110"
                  />
                </div>
              </div>

              {educationItems.map((item) => (
                <div
                  key={item.title}
                  className="group relative w-full max-w-sm rounded-[2rem] border border-white/[0.08] bg-[#050505] p-6 shadow-2xl"
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/40 transition-colors group-hover:text-white"
                      aria-hidden="true"
                    >
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold leading-tight text-white md:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs font-medium text-zinc-500">
                        {item.place}
                      </p>
                      <div className="pt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                        {item.period}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
