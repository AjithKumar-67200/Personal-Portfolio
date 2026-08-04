"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/content";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const roles = siteConfig.roles as readonly string[];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState<string>(roles[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setText(roles[0]);
      return;
    }
    const current = roles[index];
    const t = window.setTimeout(
      () => {
        if (!deleting) {
          if (text.length < current.length) setText(current.slice(0, text.length + 1));
          else setDeleting(true);
        } else if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setIndex((v) => (v + 1) % roles.length);
        }
      },
      deleting ? 28 : text === current ? 1600 : 42
    );
    return () => window.clearTimeout(t);
  }, [text, deleting, index, roles, reduceMotion]);

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden">
      <div className="transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900">
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#3b82f6 10%,#a5b4fc 15%,#93c5fd 20%,#ddd6fe 25%,#60a5fa 30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000 0%,#000 7%,transparent 10%,transparent 12%,#000 16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff 0%,#fff 7%,transparent 10%,transparent 12%,#fff 16%)",
            } as CSSProperties
          }
        >
          <div className="aurora-layer" />
        </div>

        <div className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-4">
          <div className="z-10 mb-12 md:mb-16">
            <div className="flex select-none items-center gap-4 opacity-50">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/60 md:w-12" />
              <span className="text-[10px] font-light uppercase tracking-[0.6em] text-white/50 md:text-xs">
                Hello, I&apos;m
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/60 md:w-12" />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h1 className="select-none whitespace-nowrap text-center text-5xl leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl lg:text-[9rem]">
              <span className="font-black text-white">{siteConfig.brandPrimary}</span>
              <span className="font-extralight text-white/70">
                {" "}
                {siteConfig.brandSecondary}
              </span>
            </h1>

            <div className="mt-8 h-16 w-full max-w-4xl sm:h-20 md:mt-10 md:h-24 lg:h-28 lg:max-w-7xl">
              <p className="text-center font-[helvetica] text-4xl font-extrabold text-white/90 sm:text-5xl md:text-6xl lg:text-7xl">
                Software
                <br />
                Engineer
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-10 md:mt-14">
            <div className="flex min-h-[30px] items-center justify-center px-6 sm:min-h-[40px] md:px-10">
              <p className="text-center text-sm font-light uppercase italic tracking-[0.2em] text-white opacity-90 sm:text-lg sm:tracking-[0.4em] md:text-2xl lg:text-3xl">
                {text}
                <span className="ml-2 inline-block h-4 w-1 animate-pulse bg-white align-middle shadow-[0_0_15px_white] sm:ml-4 sm:h-6 sm:w-1.5" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
