import * as React from 'react';

type LogoTone = 'onLight' | 'onDark' | 'mono';
type LogoShape = 'squircle' | 'circle' | 'square';
/**
 * Système de logos Bledi : un composant, six assemblages.
 * - `horizontal` : lockup d'en-tête (B + « Bledi » à droite)
 * - `stacked` : B au-dessus du mot, centré
 * - `mark` : le B seul, dans sa tuile (favicon, avatar, app)
 * - `wordmark` : « Bledi » seul
 * - `compact` : pilule verte B + mot, pour barres denses
 * - `appIcon` : composition complète (tuile + B + mot + signature)
 */
interface LogoProps extends React.HTMLAttributes<HTMLElement> {
    variant?: 'horizontal' | 'stacked' | 'mark' | 'wordmark' | 'compact' | 'appIcon';
    /** Hauteur du B en px (le reste est proportionnel). Pour `appIcon`, côté de la tuile. */
    size?: number;
    tone?: LogoTone;
    /** Couleur unique quand `tone="mono"`. */
    color?: string;
    /** Affiche « Le lien entre ici et là-bas ». */
    tagline?: boolean;
    shape?: LogoShape;
    /** Force la couleur de la tuile du B (ex. un blanc translucide sur fond vert). */
    tileColor?: string;
    /** Chemin de assets/bledi-b-mark.png, relatif à la page. */
    markSrc?: string;
    href?: string;
}
interface LogoMarkProps extends React.HTMLAttributes<HTMLElement> {
    size?: number;
    shape?: LogoShape;
    tone?: LogoTone;
    color?: string;
    tileColor?: string;
    markSrc?: string;
}
interface LogoWordmarkProps extends React.HTMLAttributes<HTMLElement> {
    size?: number;
    tone?: LogoTone;
    color?: string;
}
declare function LogoMark({ size, shape, tone, color, tileColor, markSrc, style, ...rest }: LogoMarkProps): React.JSX.Element;
declare function LogoWordmark({ size, tone, color, style, ...rest }: LogoWordmarkProps): React.JSX.Element;
declare function Logo({ variant, size, tone, color, tagline, shape, tileColor, markSrc, href, style, ...rest }: LogoProps): React.JSX.Element;

/** Inline advisory block. Bledi uses these constantly to state safety rules. */
interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    /** notice = gold safety rule; neutral = grey tip ("Astuce : …"); outline = quiet info; danger = full-bleed dark green warning band */
    tone?: 'notice' | 'neutral' | 'outline' | 'danger';
    icon?: React.ReactNode;
    children?: React.ReactNode;
}
declare function Alert({ tone, icon, style, children, ...rest }: AlertProps): React.JSX.Element;

/** Circular initial avatar. Bledi never shows uploaded photos in public lists. */
interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Single uppercase letter, e.g. "Y" for Yacine T. */
    initial?: string;
    size?: 'sm' | 'md' | 'lg';
    tone?: 'brand' | 'muted';
}
declare function Avatar({ initial, size, tone, style, ...rest }: AvatarProps): React.JSX.Element;

/** Small status pill: "Trajet vérifié Bledi", "Avion", "Paiement sécurisé". */
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    tone?: 'neutral' | 'verified' | 'brand' | 'onDark' | 'danger';
    icon?: React.ReactNode;
    /** Uppercase + letter-spaced, for eyebrow labels like "TRAJET OFFICIEL" */
    caps?: boolean;
    children?: React.ReactNode;
}
declare function Badge({ tone, icon, caps, style, children, ...rest }: BadgeProps): React.JSX.Element;

/**
 * Bledi action button — pill-shaped, four brand variants.
 */
interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
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
    /** Cible du lien quand `as="a"`. Absent, le composant n-etait pas composable avec un routeur. */
    href?: string;
    target?: string;
    rel?: string;
    /** Type du bouton quand `as="button"`. Sans lui, impossible de declarer un submit. */
    type?: 'button' | 'submit' | 'reset';
    children?: React.ReactNode;
}
declare function Button({ variant, size, block, disabled, iconLeft, iconRight, as, style, children, ...rest }: ButtonProps): React.JSX.Element;

/** The Bledi surface: white hairline card, or the dark green gradient panel. */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    tone?: 'light' | 'dark';
    padding?: string;
    children?: React.ReactNode;
}
declare function Card({ tone, padding, style, children, ...rest }: CardProps): React.JSX.Element;

