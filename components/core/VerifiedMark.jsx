import React from 'react';

/* Pastille de vérification Bledi : le B du logo (assets/bledi-b-mark.png, tracé blanc
   détourné) posé après le nom comme une coche de réseau social.
   Le chemin de l'image est relatif à la page qui monte le composant : passez `src`
   quand la page n'est pas à la racine du projet. */
const DEFAULT_SRC = './assets/bledi-b-mark.png';

export function VerifiedMark({ size = 18, tone = 'brand', src = DEFAULT_SRC, title = 'Profil vérifié par Bledi', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <span
      role="img"
      aria-label={title}
      title={title}
      style={{
        width: size, height: size, flex: '0 0 auto',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-pill)', boxSizing: 'border-box',
        background: dark ? 'var(--bledi-gold-400)' : 'var(--bledi-green-700)',
        border: dark ? 'none' : Math.max(1, size * 0.075) + 'px solid var(--bledi-gold-400)',
        ...style,
      }}
      {...rest}
    >
      <img
        src={src}
        alt=""
        style={{
          width: size * 0.76, height: size * 0.76, display: 'block', objectFit: 'contain',
          /* le tracé est blanc : on le teinte en vert profond sur la pastille or */
          filter: dark ? 'brightness(0) saturate(100%) invert(11%) sepia(38%) saturate(1600%) hue-rotate(120deg)' : 'none',
        }}
      />
    </span>
  );
}

/* Nom + pastille : l'assemblage à utiliser partout où un membre est nommé. */
export function VerifiedName({ name, verified = false, size = 'var(--text-base)', markSize = 18, tone = 'brand', markSrc, style, ...rest }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', fontSize: size, fontWeight: 'var(--weight-medium)', ...style }} {...rest}>
      {name}
      {verified ? <VerifiedMark size={markSize} tone={tone} src={markSrc} /> : null}
    </span>
  );
}
