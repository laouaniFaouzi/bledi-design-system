import * as React from 'react';

/** Departure → arrival row with airport/port codes, times and the gold arrow node. */
export interface RouteLineProps extends React.HTMLAttributes<HTMLDivElement> {
  from?: string; fromCode?: string; fromTime?: string;
  to?: string; toCode?: string; toTime?: string;
}
export declare function RouteLine(props: RouteLineProps): JSX.Element;
