import Link from "next/link";
import Card from "../components/Card";
import styled from "styled-components";

const Title = styled.h1`
  margin-top: 0;
  color: ${({ theme }) => theme.black_light};
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${(props) => props.theme.gray_700};

  a {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <article>
      <Card>
        <Title>About</Title>
        <Content>
          <p>
            This is a frontend application built on{" "}
            <a
              href="https://nextjs.org"
              target="__blank"
              rel="noopener noreferrer"
            >
              Nextjs
            </a>
            , a popular React framework. It provides information about
            cryptocurrency prices regarding various crypto coins and the data
            come from{" "}
            <a
              href="https://www.coingecko.com/en/api"
              target="__blank"
              rel="noopener noreferrer"
            >
              Coingecko
            </a>{" "}
            API.
          </p>
          <p>
            The application consists of two main pages, the first one (
            <Link href="/home">/home</Link>), which is the landing page, renders
            a list of all the available coins, paginated according to the user's
            preferences. The second one (/[coin_id]/details) shows a more
            detailed view of the selected coin.
          </p>
          <p>
            The source code of this application is hosted on a{" "}
            <strong>private</strong> Github repo (
            <a
              href="https://github.com/kapantzak/cryptocurrency-scanner"
              target="__blank"
              rel="noopener noreferrer"
            >
              https://github.com/kapantzak/cryptocurrency-scanner
            </a>
            ).
          </p>
        </Content>
      </Card>
    </article>
  );
};

export default About;
