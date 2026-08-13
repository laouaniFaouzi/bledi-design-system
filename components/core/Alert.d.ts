import * as React from 'react';

/** Inline advisory block. Bledi uses these constantly to state safety rules. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** notice = gold safety rule; neutral = grey tip ("Astuce : …"); outline = quiet info; danger = full-bleed dark green warning band */
  tone?: 'notice' | 'neutral' | 'outline' | 'danger';
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Alert(props: AlertProps): JSX.Element;
