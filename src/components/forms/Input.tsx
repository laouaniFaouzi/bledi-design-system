import * as React from 'react';

/** Hairline rounded text input on white. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const inputBase: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box',
  fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
  color: 'var(--text-primary)', background: 'var(--surface-card)',
  border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)',
  padding: '12px 14px', outline: 'none', transition: 'var(--transition-default)',
};

export function Input({ style, ...rest }: InputProps) {
  return <input style={{ ...inputBase, minHeight: 'var(--tap-target-min)', ...style }} {...rest} />;
}

export function Textarea({ rows = 4, style, ...rest }: TextareaProps) {
  return <textarea rows={rows} style={{ ...inputBase, resize: 'vertical', lineHeight: 'var(--leading-normal)', ...style }} {...rest} />;
}
