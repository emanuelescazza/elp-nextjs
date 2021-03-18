import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faFacebookSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import styles from '../styles/Contacts.module.css';

export default function Contacts({ writers, contattoFacebook }) {
  return (
    <div id={styles.contattiBox}>
      <h1 className={styles.title}>Contatti</h1>
      <div className={styles.contatti}>
        {writers.map(({ _id, name, telefono, email, facebook, linkedin }) => {
          return (<div key={_id} className={styles.writer}>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.content}>
              {telefono && <div><FontAwesomeIcon className={styles.icon} icon={faPhone} /><span>+39 {telefono}</span></div>}
              {email && <div><a href={`mailto:${email}?subject=Richiesta%20informazioni`}><FontAwesomeIcon className={styles.icon} icon={faEnvelope} /><span>{email}</span></a></div>}
              {facebook && <div><FontAwesomeIcon className={styles.icon} icon={faFacebookSquare} /><span>{facebook}</span></div>}
              {linkedin && <div><FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} /><span>{linkedin}</span></div>}
            </div>
          </div>)
        })}
      </div>
      <div className={styles.formBox}>
        <div className={styles.form}>
          <h1>Parla con noi</h1>
          <select name="categoria" id={styles.select}>
            <option value="stress" selected="selected">Scegli la categoria</option>
            <option value="stress">Stress</option>
            <option value="ansia">Ansia</option>
            <option value="sonno">Sonno</option>
            <option value="alimentare">Disturbo alimentare</option>
          </select>
          <textarea
            id={styles.body}
            name="bodymail"
            rows="20" cols="40"
            placeholder="Parlaci di te..."
            maxlength="500"
          >
          </textarea>
          <button className={styles.invia}>Invia</button>
        </div>
      </div>
    </div>
  );
}

// <div id={styles.contattiBox}>
//       <h1 className={styles.contattiHead}>Contatti</h1>
//       <div className={styles.contatti}>
//         <div className={styles.element}>
//           <div>
//             <FontAwesomeIcon className={styles.contactIcon} icon={faFacebookSquare}></FontAwesomeIcon>
//             <h1>Facebook</h1>
//           </div>
//           <div className={styles.content}>
//             <a href={contattoFacebook.link}>
//               <p>{contattoFacebook.nome}</p>
//             </a>
//           </div>
//         </div>
//         <div className={styles.element}>
//           <div>
//             <FontAwesomeIcon className={styles.contactIcon} icon={faPhone}></FontAwesomeIcon>
//             <h1>Telefono</h1>
//           </div>
//           <div className={styles.content}>
//             {writers.map(writer => (
//               <div key={writer._id}>
//                 <span><strong>{writer.name}</strong></span>
//                 <p>+39 {writer.telefono}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className={styles.element}>
//           <div>
//             <FontAwesomeIcon className={styles.contactIcon} icon={faLinkedinIn}></FontAwesomeIcon>
//             <h1>Linkedin</h1>
//           </div>
//           <div className={styles.content}>
//             {writers.map(writer => (
//               <a href={writer.linkedin} key={writer._id}>
//                 <p>{writer.name}</p>
//               </a>
//             ))}
//           </div>
//         </div>
//         <div className={styles.element}>
//           <div>
//             <FontAwesomeIcon className={styles.contactIcon} icon={faEnvelope}></FontAwesomeIcon>
//             <h1>E-mail</h1>
//           </div>
//           <div className={styles.content}>
//             {writers.map(writer => (
//               <p key={writer._id}>
//                 <a href={`mailto:${writer.email}?subject=Richiesta%20informazioni`}>{writer.email}</a>
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>