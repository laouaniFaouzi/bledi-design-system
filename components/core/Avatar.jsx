import React from 'react';

const avatarSizes = { sm: 32, md: 40, lg: 56 };

export function Avatar({ initial, size = 'md', tone = 'brand', style, ...rest }) {
  const px = avatarSizes[size];
  const dark = tone === 'brand';
  return (
    <span
      style={{
        width: px, height: px, flex: '0 0 auto',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-pill)',
        background: dark ? 'var(--bledi-green-700)' : 'var(--surface-muted)',
        color: dark ? '#FFFFFF' : 'var(--text-primary)',
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
        fontSize: px * 0.4, lineHeight: 1, ...style,
      }}
      {...rest}
    >
      {initial}
    </span>
  );
}
