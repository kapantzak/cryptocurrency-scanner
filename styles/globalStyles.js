import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px
    }

    body {
        margin: 0;
        padding: 0;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        background-color: ${(props) => props.theme.blue_100};
        color: ${(props) => props.theme.blue_500};
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.blue_500}
    }
`;

export default GlobalStyle;
