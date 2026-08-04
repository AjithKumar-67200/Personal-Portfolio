"use client";

export function AuroraBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[100vh] flex-col items-center justify-center overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="aurora-layer" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
