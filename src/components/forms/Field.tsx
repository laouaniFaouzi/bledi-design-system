import * as React from 'react';

/** Label + control + hint. Bledi labels sit above, in grey, sentence case, no colon. */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  hint?: string;
  /**
   * `id` du contrôle décrit. Renseigné, le libellé devient un vrai
   * `<label for>` : cliquer dessus focalise le champ, et un lecteur d'écran
   * l'annonce une seule fois. Sans lui le libellé reste un `<div>`, faute de
   * cible à désigner.
   */
  htmlFor?: string;
  children?: React.ReactNode;
}

export function Field({ label, hint, htmlFor, children, style, ...rest }: FieldProps) {
  const styleLibelle: React.CSSProperties = {
    display: 'block',
    fontSize: 'var(--text-sm)',
    color: 'var(--text-secondary)',
    marginBottom: 'var(--space-2)',
  };
  return (
    <div style={{ fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      {label ? (
        htmlFor
          ? <label htmlFor={htmlFor} style={styleLibelle}>{label}</label>
          : <div style={styleLibelle}>{label}</div>
      ) : null}
      {children}
      {hint ? (
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}>{hint}</div>
      ) : null}
    </div>
  );
}
