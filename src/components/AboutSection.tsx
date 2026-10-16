import React from 'react';

const facts = [
  { label: 'Role', value: 'Software Engineer, Equity Group Holdings' },
  { label: 'Founder', value: 'Imaradesk, an open-source helpdesk' },
  { label: 'Based in', value: 'Nairobi, Kenya' },
  { label: 'Focus', value: 'Full-stack, automation, cloud' },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="page grid grid-cols-1 gap-10 md:grid-cols-[14rem_1fr] md:gap-16">
        <h2 className="section-title md:sticky md:top-24 md:self-start">About</h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_15rem] lg:gap-14">
          <div className="max-w-[38rem] space-y-5 text-lg leading-relaxed text-ink-mute">
            <p>
              <span className="text-ink-text">I'm Titus, though most people call me Tito.</span> I
              work on core banking systems at Equity Group Holdings, where uptime, security and
              compliance decide how a change gets built.
            </p>
            <p>
              Outside work I run{' '}
              <a
                href="https://imaradesk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-text underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
              >
                Imaradesk
              </a>
              , an open-source helpdesk platform, and build tools for African businesses: property
              management, farm diagnostics, customer chat.
            </p>
            <p>
              I like software that is dull to operate and pleasant to use. That usually means small
              services, clear boundaries and good defaults.
            </p>
          </div>

          <div className="space-y-5">
            <img
              src="/me.png"
              alt="Portrait of Titus Mbole"
              className="aspect-square w-40 rounded-xl border border-ink-line object-cover lg:w-full"
            />
            <dl className="divide-y divide-ink-line border-y border-ink-line text-sm">
              {facts.map((f) => (
                <div key={f.label} className="py-3">
                  <dt className="text-ink-faint">{f.label}</dt>
                  <dd className="mt-0.5 text-ink-text">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
