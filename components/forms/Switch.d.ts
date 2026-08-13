import * as React from 'react';

/** Interrupteur de préférence — notifications, visibilité du trajet. */
export interface SwitchProps extends React.HTMLAttributes<HTMLLabelElement> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  hint?: string;
}
export declare function Switch(props: SwitchProps): JSX.Element;
