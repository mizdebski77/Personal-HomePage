import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
  width: 100%;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  min-height: 100vh;
  word-break: break-word;
  overflow-x: hidden
  }
  `;

  