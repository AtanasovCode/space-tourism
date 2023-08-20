import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body,
    html {
        min-height: 100vh;
    }

    Link {
        text-decoration: none;
        color: #fff;
    }
    
    Link:visited {
        color: #fff;
    }
`