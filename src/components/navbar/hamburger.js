import { useState } from 'react';
import styles from '../../styles/navbar/Hamburger.module.css';
import Menu from './menu';

export default function Hamburger() {
  const [isVisible, setVisible] = useState(false);
  const hambStyles = [styles.hamburger, styles.hamburgerBoring];
  if (isVisible)
    hambStyles.push(styles.hambActive);
  return (
    <>
      <div className={hambStyles.join(' ')} id={styles.hamburger}
        onClick={() => setVisible(visible => !visible)}>
        <div className={styles.hamburgerBox}>
          <div className={styles.hamburgerInner}></div>
        </div>
      </div>
      { isVisible && <Menu showSocial={false} toggleHambHandler={setVisible} />}
    </>
  )
}