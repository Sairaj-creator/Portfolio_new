import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const tickClock = () => {
      const d = new Date();
      setTime(d.toTimeString().slice(0, 8));
    };
    tickClock();
    const interval = setInterval(tickClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <span className="dot"></span> S.BORKAR
        </a>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <li><a href="#about" onClick={closeNav}><span className="num">01</span>About</a></li>
          <li><a href="#projects" onClick={closeNav}><span className="num">02</span>Projects</a></li>
          <li><a href="#skills" onClick={closeNav}><span className="num">03</span>Skills</a></li>
          <li><a href="#hackathons" onClick={closeNav}><span className="num">04</span>Hackathons</a></li>
          <li><a href="#credentials" onClick={closeNav}><span className="num">05</span>Credentials</a></li>
          <li><a href="#contact" onClick={closeNav}><span className="num">06</span>Contact</a></li>
        </ul>
        <div className="nav-status" id="clock">STATUS: ONLINE — {time}</div>
        <button 
          className="nav-toggle" 
          id="navToggle" 
          aria-label="Toggle navigation" 
          aria-expanded={isOpen}
          onClick={toggleNav}
        >
          <svg className="icon" viewBox="0 0 24 24" style={{ width: 20, height: 20 }}>
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
