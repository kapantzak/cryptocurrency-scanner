import Head from "next/head";
import Header from "./Header";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";

const Main = styled.main`
  max-width: ${process.env.NEXT_PUBLIC_MAX_WIDTH}px;
  margin: auto;
  margin-top: 99px;
  padding: 2rem 0;
`;

const theme = {
  white: "#fff",
  black: "#212529",
  black_light: "#343A40",
  gray_100: "#F8F9FA",
  gray_200: "#E9ECEF",
  gray_300: "#DEE2E6",
  gray_400: "#CED4DA",
  gray_500: "#ADB5BD",
  blue_500: "#03045E",
  blue_400: "#0077B6",
  blue_300: "#00B4D8",
  blue_200: "#90E0EF",
  blue_100: "#CAF0F8",
  success: "#34B244",
  error: "#C9391D",
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