/** Rounded list token: route pairs, forbidden-items list, filter values. */
interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
    icon?: React.ReactNode;
    selected?: boolean;
    /** Tints the icon red — used in the "Ce qui n'est jamais accepté" list */
    forbidden?: boolean;
    children?: React.ReactNode;
}
declare function Chip({ icon, selected, forbidden, style, children, ...rest }: ChipProps): React.JSX.Element;

/** Centred empty card with circular icon, title, one line of copy, one action. */
interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    action?: React.ReactNode;
}
declare function EmptyState({ icon, title, description, action, style, ...rest }: EmptyStateProps): React.JSX.Element;

/** Names of the Lucide-outline glyphs bundled with <Icon>. */
type IconName = 'inbox' | 'plane' | 'ship' | 'message' | 'user' | 'bell' | 'shield-check' | 'check' | 'x' | 'arrow-right' | 'arrow-left' | 'plus' | 'ban' | 'camera' | 'key' | 'file' | 'package' | 'calendar' | 'clock' | 'credit-card' | 'eye-off' | 'star' | 'lock' | 'phone' | 'mail' | 'id-card' | 'smile' | 'sparkles' | 'alert' | 'shirt' | 'briefcase' | 'gift' | 'glasses' | 'suitcase';
/** Lucide outline glyph, 24px grid, stroke 2, currentColor. */
interface IconProps extends React.SVGAttributes<SVGElement> {
    name: IconName;
    size?: number;
    strokeWidth?: number;
    /** 'none' par défaut. "currentColor" pour une étoile pleine. */
    fill?: string;
}
declare function Icon({ name, size, strokeWidth, fill, style, ...rest }: IconProps): React.JSX.Element;

/** Note sur 5 en étoiles — profil voyageur, avis après transaction. */
interface RatingStarsProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
    value?: number;
    /** Nombre d'avis affiché après la note */
    count?: number;
    size?: number;
    /** Rend les étoiles cliquables (formulaire d'avis) */
    editable?: boolean;
    onChange?: (value: number) => void;
}
declare function RatingStars({ value, count, size, editable, onChange, style, ...rest }: RatingStarsProps): React.JSX.Element;

/**
 * Pastille de vérification Bledi — le « B » du logo, en pastille verte cerclée d'or,
 * posée juste après le nom d'un membre (convention Instagram / X).
 */
interface VerifiedMarkProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Diamètre en px. 14 en ligne de liste, 18 par défaut, 22–26 en tête de profil. */
    size?: number;
    /** brand = vert cerclé d'or (sur clair) ; onDark = or plein (sur panneau vert) */
    tone?: 'brand' | 'onDark';
    /** Texte accessible et infobulle */
    title?: string;
    /** Chemin vers bledi-b-mark.png, relatif à la page hôte. Défaut : "./assets/bledi-b-mark.png". */
    src?: string;
}
/** Nom d'un membre suivi, le cas échéant, de la pastille de vérification. */
interface VerifiedNameProps extends React.HTMLAttributes<HTMLSpanElement> {
    name?: string;
    verified?: boolean;
    /** Taille du nom (token typographique) */
    size?: string;
    markSize?: number;
    tone?: 'brand' | 'onDark';
    /** Transmis à VerifiedMark comme `src` */
    markSrc?: string;
}
declare function VerifiedMark({ size, tone, src, title, style, ...rest }: VerifiedMarkProps): React.JSX.Element;
declare function VerifiedName({ name, verified, size, markSize, tone, markSrc, style, ...rest }: VerifiedNameProps): React.JSX.Element;

