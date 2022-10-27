import styled from "styled-components";
import { useTheme } from "styled-components";
import Link from "next/link";
import Navigation from "./Navigation";

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.purple_500};
`;

const HeaderInner = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;

  > a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }
`;

const Header = () => {
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo>
          <Link href="/home">Crypto Scanner</Link>
        </Logo>
        <Navigation />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
