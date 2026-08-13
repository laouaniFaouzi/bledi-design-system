import * as React from 'react';

/**
 * Bledi action button — pill-shaped, four brand variants.
 * @startingPoint section="Core" subtitle="Pill buttons in every Bledi variant" viewport="700x180"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = deep green (default app action); accent = gold (marketing CTA on dark); quiet = grey fill; outline = hairline on light; outlineOnDark = hairline on green panels; ghost = text only */
  variant?: 'primary' | 'accent' | 'quiet' | 'outline' | 'outlineOnDark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Full-width — used for the card-footer action ("Proposer mon aide") */
  block?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Render as another element, e.g. "a" */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
