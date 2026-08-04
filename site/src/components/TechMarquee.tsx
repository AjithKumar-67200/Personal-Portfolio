import { techMarquee } from "@/data/content";

export function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div
      className="relative overflow-hidden border-b hairline py-5"
      aria-label="Technologies"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-canvas to-transparent" />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-4">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-mono text-sm uppercase tracking-[0.28em] text-ink/30 transition-colors hover:text-accent"
          >
            {item}
            <span className="ml-10 text-accent-2/50">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
