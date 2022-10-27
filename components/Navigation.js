import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;

  > a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Link href="/about">About</Link>
    </Nav>
  );
};

export default Navigation;
