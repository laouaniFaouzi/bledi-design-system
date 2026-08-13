import * as React from 'react';

/** Confirmation éphémère en pilule verte, bas de l'écran. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'success' | 'error';
  onClose?: () => void;
  children?: React.ReactNode;
}
export declare function Toast(props: ToastProps): JSX.Element;
