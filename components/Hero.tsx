import { site } from "@/site.config";
import { igLink } from "@/lib";

export function Hero() {
  return (
    <section className="hero">
      <div className="glow g1" aria-hidden="true" />
      <div className="glow g2" aria-hidden="true" />

      <div className="heroInner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="heroLogo" src="/logo.png" alt="Linky" width={1290} height={660} />
        <h1 className="heroLine">{site.hero.line1}</h1>
        <p className="heroSub">{site.hero.line2}</p>
        <div className="heroBtns">
          <a className="btn solid" href="#work">
            {site.hero.primary}
          </a>
          <a className="btn line" href={igLink} target="_blank" rel="noreferrer">
            {site.hero.secondary}
          </a>
        </div>
      </div>

      <a className="scrollCue" href="#work" aria-label={site.hero.primary}>
        <i />
      </a>
    </section>
  );
}
