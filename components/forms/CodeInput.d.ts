import * as React from 'react';

/**
 * Saisie du code unique de remise (et du code SMS de vérification).
 * @startingPoint section="Forms" subtitle="Saisie du code de remise" viewport="700x120"
 */
export interface CodeInputProps extends React.HTMLAttributes<HTMLDivElement> {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
}
export declare function CodeInput(props: CodeInputProps): JSX.Element;
