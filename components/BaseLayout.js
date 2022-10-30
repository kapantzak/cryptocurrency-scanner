import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";

const Main = styled.main`
  max-width: ${process.env.NEXT_PUBLIC_MAX_WIDTH}px;
  min-height: calc(100vh - 8rem - 102px - 200px - 29px);
  margin: auto;
  margin-top: 99px;
  padding-top: 2rem;
  padding-bottom: 8rem;
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
  gray_600: "#6C757D",
  gray_700: "#495057",
  gray_800: "#343A40",
  gray_900: "#212529",
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
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default BaseLayout;
