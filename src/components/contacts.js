import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faFacebookSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import styles from '../styles/Contacts.module.css';

export default function Contacts({ writers, contattoFacebook }) {
  return (
    <div id={styles.contattiBox}>
      <h1 className={styles.contattiHead}>Contatti</h1>
      <div className={styles.contatti}>
        <div className={styles.element}>
          <div>
            <FontAwesomeIcon className={styles.contactIcon} icon={faFacebookSquare}></FontAwesomeIcon>
            <h1>Facebook</h1>
          </div>
          <div className={styles.content}>
            <a href={contattoFacebook.link}>
              <p>{contattoFacebook.nome}</p>
            </a>
          </div>
        </div>
        <div className={styles.element}>
          <div>
            <FontAwesomeIcon className={styles.contactIcon} icon={faPhone}></FontAwesomeIcon>
            <h1>Telefono</h1>
          </div>
          <div className={styles.content}>
            {writers.map(writer => (<>
              <span key={writer._id}><strong>{writer.name}</strong></span>
              <p>+39 {writer.telefono}</p>
            </>
            ))}
          </div>
        </div>
        <div className={styles.element}>
          <div>
            <FontAwesomeIcon className={styles.contactIcon} icon={faLinkedinIn}></FontAwesomeIcon>
            <h1>Linkedin</h1>
          </div>
          <div className={styles.content}>
            {writers.map(writer => (
              <>
                <a href={writer.linkedin} key={writer._id}>
                  <p>{writer.name}</p>
                </a>
              </>
            ))}
          </div>
        </div>
        <div className={styles.element}>
          <div>
            <FontAwesomeIcon className={styles.contactIcon} icon={faEnvelope}></FontAwesomeIcon>
            <h1>E-mail</h1>
          </div>
          <div className={styles.content}>
            {writers.map(writer => (
              <>
                <p key={writer._id}>
                  <a href={`mailto:${writer.email}?subject=Richiesta%20informazioni`}>{writer.email}</a>
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}