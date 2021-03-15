import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import { useViewport } from '../../hooks/viewport';
import Sidebar from "../../components/blog/sidebar";
import Article from '../../components/blog/article';
import fetchApi from '../../lib/fetchApis';
import styles from '../../styles/blog/Blog.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const limit = 10;
const breakpoint = 768;

export default function Blog({ categories, articles, count }) {
  const router = useRouter();
  const { width } = useViewport();
  const isMobile = width < breakpoint;
  return (
    <div id={styles.blog}>
      <div id={styles.articlesBox}>
        {articles.map(article => {
          return (
            <Article
              article={article}
              key={article._id}
              slug={article.slug}
              title={article.title}
              description={article.description}
              category={article.category}
              date={article.publishedAt}
              imgSrc={article.image?.formats?.small?.url}
            />
          )
        })}
      </div>
      <Sidebar categories={categories} />
      {(count > limit) &&
        <ReactPaginate
          pageCount={Math.ceil(count / limit)}
          previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
          nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
          breakLabel={'...'}
          breakClassName={styles.break}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName={styles.pagination}
          subContainerClassName={styles.subPagination}
          activeClassName={styles.paginationActive}
          onPageChange={e => {
            return e.selected !== 0 ? router.push(`/blog?page=${e.selected}`) : router.push('/blog');
          }}
        // hrefBuilder={hb => `/blog?page=${hb}`}
        />}
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