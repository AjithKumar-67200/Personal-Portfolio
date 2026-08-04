import { experience } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden border-t border-white/5 bg-black">
      <div className="shell">
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          ghost="Work"
          description="A curated history of professional milestones and impactful roles that demonstrate continuous growth and technical excellence."
        />

        <Reveal>
          <article className="card-surface p-8 md:p-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                  {experience.period}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {experience.company}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{experience.location}</p>
              </div>
              {experience.current ? (
                <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  Current Role
                </span>
              ) : null}
            </div>

            <div className="mt-10 space-y-10">
              {experience.projects.map((project) => (
                <div key={project.name}>
                  <h4 className="text-xl font-bold text-white">{project.name}</h4>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    {project.stack}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                        <span className="text-white">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
