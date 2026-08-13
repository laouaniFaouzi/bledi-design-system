import * as React from 'react';

/** Selectable verified departure in the publish flow. */
export interface OfficialTripCardProps extends React.HTMLAttributes<HTMLButtonElement> {
  carrier?: string;
  /** Operator reference, e.g. "CL-MRS-AAE-04" */
  reference?: string;
  route?: string;
  date?: string;
  /** e.g. "20:00 → 16:00 (J+1)" */
  times?: string;
  selected?: boolean;
  onSelect?: () => void;
}
export declare function OfficialTripCard(props: OfficialTripCardProps): JSX.Element;
