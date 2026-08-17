import * as React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles.css';
import './examples.css';
import { App } from './app/App';
import { Site } from './site/Site';

function Demo() {
  const [surface, setSurface] = React.useState<'app' | 'site'>('site');
  return (
    <>
      <div
        style={{
          position: 'sticky', top: 0, zIndex: 10, display: 'flex', gap: 8,
          padding: '10px 16px', background: 'var(--bledi-ink-900)', fontFamily: 'var(--font-sans)',
        }}
      >
        {(['site', 'app'] as const).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSurface(s)}
            style={{
              fontFamily: 'inherit', fontSize: 13, cursor: 'pointer', border: 'none',
              borderRadius: 999, padding: '6px 14px',
              background: surface === s ? 'var(--bledi-gold-400)' : 'transparent',
              color: surface === s ? 'var(--bledi-green-900)' : '#FFF',
            }}
          >
            {s === 'site' ? 'Site vitrine' : 'App (Demandes → Publier → Réservations…)'}
          </button>
        ))}
      </div>
      {surface === 'app' ? <App /> : <Site />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);
