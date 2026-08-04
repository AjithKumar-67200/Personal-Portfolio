"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/content";

export function RoleTypewriter() {
  const reduceMotion = useReducedMotion();
  const roles: readonly string[] = siteConfig.roles;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState<string>(roles[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setText(roles[0]);
      return;
    }

    const current = roles[index];
    const timeout = window.setTimeout(
      () => {
        if (!deleting) {
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1));
          } else {
            setDeleting(true);
          }
        } else if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setIndex((value) => (value + 1) % roles.length);
        }
      },
      deleting ? 28 : text === current ? 1600 : 42
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, roles, reduceMotion]);

  return (
    <p
      className="text-center text-sm font-light uppercase italic tracking-[0.2em] text-white/90 sm:text-lg sm:tracking-[0.35em] md:text-xl"
      aria-live="polite"
    >
      {text}
      {!reduceMotion ? (
        <span className="ml-2 inline-block h-4 w-1 animate-pulse bg-white align-middle shadow-[0_0_15px_white] sm:ml-4 sm:h-6 sm:w-1.5" />
      ) : null}
    </p>
  );
}
