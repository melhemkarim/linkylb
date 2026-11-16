"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/site.config";
import { igLink, waLink } from "@/lib";
import { Reveal } from "./Reveal";

const W = 390; // the width the project sites are drawn at inside the phone
const H = 844;

function Phone({ url, title }: { url: string; title: string }) {
  const screen = useRef<HTMLDivElement>(null);
  const holder = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.7);
  const [near, setNear] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [live, setLive] = useState(false);

  // draw the site at phone size, then shrink it to fit the frame
  useEffect(() => {
    const el = screen.current;
    if (!el) return;
    const fit = () => setScale(el.clientWidth / W);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // only start loading once the phone is close to the screen
  useEffect(() => {
    const el = holder.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (e) => {
        if (e.some((x) => x.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "500px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // new project: start again
  useEffect(() => {
    setLoaded(false);
    setLive(false);
  }, [url]);

  return (
    <div className="phoneHolder" ref={holder}>
      <div className="phone">
        <div className="phoneScreen" ref={screen}>
          {near && (
            <iframe
              key={url}
              src={url}
              title={title}
              width={W}
              height={H}
              style={{ transform: `scale(${scale})` }}
              allow="camera; microphone; autoplay; fullscreen; clipboard-write"
              loading="lazy"
              onLoad={() => setLoaded(true)}
            />
          )}

          {!loaded && (
            <div className="phoneLoading" aria-live="polite">
              <i />
              <span>{site.work.loading}</span>
            </div>
          )}

          {loaded && !live && (
            <button className="tryOverlay" onClick={() => setLive(true)} aria-label={site.work.tryIt}>
              <span>{site.work.tryIt}</span>
            </button>
          )}
        </div>
      </div>
      <button className={`doneBtn ${live ? "show" : ""}`} onClick={() => setLive(false)} tabIndex={live ? 0 : -1}>
        {site.work.done}
      </button>
    </div>
  );
}

export function Work() {
  const [i, setI] = useState(0);
  const p = site.projects[i];
  const wa = waLink(`${site.contact.whatsappText} (${p.title})`);

  return (
    <section className="work" id="work">
      <div className="workGrid">
        <div className="workText">
          <Reveal>
            <div className="eyebrow">{site.work.eyebrow}</div>
            <h2>{site.work.title}</h2>
            <p className="lede">{site.work.sub}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="chips" role="tablist" aria-label="Projects">
              {site.projects.map((pr, k) => (
                <button
                  key={pr.id}
                  role="tab"
                  aria-selected={k === i}
                  className={`chip ${k === i ? "on" : ""}`}
                  onClick={() => setI(k)}
                >
                  {pr.short}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="projInfo" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.note}</p>
            <div className="projBtns">
              <a className="btn light" href={p.url} target="_blank" rel="noreferrer">
                {site.work.fullScreen} ↗
              </a>
              <a className="btn ghost" href={wa || igLink} target="_blank" rel="noreferrer">
                {site.work.orderLike}
              </a>
            </div>
          </div>
        </div>

        <Reveal className="workPhone" delay={200}>
          <Phone url={p.url} title={p.title} />
        </Reveal>
      </div>
    </section>
  );
}
