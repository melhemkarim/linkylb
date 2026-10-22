import Cursor from "@/components/Cursor";
import Phone from "@/components/Phone";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Preloader from "@/components/Preloader";
import Floaters from "@/components/Floaters";
import { projects, contact } from "@/lib/projects";

const steps: [string, string][] = [
  ["Tell us the story", "Share the names, dates, photos and words that matter."],
  ["We craft it", "We design a page that feels like them, not a template."],
  ["Share a link", "Send it anywhere. No app, no download, just a link."],
];
const words = ["A", "little", "link,", "a", "big", "feeling."];
const tape = ["Birthdays", "Anniversaries", "Love notes", "Weddings", "Proposals", "Baby reveals", "Pranks"];

export default function Home() {
  return (
    <>
      <Preloader />
      <Cursor />
      <Floaters />
      <header className="nav">
        <a href="#top" className="brand"><img src="/logo.png" alt="Linky" /></a>
        <nav>
          <a href="#how">How it works</a>
          <a href="#work">Our work</a>
          <a className="btn small" href="#contact" data-cursor="Hi">Start yours</a>
        </nav>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <h1 className="serif">
              {words.map((w, n) => (
                <span key={`${w}-${n}`}>
                  <span className={`w ${n > 2 ? "it" : ""}`} style={{ animationDelay: `${1.6 + n * 0.12}s` }}>{w}&nbsp;</span>
                  {n === 2 && <br />}
                </span>
              ))}
            </h1>
            <p className="hp">Birthdays, weddings, proposals and even pranks, designed as personal pages you send with a single tap.</p>
            <div className="row hp">
              <a className="btn" href="#work" data-cursor="Go">See our work</a>
              <a className="ghost" href="#how">How it works</a>
            </div>
          </div>
          <Phone />
        </section>

        <div className="tape">
          <div className="track">
            {[0, 1, 2, 3].flatMap((r) => tape.map((t) => <span key={`${r}-${t}`}>{t}<em>♥</em></span>))}
          </div>
        </div>

        <section id="how" className="lilac">
          <div className="wrap">
            <Reveal><h2>From idea to link in three steps</h2></Reveal>
            <div className="steps">
              {steps.map(([t, d], n) => (
                <Reveal key={t} delay={n * 150}>
                  <div className="step"><b>{n + 1}</b><h3>{t}</h3><p>{d}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <Reveal>
              <h2>Our work</h2>
              <p className="lead">Eight ways people use Linky. Open any of them to see it live.</p>
            </Reveal>
            <div className="grid">
              {projects.map((p, n) => (
                <Reveal key={p.id} delay={(n % 2) * 150}><ProjectCard p={p} /></Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="plum">
          <div className="wrap center">
            <Reveal>
              <h2>Make someone&apos;s day with a link</h2>
              <p>Tell us who it&apos;s for and we&apos;ll take it from there.</p>
              <div className="row social">
                <a className="btn ig" href={contact.instagram} target="_blank" rel="noopener noreferrer" data-cursor="Follow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                  Instagram
                </a>
                <a className="btn wa" href={contact.whatsapp} target="_blank" rel="noopener noreferrer" data-cursor="Chat">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.5z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .7c-1-.4-2-1.4-2.4-2.4l.7-1-1-2z" fill="currentColor" /></svg>
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer>
        <img src="/logo.png" alt="" />
        <span>© {new Date().getFullYear()} Linky. A little link, a big feeling.</span>
      </footer>
    </>
  );
}
