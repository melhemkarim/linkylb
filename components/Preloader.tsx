"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`pre ${gone ? "out" : ""}`}>
      <img src="/logo.png" alt="" />
      <div className="bar"><i /></div>
    </div>
  );
}
