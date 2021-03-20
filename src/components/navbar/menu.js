import Link from 'next/link'
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
    </ul>
  )
}