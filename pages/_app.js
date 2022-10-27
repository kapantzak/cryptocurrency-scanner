import GlobalStyle from "../styles/globalStyles";
import BaseLayout from "../components/BaseLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
}

export default MyApp;
