import { aboutContent, stats } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden border-t border-white/5 bg-black">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2 select-none bg-white/[0.01] blur-[150px]"
        aria-hidden="true"
      />
      <div className="shell">
        <SectionHeader
          eyebrow="About"
          title="About"
          ghost="Me"
          description={aboutContent.lead}
        />
        <Reveal>
          <p className="max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
            {aboutContent.body}
          </p>
          <ul className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <li key={stat.label} className="card-surface p-6">
                <p className="text-3xl font-bold tracking-tighter text-white">
                  {stat.decimal
                    ? `${stat.value}${stat.suffix}`
                    : `${stat.value.toLocaleString()}${stat.suffix}`}
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
