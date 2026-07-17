import { contactLinks } from '../data';
import * as Icons from './Icons';

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrap" data-reveal>
          <div className="frame-label" style={{ marginBottom: 12 }}>FIG. 06 — CONTACT</div>
          <h2>Let's build something.</h2>
          <p className="sub">
            Currently open for internships and junior software engineering roles. 
            If you're building products that need to be fast, reliable, and intelligent, we should talk.
          </p>
          <div className="contact-links">
            {contactLinks.map(c => {
              // @ts-ignore
              const IconComp = Icons[c.icon.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()).replace('i', 'Icon')] || Icons.IconMail;
              return (
                <a key={c.label} href={c.href} className="contact-link" target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                  <IconComp /> {c.value}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      
      <footer>
        <div className="container" style={{ marginTop: 20 }}>
          <div className="section-divider" style={{ marginBottom: 36 }}></div>
          © {new Date().getFullYear()} Sairaj Borkar. Designed & built for performance.
        </div>
      </footer>
    </section>
  );
};
