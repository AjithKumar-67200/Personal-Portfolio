import { featuredProjects } from "@/data/content";

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      aria-labelledby="projects-title"
      className="relative w-full overflow-hidden bg-black py-24"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2 select-none bg-white/[0.01] blur-[150px]"
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto px-6 md:pl-32 md:pr-16 lg:pl-44">
        <header className="relative mb-24">
          <div className="relative z-20">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-zinc-800" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                Selected Work
              </span>
            </div>
            <h2
              id="projects-title"
              className="mb-6 flex flex-col gap-x-6 tracking-tighter leading-[0.7] md:flex-row md:items-baseline"
              style={{ fontSize: "clamp(1.75rem, 5.5vw, 7.5rem)" }}
            >
              <span className="relative inline-block font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Projects
                <span
                  className="pointer-events-none absolute inset-0 select-none text-white/20 blur-md animate-pulse"
                  aria-hidden="true"
                >
                  Projects
                </span>
              </span>
              <span className="font-extralight text-zinc-800">Featured</span>
            </h2>
            <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="max-w-3xl text-base font-medium leading-relaxed text-zinc-500 antialiased md:text-lg">
                  Production logistics platforms engineered for scale, real-time
                  operations, and secure API delivery.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-left lg:col-span-4 lg:items-end lg:text-right">
                <div className="flex items-center gap-3 lg:justify-end">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                    Available
                  </span>
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className="group relative flex min-h-[420px] w-full transform-gpu flex-col overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#050505] p-8 antialiased transition-all duration-500 will-change-transform hover:border-white/40 md:p-10"
            >
              <div
                className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(225deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 75%), linear-gradient(240deg, transparent 10%, rgba(255, 255, 255, 0.12) 25%, transparent 45%)",
                }}
              />
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 bg-white/20 opacity-0 blur-[65px] transition-opacity duration-700 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div
                className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-l from-white/70 via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                  <h3 className="min-w-[200px] flex-1 text-[19px] font-bold leading-tight tracking-tight text-zinc-100 antialiased transition-all group-hover:text-white md:text-[22px]">
                    {project.name}
                  </h3>
                  <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-zinc-400 transition-all group-hover:border-white/40 group-hover:text-white">
                    {project.tag}
                  </span>
                </div>

                <p className="mb-8 line-clamp-2 text-[14px] leading-relaxed text-zinc-500 antialiased group-hover:text-zinc-300">
                  {project.summary}
                </p>

                <div className="mb-10 grid flex-grow grid-cols-1 gap-y-3">
                  {project.results.map((result) => (
                    <div
                      key={result}
                      className="flex items-start text-[12px] text-zinc-600 opacity-80 antialiased"
                    >
                      <span className="mr-2 mt-1 text-[10px] text-white/20 transition-colors group-hover:text-white/60">
                        →
                      </span>
                      <span className="line-clamp-1 transition-colors group-hover:text-zinc-200">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[10px] font-black uppercase tracking-tighter text-zinc-400 transition-all hover:border-zinc-600 hover:text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
                  >
                    Visit →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
