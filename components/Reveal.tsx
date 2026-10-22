"use client";
import { useEffect, useRef, type ReactNode } from "react";

type Props = { children: ReactNode; delay?: number; className?: string };

export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add("in"); o.disconnect(); }
    }, { threshold: 0.15 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return <div ref={ref} className={`rv ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
