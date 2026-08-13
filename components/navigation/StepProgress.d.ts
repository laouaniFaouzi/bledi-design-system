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
export declare function StepProgress(props: StepProgressProps): JSX.Element;
