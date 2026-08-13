import * as React from 'react';

/**
 * Grille d'emplacements photo — l'objet doit être visible pour être accepté.
 * @startingPoint section="Forms" subtitle="Photos obligatoires de l'objet" viewport="700x220"
 */
export interface PhotoUploaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  hint?: string;
  /** Nombre de photos déjà ajoutées (rendues en placeholder rayé) */
  count?: number;
  /** Nombre d'emplacements minimum affichés */
  min?: number;
  onAdd?: () => void;
}
export declare function PhotoUploader(props: PhotoUploaderProps): JSX.Element;
