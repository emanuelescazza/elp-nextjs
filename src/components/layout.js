import styles from '../styles/Layout.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Layout({ children, pageTitle, description, article, ...props }) {
  const router = useRouter();
  const path = `${router.asPath}`;
  console.log(path);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:site_name" content={'elp! - Empatia Linguaggio Pragmatica'} key="ogsitename" />
        <meta property="og:url" content={path} key="ogurl" />
        <meta property="og:locale" content={'it_IT'} key="oglocale" />
        {article && <meta property="og:type" content="article" key="ogtype" />}
        {article && <meta property="article:section" content={article.category} key="asection" />}
        {article && <meta property="article:published_time" content={article.published} key="apublished" />}
        {article && <meta property="article:modified_time" content={article.modified} key="amodified" />}
        {article && <meta property="article:author" content={article.author} key="aauthor" />}
        {(article && article.tags) && article.tags.map(el => <meta property="article:tag" content={el.tag} key={el._id} />)}
      </Head>
      <section>
        <div className={styles.content}>{children}</div>
      </section>
    </>
  )
}