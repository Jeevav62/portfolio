import { CountUp } from 'port';

export const Stats = () => (
  <div style={{
    padding: 48,
    display: 'flex',
    gap: 48,
    background: 'var(--background)',
    borderRadius: 16,
  }}>
    {[
      { value: 12, suffix: '+', label: 'Projects shipped' },
      { value: 3, suffix: ' yrs', label: 'Experience' },
      { value: 8, suffix: 'k+', label: 'GitHub stars' },
    ].map(({ value, suffix, label }) => (
      <div key={label} style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--foreground)', lineHeight: 1 }}>
          <CountUp value={value} suffix={suffix} />
        </div>
        <div style={{ color: 'var(--muted)', fontSize: '0.875rem', marginTop: 8, fontFamily: 'var(--font-geist-mono)' }}>
          {label}
        </div>
      </div>
    ))}
  </div>
);

export const Single = () => (
  <div style={{ padding: 48, background: 'var(--background)', borderRadius: 16, textAlign: 'center' }}>
    <div style={{ fontSize: '5rem', fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>
      <CountUp value={100} suffix="%" />
    </div>
    <div style={{ color: 'var(--muted)', marginTop: 12 }}>Commitment to quality</div>
  </div>
);