/** Selectable verified departure in the publish flow. */
interface OfficialTripCardProps extends React.HTMLAttributes<HTMLButtonElement> {
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
declare function OfficialTripCard({ carrier, reference, route, date, times, selected, onSelect, style, ...rest }: OfficialTripCardProps): React.JSX.Element;

/**
 * Dark reassurance panel with gold check list — Bledi's escrow promise.
 */
interface ProtectionPanelProps extends React.HTMLAttributes<HTMLElement> {
    title?: string;
    description?: string;
    points?: string[];
    linkLabel?: string;
    onLink?: () => void;
}
declare function ProtectionPanel({ title, description, points, linkLabel, onLink, style, ...rest }: ProtectionPanelProps): React.JSX.Element;

/**
 * The central object of the app: one community request pinned to an official trip.
 */
interface RequestCardProps extends React.HTMLAttributes<HTMLElement> {
    /** Row of <Badge> elements: transport, "Trajet vérifié Bledi", "Coordonnées masquées", "Paiement sécurisé" */
    badges?: React.ReactNode;
    /** Right-aligned request type, e.g. "Recherche accompagnement senior" */
    category?: string;
    carrier?: string;
    flight?: string;
    route?: {
        from?: string;
        fromCode?: string;
        fromTime?: string;
        to?: string;
        toCode?: string;
        toTime?: string;
    };
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
declare function RequestCard({ badges, category, carrier, flight, route, date, author, authorVerified, markSrc, authorRole, budget, message, details, notices, action, style, ...rest }: RequestCardProps): React.JSX.Element;

/** Departure → arrival row with airport/port codes, times and the gold arrow node. */
interface RouteLineProps extends React.HTMLAttributes<HTMLDivElement> {
    from?: string;
    fromCode?: string;
    fromTime?: string;
    to?: string;
    toCode?: string;
    toTime?: string;
    /** Surcharge « Départ ». Les consommateurs qui traduisent passent leur propre chaîne. */
    fromLabel?: string;
    /** Surcharge « Arrivée ». */
    toLabel?: string;
}
declare function RouteLine({ from, fromCode, fromTime, to, toCode, toTime, fromLabel, toLabel, style, ...rest }: RouteLineProps): React.JSX.Element;

/** Dark green confirmation banner that carries the chosen trip through the rest of the flow. */
interface TripBannerProps extends React.HTMLAttributes<HTMLDivElement> {
    eyebrow?: string;
    title?: string;
    route?: string;
    schedule?: string;
}
declare function TripBanner({ eyebrow, title, route, schedule, style, ...rest }: TripBannerProps): React.JSX.Element;

/** One line of the KYC checklist on "Vérification du profil". */
interface VerificationRowProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    /** Right-hand status text, default "OK" */
    status?: string;
    done?: boolean;
}
declare function VerificationRow({ icon, title, description, status, done, style, ...rest }: VerificationRowProps): React.JSX.Element;

/** Modale centrée sur voile vert. Réservée aux décisions irréversibles (refuser, annuler, confirmer une remise). */
interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    title?: string;
    description?: string;
    onClose?: () => void;
    /** Boutons alignés à droite */
    actions?: React.ReactNode;
    children?: React.ReactNode;
}
declare function Dialog({ open, title, description, onClose, actions, children, style, ...rest }: DialogProps): React.JSX.Element | null;

/**
 * Suivi vertical d'une remise, de la validation Bledi au paiement libéré.
 * @startingPoint section="Feedback" subtitle="Suivi d'une remise" viewport="700x360"
 */
interface StatusTimelineStep {
    label: string;
    detail?: string;
}
interface StatusTimelineProps extends React.HTMLAttributes<HTMLOListElement> {
    steps?: StatusTimelineStep[];
    /** Index de l'étape en cours (les précédentes sont cochées) */
    current?: number;
}
declare function StatusTimeline({ steps, current, style, ...rest }: StatusTimelineProps): React.JSX.Element;

/** Confirmation éphémère en pilule verte, bas de l'écran. */
interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    tone?: 'success' | 'error';
    onClose?: () => void;
    children?: React.ReactNode;
}
declare function Toast({ tone, children, onClose, style, ...rest }: ToastProps): React.JSX.Element;

/** Case à cocher dans une carte cliquable — engagements de sécurité, objets acceptés. */
interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: React.ReactNode;
    hint?: string;
}
declare function Checkbox({ checked, onChange, label, hint, style, ...rest }: CheckboxProps): React.JSX.Element;

/**
 * Saisie du code unique de remise (et du code SMS de vérification).
 */
interface CodeInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
}
declare function CodeInput({ length, value, onChange, style, ...rest }: CodeInputProps): React.JSX.Element;

/** Label + control + hint. Bledi labels sit above, in grey, sentence case, no colon. */
interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    hint?: string;
    /**
     * `id` du contrôle décrit. Renseigné, le libellé devient un vrai
     * `<label for>` : cliquer dessus focalise le champ, et un lecteur d'écran
     * l'annonce une seule fois. Sans lui le libellé reste un `<div>`, faute de
     * cible à désigner.
     */
    htmlFor?: string;
    children?: React.ReactNode;
}
declare function Field({ label, hint, htmlFor, children, style, ...rest }: FieldProps): React.JSX.Element;

/** Hairline rounded text input on white. */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare function Input({ style, ...rest }: InputProps): React.JSX.Element;
declare function Textarea({ rows, style, ...rest }: TextareaProps): React.JSX.Element;

