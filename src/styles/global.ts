import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        background-color: #F8FDFF;
    }

    button {
        background-color: none;
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
        outline: none;
    }

`;