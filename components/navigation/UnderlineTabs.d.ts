import * as React from 'react';

/** Quieter second-level switcher (Mes réservations). */
export interface UnderlineTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs?: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
}
export declare function UnderlineTabs(props: UnderlineTabsProps): JSX.Element;
