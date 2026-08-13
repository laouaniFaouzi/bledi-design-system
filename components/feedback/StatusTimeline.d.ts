import * as React from 'react';

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
export declare function StatusTimeline(props: StatusTimelineProps): JSX.Element;
