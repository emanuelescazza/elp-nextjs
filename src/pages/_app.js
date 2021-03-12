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
        <title>Studio Alessia Pompamea</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
