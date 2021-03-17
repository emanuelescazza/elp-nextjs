import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from '../../styles/navbar/Menu.module.css'


export default function Menu({ showSocial = true, toggleHambHandler }) {
  const menuHandler = toggleHambHandler ? () => toggleHambHandler(false) : () => { };
  return (
    <ul id={styles.menuLinks}>
      <li>
        <Link href="/bio">
          <a onClick={menuHandler}>Chi siamo</a>
        </Link>
      </li>
      <li>
        <Link href="/cosa-offriamo">
          <a onClick={menuHandler}>Cosa offriamo</a>
        </Link>
      </li>
      <li>
        <Link href="/contatti">
          <a onClick={menuHandler}>Contatti</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/category/latest/1">
          <a onClick={menuHandler}>Blog</a>
        </Link>
      </li>
      { showSocial && <>
        <li>
          <a href="#" className={styles.icon}>
            <FontAwesomeIcon icon={faLinkedin} id={styles.linkedin}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="#" className={styles.icon}>
            <FontAwesomeIcon icon={faFacebook} id={styles.fb}></FontAwesomeIcon>
          </a>
        </li>
      </>}

    </ul>
  )
}