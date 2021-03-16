import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import '../styles/globals.css'
import Navbar from "../components/navbar/navbar";
import Footer from '../components/footer';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <div id="page-container">
      <Head>
        <title>elp!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content={'Empatia Linguaggio Pragmatica'} />
        <meta property="og:title" content="elp!" key="ogtitle" />
        <meta property="og:description" content={'Empatia Linguaggio Pragmatica'} key="ogdesc" />
        <meta property="og:site_name" content={'elp!'} key="ogsitename" />
        <meta property="og:url" content={'currentURL'} key="ogurl" />
      </Head>
      <div id="content-wrap">
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
