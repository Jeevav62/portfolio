import { Magnetic } from 'port';

export const WrappingButton = () => (
  <div style={{ padding: 48, display: 'flex', gap: 24, alignItems: 'center', background: 'var(--background)' }}>
    <Magnetic>
      <button style={{
        padding: '10px 24px',
        background: 'var(--accent)',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: '0.9rem',
      }}>
        Hover me
      </button>
    </Magnetic>
    <Magnetic strength={0.6}>
      <button style={{
        padding: '10px 24px',
        background: 'transparent',
        color: 'var(--foreground)',
        border: '1px solid var(--border-strong)',
        borderRadius: 8,
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: '0.9rem',
      }}>
        Strong pull
      </button>
    </Magnetic>
  </div>
);

export const WrappingIcon = () => (
  <div style={{ padding: 48, display: 'flex', gap: 32, alignItems: 'center', background: 'var(--background)' }}>
    {['GitHub', 'LinkedIn', 'Email'].map((label) => (
      <Magnetic key={label}>
        <div style={{
          width: 48, height: 48,
          borderRadius: '50%',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 600, fontSize: '0.7rem', color: 'var(--muted)',
          cursor: 'pointer',
        }}>
          {label[0]}
        </div>
      </Magnetic>
    ))}
  </div>
);
