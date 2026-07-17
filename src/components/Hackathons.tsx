import { hackathons } from '../data';
import { IconArrow } from './Icons';

export const Hackathons = () => {
  return (
    <section id="hackathons">
      <div className="container">
        <div className="section-head" data-reveal>
          <div className="frame-label">FIG. 04 — HACKATHONS</div>
          <h2>Rapid prototyping</h2>
        </div>
        <div className="badge-grid">
          {hackathons.map((h, i) => (
            <div className="badge-card" data-reveal key={i}>
              <div className="badge-stat">{h.stat}</div>
              <h3>{h.title}</h3>
              <p>{h.result} · {h.detail}</p>
              {h.link && <a href={h.link} target="_blank" rel="noreferrer">See post <IconArrow /></a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
