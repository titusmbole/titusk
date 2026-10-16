import React, { useState } from 'react';
import { Menu, Terminal, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  isScrolled: boolean;
  onOpenTerminal: () => void;
}

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, isScrolled, onOpenTerminal }) => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || open
          ? 'border-b border-ink-line bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="page flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <img src="/logo.jpg" alt="" className="h-7 w-7 rounded-md object-cover" />
          <span>Titus Mbole</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={activeSection === l.id ? 'true' : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  activeSection === l.id ? 'text-ink-text' : 'text-ink-mute hover:text-ink-text'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 rounded-md border border-ink-line px-3 py-1.5 font-mono text-xs text-ink-mute transition-colors hover:border-accent/50 hover:text-ink-text"
            >
              <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
              Open terminal
            </button>
          </li>
        </ul>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-md text-ink-mute hover:text-ink-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-line bg-ink md:hidden">
          <ul className="page flex flex-col py-3">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg text-ink-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenTerminal();
                }}
                className="block py-3 font-mono text-sm text-ink-mute"
              >
                Open terminal
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
