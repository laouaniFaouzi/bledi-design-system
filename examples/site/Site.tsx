import { TopNav } from '../../src/components';
import { Landing } from './Landing';
import logoUrl from '../../assets/bledi-logo.png';

/** Page vitrine — recréation fidèle de ui_kits/site/index.html. */
export function Site() {
  return (
    <>
      <TopNav logoSrc={logoUrl} />
      <Landing />
    </>
  );
}
