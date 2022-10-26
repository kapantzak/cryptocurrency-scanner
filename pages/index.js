import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cryptocurrency scanner</title>
        <meta name="description" content="Display cryptocurrency data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Cryptocurrency scanner</h1>
      </main>

      <footer>This is the footer</footer>
    </div>
  );
}
