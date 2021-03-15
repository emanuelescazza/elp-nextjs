import useSWR from 'swr';
import Sidebar from "../../components/blog/sidebar";
import Article from '../../components/blog/article';
import fetchApi from '../../lib/fetchApis';
import styles from '../../styles/blog/Blog.module.css';

export default function Blog({ categories, articles }) {
  const { data, error } = useSWR('http://localhost:1337/articles', fetch);

  return (
    <div id={styles.blog}>
      <div id={styles.articlesBox}>
        {data.map(article => {
          return (
            <Article
              key={article._id}
              slug={article.slug}
              title={article.title}
              description={article.description2}
              category={article.category}
              date={article.publishedAt}
              imgSrc={article.image?.formats?.small?.url}
            />
          )
        })}
      </div>
      <Sidebar categories={categories} />
    </div>
  )
}

export async function getServerSideProps({ query: { category, page } }) {
  const limit = 4;
  let categories, articles;
  try {
    categories = await fetchApi('categories');
    const params = { _limit: limit };
    if (category) params['category_name'] = category;
    if (page) params['_start'] = parseInt(page) * limit;
    articles = await fetchApi('articles', params);
  } catch {
    console.log('Error loading posts');
  }

  if (!categories || !articles) {
    return {
      notFound: true,
    }
  }

  return {
    props: { categories, articles },
  }
}