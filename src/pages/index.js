import Layout from '../components/layout';
import Content from "../components/content";
import Contacts from '../components/contacts';
import { fetchApi } from '../lib/fetchApis';
import styles from '../styles/Home.module.css';

export default function Home({ writers, homepage, categories }) {
  return (
    <Layout pageTitle={'elp! - Home'} description={'Empatia Linguaggio Pragmatica'}>
      <main>
        {homepage?.sezioni?.map(section => <Content key={section._id} title={section.titolo} body={section.contenuto} />)}
        <Contacts writers={writers} options={categories} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  let writers;
  let categories;
  let homepage;
  try {
    // fetch writers
    writers = await fetchApi('writers');
    categories = await fetchApi('categories');

    // fetch homepage
    homepage = await fetchApi('homepage');
  } catch {
    console.log('Error loading content on homepage');
  }

  if (!writers || !homepage || !categories) {
    return {
      notFound: true,
    }
  }

  return {
    props: { writers, homepage, categories }
  }
}
