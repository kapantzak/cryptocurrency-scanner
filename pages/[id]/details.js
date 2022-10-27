import Head from "next/head";
import getCoinDetails from "../../queries/coinDetails";

export const getServerSideProps = async ({ query }) => {
  const { id } = query;

  try {
    const { status, data } = await getCoinDetails(id);

    if (status === 200) {
      return {
        props: {
          data,
        },
      };
    }

    return {
      props: {
        error: `An error occurred while fetching data for ${id}`,
      },
    };
  } catch (err) {
    return {
      props: {
        error: `An error occurred while fetching data for ${id}`,
      },
    };
  }
};

const DetailsPage = ({ data, error }) => {
  return (
    <>
      <Head>
        <title>{`${process.env.NEXT_PUBLIC_SITE_TITLE} | Details`}</title>
      </Head>
      {(error && <p>{error}</p>) || <div>{JSON.stringify(data)}</div>}
    </>
  );
};

export default DetailsPage;
