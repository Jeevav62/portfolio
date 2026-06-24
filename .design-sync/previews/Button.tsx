import { Button } from 'port';

export const Primary = () => (
  <div style={{ padding: 32, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', background: 'var(--background)' }}>
    <Button variant="primary" size="sm">Small</Button>
    <Button variant="primary" size="md">Contact me</Button>
    <Button variant="primary" size="lg">Get started</Button>
  </div>
);

export const Outline = () => (
  <div style={{ padding: 32, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', background: 'var(--background)' }}>
    <Button variant="outline" size="sm">Resume</Button>
    <Button variant="outline" size="md">View projects</Button>
    <Button variant="outline" size="lg">Learn more</Button>
  </div>
);

export const BothVariants = () => (
  <div style={{ padding: 32, display: 'flex', gap: 12, flexWrap: 'wrap', background: 'var(--background)' }}>
    <Button variant="primary">Hire me</Button>
    <Button variant="outline">View work</Button>
  </div>
);
