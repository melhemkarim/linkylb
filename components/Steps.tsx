import { site } from "@/site.config";
import { Reveal } from "./Reveal";

export function Steps() {
  return (
    <section className="steps">
      <Reveal>
        <div className="eyebrow dim">{site.steps.eyebrow}</div>
        <h2>{site.steps.title}</h2>
      </Reveal>
      <ol className="stepList">
        {site.steps.items.map((s, k) => (
          <li key={s.title}>
            <Reveal delay={k * 120}>
              <div className="stepNum">{k + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
