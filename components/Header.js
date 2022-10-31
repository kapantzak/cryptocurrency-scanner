import styled from "styled-components";
import { useTheme } from "styled-components";
import Link from "next/link";
import Navigation from "./Navigation";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.gray_200};
`;

const HeaderInner = styled.div`
  max-width: ${process.env.NEXT_PUBLIC_MAX_WIDTH}px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  @media (max-width: ${process.env.NEXT_PUBLIC_MAX_WIDTH}px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
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
