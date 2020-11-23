import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100vh;
    font-family: "Source Sans Pro";
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }
  body {
    font-size: 1.6rem;
  }

`;
