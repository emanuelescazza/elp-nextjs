import Layout from '../components/layout';
import Content from "../components/content";
import Carousel from '../components/carousel';
import { fetchApi } from '../lib/fetchApis';
import styles from '../styles/Home.module.css';

export default function Home({ homepage, posts }) {
  return (
    <Layout pageTitle={'elp! - Home'} description={'Empatia Linguaggio Pragmatica'}>
      <main>
        <Carousel articles={posts} />
        <div>
          {homepage?.sezioni?.map(section => <Content key={section._id} title={section.titolo} body={section.contenuto} />)}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  let homepage;
  let posts;
  try {
    // fetch posts
    posts = await fetchApi('articles', { _limit: 4 })

    // fetch homepage
    homepage = await fetchApi('homepage');
  } catch {
    console.log('Error loading content on homepage');
  }

  if (!posts || !homepage) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts, homepage }
  }
}
