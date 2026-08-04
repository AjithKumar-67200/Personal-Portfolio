import { skills } from "@/data/content";
import { getSkillIcon } from "@/components/icons/SkillIcons";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden border-t border-white/5 bg-black py-24"
      aria-labelledby="skills-title"
    >
      <div className="container relative z-10 mx-auto px-6 md:pl-32 md:pr-16 lg:pl-44">
        <header className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px w-10 bg-zinc-800" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
              Capabilities
            </span>
          </div>
          <h2
            id="skills-title"
            className="flex flex-col gap-x-6 tracking-tighter leading-[0.7] md:flex-row md:items-baseline"
            style={{ fontSize: "clamp(1.75rem, 5.5vw, 7.5rem)" }}
          >
            <span className="relative inline-block font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Technical
              <span
                className="pointer-events-none absolute inset-0 select-none text-white/20 blur-md animate-pulse"
                aria-hidden="true"
              >
                Technical
              </span>
            </span>
            <span className="font-extralight text-zinc-800">Stack</span>
          </h2>
        </header>

        <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-20">
          {skills.map((skill) => {
            const Icon = getSkillIcon(skill.name);
            return (
              <article
                key={`${skill.category}-${skill.name}`}
                className="group relative flex h-28 w-28 transform-gpu items-center justify-center will-change-transform md:h-36 md:w-36"
                role="img"
                aria-label={skill.name}
              >
                <div className="absolute -top-3 z-30 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1 text-[7px] font-black uppercase tracking-[0.3em] text-white/60 backdrop-blur-md">
                    {skill.category}
                  </span>
                </div>
                <div className="absolute inset-0 z-10 overflow-hidden rounded-[2.2rem] border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl transition-all duration-500 group-hover:border-white/20">
                  <div
                    className="absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(225deg, rgba(255, 255, 255, 0.1) 0%, transparent 80%)",
                    }}
                  />
                </div>
                <div className="relative z-20 text-4xl text-zinc-600 transition-all duration-500 group-hover:scale-110 group-hover:text-white md:text-5xl">
                  <Icon aria-hidden="true" />
                </div>
                <div className="absolute -bottom-3 z-30 flex w-full justify-center text-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white shadow-2xl">
                    {skill.name}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
