import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px
    }

    body {
        margin: 0;
        padding: 0;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        background-color: ${(props) => props.theme.gray_100};
        color: ${(props) => props.theme.black};
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.black}
    }
`;

const Badge = styled.label`
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.black_light};
  background-color: ${(props) => props.theme.gray_300};
`;

const BadgeUppercase = styled(Badge)`
  text-transform: uppercase;
`;

const BadgeUppercaseSmall = styled(BadgeUppercase)`
  padding: 0.3rem 0.7rem;
  font-size: 0.65rem;
`;

const BadgeSmall = styled(Badge)`
  padding: 0.3rem 0.7rem;
  font-size: 0.65rem;
`;

const Dropdown = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.gray_500};
`;

const DropdownSmall = styled(Dropdown)`
  padding: 0.2rem;
`;

const BadgeLink = styled.a`
  display: flex;
  column-gap: 0.3rem;
  align-items: center;
  padding: 0.3rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.black_light};
  background-color: ${(props) => props.theme.gray_300};

  &:hover {
    background-color: ${(props) => props.theme.gray_400};
  }
`;

export default GlobalStyle;

export {
  Badge,
  BadgeSmall,
  BadgeUppercase,
  BadgeUppercaseSmall,
  Dropdown,
  DropdownSmall,
  BadgeLink,
};
