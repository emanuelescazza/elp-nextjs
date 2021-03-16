import Layout from '../../components/layout';
import Content from '../../components/content';
import fetchApi from '../../lib/fetchApis';

export default function CosaOffriamo({ pageContent }) {
  return (
    <Layout pageTitle={'elp! - Cosa offriamo'} description={'Scopri i servizi offerti da elp!'}>
      {pageContent?.sezioni?.map(section => <Content key={section._id} title={{ up: section.titolo, down: section.sottotitolo }} body={section.contenuto} />)}
    </Layout>
  )
}

export async function getStaticProps() {
  let pageContent;
  try {
    // fetch content
    pageContent = await fetchApi('cosa-offriamo');
  } catch {
    console.log('Error loading content on cosa offriamo');
  }

  if (!pageContent) {
    return {
      notFound: true,
    }
  }

  return {
    props: { pageContent }
  }
}
