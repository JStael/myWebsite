import Head from "next/head";
import { GlobalProvider } from "../provider/GlobalContext";

import "../../styles/globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </GlobalProvider>
    </>
  );
}

export default MyApp;
