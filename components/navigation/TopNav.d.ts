import * as React from 'react';

/**
 * Desktop app header: logo, four pill nav items, bell.
 * @startingPoint section="Navigation" subtitle="Bledi desktop header" viewport="700x120"
 */
export interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  active?: 'requests' | 'trips' | 'messages' | 'profile';
  onNavigate?: (value: string) => void;
  /** Path to bledi-logo.png */
  logoSrc?: string;
}
export declare function TopNav(props: TopNavProps): JSX.Element;
