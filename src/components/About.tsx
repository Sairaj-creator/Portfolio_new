export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head" data-reveal>
          <div className="frame-label">FIG. 01 — ABOUT</div>
          <h2>Signal, not noise.</h2>
        </div>
        <div className="about-grid">
          <div className="about-text" data-reveal>
            <p>
              I'm a full-stack developer who keeps ending up at the intersection of <strong>software and perception</strong> —
              teaching a browser to describe a room aloud, teaching an editor to notice when a developer is stressed,
              teaching a camera to read a stranger's face. The common thread is real-time inference wrapped in
              software that people can actually rely on.
            </p>
            <p>
              Recently that's meant shipping <strong>Sahaay AI</strong>, an assistive scene-description and currency-detection
              app for visually impaired users; <strong>ZenCode</strong>, a VS Code extension now used by 90+ developers to catch
              debugging stress before it spirals; and a computer-vision <strong>stress monitoring system</strong> that took
              1st place at a college project expo.
            </p>
            <p>
              Outside of solo builds, I'm a <strong>core contributor to Orbit</strong>, working on UI and frontend
              architecture for a live production app, and I compete in hackathons for the excuse to build fast under pressure.
            </p>
          </div>
          <div className="readout" data-reveal>
            <div className="readout-row"><span>Based in</span><span>Bengaluru, India</span></div>
            <div className="readout-row"><span>Focus</span><span>Full-Stack · AI/CV</span></div>
            <div className="readout-row"><span>Core stack</span><span>React · Node · Python</span></div>
            <div className="readout-row"><span>Currently</span><span>Core Contributor, Orbit</span></div>
            <div className="readout-row"><span>Open to</span><span>Internships / SWE roles</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};
