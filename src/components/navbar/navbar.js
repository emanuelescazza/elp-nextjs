import Logo from './logo';
import { useState } from 'react';
import Hamburger from './hamburger';
import Menu from './menu';
import { useViewport } from '../../hooks/viewport';
import styles from '../../styles/navbar/Navbar.module.css';

const breakpoint = 1024;

export default function Navbar() {
  const [showNavLinks, toggleNavLinks] = useState(false);
  const { width } = useViewport();
  const isMobile = width < breakpoint;
  return (
    <nav id={styles.nav}>
      <Logo toggleHambHandler={toggleNavLinks} />
      { isMobile ? <Hamburger showNavLinks={showNavLinks} toggleHambHandler={toggleNavLinks} /> : <Menu />}
    </nav>
  );
}