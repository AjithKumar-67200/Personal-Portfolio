export function SectionHeader({
  eyebrow,
  title,
  ghost,
  description,
}: {
  eyebrow: string;
  title: string;
  ghost?: string;
  description?: string;
}) {
  return (
    <header className="relative mb-16 md:mb-24">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-px w-10 bg-zinc-800" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mega-heading mb-6">
        <span className="title-glow">
          {title}
          <span className="title-glow-echo" aria-hidden="true">
            {title}
          </span>
        </span>
        {ghost ? <span className="title-ghost">{ghost}</span> : null}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base font-medium leading-relaxed text-zinc-500 md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
