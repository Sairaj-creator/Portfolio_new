import { useState } from 'react';
import { skillGroups } from '../data';
import * as Icons from './Icons';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeGroup = skillGroups[activeTab];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-head" data-reveal>
          <div className="frame-label">FIG. 03 — SKILLS</div>
          <h2>Toolkit</h2>
        </div>
        <div data-reveal>
          <div className="skill-tabs" role="tablist" aria-label="Skill groups" id="skillTabs">
            {skillGroups.map((g, i) => {
              // @ts-ignore
              const IconComp = Icons[g.icon.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()).replace('i', 'Icon')] || Icons.IconCode;
              
              return (
                <button 
                  key={g.label}
                  className="skill-tab" 
                  role="tab" 
                  aria-selected={i === activeTab} 
                  onClick={() => setActiveTab(i)}
                >
                  <IconComp /> {g.label}
                </button>
              );
            })}
          </div>
          <div className="skill-panel" id="skillPanel">
            <div className="skill-tags">
              {activeGroup.items.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
