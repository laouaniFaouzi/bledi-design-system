import * as React from 'react';

/** Case à cocher dans une carte cliquable — engagements de sécurité, objets acceptés. */
export interface CheckboxProps extends React.HTMLAttributes<HTMLLabelElement> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  hint?: string;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
