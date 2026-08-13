import * as React from 'react';

/**
 * Dark reassurance panel with gold check list — Bledi's escrow promise.
 * @startingPoint section="Domain" subtitle="Protection Bledi panel" viewport="700x330"
 */
export interface ProtectionPanelProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  points?: string[];
  linkLabel?: string;
  onLink?: () => void;
}
export declare function ProtectionPanel(props: ProtectionPanelProps): JSX.Element;
