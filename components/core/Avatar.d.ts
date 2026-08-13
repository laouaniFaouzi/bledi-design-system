import * as React from 'react';

/** Circular initial avatar. Bledi never shows uploaded photos in public lists. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Single uppercase letter, e.g. "Y" for Yacine T. */
  initial?: string;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'brand' | 'muted';
}
export declare function Avatar(props: AvatarProps): JSX.Element;
