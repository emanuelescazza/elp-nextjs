import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { fetchApi } from '../../lib/fetchApis';
import Page from '../../components/blog/page';
import styles from '../../styles/blog/Blog.module.css';

export default function Blog({ categories, articles, count }) {
  const router = useRouter();
  const pagination = {
    current: 0,
    numPages: 1
  };
  const handleRoute = (selection) => { router.push(`/blog/category/`) }
  return (
    <Layout pageTitle={'elp! - Blog'} description={'Leggi i post pubblicati nella sezione Blog'}>
      <Page articles={articles} categories={categories} count={count} />
    </Layout>
  )
}

export async function getServerSideProps({ query: { category, page } }) {
  let categories, articles, count;
  try {
    // fetch categories
    categories = await fetchApi('categories');

    // fetch articles
    const articleParams = { _limit: limit };
    if (category) articleParams['category_name'] = category;
    if (page) articleParams['_start'] = parseInt(page) * limit;
    articles = await fetchApi('articles', articleParams);

    // fetch count
    const countParams = {};
    if (category) countParams['category_name'] = category;
    count = await fetchApi('articles/count', countParams);

  } catch {
    console.log('Error loading posts');
  }

  if (!categories || !articles) {
    return {
      notFound: true,
    }
  }

  return {
    props: { categories, articles, count },
  }
}