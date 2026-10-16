import React from 'react';
import { ArrowDown, Github } from 'lucide-react';

type Token = { t: string; c?: 'k' | 's' | 'p' | 'm' };

const colors = {
  k: 'text-[#C792EA]',
  s: 'text-[#9ADBA0]',
  p: 'text-accent-strong',
  m: 'text-ink-faint',
} as const;

const code: Token[][] = [
  [{ t: 'const ', c: 'k' }, { t: 'titus' }, { t: ' = {' }],
  [{ t: '  role', c: 'p' }, { t: ': ' }, { t: '"Software Engineer"', c: 's' }, { t: ',' }],
  [{ t: '  at', c: 'p' }, { t: ': ' }, { t: '"Equity Group Holdings"', c: 's' }, { t: ',' }],
  [{ t: '  founder', c: 'p' }, { t: ': ' }, { t: '"Imaradesk"', c: 's' }, { t: ',' }],
  [{ t: '  base', c: 'p' }, { t: ': ' }, { t: '"Nairobi, Kenya"', c: 's' }, { t: ',' }],
  [{ t: '  stack', c: 'p' }, { t: ': [' }],
  [{ t: '    ' }, { t: '"React"', c: 's' }, { t: ', ' }, { t: '"Spring Boot"', c: 's' }, { t: ',' }],
  [{ t: '    ' }, { t: '"Django"', c: 's' }, { t: ', ' }, { t: '"Flutter"', c: 's' }, { t: ',' }],
  [{ t: '  ],' }],
  [{ t: '  shipped', c: 'p' }, { t: ': ' }, { t: '"Makao Smart, 500+ properties"', c: 's' }, { t: ',' }],
  [{ t: '};' }],
];

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      {/* faint blueprint grid, masked so it only shows behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #1a1f2a 1px, transparent 1px), linear-gradient(to bottom, #1a1f2a 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 30% 35%, #000 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 30% 35%, #000 20%, transparent 75%)',
        }}
      />

      <div className="page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="rise flex items-center gap-2 text-sm text-ink-mute" style={{ animationDelay: '0.05s' }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            Software engineer at Equity Group Holdings, Nairobi
          </p>

          <h1
            className="rise mt-6 text-[clamp(3.25rem,10vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em]"
            style={{ animationDelay: '0.15s' }}
          >
            Titus
            <br />
            Mbole
          </h1>

          <p
            className="rise mt-8 max-w-[34rem] text-lg leading-relaxed text-ink-mute md:text-xl"
            style={{ animationDelay: '0.3s' }}
          >
            I build banking systems by day and open-source helpdesk software by night. Full-stack,
            cloud, and automation work that has to stay up.
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: '0.42s' }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
            >
              See my projects
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/titusmbole"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-line px-5 py-3 text-sm font-medium text-ink-text transition-colors hover:border-ink-faint"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        {/* The one memorable moment: the profile as a source file */}
        <div
          className="rise overflow-hidden rounded-xl border border-ink-line bg-ink-panel shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
          style={{ animationDelay: '0.5s' }}
          role="img"
          aria-label="A TypeScript object describing Titus: software engineer at Equity Group Holdings, founder of Imaradesk, based in Nairobi, working in React, Spring Boot, Django and Flutter."
        >
          <div className="flex items-center gap-3 border-b border-ink-line bg-ink-raised px-4 py-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
            </span>
            <span className="font-mono text-xs text-ink-mute">titus.ts</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm" aria-hidden="true">
            {code.map((line, i) => (
              <div key={i} className="rise flex" style={{ animationDelay: `${0.75 + i * 0.12}s` }}>
                <span className="mr-5 w-4 select-none text-right text-ink-faint">{i + 1}</span>
                <code className="whitespace-pre text-ink-text">
                  {line.map((tok, j) => (
                    <span key={j} className={tok.c ? colors[tok.c] : undefined}>
                      {tok.t}
                    </span>
                  ))}
                  {i === code.length - 1 && (
                    <span className="caret ml-1 inline-block h-4 w-[2px] translate-y-[3px] bg-accent" />
                  )}
                </code>
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
