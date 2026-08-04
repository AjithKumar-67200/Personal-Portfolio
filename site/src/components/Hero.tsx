"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AuroraBackground } from "@/components/AuroraBackground";
import { RoleTypewriter } from "@/components/RoleTypewriter";
import { siteConfig } from "@/data/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fade = (delay: number, y = 20) =>
    reduceMotion
      ? undefined
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="home" className="relative w-full overflow-hidden">
      <AuroraBackground>
        <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-4">
          <motion.div className="z-10 mb-12 md:mb-16" {...fade(0.05, -20)}>
            <div className="flex select-none items-center gap-4 opacity-50">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/60 md:w-12" />
              <span className="text-[10px] font-light uppercase tracking-[0.6em] text-white/50 md:text-xs">
                Hello, I&apos;m
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/60 md:w-12" />
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 flex flex-col items-center"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.8, delay: 0.12 },
                })}
          >
            <h1 className="flex select-none flex-col items-center text-center leading-[0.85] tracking-tighter">
              <span className="text-6xl font-black text-white sm:text-8xl md:text-[10rem] lg:text-[13rem]">
                AJITH
              </span>
              <span className="-mt-1 text-4xl font-extralight text-white/70 sm:text-6xl md:-mt-6 md:text-8xl lg:text-[10rem]">
                KUMAR S
              </span>
            </h1>

            <div className="mt-6 md:mt-10">
              <p className="text-center text-sm font-light uppercase italic tracking-[0.2em] text-white opacity-90 sm:text-lg sm:tracking-[0.4em] md:text-2xl lg:text-3xl">
                {siteConfig.title}
              </p>
            </div>
          </motion.div>

          <motion.div className="relative z-10 mt-8 md:mt-12" {...fade(0.35)}>
            <div className="flex min-h-[30px] items-center justify-center px-6 sm:min-h-[40px] md:px-10">
              <RoleTypewriter />
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3"
            {...fade(0.45)}
          >
            <a href="#contact" className="btn-white">
              Contact
              <ArrowIcon />
            </a>
            <a
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
              className="btn-ghost !px-6 !py-3 !text-xs"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
