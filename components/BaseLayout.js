import Head from "next/head";
import Header from "./Header";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="author" content="John Kapantzakis" />
        <meta
          name="description"
          content="This is a demo app that fetches data from https://www.coingecko.com/en/api and displays them."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default BaseLayout;
