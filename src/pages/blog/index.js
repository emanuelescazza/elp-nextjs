import Sidebar from "../../components/blog/sidebar";
import Article from '../../components/blog/article';
import fetchApi from '../../lib/fetchApis';
import styles from '../../styles/blog/Blog.module.css';

const limit = 4;

export default function Blog({ categories, articles, count }) {
  return (
    <div id={styles.blog}>
      <div id={styles.articlesBox}>
        {articles.map(article => {
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
      {(count > limit) && <div className={styles.pagination}>Count: {count}</div>}
    </div>
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