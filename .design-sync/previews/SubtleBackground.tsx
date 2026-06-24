import { SubtleBackground } from 'port';

export const HeroContext = () => (
  <div style={{ position: 'relative', height: 400, width: '100%', background: 'var(--background)', overflow: 'hidden', borderRadius: 16 }}>
    <SubtleBackground />
    <div style={{
      position: 'relative', zIndex: 1,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      height: '100%', gap: 16,
    }}>
      <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--foreground)', textAlign: 'center' }}>
        Jeeva V
      </div>
      <div style={{ color: 'var(--muted)', fontSize: '1.1rem', textAlign: 'center' }}>
        AI/ML Engineer · Full-stack Developer
      </div>
    </div>
  </div>
);

export const Standalone = () => (
  <div style={{ position: 'relative', height: 300, width: '100%', background: 'var(--background)', overflow: 'hidden', borderRadius: 12 }}>
    <SubtleBackground />
  </div>
);
