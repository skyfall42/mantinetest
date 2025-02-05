import { HeaderMegaMenu } from '@/components/HeaderMegaMenu/HeaderMegaMenu';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <HeaderMegaMenu/>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
