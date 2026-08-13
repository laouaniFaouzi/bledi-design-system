import * as React from 'react';

/** Note sur 5 en étoiles — profil voyageur, avis après transaction. */
export interface RatingStarsProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: number;
  /** Nombre d'avis affiché après la note */
  count?: number;
  size?: number;
  /** Rend les étoiles cliquables (formulaire d'avis) */
  editable?: boolean;
  onChange?: (value: number) => void;
}
export declare function RatingStars(props: RatingStarsProps): JSX.Element;
