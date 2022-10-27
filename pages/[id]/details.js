export const getServerSideProps = ({ req, query }) => {
  const { id } = query;

  return {
    props: {
      id,
    },
  };
};

const DetailsPage = ({ id }) => {
  return <h1>Details for coin: {id}</h1>;
};

export default DetailsPage;
