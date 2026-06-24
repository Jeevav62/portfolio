import { SectionHeading } from 'port';

const forceVisible = `.sh-p > * { opacity: 1 !important; transform: none !important; }`;

export const LeftAligned = () => (
  <div className="sh-p" style={{ padding: 48, background: 'var(--background)', maxWidth: 720 }}>
    <style>{forceVisible}</style>
    <SectionHeading
      eyebrow="About me"
      title="Building intelligent systems that matter"
      subtitle="AI/ML engineer focused on turning research into real-world products."
    />
  </div>
);

export const CenterAligned = () => (
  <div className="sh-p" style={{ padding: 48, background: 'var(--background)', display: 'flex', justifyContent: 'center' }}>
    <style>{forceVisible}</style>
    <SectionHeading
      eyebrow="Projects"
      title="Work I'm proud of"
      subtitle="A selection of projects across ML research, web apps, and open source."
      align="center"
    />
  </div>
);

export const TitleOnly = () => (
  <div className="sh-p" style={{ padding: 48, background: 'var(--background)', maxWidth: 720 }}>
    <style>{forceVisible}</style>
    <SectionHeading title="Experience" />
  </div>
);
