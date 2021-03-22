import Link from 'next/link';
import styles from '../../styles/navbar/Logo.module.css';

export default function Logo({ toggleHambHandler }) {
  return (
    <div id={styles.logoBox}>
      <Link href="/">
        <div id={styles.logo} onClick={() => toggleHambHandler(false)}>
          <div className={styles.contentBox}>
            <img id={styles.img} src="/megafono.png" alt="" />
            <p id={styles.title}>elp!</p>
          </div>
          <p id={styles.description}>Empatia Linguaggio Pragmatica</p>
        </div>
      </Link>
    </div>
  );
}