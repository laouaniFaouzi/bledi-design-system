import * as React from 'react';

/**
 * Mobile tab bar: four destinations plus the raised green "Publier" action.
 * @startingPoint section="Navigation" subtitle="Bledi mobile tab bar" viewport="390x110"
 */
export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  active?: 'requests' | 'trips' | 'publish' | 'messages' | 'profile';
  onNavigate?: (value: string) => void;
}
export declare function BottomNav(props: BottomNavProps): JSX.Element;
