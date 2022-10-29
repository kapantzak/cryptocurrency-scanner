import Head from "next/head";
import { useRouter } from "next/router";
import getCoins from "../queries/coinsList";
import Card from "../components/Card";
import CoinsTable from "../components/CoinsTable";
import Pagination from "../components/Pagination";

export const getServerSideProps = async ({ query }) => {
  const {
    page = 1,
    per_page = process.env.NEXT_PUBLIC_DEFAULT_PAGINATION_PER_PAGE,
  } = query;

  try {
    const { status, data } = await getCoins({ page, per_page });

    if (status === 200) {
      return {
        props: {
          data,
          pagination: {
            page: Number(page),
            perPage: Number(per_page),
          },
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

const Home = ({ error, data, pagination }) => {
  const { page, perPage } = pagination || {};
  const router = useRouter();

  const handlePerPageChange = (e) => {
    router.push({
      pathname: "/home",
      query: {
        page: 1,
        per_page: e.target.value,
      },
    });
  };

  const handlePreviousPageClick = () => {
    if (page > 1) {
      router.push({
        pathname: "/home",
        query: {
          page: page - 1,
          per_page: perPage,
        },
      });
    }
  };

  const handleNextPageClick = () => {
    router.push({
      pathname: "/home",
      query: {
        page: page + 1,
        per_page: perPage,
      },
    });
  };

  return (
    <>
      <Head>
        <title>{`${process.env.NEXT_PUBLIC_SITE_TITLE} | Home`}</title>
      </Head>
      {(error && <p>{error}</p>) || (
        <Card>
          <CoinsTable data={data} />
          <Pagination
            page={page}
            perPage={perPage}
            onPerPageChange={handlePerPageChange}
            onPreviousClick={handlePreviousPageClick}
            onNextClick={handleNextPageClick}
          />
        </Card>
      )}
    </>
  );
};

export default Home;
