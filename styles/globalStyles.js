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

export default GlobalStyle;

export { Badge, BadgeUppercase };
