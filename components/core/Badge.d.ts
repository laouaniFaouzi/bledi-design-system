import * as React from 'react';

/** Small status pill: "Trajet vérifié Bledi", "Avion", "Paiement sécurisé". */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'verified' | 'brand' | 'onDark' | 'danger';
  icon?: React.ReactNode;
  /** Uppercase + letter-spaced, for eyebrow labels like "TRAJET OFFICIEL" */
  caps?: boolean;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
