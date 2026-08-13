import * as React from 'react';

/** The Bledi surface: white hairline card, or the dark green gradient panel. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'light' | 'dark';
  padding?: string;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
