import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import TerminalComponent from './components/Terminal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ctrl/Cmd + K opens the terminal; Escape closes it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowTerminal((v) => !v);
      } else if (e.key === 'Escape') {
        setShowTerminal(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-ink-text">
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      <AnimatePresence>
        {showTerminal && <TerminalComponent onClose={() => setShowTerminal(false)} />}
      </AnimatePresence>

      <Navbar
        activeSection={activeSection}
        isScrolled={isScrolled}
        onOpenTerminal={() => setShowTerminal(true)}
      />

      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
