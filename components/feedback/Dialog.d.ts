import * as React from 'react';

/** Modale centrée sur voile vert. Réservée aux décisions irréversibles (refuser, annuler, confirmer une remise). */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  description?: string;
  onClose?: () => void;
  /** Boutons alignés à droite */
  actions?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
