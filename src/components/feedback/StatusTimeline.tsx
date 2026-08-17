import * as React from 'react';
import { Icon } from '../core/Icon';

/**
 * Suivi vertical d'une remise, de la validation Bledi au paiement libéré.
 * @startingPoint section="Feedback" subtitle="Suivi d'une remise" viewport="700x360"
 */
export interface StatusTimelineStep {
  label: string;
  detail?: string;
}
export interface StatusTimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  steps?: StatusTimelineStep[];
  /** Index de l'étape en cours (les précédentes sont cochées) */
  current?: number;
}

export function StatusTimeline({ steps = [], current = 0, style, ...rest }: StatusTimelineProps) {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      {steps.map((s, i) => {
        const done = i < current;
        const active = i === current;
        const last = i === steps.length - 1;
        return (
          <li key={s.label} style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto' }}>
              <span style={{
                width: 26, height: 26, borderRadius: 'var(--radius-pill)',
                background: done || active ? 'var(--bledi-green-700)' : 'var(--surface-muted)',
                color: done || active ? '#FFFFFF' : 'var(--text-secondary)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)',
              }}>
                {done ? <Icon name="check" size={13} strokeWidth={2.6} /> : i + 1}
              </span>
              {!last ? <span style={{ width: 2, flex: 1, minHeight: 26, background: done ? 'var(--bledi-green-700)' : 'var(--bledi-neutral-200)' }} /> : null}
            </div>
            <div style={{ paddingBottom: last ? 0 : 'var(--space-5)' }}>
              <div style={{ fontSize: 'var(--text-base)', fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-regular)', color: done || active ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{s.label}</div>
              {s.detail ? <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 2 }}>{s.detail}</div> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
