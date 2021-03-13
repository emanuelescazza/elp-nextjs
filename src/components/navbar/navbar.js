import Logo from './logo';
import Hamburger from './hamburger';
import Menu from './menu';
import { useViewport } from '../../hooks/viewport';
import styles from '../../styles/navbar/Navbar.module.css';

const breakpoint = 768;

export default function Navbar() {
  const { width } = useViewport();
  const isMobile = width < breakpoint;
  return (
    <nav id={styles.nav}>
      <Logo />
      { isMobile ? <Hamburger /> : <Menu />}
    </nav>
  );
}