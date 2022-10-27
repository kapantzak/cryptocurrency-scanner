import Head from "next/head";
import getCoins from "../queries/coinsList";

export const getServerSideProps = async ({ query }) => {
  const { page = 1, per_page = 20 } = query;

  try {
    const { status, data } = await getCoins({ page, per_page });

    if (status === 200) {
      return {
        props: {
          data,
        },
      };
    }

    return {
      props: {
        error: "An error occurred while fetching the coins",
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        error: "An error occurred while fetching the coins",
      },
    };
  }
};

const Home = ({ error, data }) => {
  return (
    <>
      <Head>
        <title>{`${process.env.NEXT_PUBLIC_SITE_TITLE} | Home`}</title>
      </Head>
      {(error && <p>{error}</p>) || (
        <div>
          {(data || []).map(({ id, name }) => (
            <div key={id}>
              {id} - {name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
