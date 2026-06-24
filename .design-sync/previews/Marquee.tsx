import { Marquee } from 'port';

const techStack = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Python', 'PyTorch'];
const skills = ['Machine Learning', 'Computer Vision', 'NLP', 'REST APIs', 'PostgreSQL', 'Docker', 'AWS', 'CI/CD'];

export const TechStack = () => (
  <div style={{ background: 'var(--background)', padding: '24px 0', width: '100%' }}>
    <Marquee items={techStack} />
  </div>
);

export const Skills = () => (
  <div style={{ background: 'var(--background)', padding: '24px 0', width: '100%' }}>
    <Marquee items={skills} />
  </div>
);
