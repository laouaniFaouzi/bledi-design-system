import * as React from 'react';

/**
 * Pastille de vérification Bledi — le « B » du logo, en pastille verte cerclée d'or,
 * posée juste après le nom d'un membre (convention Instagram / X).
 * @startingPoint section="Core" subtitle="Pastille de profil vérifié" viewport="700x120"
 */
export interface VerifiedMarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Diamètre en px. 14 en ligne de liste, 18 par défaut, 22–26 en tête de profil. */
  size?: number;
  /** brand = vert cerclé d'or (sur clair) ; onDark = or plein (sur panneau vert) */
  tone?: 'brand' | 'onDark';
  /** Texte accessible et infobulle */
  title?: string;
  /** Chemin vers bledi-b-mark.png, relatif à la page hôte. Défaut : "./assets/bledi-b-mark.png". */
  src?: string;
}
export declare function VerifiedMark(props: VerifiedMarkProps): JSX.Element;

/** Nom d'un membre suivi, le cas échéant, de la pastille de vérification. */
export interface VerifiedNameProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string;
  verified?: boolean;
  /** Taille du nom (token typographique) */
  size?: string;
  markSize?: number;
  tone?: 'brand' | 'onDark';
  /** Transmis à VerifiedMark comme `src` */
  markSrc?: string;
}
export declare function VerifiedName(props: VerifiedNameProps): JSX.Element;
