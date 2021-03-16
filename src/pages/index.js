import Layout from '../components/layout';
import Content from "../components/content";
import Contacts from '../components/contacts';
import fetchApi from '../lib/fetchApis';
import styles from '../styles/Home.module.css';

export default function Home({ writers, facebook, homepage }) {
  return (
    <Layout pageTitle={'elp! - Home'} description={'Empatia Linguaggio Pragmatica'}>
      <main>
        {homepage?.sezioni?.map(section => <Content key={section._id} title={{ up: section.titolo, down: section.sottotitolo }} body={section.contenuto} />)}
        <Contacts writers={writers} contattoFacebook={facebook} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  let writers, facebook;
  let homepage;
  try {
    // fetch writers
    writers = await fetchApi('writers');

    // fetch facebook
    facebook = await fetchApi('pagina-facebook');

    // fetch homepage
    homepage = await fetchApi('homepage');
  } catch {
    console.log('Error loading content on homepage');
  }

  if (!writers || !facebook || !homepage) {
    return {
      notFound: true,
    }
  }

  return {
    props: { writers, facebook, homepage }
  }
}
