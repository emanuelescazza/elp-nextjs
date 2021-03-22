import styles from '../styles/Modal.module.css';

export default function Modal({ children, ...props }) {
  return (
    <div className={styles.modalBox}>
      <div className={styles.modal}>{children}</div>
    </div>
  )
}