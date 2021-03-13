import Link from 'next/link';
import styles from '../../styles/navbar/Logo.module.css';

export default function Logo() {
  return (
    <div id={styles.logoBox}>
      <Link href="/">
        <div id={styles.logo}>
          {/* <img src="clew4.png" alt="gomitolo" id={styles.logoImg} /> */}
          <p id={styles.logoUp}>elp!</p>
          <p id={styles.logoDown}>Empatia Linguaggio Pragmatica</p>
        </div>
      </Link>
    </div>
  );
}