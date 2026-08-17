import * as React from 'react';
import { TopNav, BottomNav } from '../../src/components';
import { Requests } from './Requests';
import { Publish } from './Publish';
import { Reservations } from './Reservations';
import { Messages } from './Messages';
import { Profile } from './Profile';
import { Verification } from './Verification';
import logoUrl from '../../assets/bledi-logo.png';

type Page = 'requests' | 'publish' | 'trips' | 'messages' | 'profile' | 'verify';

/** Parcours cliquable complet de l'app Bledi — recréation fidèle de ui_kits/app/index.html. */
export function App() {
  const [page, setPage] = React.useState<Page>('requests');
  const go = (p: string) => setPage((p === 'publish' ? 'publish' : p) as Page);

  const topNavActive: 'requests' | 'trips' | 'messages' | 'profile' =
    page === 'publish' ? 'requests' : page === 'verify' ? 'profile' : page;
  const bottomNavActive: 'requests' | 'trips' | 'publish' | 'messages' | 'profile' =
    page === 'verify' ? 'profile' : page;

  return (
    <>
      <div className="desktop-nav">
        <TopNav active={topNavActive} onNavigate={go} logoSrc={logoUrl} />
      </div>
      <main>
        {page === 'requests' ? <Requests /> : null}
        {page === 'publish' ? <Publish onPublished={() => setPage('trips')} /> : null}
        {page === 'trips' ? <Reservations /> : null}
        {page === 'messages' ? <Messages /> : null}
        {page === 'profile' ? <Profile onVerify={() => setPage('verify')} /> : null}
        {page === 'verify' ? <Verification onBack={() => setPage('profile')} /> : null}
      </main>
      <div className="mobile-nav" style={{ position: 'sticky', bottom: 0 }}>
        <BottomNav active={bottomNavActive} onNavigate={go} />
      </div>
    </>
  );
}
