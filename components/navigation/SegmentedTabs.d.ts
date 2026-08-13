import * as React from 'react';

/** Pill segmented control on a grey track — the primary in-page switcher. */
export interface SegmentedTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs?: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
}
export declare function SegmentedTabs(props: SegmentedTabsProps): JSX.Element;
