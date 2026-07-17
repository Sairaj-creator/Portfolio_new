import { useReveal } from './hooks/useReveal';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Hackathons } from './components/Hackathons';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Cursor } from './components/Cursor';
import './index.css';

function App() {
  // Initialize the scroll-reveal observer
  useReveal();

  return (
    <>
      <Cursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <div className="section-divider"></div>
        <Projects />
        <div className="section-divider"></div>
        <Skills />
        <div className="section-divider"></div>
        <Hackathons />
        <div className="section-divider"></div>
        <Credentials />
        <div className="section-divider"></div>
        <Contact />
      </main>
    </>
  );
}

export default App;
