import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${process.env.NEXT_PUBLIC_SITE_TITLE} | Home`}</title>
      </Head>
      <h1>Cryptocurrency scanner</h1>
    </>
  );
}
