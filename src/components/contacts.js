import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faFacebookSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import styles from '../styles/Contacts.module.css';

export default function Contacts() {
  return (
    <div id={styles.contattiBox}>
      <h1 className={styles.contattiHead}>I miei contatti</h1>
      <div className={styles.contatti}>
        <div className={styles.element}>
          <div>
            <FontAwesomeIcon className={styles.contactIcon} icon={faFacebookSquare}></FontAwesomeIcon>
            <h1>Facebook</h1>
          </div>
          <div className={styles.content}>
            <a href="#">
              <p>Studio LAB Pomparino</p>
            </a>
          </div>
        </div>
        <div className={styles.element}>
          <div>
            <FontAwesomeIcon className={styles.contactIcon} icon={faPhone}></FontAwesomeIcon>
            <h1>Telefono</h1>
          </div>
          <div className={styles.content}>
            <span><strong>Alessia Pompamea</strong></span>
            <p>+39 340 359 5722</p>
            <span><strong>Filomena Guarino</strong></span>
            <p>+39 351 456 9999</p>
          </div>
        </div>
        <div className={styles.element}>
          <div>
            <FontAwesomeIcon className={styles.contactIcon} icon={faLinkedinIn}></FontAwesomeIcon>
            <h1>Linkedin</h1>
          </div>
          <div className={styles.content}>
            <a href="#">
              <p>Alessia Pompamea</p>
            </a>
            <a href="#">
              <p>Filomena Guarino</p>
            </a>
          </div>
        </div>
        <div className={styles.element}>
          <div>
            <FontAwesomeIcon className={styles.contactIcon} icon={faEnvelope}></FontAwesomeIcon>
            <h1>E-mail</h1>
          </div>
          <div className={styles.content}>
            <p>
              <a href="mailto:alessiapompamea@hotmail.it?subject=Richiesta%20Consulenza">alessiapompamea@hotmail.it</a>
            </p>
            <p>
              <a href="mailto:filomenaguarino@gmail.com?subject=Richiesta%20Consulenza">filomenaguarino@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}