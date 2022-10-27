import Head from "next/head";
import Header from "./Header";
import styled, { ThemeProvider } from "styled-components";

const Main = styled.main`
  max-width: 1024px;
  margin: auto;
`;

const theme = {
  white: "#fff",
  blue: "#2D00F7",
  purple_500: "#6A00F4",
  purple_400: "#8900F2",
  purple_300: "#A100F2",
  purple_200: "#B100E8",
  purple_100: "#BC00DD",
  pink_500: "#D100D1",
  pink_400: "#DB00B6",
  pink_300: "#E500A4",
  pink_200: "#F20089",
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
        <Header />
        <Main>{children}</Main>
        <footer>Footer</footer>
      </ThemeProvider>
    </>
  );
};

export default BaseLayout;
