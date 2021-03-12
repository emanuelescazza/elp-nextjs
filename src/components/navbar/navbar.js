import Link from 'next/link';
import styles from '../../styles/navbar/Navbar.module.css';
import Hamburger from './hamburger';
import Menu from './menu';
import { useViewport } from '../../hooks/viewport';

const breakpoint = 768;

export default function Navbar() {
  const { width } = useViewport();
  const isMobile = width < breakpoint;
  return (
    <nav id={styles.nav}>
      <div id={styles.logo} className={styles.center}>
        <Link href="/">
          <a>
            <p id={styles.logoUp}>
              <img src="clew4.png" alt="gomitolo" id={styles.logoImg} />
              elp!
            </p>
            <hr id={styles.hr} />
            <p id={styles.logoDown}>Empatia Linguaggio Pragmatica</p>
          </a>
        </Link>
      </div>
      { isMobile ? <Hamburger /> : <Menu />}
    </nav>
  );
}