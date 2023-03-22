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
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  word-break: break-word;
  }
  `;