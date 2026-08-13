import * as React from 'react';

/** Rounded list token: route pairs, forbidden-items list, filter values. */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode;
  selected?: boolean;
  /** Tints the icon red — used in the "Ce qui n'est jamais accepté" list */
  forbidden?: boolean;
  children?: React.ReactNode;
}
export declare function Chip(props: ChipProps): JSX.Element;
