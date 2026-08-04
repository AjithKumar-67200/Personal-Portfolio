"use client";

import {
  useRef,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";

type MagneticButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const reduceMotion = useReducedMotion();

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    onMouseMove?.(event);
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  };

  const handleLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    onMouseLeave?.(event);
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={ref}
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </a>
  );
}
