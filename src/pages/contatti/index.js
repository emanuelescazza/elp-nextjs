import Layout from '../../components/layout';
import Contacts from "../../components/contacts";
import { fetchApi } from '../../lib/fetchApis';

export default function Contatti({ writers, facebook }) {
  return (
    <Layout pageTitle={'elp! - Contatti'} description={'Hai un problema o un suggerimento? Contattaci'}>
      <Contacts writers={writers} contattoFacebook={facebook} />
    </Layout>
  )
}

export async function getStaticProps() {
  let writers, facebook;
  try {
    // fetch writers
    writers = await fetchApi('writers');

    // fetch facebook
    facebook = await fetchApi('pagina-facebook');
  } catch {
    console.log('Error loading writers');
  }

  if (!writers || !facebook) {
    return {
      notFound: true,
    }
  }

  return {
    props: { writers, facebook }
  }
}