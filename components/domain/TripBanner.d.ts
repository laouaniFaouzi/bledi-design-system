import * as React from 'react';

/** Dark green confirmation banner that carries the chosen trip through the rest of the flow. */
export interface TripBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title?: string;
  route?: string;
  schedule?: string;
}
export declare function TripBanner(props: TripBannerProps): JSX.Element;
