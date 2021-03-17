import ReactPaginate from 'react-paginate';
import Sidebar from "./sidebar";
import Article from './article';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/blog/Page.module.css';

export default function Page({ articles, categories, currentCategory, pagination, handleRoute }) {
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
      <Sidebar categories={categories} currentCategory={currentCategory} />
      {(pagination.numPages > 1) &&
        <ReactPaginate
          pageCount={pagination.numPages}
          previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
          nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
          breakLabel={'...'}
          breakClassName={styles.break}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName={styles.pagination}
          subContainerClassName={styles.subPagination}
          activeClassName={styles.paginationActive}
          initialPage={pagination.current - 1}
          onPageChange={e => handleRoute(parseInt(e.selected) + 1)}
        />}
    </div>
  );
}