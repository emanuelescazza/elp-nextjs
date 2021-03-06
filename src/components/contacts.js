import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faFacebookSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import Modal from './modal';
import { postApi } from '../lib/fetchApis';
import styles from '../styles/Contacts.module.css';

export default function Contacts({ writers, options }) {
  const [categoria, updateCategoria] = useState('altro');
  const [messaggio, updateMessaggio] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showModal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const handleForm = (body) => {
    if (messaggio.trim().length < 1) {
      return window.alert("Inserisci testo del messaggio.");
    }
    setIsSending(true);
    setModalMessage('Qualcosa è andato storto... Si prega di riprovare più tardi.');
    postApi('contatti', body)
      .then(({ result }) => {
        if (result === 'OK') {
          setModalMessage('Il messaggio è stato inviato correttamente.');
        }
        setModal(true);
        setIsSending(false);
      })
      .catch(err => {
        setIsSending(false);
        setModal(true);
      })
  }
  return (
    <div id={styles.contattiBox}>
      <h1 className={styles.title}>Contatti</h1>
      <div className={styles.contatti}>
        {writers.map(({ _id, name, titolo, telefono, email, facebook, linkedin }) => {
          return (<div key={_id} className={styles.writer}>
            <h3 className={styles.name}>{titolo ? `${titolo} ${name}` : name}</h3>
            {/* <h3 className={styles.name}>Dr.ssa Alessia Pompamea</h3> */}
            <div className={styles.content}>
              {telefono && <div><FontAwesomeIcon className={styles.icon} icon={faPhone} /><span>+39 {telefono}</span></div>}
              {email && <div><a href={`mailto:${email}?subject=Richiesta%20informazioni`}><FontAwesomeIcon className={styles.icon} icon={faEnvelope} /><span>{email}</span></a></div>}
              {facebook && <div><a href={facebook}><FontAwesomeIcon className={styles.icon} icon={faFacebookSquare} /><span>facebook</span></a></div>}
              {linkedin && <div><a href={linkedin}><FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} /><span>linkedin</span></a></div>}
            </div>
          </div>)
        })}
      </div>
      <div className={styles.formBox} id="parla-con-noi">
        <div className={styles.form}>
          <h1>Parla con noi</h1>
          <select
            name="categoria"
            id={styles.select}
            defaultValue={''}
            onChange={el => updateCategoria(el.target.value)}>
            <option disabled={true} value="">Seleziona una categoria...</option>
            {options.map(({ _id, name, slug }) =>
              <option key={_id} value={slug}>{name}</option>
            )}
            <option value="altro">Altro</option>
          </select>
          <textarea
            onChange={el => updateMessaggio(el.target.value)}
            id={styles.body}
            name="bodymail"
            rows="20" cols="40"
            placeholder="Parlaci di te..."
            maxLength={250}
          >
          </textarea>
          {!isSending ?
            <button className={styles.invia} onClick={() => handleForm({ categoria, messaggio })}>Invia</button>
            :
            <button className={styles.attendi}>Attendi ...</button>
          }
        </div>
      </div>
      {showModal && <Modal>
        <h1>Avviso</h1>
        <p>{modalMessage}</p>
        <button className={styles.invia} onClick={() => setModal(false)}>Ok</button>
      </Modal>}
    </div>
  );
}