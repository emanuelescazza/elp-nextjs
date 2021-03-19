import Layout from '../../components/layout';
import Contacts from "../../components/contacts";
import { fetchApi } from '../../lib/fetchApis';

export default function Contatti({ writers, categories }) {
  return (
    <Layout pageTitle={'elp! - Contatti'} description={'Hai un problema o un suggerimento? Contattaci'}>
      <Contacts writers={writers} options={categories} />
    </Layout>
  )
}

export async function getStaticProps() {
  let writers, categories;
  try {
    // fetch writers
    writers = await fetchApi('writers');
    categories = await fetchApi('categories');

  } catch {
    console.log('Error loading writers');
  }

  if (!writers || !categories) {
    return {
      notFound: true,
    }
  }

  return {
    props: { writers, categories }
  }
}