import { certifications } from '../data';

export const Credentials = () => {
  return (
    <section id="credentials">
      <div className="container">
        <div className="section-head" data-reveal>
          <div className="frame-label">FIG. 05 — CREDENTIALS</div>
          <h2>Certifications</h2>
        </div>
        <div className="cred-grid">
          {certifications.map((c, i) => (
            <div className="cred-card" data-reveal key={i}>
              <h3>{c.title}</h3>
              <div className="issuer">{c.issuer}</div>
              <p>{c.detail}</p>
              <div className="cred-links">
                {c.links.map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
