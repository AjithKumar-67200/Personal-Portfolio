import type { Metadata } from "next";
import { experienceRoles, siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black pt-16 md:pt-24">
      <section
        id="experience"
        className="relative w-full overflow-hidden bg-black py-24 antialiased"
      >
        <div
          className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-[120px]"
          aria-hidden="true"
        />
        <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
          <header className="mb-24">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-zinc-800" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                Background
              </span>
            </div>
            <h2
              className="flex flex-col gap-x-6 tracking-tighter leading-[0.7] md:flex-row md:items-baseline"
              style={{ fontSize: "clamp(1.75rem, 5.5vw, 7.5rem)" }}
            >
              <span className="relative inline-block font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <span>Work</span>
                <span
                  className="pointer-events-none absolute inset-0 select-none text-white/20 blur-md animate-pulse"
                  aria-hidden="true"
                >
                  {" "}
                  Work{" "}
                </span>
              </span>
              <span className="font-extralight text-zinc-800"> Experience </span>
            </h2>
            <p className="mt-4 text-lg font-medium tracking-tight text-zinc-500 md:text-xl">
              {siteConfig.description}
            </p>
          </header>

          <div className="relative ml-4 space-y-20 border-l border-zinc-800 md:ml-6">
            {experienceRoles.map((role) => (
              <div key={role.title} className="group relative pl-10">
                <div className="absolute -left-[6.5px] top-2 h-3 w-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 group-hover:scale-150" />
                <div className="flex flex-col space-y-4">
                  <time className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
                    {role.period}
                  </time>
                  <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-4 md:flex-row md:items-end">
                    <div className="flex flex-col">
                      <h3 className="text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-zinc-300 md:text-4xl">
                        {role.title}
                      </h3>
                      {role.mode ? (
                        <span className="mt-2 font-mono text-[10px] uppercase italic tracking-[0.2em] text-zinc-500">
                          {role.mode}
                        </span>
                      ) : null}
                    </div>
                    <span className="text-xl font-medium italic text-zinc-400">
                      {role.company}
                    </span>
                  </div>
                  <p className="max-w-4xl text-lg font-light leading-relaxed text-zinc-400">
                    {role.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1 text-[10px] font-black uppercase tracking-tighter text-zinc-400 transition-all hover:border-zinc-600 hover:text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
