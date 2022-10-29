import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px
    }

    body {
        margin: 0;
        padding: 0;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        background-color: ${(props) => props.theme.gray_300};
        color: ${(props) => props.theme.black};
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.black}
    }
`;

export default GlobalStyle;
