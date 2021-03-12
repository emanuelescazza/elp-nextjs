import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <p>
        &copy; Copyright 2020 - <span>Emanuele Scazza</span> - All Rights Reserved
      </p>
    </footer>
  )
}