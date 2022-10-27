export const getServerSideProps = async ({ res }) => {
  res.writeHead(301, { location: "/home" });
  res.end();

  return {
    props: { message: "Redirect to /home" },
  };
};

export default function Index() {
  return null;
}
