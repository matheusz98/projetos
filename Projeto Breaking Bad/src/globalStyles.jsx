import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        border: none;
        outline: none;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
    }

    img {
        max-width: 100%;
    }
`;
