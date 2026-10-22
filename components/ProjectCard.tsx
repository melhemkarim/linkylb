"use client";
import { useRef, type MouseEvent } from "react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLElement>(null);
  const move = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
    el.style.setProperty("--sx", `${(x + 0.5) * 100}%`);
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };

  return (
    <article ref={ref} className={`card c-${p.id}`} onMouseMove={move} onMouseLeave={leave}>
      <div className="art">
        {Array.from({ length: 7 }, (_, k) => (
          <i key={k} className="bit" style={{ left: `${8 + k * 13}%`, animationDelay: `${k * 0.5}s` }}>{p.sym}</i>
        ))}
        <span>{p.tag}</span>
      </div>
      <h3>{p.title}</h3>
      <p>{p.text}</p>
      <a className="btn small" href={p.url} target="_blank" rel="noopener noreferrer" data-cursor="Open">Live preview</a>
    </article>
  );
}
