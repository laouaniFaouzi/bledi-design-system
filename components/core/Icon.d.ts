import * as React from 'react';

/** Lucide outline glyph, 24px grid, stroke 2, currentColor. */
export interface IconProps extends React.SVGAttributes<SVGElement> {
  name:
    | 'inbox' | 'plane' | 'ship' | 'message' | 'user' | 'bell' | 'shield-check' | 'check' | 'x'
    | 'arrow-right' | 'arrow-left' | 'plus' | 'ban' | 'camera' | 'key' | 'file' | 'package'
    | 'calendar' | 'clock' | 'credit-card' | 'eye-off' | 'star' | 'lock' | 'phone' | 'mail'
    | 'id-card' | 'smile' | 'sparkles' | 'alert' | 'shirt' | 'briefcase' | 'gift' | 'glasses' | 'suitcase';
  size?: number;
  strokeWidth?: number;
  /** 'none' par défaut. "currentColor" pour une étoile pleine. */
  fill?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
