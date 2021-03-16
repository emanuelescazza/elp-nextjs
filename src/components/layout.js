import styles from '../styles/Layout.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Layout({ children, pageTitle, description, ...props }) {
  const router = useRouter();
  const path = `${process.env.BASE_ULR}${router.asPath}`;
  console.log(path);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:site_name" content={'elp!'} key="ogsitename" />
        <meta property="og:url" content={path} key="ogurl" />
      </Head>
      <section>
        <div className={styles.content}>{children}</div>
      </section>
    </>
  )
}