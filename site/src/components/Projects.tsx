import { featuredProjects } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden border-t border-white/5 bg-black">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2 select-none bg-white/[0.01] blur-[150px]"
        aria-hidden="true"
      />
      <div className="shell">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects"
          ghost="Featured"
          description="Production logistics platforms engineered for scale, real-time operations, and secure API delivery."
        />

        <Stagger className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.name}>
              <article className="card-surface group flex h-full flex-col p-8 transition-transform duration-500 hover:-translate-y-1 md:p-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                  {project.tag}
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-tighter text-white">
                  {project.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400 md:text-base">
                  {project.summary}
                </p>
                <ul className="mt-6 space-y-2">
                  {project.results.map((result) => (
                    <li key={result} className="flex gap-3 text-sm text-zinc-400">
                      <span className="text-white">→</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-8 self-start !px-5 !py-2.5"
                >
                  Visit Website
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
