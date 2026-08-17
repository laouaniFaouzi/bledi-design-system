import * as React from 'react';

/**
 * Saisie du code unique de remise (et du code SMS de vérification).
 */
export interface CodeInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
}

export function CodeInput({ length = 6, value = '', onChange, style, ...rest }: CodeInputProps) {
  const refs = React.useRef<(HTMLInputElement | null)[]>([]);
  const chars = Array.from({ length }, (_, i) => value[i] || '');

  const set = (i: number, ch: string) => {
    const next = chars.slice();
    next[i] = ch.replace(/[^0-9A-Za-z]/g, '').slice(-1).toUpperCase();
    const joined = next.join('');
    if (onChange) onChange(joined);
    if (next[i]) refs.current[i + 1]?.focus();
  };

  return (
    <div style={{ display: 'flex', gap: 'var(--space-2)', ...style }} {...rest}>
      {chars.map((c, i) => (
        <input
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          value={c}
          inputMode="numeric"
          onChange={(e) => set(i, e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Backspace' && !c) refs.current[i - 1]?.focus(); }}
          style={{
            width: 46, height: 56, textAlign: 'center', boxSizing: 'border-box',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-semibold)',
            color: 'var(--text-primary)', background: 'var(--surface-card)',
            border: '1px solid ' + (c ? 'var(--border-strong)' : 'var(--border-default)'),
            borderRadius: 'var(--radius-md)', outline: 'none', transition: 'var(--transition-default)',
          }}
        />
      ))}
    </div>
  );
}
