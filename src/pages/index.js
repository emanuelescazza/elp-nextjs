import styles from '../styles/Home.module.css'
import Content from "../components/content";
import Contacts from '../components/contacts';

export default function Home() {
  const title = {
    up: 'Conosciamo i diversi tipi di terapia',
    down: 'Info utili'
  };
  const body = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a rem, quo expedita eveniet tempora harum
  quas ab eum repudiandae alias est corporis praesentium eaque ipsam. Eos qui unde aspernatur blanditiis
  neque doloremque nam quidem culpa vero reiciendis, earum eum voluptas corporis repellendus dicta quos,
  repellat architecto in odio. Pariatur eaque, nesciunt illum totam similique laborum ratione saepe nihil
  odio eveniet necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a rem, quo expedita eveniet tempora harum
  quas ab eum repudiandae alias est corporis praesentium eaque ipsam. Eos qui unde aspernatur blanditiis
  neque doloremque nam quidem culpa vero reiciendis, earum eum voluptas corporis repellendus dicta quos,
  repellat architecto in odio. Pariatur eaque, nesciunt illum totam similique laborum ratione saepe nihil
  odio eveniet necessitatibus!`;
  return (
    <div>
      <main>
        <Content title={title} body={body} />
        <Content title={title} body={body} />
        <Contacts />
      </main>
    </div>
  )
}
