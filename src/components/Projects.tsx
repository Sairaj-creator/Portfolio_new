import { useState } from 'react';
import { projects } from '../data';
import { IconArrow } from './Icons';

export const Projects = () => {
  const [openCases, setOpenCases] = useState<Record<string, boolean>>({});

  const toggleCase = (id: string) => {
    setOpenCases(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head" data-reveal>
          <div className="frame-label">FIG. 02 — PROJECTS</div>
          <h2>Selected builds</h2>
          <p className="sub">Three shipped systems, each solving a real-time perception or wellness problem end to end.</p>
        </div>
        <div id="projectList">
          {projects.map((p) => {
            const isOpen = openCases[p.id];
            
            return (
              <article className="proj-card" data-reveal key={p.id}>
                <div className="proj-top">
                  <div>
                    <div className="proj-id">{p.id}</div>
                    <h3>{p.title}</h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="proj-date">{p.date}</div>
                    <div className="proj-metric">{p.metric}</div>
                  </div>
                </div>
                <p className="proj-summary">{p.summary}</p>
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className="tag-chip">{t}</span>)}
                </div>
                <ul className="proj-bullets">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="proj-links">
                  {p.links.map(l => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <IconArrow />
                    </a>
                  ))}
                </div>
                
                {p.caseStudy && (
                  <>
                    <button 
                      className="proj-toggle" 
                      onClick={() => toggleCase(p.id)}
                      aria-expanded={isOpen}
                    >
                      {isOpen ? 'Hide the case study ' : 'Read the case study '} <IconArrow />
                    </button>
                    <div className={`case-study ${isOpen ? 'open' : ''}`}>
                      <div className="case-block">
                        <div className="k">Problem</div>
                        <div className="v">{p.caseStudy.problem}</div>
                      </div>
                      <div className="case-block">
                        <div className="k">Constraint</div>
                        <div className="v">{p.caseStudy.constraint}</div>
                      </div>
                      <div className="case-block">
                        <div className="k">Decision</div>
                        <div className="v">{p.caseStudy.decision}</div>
                      </div>
                      <div className="case-block">
                        <div className="k">Result</div>
                        <div className="v">{p.caseStudy.result}</div>
                      </div>
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
