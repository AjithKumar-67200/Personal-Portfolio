import { skillGroups } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

export function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden border-t border-white/5 bg-black">
      <div className="shell">
        <SectionHeader
          eyebrow="Capabilities"
          title="Technical"
          ghost="Stack"
          description="Languages, frameworks, data systems, and delivery tools used across production logistics platforms."
        />
        <Reveal>
          <div className="flex flex-wrap gap-3">
            {skillGroups.flatMap((group) =>
              group.items.map((item) => (
                <span
                  key={`${group.category}-${item}`}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                >
                  <span className="mr-2 text-zinc-600">{group.category}</span>
                  {item}
                </span>
              ))
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
