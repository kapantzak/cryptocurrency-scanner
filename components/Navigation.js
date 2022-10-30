import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import classNames from "classnames";

const Nav = styled.nav`
  display: flex;
  column-gap: 1rem;
  font-size: 1.2rem;
  font-weight: bold;

  a {
    padding: 0.4rem 0.8rem;
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.black_light};

    &.active {
      background-color: ${({ theme }) => theme.gray_200};
    }
  }
`;

const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <Nav>
      <Link
        className={classNames({ active: pathname === "/home" })}
        href="/home"
      >
        Home
      </Link>
      <Link
        className={classNames({ active: pathname === "/about" })}
        href="/about"
      >
        About
      </Link>
    </Nav>
  );
};

export default Navigation;
