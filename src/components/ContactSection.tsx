import React from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Twitter } from 'lucide-react';

const EMAIL = 'titus.eddys@gmail.com';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/titusmbole' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/titus-mbole-2aa53b408/' },
  { icon: Twitter, label: 'X', href: 'https://x.com/QuadritonE' },
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="page grid grid-cols-1 gap-10 md:grid-cols-[14rem_1fr] md:gap-16">
        <h2 className="section-title md:sticky md:top-24 md:self-start">Contact</h2>

        <div>
          <p className="max-w-[34rem] text-lg leading-relaxed text-ink-mute">
            Have a product to build or a system that needs fixing? Email me and tell me what you
            are working on.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="group mt-8 inline-flex flex-wrap items-center gap-3 break-all text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-tight tracking-tight transition-colors hover:text-accent-strong"
          >
            {EMAIL}
            <ArrowUpRight
              className="h-8 w-8 shrink-0 text-ink-faint transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:h-10 md:w-10"
              aria-hidden="true"
            />
          </a>

          <ul className="mt-12 flex flex-wrap gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-ink-line px-4 py-2.5 text-sm text-ink-text transition-colors hover:border-ink-faint"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-ink-line px-4 py-2.5 text-sm text-ink-text transition-colors hover:border-ink-faint"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
