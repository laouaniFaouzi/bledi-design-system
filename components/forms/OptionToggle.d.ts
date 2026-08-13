import * as React from 'react';

/** Two-up pill choice used all through "Publier une demande" (Avion/Bateau, sens du trajet). */
export interface OptionToggleOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}
export interface OptionToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: OptionToggleOption[];
  value?: string;
  onChange?: (value: string) => void;
  columns?: number;
}
export declare function OptionToggle(props: OptionToggleProps): JSX.Element;
