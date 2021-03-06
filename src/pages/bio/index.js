import Layout from '../../components/layout';
import Content from '../../components/content';
import { fetchApi } from '../../lib/fetchApis';

export default function Bio({ writers }) {
  return (
    <Layout pageTitle={'elp! - Bio'} description={'Conosci il team elp!'}>
      {writers.map(writer => {
        return <Content title={writer.titolo ? `${writer.titolo} ${writer.name}` : writer.name}
          body={writer.bio}
          img={writer.picture}
          key={writer._id}
        />
      })}
    </Layout>
  )
}

export async function getStaticProps() {
  let writers;
  try {
    // fetch writers
    writers = await fetchApi('writers');
  } catch {
    console.log('Error loading writers');
  }

  if (!writers) {
    return {
      notFound: true,
    }
  }

  return {
    props: { writers }
  }
}