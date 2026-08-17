import * as React from 'react';

/** Thin progress bar + "Étape n sur N" / section name, used by the 5-step publish flow. */
export interface StepProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  step?: number;
  total?: number;
  /** Right-hand section name, e.g. "Trajet officiel" */
  label?: string;
  /** Overrides the default left-hand "Étape n sur N" */
  stepLabel?: string;
}

export function StepProgress({ step = 1, total = 5, label, stepLabel, style, ...rest }: StepProgressProps) {
  const pct = Math.max(0, Math.min(1, step / total)) * 100;
  return (
    <div style={{ fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: '8px' }}>
        <span>{stepLabel || `Étape ${step} sur ${total}`}</span>
        <span>{label}</span>
      </div>
      <div style={{ height: 4, borderRadius: 'var(--radius-pill)', background: 'var(--surface-muted)', overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: 'var(--bledi-green-700)', borderRadius: 'var(--radius-pill)', transition: 'width var(--duration-slow) var(--ease-standard)' }} />
      </div>
    </div>
  );
}
