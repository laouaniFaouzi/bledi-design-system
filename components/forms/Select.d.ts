import * as React from 'react';

/** Native select with Bledi chrome. Placeholder is the em-dash form: "— Choisir —". */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  placeholder?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
