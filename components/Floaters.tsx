"use client";
import { useEffect } from "react";

export default function Floaters() {
  useEffect(() => {
    const r = document.documentElement;
    const m = (e: MouseEvent) => {
      r.style.setProperty("--mx", String(e.clientX / window.innerWidth - 0.5));
      r.style.setProperty("--my", String(e.clientY / window.innerHeight - 0.5));
    };
    const s = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      r.style.setProperty("--p", String(max > 0 ? window.scrollY / max : 0));
    };
    window.addEventListener("mousemove", m);
    window.addEventListener("scroll", s);
    return () => { window.removeEventListener("mousemove", m); window.removeEventListener("scroll", s); };
  }, []);

  return (
    <>
      <div className="progress" />
      <div className="floaters" aria-hidden="true">
        <i className="f f1" /><i className="f f2" /><i className="f f3" /><i className="f f4">♥</i><i className="f f5">✦</i>
      </div>
    </>
  );
}
