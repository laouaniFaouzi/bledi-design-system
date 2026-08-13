import * as React from 'react';

/**
 * The central object of the app: one community request pinned to an official trip.
 * @startingPoint section="Domain" subtitle="Community request card" viewport="700x620"
 */
export interface RequestCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Row of <Badge> elements: transport, "Trajet vérifié Bledi", "Coordonnées masquées", "Paiement sécurisé" */
  badges?: React.ReactNode;
  /** Right-aligned request type, e.g. "Recherche accompagnement senior" */
  category?: string;
  carrier?: string;
  flight?: string;
  route?: { from?: string; fromCode?: string; fromTime?: string; to?: string; toCode?: string; toTime?: string };
  date?: string;
  author?: string;
  /** Affiche la pastille « B » de profil vérifié après le nom */
  authorVerified?: boolean;
  /** Chemin vers bledi-b-mark.png depuis la page hôte */
  markSrc?: string;
  authorRole?: string;
  /** Formatted amount including the € sign */
  budget?: string;
  message?: string;
  /** Grey block of structured facts */
  details?: React.ReactNode;
  /** One or more <Alert> elements */
  notices?: React.ReactNode;
  /** Usually <Button block>Proposer mon aide</Button> */
  action?: React.ReactNode;
}
export declare function RequestCard(props: RequestCardProps): JSX.Element;
