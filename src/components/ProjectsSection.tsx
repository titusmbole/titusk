import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '../utils/projects';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="page grid grid-cols-1 gap-10 md:grid-cols-[14rem_1fr] md:gap-16">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="section-title">Projects</h2>
          <p className="mt-3 max-w-[14rem] text-sm leading-relaxed text-ink-mute">
            Products I have built and run. Most are live and in use.
          </p>
        </div>

        <ul className="border-b border-ink-line">
          {PROJECTS.map((p) => (
            <li key={p.title} className="group border-t border-ink-line py-8 first:border-t-0 first:pt-0">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors group-hover:text-accent-strong"
                  >
                    {p.title}
                    <ArrowUpRight
                      className="h-5 w-5 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                </h3>
                {p.githubLink && (
                  <a
                    href={p.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-quiet inline-flex items-center gap-1.5 text-sm"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    Source code
                  </a>
                )}
              </div>

              <p className="mt-3 max-w-[40rem] leading-relaxed text-ink-mute">{p.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${p.title} technologies`}>
                {p.technologies.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
