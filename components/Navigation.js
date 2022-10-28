import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
`;

const Navigation = () => {
  return (
    <Nav>
      <Link href="/about">About</Link>
    </Nav>
  );
};

export default Navigation;
