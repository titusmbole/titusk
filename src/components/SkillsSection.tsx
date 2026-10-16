import React from 'react';
import {
  SiReact,
  SiFlutter,
  SiGnubash,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiDocker,
  SiSpring,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiDjango,
  SiGithubactions,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const groups = [
  {
    title: 'Frontend and mobile',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Flutter', icon: SiFlutter },
    ],
  },
  {
    title: 'Backend and data',
    items: [
      { name: 'Java Spring', icon: SiSpring },
      { name: 'Python', icon: SiPython },
      { name: 'Django', icon: SiDjango },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'Delivery and cloud',
    items: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Azure', icon: VscAzure },
      { name: 'CI/CD', icon: SiGithubactions },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Bash', icon: SiGnubash },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="page grid grid-cols-1 gap-10 md:grid-cols-[14rem_1fr] md:gap-16">
        <h2 className="section-title md:sticky md:top-24 md:self-start">Skills</h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="border-b border-ink-line pb-3 font-semibold">{g.title}</h3>
              <ul className="mt-4 space-y-3">
                {g.items.map(({ name, icon: Icon }) => (
                  <li key={name} className="flex items-center gap-3 text-ink-mute">
                    <Icon className="h-4 w-4 text-ink-faint" aria-hidden="true" />
                    <span className="text-ink-text">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
