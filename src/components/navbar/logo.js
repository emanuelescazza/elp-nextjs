import Link from 'next/link';
import styles from '../../styles/navbar/Logo.module.css';

export default function Logo({ toggleHambHandler }) {
  return (
    <div id={styles.logoBox}>
      {/* <Link href="/"> */}
      <img id={styles.img} src="/megafono.png" alt="" />
      <div id={styles.logo} onClick={() => toggleHambHandler(false)}>
        <p id={styles.title}>elp!</p>
        <p id={styles.description}>Empatia Linguaggio Pragmatica</p>
      </div>
      {/* </Link> */}
    </div>
  );
}