/** Two-up pill choice used all through "Publier une demande" (Avion/Bateau, sens du trajet). */
interface OptionToggleOption {
    value: string;
    label: string;
    icon?: React.ReactNode;
}
interface OptionToggleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    options?: OptionToggleOption[];
    value?: string;
    onChange?: (value: string) => void;
    columns?: number;
}
declare function OptionToggle({ options, value, onChange, columns, style, ...rest }: OptionToggleProps): React.JSX.Element;

/**
 * Grille d'emplacements photo — l'objet doit être visible pour être accepté.
 */
interface PhotoUploaderProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    hint?: string;
    /** Nombre de photos déjà ajoutées (rendues en placeholder rayé) */
    count?: number;
    /** Nombre d'emplacements minimum affichés */
    min?: number;
    onAdd?: () => void;
}
declare function PhotoUploader({ label, hint, count, min, onAdd, style, ...rest }: PhotoUploaderProps): React.JSX.Element;

/** Native select with Bledi chrome. Placeholder is the em-dash form: "— Choisir —". */
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options?: string[];
    placeholder?: string;
}
declare function Select({ options, placeholder, style, ...rest }: SelectProps): React.JSX.Element;

/** Interrupteur de préférence — notifications, visibilité du trajet. */
interface SwitchProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: React.ReactNode;
    hint?: string;
}
declare function Switch({ checked, onChange, label, hint, style, ...rest }: SwitchProps): React.JSX.Element;

/**
 * Mobile tab bar: four destinations plus the raised green "Publier" action.
 */
interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
    active?: 'requests' | 'trips' | 'publish' | 'messages' | 'profile';
    onNavigate?: (value: string) => void;
}
declare function BottomNav({ active, onNavigate, style, ...rest }: BottomNavProps): React.JSX.Element;

/** Pill segmented control on a grey track — the primary in-page switcher. */
interface SegmentedTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    tabs?: {
        value: string;
        label: string;
    }[];
    value?: string;
    onChange?: (value: string) => void;
}
declare function SegmentedTabs({ tabs, value, onChange, style, ...rest }: SegmentedTabsProps): React.JSX.Element;

/** Thin progress bar + "Étape n sur N" / section name, used by the 5-step publish flow. */
interface StepProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    step?: number;
    total?: number;
    /** Right-hand section name, e.g. "Trajet officiel" */
    label?: string;
    /** Overrides the default left-hand "Étape n sur N" */
    stepLabel?: string;
}
declare function StepProgress({ step, total, label, stepLabel, style, ...rest }: StepProgressProps): React.JSX.Element;

/**
 * Desktop app header: logo, four pill nav items, bell.
 */
interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
    active?: 'requests' | 'trips' | 'messages' | 'profile';
    onNavigate?: (value: string) => void;
    /** Path to bledi-logo.png */
    logoSrc?: string;
}
declare function TopNav({ active, onNavigate, logoSrc, style, ...rest }: TopNavProps): React.JSX.Element;

/** Quieter second-level switcher (Mes réservations). */
interface UnderlineTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    tabs?: {
        value: string;
        label: string;
    }[];
    value?: string;
    onChange?: (value: string) => void;
}
declare function UnderlineTabs({ tabs, value, onChange, style, ...rest }: UnderlineTabsProps): React.JSX.Element;

export { Alert, type AlertProps, Avatar, type AvatarProps, Badge, type BadgeProps, BottomNav, type BottomNavProps, Button, type ButtonProps, Card, type CardProps, Checkbox, type CheckboxProps, Chip, type ChipProps, CodeInput, type CodeInputProps, Dialog, type DialogProps, EmptyState, type EmptyStateProps, Field, type FieldProps, Icon, type IconName, type IconProps, Input, type InputProps, Logo, LogoMark, type LogoMarkProps, type LogoProps, type LogoShape, type LogoTone, LogoWordmark, type LogoWordmarkProps, OfficialTripCard, type OfficialTripCardProps, OptionToggle, type OptionToggleOption, type OptionToggleProps, PhotoUploader, type PhotoUploaderProps, ProtectionPanel, type ProtectionPanelProps, RatingStars, type RatingStarsProps, RequestCard, type RequestCardProps, RouteLine, type RouteLineProps, SegmentedTabs, type SegmentedTabsProps, Select, type SelectProps, StatusTimeline, type StatusTimelineProps, type StatusTimelineStep, StepProgress, type StepProgressProps, Switch, type SwitchProps, Textarea, type TextareaProps, Toast, type ToastProps, TopNav, type TopNavProps, TripBanner, type TripBannerProps, UnderlineTabs, type UnderlineTabsProps, VerificationRow, type VerificationRowProps, VerifiedMark, type VerifiedMarkProps, VerifiedName, type VerifiedNameProps };
