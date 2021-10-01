import Head from "next/head";
import { GlobalProvider } from "../provider/GlobalContext";

import "../../styles/globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Desenvolvedor de sistemas web e sites responsivos."
        />
        <meta
          name="keywords"
          content="Sistemas Web, Websites responsivos, sites pessoais, criação de sites"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="João Stael" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Rubik:wght@400;500;600;700&display=swap"
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
