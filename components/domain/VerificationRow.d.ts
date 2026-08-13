import * as React from 'react';

/** One line of the KYC checklist on "Vérification du profil". */
export interface VerificationRowProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  /** Right-hand status text, default "OK" */
  status?: string;
  done?: boolean;
}
export declare function VerificationRow(props: VerificationRowProps): JSX.Element;
