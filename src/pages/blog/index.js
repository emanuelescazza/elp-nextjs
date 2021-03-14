import styles from '../../styles/blog/Blog.module.css';
import Sidebar from "../../components/blog/sidebar";
import Article from '../../components/blog/article';

export default function Blog({ categories, articles }) {
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
              topic={article.category.name}
              date={article.publishedAt}
              imgSrc={article.image?.formats?.small?.url}
            />
          )
        })}
        {articles.map(article => {
          return <Article key={article._id} title={article.title} description={article.description2}
            topic={article.category.name} date={article.publishedAt} />
        })}
      </div>
      <Sidebar categories={categories} />
    </div>
  )
}

export async function getStaticProps() {
  let categories, articles;
  try {
    const res = await fetch(`http://localhost:1337/categories`);
    categories = await res.json();
    const res_articles = await fetch(`http://localhost:1337/articles?_limit=5`);
    articles = await res_articles.json();
  } catch {
    console.log('Error loading posts');
  }

  if (!categories || !articles) {
    return {
      notFound: true,
    }
  }

  return {
    props: { categories: categories, articles: articles }, // will be passed to the page component as props
  }
}