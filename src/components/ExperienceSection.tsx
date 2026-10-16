import React from 'react';

const experiences = [
  {
    period: 'Apr 2023 – Present',
    title: 'Software Engineer',
    company: 'Equity Group Holdings',
    location: 'Head Office, Nairobi',
    current: true,
    points: [
      'Build and maintain core banking systems, focusing on scalable micro-frontend applications.',
      'Monitor online banking, mobile apps and transaction systems to keep them available around the clock.',
      'Respond to incidents raised by customers, internal teams and automated monitoring.',
      'Keep web channels secure and compliant with banking regulations and data-privacy standards such as GDPR.',
      'Patch and update software and infrastructure on a regular schedule.',
    ],
  },
  {
    period: 'Jan 2023 – Dec 2023',
    title: 'Software Developer',
    company: 'E&M Technology Has Ltd',
    location: 'Tech City, Kenya',
    current: false,
    points: [
      'Designed enterprise and web applications from inception through deployment and maintenance.',
      'Led a team of developers in designing a new product.',
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="page grid grid-cols-1 gap-10 md:grid-cols-[14rem_1fr] md:gap-16">
        <h2 className="section-title md:sticky md:top-24 md:self-start">Experience</h2>

        <ol className="space-y-12">
          {experiences.map((e) => (
            <li key={e.title + e.period} className="grid grid-cols-1 gap-4 lg:grid-cols-[11rem_1fr] lg:gap-10">
              <div className="text-sm text-ink-mute">
                <p className="font-mono text-xs">{e.period}</p>
                {e.current && (
                  <p className="mt-2 inline-flex items-center gap-2 text-ink-text">
                    <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />
                    Current role
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight">{e.title}</h3>
                <p className="mt-1 text-ink-mute">
                  <span className="text-ink-text">{e.company}</span>, {e.location}
                </p>
                <ul className="mt-5 max-w-[40rem] space-y-3 leading-relaxed text-ink-mute">
                  {e.points.map((pt) => (
                    <li key={pt} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-ink-faint">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
