import * as React from 'react';

/** Label + control + hint. Bledi labels sit above, in grey, sentence case, no colon. */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  hint?: string;
  children?: React.ReactNode;
}

export function Field({ label, hint, children, style, ...rest }: FieldProps) {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      {label ? (
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: '8px' }}>{label}</div>
      ) : null}
      {children}
      {hint ? (
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginTop: '8px' }}>{hint}</div>
      ) : null}
    </div>
  );
}
