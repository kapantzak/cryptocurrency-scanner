import Head from "next/head";
import Header from "./Header";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";

const Main = styled.main`
  max-width: 1024px;
  margin: auto;
`;

const theme = {
  white: "#fff",
  black: "#001219",
  blue_500: "#03045E",
  blue_400: "#0077B6",
  blue_300: "#00B4D8",
  blue_200: "#90E0EF",
  blue_100: "#CAF0F8",
};

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main>{children}</Main>
        <footer>Footer</footer>
      </ThemeProvider>
    </>
  );
};

export default BaseLayout;
