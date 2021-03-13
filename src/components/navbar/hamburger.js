import { useState } from 'react';
import styles from '../../styles/navbar/Hamburger.module.css';
import Menu from './menu';

export default function Hamburger({ showNavLinks, toggleHambHandler }) {
  // const [isVisible, setVisible] = useState(false);
  const hambStyles = [styles.hamburger, styles.hamburgerBoring];
  if (showNavLinks)
    hambStyles.push(styles.hambActive);
  return (
    <>
      <div className={hambStyles.join(' ')} id={styles.hamburger}
        onClick={() => toggleHambHandler(show => !show)}>
        <div className={styles.hamburgerBox}>
          <div className={styles.hamburgerInner}></div>
        </div>
      </div>
      { showNavLinks && <Menu showSocial={false} toggleHambHandler={toggleHambHandler} />}
    </>
  )
}