import { educationItems } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Education() {
  return (
    <section id="education" className="section-pad relative overflow-hidden border-t border-white/5 bg-black">
      <div className="shell">
        <SectionHeader eyebrow="Background" title="Education" ghost="Path" />
        <Stagger className="grid gap-6 md:grid-cols-2">
          {educationItems.map((item) => (
            <StaggerItem key={item.title}>
              <article className="card-surface p-8 md:p-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                  {item.tag} / {item.year}
                </p>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">{item.field}</p>
                <p className="mt-6 text-sm text-zinc-500">{item.place}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
