import * as React from 'react';

/** Label + control + hint. Bledi labels sit above, in grey, sentence case, no colon. */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  hint?: string;
  children?: React.ReactNode;
}
export declare function Field(props: FieldProps): JSX.Element;
