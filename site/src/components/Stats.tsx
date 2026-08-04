"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { stats } from "@/data/content";
import type { StatItem } from "@/data/content";
import { Reveal } from "@/components/motion/Reveal";

function formatValue(stat: StatItem, current: number): string {
  if (stat.decimal) return `${current.toFixed(1)}${stat.suffix}`;
  if (stat.value >= 1000) {
    return `${Math.floor(current).toLocaleString()}${stat.suffix}`;
  }
  return `${Math.floor(current)}${stat.suffix}`;
}

function StatNumber({ stat, active }: { stat: StatItem; active: boolean }) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(
    reduceMotion ? formatValue(stat, stat.value) : formatValue(stat, 0)
  );

  useEffect(() => {
    if (!active) return;
    if (reduceMotion) {
      setDisplay(formatValue(stat, stat.value));
      return;
    }

    const duration = 1900;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(formatValue(stat, stat.value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduceMotion, stat]);

  return (
    <span className="font-display text-[clamp(2.75rem,6vw,4.75rem)] font-semibold tracking-tightest text-gradient">
      {display}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y hairline py-16 sm:py-20"
      aria-label="Key metrics"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(var(--accent)/0.08),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="shell relative grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.06}>
            <div className="relative text-center lg:text-left">
              <StatNumber stat={stat} active={active} />
              <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-faint">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
