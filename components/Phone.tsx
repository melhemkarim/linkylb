"use client";
import { useEffect, useRef, useState, type ComponentType, type MouseEvent } from "react";

function Type({ text }: { text: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setN((x) => (x < text.length ? x + 1 : x)), 45);
    return () => clearInterval(t);
  }, [text]);
  return <p className="typed">{text.slice(0, n)}<i className="caret" /></p>;
}

function Birthday() {
  const colors = ["#2B1644", "#fff", "#F7D6DE", "#8E6BD1"];
  return (
    <>
      <div className="confetti">
        {Array.from({ length: 18 }, (_, k) => (
          <i key={k} style={{ left: `${(k * 37) % 100}%`, animationDelay: `${(k % 6) * 0.35}s`, background: colors[k % 4] }} />
        ))}
      </div>
      <h3>Happy 25th, Dana!</h3>
      <div className="bubble b1"><b>K</b>Can&apos;t wait to celebrate you!</div>
      <div className="bubble b2"><b>M</b>Best friend ever 🎉</div>
      <div className="bubble b3"><b>L</b>See you tonight!</div>
      <span className="pill pulse">12 messages</span>
    </>
  );
}

function Anniv() {
  return (
    <>
      <h3>3 years of Karim &amp; Dana</h3>
      <ul className="tl">
        {["Our first date", "The trip to Byblos", "Today, and every day"].map((t, k) => (
          <li key={t} style={{ animationDelay: `${0.4 + k * 0.7}s` }}><s />{t}</li>
        ))}
      </ul>
      <div className="heart">♥</div>
    </>
  );
}

function Hearts() {
  return (
    <div className="hearts">
      {Array.from({ length: 6 }, (_, k) => (
        <i key={k} style={{ left: `${10 + k * 15}%`, animationDelay: `${k * 0.6}s` }}>♥</i>
      ))}
    </div>
  );
}

function Message() {
  return (
    <>
      <Hearts />
      <h3>Dear Dana,</h3>
      <Type text="I never told you how much the little things meant. Every morning with you feels like a gift. Forever yours, Karim." />
    </>
  );
}

function Wedding() {
  return (
    <>
      <p className="save">Save the date</p>
      <h3 className="shimmer">Karim &amp; Dana</h3>
      <div className="gold" />
      <p>Saturday, 14 June · Beirut</p>
      <span className="pill pulse">RSVP</span>
    </>
  );
}

function Prank() {
  return (
    <div className="stack">
      <div className="warn">
        <h3>⚠ Karim, your phone has a virus!</h3>
        <div className="load"><i /></div>
        <p>Deleting photos…</p>
      </div>
      <div className="gotcha">
        <h3>Gotcha! 🎉</h3>
        <p>Happy birthday from Dana</p>
        <span className="pill pulse">Open your gift</span>
      </div>
    </div>
  );
}

function Proposal() {
  return (
    <>
      <Hearts />
      <h3>Dana, will you marry me?</h3>
      <div className="ans"><span className="pill yes pulse">Yes</span><span className="pill no">No</span></div>
      <p className="hint">Karim is waiting…</p>
    </>
  );
}

const screens: { k: string; cls: string; C: ComponentType }[] = [
  { k: "birthday", cls: "s-b", C: Birthday },
  { k: "anniversary", cls: "s-a", C: Anniv },
  { k: "message", cls: "s-m", C: Message },
  { k: "wedding", cls: "s-w", C: Wedding },
  { k: "prank", cls: "s-p", C: Prank },
  { k: "proposal", cls: "s-m", C: Proposal },
];

export default function Phone() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % screens.length), 6500);
    return () => clearInterval(t);
  }, [i]);

  const move = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };

  const S = screens[i];
  return (
    <div className="phone-wrap" onMouseMove={move} onMouseLeave={leave}>
      <div className="blob" />
      <div className="tiltbox" ref={ref}>
        <div className="phone">
          <div className="notch" />
          <div key={i} className={`screen on ${S.cls}`}><S.C /></div>
          <div className="dots">
            {screens.map((s, n) => (
              <button key={s.k} type="button" aria-label={s.k} className={n === i ? "act" : ""} onClick={() => setI(n)} data-cursor="Show" />
            ))}
          </div>
        </div>
      </div>
      <div className="chip">linky.com/{S.k}</div>
    </div>
  );
}
