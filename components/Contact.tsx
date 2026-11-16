import { site } from "@/site.config";
import { igLink, waLink } from "@/lib";
import { Reveal } from "./Reveal";

export function Contact() {
  const wa = waLink(site.contact.whatsappText);
  return (
    <section className="contact" id="order">
      <div className="glow g3" aria-hidden="true" />
      <Reveal>
        <h2>{site.contact.title}</h2>
        <p className="lede">{site.contact.text}</p>
        <div className="contactBtns">
          <a className="btn light big" href={igLink} target="_blank" rel="noreferrer">
            {site.contact.instagram}
          </a>
          {wa && (
            <a className="btn ghost big" href={wa} target="_blank" rel="noreferrer">
              {site.contact.whatsapp}
            </a>
          )}
        </div>
        <a className="handle" href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer">
          @{site.instagram}
        </a>
      </Reveal>

      <footer className="foot">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-cream.png" alt="Linky" width={120} height={61} />
        <span>
          © {new Date().getFullYear()} Linky · {site.footer}
        </span>
      </footer>
    </section>
  );
}
